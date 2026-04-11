import styles from './ConcordanceTable.module.css';

interface ConcordanceRow {
  location: {
    book: string;
    chapter: number;
    verse: number;
  };
  wordIndex: number;
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
        <strong key={i} className={styles.highlight}>
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

export default function ConcordanceTable({
  title,
  rows,
}: ConcordanceTableProps) {
  if (!rows.length) return null;

  return (
    <div className={styles.tableWrapper}>
      <h3 className={styles.title}>
        {title}
        <span className={styles.count}>{rows.length} occurrences</span>
      </h3>
      <div className={styles.scrollContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.locationCol}>Location</th>
              <th className={styles.contextCol}>Hebrew</th>
              <th className={styles.contextCol}>Transliteration</th>
              <th className={styles.contextCol}>Literal</th>
              <th className={styles.contextCol}>Natural</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={`${row.location.book}-${row.location.chapter}-${row.location.verse}-${row.wordIndex}-${i}`}
              >
                <td className={styles.location}>
                  {formatLocation(row.location)}
                </td>
                <td className={styles.hebrew} dir="rtl">
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
