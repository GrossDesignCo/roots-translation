import { readFile, readdir } from 'fs/promises';
import path from 'path';
import { notFound } from 'next/navigation';
import LexiconEntryPage from './LexiconEntryPage';

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

type Language = 'hebrew' | 'greek' | 'aramaic';
const LANGUAGES: Language[] = ['hebrew', 'greek', 'aramaic'];

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
function getLexiconPath(lang: Language, key: string): string {
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

function getConcordanceWordPath(lang: Language, key: string): string {
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

function getConcordanceRootPath(lang: Language, rootKey: string): string {
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

async function findEntry(
  key: string,
): Promise<{ entry: LexiconEntry; language: Language } | null> {
  for (const lang of LANGUAGES) {
    const entry = await tryReadJson<LexiconEntry>(getLexiconPath(lang, key));
    if (entry) return { entry, language: lang };
  }
  return null;
}

export async function generateStaticParams() {
  const params: { key: string }[] = [];

  for (const lang of LANGUAGES) {
    const indexPath = path.join(
      process.cwd(),
      `public/lexicon/${lang}/index.json`,
    );
    const index = await tryReadJson<Array<{ key: string }>>(indexPath);
    if (index) {
      for (const entry of index) {
        params.push({ key: entry.key });
      }
    }
  }

  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ key: string }>;
}) {
  const { key } = await params;
  const result = await findEntry(key);
  if (!result) return { title: 'Not Found' };

  const { entry } = result;
  const title = entry.root
    ? `${entry.root.originalScript} (${entry.key}) — ${entry.root.englishLiteral}`
    : entry.key;

  return {
    title: `${title} | Lexicon | Roots Translation`,
    description: entry.root?.description || `Lexicon entry for ${entry.key}`,
  };
}

export default async function LexiconKeyPage({
  params,
}: {
  params: Promise<{ key: string }>;
}) {
  const { key } = await params;
  const result = await findEntry(key);
  if (!result) notFound();

  const { entry, language } = result;

  const wordConcordance = await tryReadJson<ConcordanceData>(
    getConcordanceWordPath(language, key.toLowerCase()),
  );

  let rootConcordance: ConcordanceData | null = null;
  const rootKey = entry.root?.key;
  if (rootKey) {
    rootConcordance = await tryReadJson<ConcordanceData>(
      getConcordanceRootPath(language, rootKey),
    );
  }

  return (
    <LexiconEntryPage
      entry={entry}
      wordConcordance={wordConcordance}
      rootConcordance={rootConcordance}
    />
  );
}
