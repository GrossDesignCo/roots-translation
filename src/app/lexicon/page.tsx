import { readFile } from 'fs/promises';
import path from 'path';
import Link from 'next/link';
import styles from './page.module.css';

interface LexiconIndexEntry {
  key: string;
  language: string;
  originalScript?: string;
  transliteration?: string;
  englishLiteral?: string;
  type?: string;
}

type Language = 'hebrew' | 'greek' | 'aramaic';
const LANGUAGES: { key: Language; label: string }[] = [
  { key: 'hebrew', label: 'Hebrew' },
  { key: 'greek', label: 'Greek' },
  { key: 'aramaic', label: 'Aramaic' },
];

async function loadIndex(lang: Language): Promise<LexiconIndexEntry[]> {
  try {
    const filePath = path.join(
      process.cwd(),
      `public/lexicon/${lang}/index.json`,
    );
    const content = await readFile(filePath, 'utf-8');
    return JSON.parse(content);
  } catch {
    return [];
  }
}

export const metadata = {
  title: 'Lexicon | Roots Translation',
  description:
    'Browse all lexicon entries for Hebrew, Greek, and Aramaic words.',
};

export default async function LexiconIndexPage() {
  const entriesByLanguage: Record<Language, LexiconIndexEntry[]> = {
    hebrew: await loadIndex('hebrew'),
    greek: await loadIndex('greek'),
    aramaic: await loadIndex('aramaic'),
  };

  return (
    <div className={styles.page}>
      <h1 className={styles.heading}>Lexicon</h1>
      <p className={styles.subtitle}>
        Browse word studies and lexicon entries across Hebrew, Greek, and
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
                {entries.length} entries
              </span>
            </h2>
            <div className={styles.grid}>
              {entries.map((entry) => (
                <Link
                  key={entry.key}
                  href={`/lexicon/${entry.key}`}
                  className={styles.card}
                >
                  {entry.originalScript && (
                    <span className={styles.cardScript}>
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
                  {entry.type && (
                    <span className={styles.cardType}>{entry.type}</span>
                  )}
                </Link>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
