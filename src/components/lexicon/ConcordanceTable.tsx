import styles from './ConcordanceTable.module.css';
import cx from 'classnames';

interface ConcordanceRow {
  location: {
    book: string;
    chapter: number;
    verse: number;
  };
  wordIndex: number;
  /** Present when generated with order-aware concordance build. */
  sourceOrder?: number;
  word: {
    originalScript: string;
    transliteration: string;
    englishLiteral: string;
    englishNatural?: string;
    root?: string;
    morphology?: {
      type?: string;
      tense?: string;
      stem?: string;
    };
  };
  context: {
    hebrew: string;
    transliteration: string;
    englishLiteral: string;
    englishNatural: string;
  };
}

interface ConcordanceTableProps {
  className?: string;
  title: string;
  rows: ConcordanceRow[];
}

function formatLocation(loc: ConcordanceRow['location']): string {
  return `${loc.book} ${loc.chapter}:${loc.verse}`;
}

function renderSnippet(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={i} className="highlight-soft">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

export default function ConcordanceTable({
  className,
  title,
  rows,
}: ConcordanceTableProps) {
  if (!rows.length) return null;

  return (
    <div className={cx(styles.concordanceTableWrapper, className)}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.scrollContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.locationCol}>Ref.</th>
              <th className={styles.contextCol}>Hebrew</th>
              <th className={styles.contextCol}>Transliteration</th>
              <th className={styles.contextCol}>Literal</th>
              <th className={styles.contextCol}>Natural</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={`${row.location.book}-${row.location.chapter}-${row.location.verse}-${row.sourceOrder ?? row.wordIndex}-${i}`}
              >
                <td className={styles.location}>
                  {formatLocation(row.location)}
                </td>
                <td className={styles.hebrew} dir="rtl" lang="he">
                  {renderSnippet(row.context.hebrew)}
                </td>
                <td className={styles.context}>
                  {renderSnippet(row.context.transliteration)}
                </td>
                <td className={styles.context}>
                  {renderSnippet(row.context.englishLiteral)}
                </td>
                <td className={styles.context}>
                  {renderSnippet(row.context.englishNatural)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
