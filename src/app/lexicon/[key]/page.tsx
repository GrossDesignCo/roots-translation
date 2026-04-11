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

async function findEntry(
  key: string,
): Promise<{ entry: LexiconEntry; language: Language } | null> {
  for (const lang of LANGUAGES) {
    const filePath = path.join(
      process.cwd(),
      `public/lexicon/${lang}/${key}.json`,
    );
    const entry = await tryReadJson<LexiconEntry>(filePath);
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

  // Load concordance data for this word
  const wordConcordance = await tryReadJson<ConcordanceData>(
    path.join(
      process.cwd(),
      `public/concordance/${language}/${key.toLowerCase()}.json`,
    ),
  );

  // Load root concordance data if this word has a root
  let rootConcordance: ConcordanceData | null = null;
  const rootKey = entry.root?.key;
  if (rootKey) {
    rootConcordance = await tryReadJson<ConcordanceData>(
      path.join(
        process.cwd(),
        `public/concordance/${language}/by-root/${rootKey}.json`,
      ),
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
