import { readFile } from 'fs/promises';
import path from 'path';
import { notFound } from 'next/navigation';
import LexiconEntryPage from '@/app/lexicon/[lang]/[key]/LexiconEntryPage';
import {
  isLexiconLanguage,
  LEXICON_LANGUAGES,
  type LexiconLanguage,
} from '@/utils/lexiconRoutes';
import { parseLeadingAtxHeading } from '@/utils/lexiconMarkdown';
import { parseLexiconTabSearchParam } from '@/utils/lexiconTab';
import {
  buildStubLexiconEntry,
  findDictionaryRoot,
  getDictionaryRoots,
  mergeLexiconBrowseKeys,
  normalizeLexiconLookupKey,
  type LexiconArticleChecker,
  type LexiconEntryResolved,
} from '@/utils/lexiconFromDictionary';

interface ConcordanceData {
  key: string;
  language: string;
  root?: string;
  occurrences: Array<{
    location: { book: string; chapter: number; verse: number };
    wordIndex: number;
    sourceOrder?: number;
    word: {
      originalScript: string;
      transliteration: string;
      englishLiteral: string;
      englishNatural?: string;
      root?: string;
      morphology?: { type?: string; tense?: string; stem?: string };
    };
    context: {
      hebrew: string;
      transliteration: string;
      englishLiteral: string;
      englishNatural: string;
    };
  }>;
}

async function tryReadJson<T>(filePath: string): Promise<T | null> {
  try {
    const content = await readFile(filePath, 'utf-8');
    return JSON.parse(content) as T;
  } catch {
    return null;
  }
}

/**
 * Be very specific about lexicon and concordance paths to minimize built bload as much as possible
 * See "overly broad patterns" in turbopack
 * */
function getLexiconPath(lang: LexiconLanguage, key: string): string {
  const base = path.join(process.cwd(), 'public/lexicon');
  switch (lang) {
    case 'hebrew':
      return path.join(base, 'hebrew', `${key}.json`);
    case 'greek':
      return path.join(base, 'greek', `${key}.json`);
    case 'aramaic':
      return path.join(base, 'aramaic', `${key}.json`);
  }
}

function getConcordanceWordPath(lang: LexiconLanguage, key: string): string {
  const base = path.join(process.cwd(), 'public/concordance');
  switch (lang) {
    case 'hebrew':
      return path.join(base, 'hebrew', `${key}.json`);
    case 'greek':
      return path.join(base, 'greek', `${key}.json`);
    case 'aramaic':
      return path.join(base, 'aramaic', `${key}.json`);
  }
}

function getConcordanceRootPath(
  lang: LexiconLanguage,
  rootKey: string,
): string {
  const base = path.join(process.cwd(), 'public/concordance');
  switch (lang) {
    case 'hebrew':
      return path.join(base, 'hebrew', 'by-root', `${rootKey}.json`);
    case 'greek':
      return path.join(base, 'greek', 'by-root', `${rootKey}.json`);
    case 'aramaic':
      return path.join(base, 'aramaic', 'by-root', `${rootKey}.json`);
  }
}

async function loadLexiconArticleChecker(): Promise<LexiconArticleChecker> {
  const sets = await Promise.all(
    LEXICON_LANGUAGES.map(async (lang) => {
      const indexPath = path.join(
        process.cwd(),
        `public/lexicon/${lang}/index.json`,
      );
      const index = await tryReadJson<Array<{ key: string }>>(indexPath);
      return new Set((index ?? []).map((e) => e.key.toLowerCase()));
    }),
  );

  const byLang = Object.fromEntries(
    LEXICON_LANGUAGES.map((lang, i) => [lang, sets[i]]),
  ) as Record<LexiconLanguage, Set<string>>;

  return (lang: LexiconLanguage, key: string) =>
    byLang[lang].has(key.toLowerCase());
}

