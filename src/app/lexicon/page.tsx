import { Suspense } from 'react';
import { readFile } from 'fs/promises';
import path from 'path';
import LexiconIndexClient, {
  type LexiconBrowseRow,
} from '@/app/lexicon/LexiconIndexClient';
import styles from './page.module.css';
import { isLexiconLanguage, type LexiconLanguage } from '@/utils/lexiconRoutes';
import {
  getDictionaryRoots,
  mergeLexiconBrowseKeys,
  rootElementToLexiconRootInfo,
} from '@/utils/lexiconFromDictionary';

interface LexiconIndexEntry {
  key: string;
  language: string;
  originalScript?: string;
  transliteration?: string;
  englishLiteral?: string;
  type?: string;
}

type Language = LexiconLanguage;

async function tryReadLexiconIndex(
  lang: Language,
): Promise<LexiconIndexEntry[]> {
  try {
    const filePath = path.join(
      process.cwd(),
      `public/lexicon/${lang}/index.json`,
    );
    const content = await readFile(filePath, 'utf-8');
    return JSON.parse(content) as LexiconIndexEntry[];
  } catch {
    return [];
  }
}

async function loadBrowseRows(lang: Language): Promise<LexiconBrowseRow[]> {
  const indexEntries = await tryReadLexiconIndex(lang);
  const dict = getDictionaryRoots(lang);

  const articleKeysNorm = new Set(indexEntries.map((e) => e.key.toLowerCase()));

  const keys = mergeLexiconBrowseKeys(
    indexEntries.map((e) => e.key),
    Object.keys(dict),
  );

  const indexByNorm = new Map(
    indexEntries.map((e) => [e.key.toLowerCase(), e] as const),
  );

  const rows: LexiconBrowseRow[] = keys.map((canonicalKey) => {
    const indexMatch = indexByNorm.get(canonicalKey.toLowerCase());

    if (indexMatch) {
      return {
        key: indexMatch.key,
        language: lang,
        originalScript: indexMatch.originalScript,
        transliteration: indexMatch.transliteration,
        englishLiteral: indexMatch.englishLiteral,
        type: indexMatch.type,
        hasArticle: true,
      };
    }

    const rootEntry = dict[canonicalKey];
    const info = rootElementToLexiconRootInfo(canonicalKey, rootEntry);

    return {
      key: canonicalKey,
      language: lang,
      originalScript: info.originalScript,
      transliteration: info.transliteration,
      englishLiteral: info.englishLiteral,
      type: info.type,
      hasArticle: articleKeysNorm.has(canonicalKey.toLowerCase()),
    };
  });

  rows.sort((a, b) =>
    (a.transliteration || a.key).localeCompare(
      b.transliteration || b.key,
      undefined,
      { sensitivity: 'base' },
    ),
  );

  return rows;
}

function firstSearchParam(
  value: string | string[] | undefined,
): string | undefined {
  if (value === undefined) return undefined;
  return typeof value === 'string' ? value : value[0];
}

export const metadata = {
  title: 'Lexicon | Roots Translation',
  description:
    'Browse dictionary words and lexicon articles for Hebrew, Greek, and Aramaic.',
};

export default async function LexiconIndexPage({
  searchParams,
}: {
  searchParams: Promise<{ tab?: string | string[] }>;
}) {
  const tabRaw = firstSearchParam((await searchParams).tab);
  const urlTab: LexiconLanguage | undefined =
    tabRaw !== undefined && isLexiconLanguage(tabRaw) ? tabRaw : undefined;

  const entriesByLanguage: Record<Language, LexiconBrowseRow[]> = {
    hebrew: await loadBrowseRows('hebrew'),
    greek: await loadBrowseRows('greek'),
    aramaic: await loadBrowseRows('aramaic'),
  };

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.heading}>Lexicon</h1>
        <p className={styles.subtitle}>Browse lexicon entries by language.</p>
      </header>

      <Suspense fallback={<div className={styles.loading}>Loading…</div>}>
        <LexiconIndexClient
          entriesByLanguage={entriesByLanguage}
          urlTab={urlTab}
        />
      </Suspense>
    </div>
  );
}
