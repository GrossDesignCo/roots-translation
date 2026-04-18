import Link from 'next/link';
import styles from './RootSummary.module.css';
import { toBcp47Lang } from '@/utils/resolveLanguage';
import { lexiconEntryPath, type LexiconLanguage } from '@/utils/lexiconRoutes';

interface RootInfo {
  key: string;
  originalScript: string;
  transliteration: string;
  englishLiteral: string;
  type?: string;
  description?: string;
}

interface RelatedEntry extends RootInfo {
  hasLexiconEntry: boolean;
}

export interface RootSummaryProps {
  root?: RootInfo;
  relatedEntries: RelatedEntry[];
  translatedTo?: RelatedEntry[];
  lexiconLanguage: LexiconLanguage;
}

export default function RootSummary({
  root,
  relatedEntries,
  translatedTo,
  lexiconLanguage,
}: RootSummaryProps) {
  if (!root) return null;

  const scriptLang = toBcp47Lang(lexiconLanguage);

  return (
    <div className={styles.rootSummary}>
      <div className={styles.primaryRoot}>
        <span className={styles.originalScript} lang={scriptLang}>
          {root.originalScript}
        </span>
        <span className={styles.arrow}>→</span>
        <span className={styles.transliteration}>{root.transliteration}</span>
        <span className={styles.arrow}>→</span>
        <span className={styles.english}>{root.englishLiteral}</span>
        {root.type && <span className={styles.type}>({root.type})</span>}
      </div>

      {root.description && (
        <p className={styles.description}>{root.description}</p>
      )}

      {relatedEntries.length > 0 && (
        <div className={styles.section}>
          <span className={styles.label}>Related:</span>
          <div className={styles.entries}>
            {relatedEntries.map((entry) => (
              <RootEntryLink
                key={entry.key}
                entry={entry}
                scriptLang={scriptLang}
                linkLanguage={lexiconLanguage}
              />
            ))}
          </div>
        </div>
      )}

      {translatedTo && translatedTo.length > 0 && (
        <div className={styles.section}>
          <span className={styles.label}>Greek:</span>
          <div className={styles.entries}>
            {translatedTo.map((entry) => (
              <RootEntryLink
                key={entry.key}
                entry={entry}
                scriptLang="el"
                linkLanguage="greek"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function RootEntryLink({
  entry,
  scriptLang,
  linkLanguage,
}: {
  entry: RelatedEntry;
  scriptLang?: string;
  linkLanguage: LexiconLanguage;
}) {
  const content = (
    <>
      <span className={styles.entryScript} lang={scriptLang}>
        {entry.originalScript}
      </span>{' '}
      {entry.transliteration} — {entry.englishLiteral}
      {entry.type && <span className={styles.entryType}> ({entry.type})</span>}
    </>
  );

  if (entry.hasLexiconEntry) {
    return (
      <Link
        href={lexiconEntryPath(linkLanguage, entry.key)}
        className={styles.entryLink}
      >
        {content}
      </Link>
    );
  }

  return <span className={styles.entryPlain}>{content}</span>;
}
