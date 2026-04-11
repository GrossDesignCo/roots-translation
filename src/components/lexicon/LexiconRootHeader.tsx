import Link from 'next/link';
import styles from './LexiconRootHeader.module.css';

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

interface LexiconRootHeaderProps {
  root?: RootInfo;
  relatedEntries: RelatedEntry[];
  translatedTo?: RelatedEntry[];
}

export default function LexiconRootHeader({
  root,
  relatedEntries,
  translatedTo,
}: LexiconRootHeaderProps) {
  if (!root) return null;

  return (
    <div className={styles.rootHeader}>
      <div className={styles.primaryRoot}>
        <span className={styles.originalScript}>{root.originalScript}</span>
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
              <RootEntryLink key={entry.key} entry={entry} />
            ))}
          </div>
        </div>
      )}

      {translatedTo && translatedTo.length > 0 && (
        <div className={styles.section}>
          <span className={styles.label}>Greek:</span>
          <div className={styles.entries}>
            {translatedTo.map((entry) => (
              <RootEntryLink key={entry.key} entry={entry} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function RootEntryLink({ entry }: { entry: RelatedEntry }) {
  const content = (
    <>
      <span className={styles.entryScript}>{entry.originalScript}</span>{' '}
      {entry.transliteration} — {entry.englishLiteral}
      {entry.type && <span className={styles.entryType}> ({entry.type})</span>}
    </>
  );

  if (entry.hasLexiconEntry) {
    return (
      <Link href={`/lexicon/${entry.key}`} className={styles.entryLink}>
        {content}
      </Link>
    );
  }

  return <span className={styles.entryPlain}>{content}</span>;
}
