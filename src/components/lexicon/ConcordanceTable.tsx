import {
  DataTableRoot,
  DataTableTitle,
  DataTableScroll,
  DataTableTable,
  DataTableTh,
  DataTableTd,
} from '@/design-system';
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
    <DataTableRoot className={cx(className)}>
      <DataTableTitle>{title}</DataTableTitle>
      <DataTableScroll>
        <DataTableTable>
          <thead>
            <tr>
              <DataTableTh scope="col" variant="sticky">
                Ref.
              </DataTableTh>
              <DataTableTh scope="col" variant="wide">
                Hebrew
              </DataTableTh>
              <DataTableTh scope="col" variant="wide">
                Transliteration
              </DataTableTh>
              <DataTableTh scope="col" variant="wide">
                Literal
              </DataTableTh>
              <DataTableTh scope="col" variant="wide">
                Natural
              </DataTableTh>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={`${row.location.book}-${row.location.chapter}-${row.location.verse}-${row.sourceOrder ?? row.wordIndex}-${i}`}
              >
                <DataTableTd variant="sticky">
                  {formatLocation(row.location)}
                </DataTableTd>
                <DataTableTd variant="script" dir="rtl" lang="he">
                  {renderSnippet(row.context.hebrew)}
                </DataTableTd>
                <DataTableTd>
                  {renderSnippet(row.context.transliteration)}
                </DataTableTd>
                <DataTableTd>
                  {renderSnippet(row.context.englishLiteral)}
                </DataTableTd>
                <DataTableTd>
                  {renderSnippet(row.context.englishNatural)}
                </DataTableTd>
              </tr>
            ))}
          </tbody>
        </DataTableTable>
      </DataTableScroll>
    </DataTableRoot>
  );
}
