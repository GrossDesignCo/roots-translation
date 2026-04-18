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

interface LexiconEntry {
  key: string;
  language: string;
  content: string;
  root?: {
    key: string;
    originalScript: string;
    transliteration: string;
    englishLiteral: string;
    type?: string;
    description?: string;
  };
  relatedEntries: Array<{
    key: string;
    originalScript: string;
    transliteration: string;
    englishLiteral: string;
    type?: string;
    hasLexiconEntry: boolean;
  }>;
  translatedTo?: Array<{
    key: string;
    originalScript: string;
    transliteration: string;
    englishLiteral: string;
    hasLexiconEntry: boolean;
  }>;
}

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

export async function generateStaticParams() {
  const params: { lang: LexiconLanguage; key: string }[] = [];

  for (const lang of LEXICON_LANGUAGES) {
    const indexPath = path.join(
      process.cwd(),
      `public/lexicon/${lang}/index.json`,
    );
    const index = await tryReadJson<Array<{ key: string }>>(indexPath);
    if (index) {
      for (const entry of index) {
        params.push({ lang, key: entry.key });
      }
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

  const entry = await tryReadJson<LexiconEntry>(getLexiconPath(langParam, key));
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

export default async function LexiconLangKeyPage({
  params,
}: {
  params: Promise<{ lang: string; key: string }>;
}) {
  const { lang: langParam, key } = await params;
  if (!isLexiconLanguage(langParam)) notFound();

  const lang = langParam;

  const entry = await tryReadJson<LexiconEntry>(getLexiconPath(lang, key));
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

  return (
    <LexiconEntryPage
      entry={entry}
      lexiconLanguage={lang}
      wordConcordance={wordConcordance}
      rootConcordance={rootConcordance}
    />
  );
}
