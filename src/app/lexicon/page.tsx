import { readFile } from 'fs/promises';
import path from 'path';
import Link from 'next/link';
import styles from './page.module.css';
import { toBcp47Lang } from '@/utils/resolveLanguage';
import { lexiconEntryPath, type LexiconLanguage } from '@/utils/lexiconRoutes';
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

interface BrowseCard {
  key: string;
  language: LexiconLanguage;
  originalScript?: string;
  transliteration?: string;
  englishLiteral?: string;
  type?: string;
  /** True when a authored .mdx lexicon article exists */
  hasArticle: boolean;
}

type Language = LexiconLanguage;
const LANGUAGES: { key: Language; label: string }[] = [
  { key: 'hebrew', label: 'Hebrew' },
  { key: 'greek', label: 'Greek' },
  { key: 'aramaic', label: 'Aramaic' },
];

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

async function loadBrowseCards(lang: Language): Promise<BrowseCard[]> {
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

  const cards: BrowseCard[] = keys.map((canonicalKey) => {
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

  cards.sort((a, b) =>
    (a.transliteration || a.key).localeCompare(
      b.transliteration || b.key,
      undefined,
      { sensitivity: 'base' },
    ),
  );

  return cards;
}

export const metadata = {
  title: 'Lexicon | Roots Translation',
  description:
    'Browse dictionary words and lexicon articles for Hebrew, Greek, and Aramaic.',
};

export default async function LexiconIndexPage() {
  const entriesByLanguage: Record<Language, BrowseCard[]> = {
    hebrew: await loadBrowseCards('hebrew'),
    greek: await loadBrowseCards('greek'),
    aramaic: await loadBrowseCards('aramaic'),
  };

  return (
    <div className={styles.page}>
      <h1>Lexicon</h1>
      <p className={styles.subtitle}>
        Browse dictionary words and lexicon articles across Hebrew, Greek, and
        Aramaic.
      </p>

      {LANGUAGES.map(({ key, label }) => {
        const entries = entriesByLanguage[key];
        if (!entries.length) return null;

        return (
          <section key={key} className={styles.section}>
            <h2 className={styles.sectionHeading}>
              {label}
              <span className={styles.sectionCount}>
                {entries.length} words
              </span>
            </h2>
            <div className={styles.grid}>
              {entries.map((entry) => (
                <Link
                  key={`${key}-${entry.key}`}
                  href={lexiconEntryPath(key, entry.key)}
                  className={styles.card}
                >
                  {entry.originalScript && (
                    <span className={styles.cardScript} lang={toBcp47Lang(key)}>
                      {entry.originalScript}
                    </span>
                  )}
                  <span className={styles.cardTranslit}>
                    {entry.transliteration || entry.key}
                  </span>
                  {entry.englishLiteral && (
                    <span className={styles.cardEnglish}>
                      {entry.englishLiteral}
                    </span>
                  )}
                  <span className={styles.cardMeta}>
                    {entry.type && (
                      <span className={styles.cardType}>{entry.type}</span>
                    )}
                    {entry.hasArticle ? (
                      <span className={styles.cardBadge}>Article</span>
                    ) : (
                      <span className={styles.cardBadgeMuted}>Concordance</span>
                    )}
                  </span>
                </Link>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