async function resolveLexiconEntry(
  lang: LexiconLanguage,
  urlKey: string,
  hasLexiconArticle: LexiconArticleChecker,
): Promise<LexiconEntryResolved | null> {
  const indexPath = path.join(
    process.cwd(),
    `public/lexicon/${lang}/index.json`,
  );
  const index = (await tryReadJson<Array<{ key: string }>>(indexPath)) ?? [];

  let entry = await tryReadJson<LexiconEntryResolved>(
    getLexiconPath(lang, urlKey),
  );

  if (!entry) {
    const indexMatch = index.find(
      (e) =>
        normalizeLexiconLookupKey(e.key) === normalizeLexiconLookupKey(urlKey),
    );
    if (indexMatch) {
      entry = await tryReadJson<LexiconEntryResolved>(
        getLexiconPath(lang, indexMatch.key),
      );
    }
  }

  if (!entry) {
    const dictMatch = findDictionaryRoot(lang, urlKey);
    if (!dictMatch) return null;
    return buildStubLexiconEntry(
      lang,
      urlKey,
      dictMatch.dictKey,
      dictMatch.root,
      hasLexiconArticle,
    );
  }

  return entry;
}

export async function generateStaticParams() {
  const params: { lang: LexiconLanguage; key: string }[] = [];

  for (const lang of LEXICON_LANGUAGES) {
    const indexPath = path.join(
      process.cwd(),
      `public/lexicon/${lang}/index.json`,
    );
    const index = (await tryReadJson<Array<{ key: string }>>(indexPath)) ?? [];
    const dict = getDictionaryRoots(lang);
    const keys = mergeLexiconBrowseKeys(
      index.map((e) => e.key),
      Object.keys(dict),
    );

    for (const key of keys) {
      params.push({ lang, key });
    }
  }

  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; key: string }>;
}) {
  const { lang: langParam, key } = await params;
  if (!isLexiconLanguage(langParam)) return { title: 'Not Found' };

  const lang = langParam;
  const hasLexiconArticle = await loadLexiconArticleChecker();
  const entry = await resolveLexiconEntry(lang, key, hasLexiconArticle);

  if (!entry) return { title: 'Not Found' };

  const { heading } = parseLeadingAtxHeading(entry.content);
  const title =
    heading ??
    (entry.root
      ? `${entry.root.originalScript} (${entry.key}) — ${entry.root.englishLiteral}`
      : entry.key);

  return {
    title: `${title} | Lexicon | Roots Translation`,
    description: entry.root?.description || `Lexicon entry for ${entry.key}`,
  };
}

function firstSearchParam(
  value: string | string[] | undefined,
): string | undefined {
  if (value === undefined) return undefined;
  return typeof value === 'string' ? value : value[0];
}

export default async function LexiconLangKeyPage({
  params,
  searchParams,
}: {
  params: Promise<{ lang: string; key: string }>;
  searchParams: Promise<{ tab?: string | string[] }>;
}) {
  const { lang: langParam, key } = await params;
  if (!isLexiconLanguage(langParam)) notFound();

  const lang = langParam;

  const hasLexiconArticle = await loadLexiconArticleChecker();
  const entry = await resolveLexiconEntry(lang, key, hasLexiconArticle);
  if (!entry) notFound();

  const wordConcordance = await tryReadJson<ConcordanceData>(
    getConcordanceWordPath(lang, key.toLowerCase()),
  );

  let rootConcordance: ConcordanceData | null = null;
  const rootKey = entry.root?.key;
  if (rootKey) {
    rootConcordance = await tryReadJson<ConcordanceData>(
      getConcordanceRootPath(lang, rootKey),
    );
  }

  const hasConcordance =
    (wordConcordance?.occurrences.length ?? 0) > 0 ||
    (rootConcordance?.occurrences.length ?? 0) > 0;

  const tabParam = firstSearchParam((await searchParams).tab);
  const initialTab = parseLexiconTabSearchParam(tabParam, hasConcordance);

  return (
    <LexiconEntryPage
      entry={entry}
      lexiconLanguage={lang}
      wordConcordance={wordConcordance}
      rootConcordance={rootConcordance}
      initialTab={initialTab}
    />
  );
}
