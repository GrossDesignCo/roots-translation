import { useMemo, useState } from 'react';
import currentStructure from '@/../public/meta/current-structure.json';
import { SCRIPTURE_BOOK_NAMES, ScriptureBookNameKey } from '@/data/constants';
import { getChapterId } from '@/data/utils/idUtils';
import { Button } from '@/design-system/components/Button';
import { useScripturePosition } from '@/context/ScripturePositionContext';
import styles from './nav.module.css';

type BookNameKey = keyof typeof currentStructure;
type BookData = (typeof currentStructure)[BookNameKey];

export const ScriptureNav = ({ onChapterChange }: { onChapterChange: () => void }) => {
  const [openBook, setOpenBook] = useState<BookNameKey | null>(null);
  const { visibleChapterIds, scrollToChapter } = useScripturePosition();

  const visibleBookIds = useMemo(() => {
    return Object.keys(currentStructure).filter((bookNameKey) =>
      visibleChapterIds.some((chapterId) =>
        chapterId.startsWith(bookNameKey as ScriptureBookNameKey)
      )
    );
  }, [visibleChapterIds]);

  return (
    <nav className={styles.nav}>
      <ul className={styles.books}>
        {Object.entries(currentStructure).map(([bookNameKey, bookData]) => (
          <li key={bookNameKey} className={styles.book}>
            <BookNav
              bookNameKey={bookNameKey as BookNameKey}
              bookData={bookData}
              isOpen={
                openBook === bookNameKey || visibleBookIds.includes(bookNameKey)
              }
              visibleChapterIds={visibleChapterIds}
              scrollToChapter={scrollToChapter}
              onToggleOpen={() => {
                setOpenBook(
                  openBook === bookNameKey ? null : (bookNameKey as BookNameKey)
                );
              }}
              onChapterChange={onChapterChange}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};

interface BookNavProps {
  bookNameKey: BookNameKey;
  bookData: BookData;
  isOpen: boolean;
  onToggleOpen: () => void;
  visibleChapterIds: string[];
  scrollToChapter: (chapterId: string) => void;
  onChapterChange: () => void;
}

export const BookNav = ({
  bookNameKey,
  bookData,
  isOpen,
  onToggleOpen,
  visibleChapterIds,
  scrollToChapter,
  onChapterChange,
}: BookNavProps) => {
  const highlightedChapterIds = useMemo(() => {
    return Object.keys(bookData.chapters)
      .map((chapter) =>
        getChapterId({
          book: bookNameKey as ScriptureBookNameKey,
          chapter: parseInt(chapter),
        })
      )
      .filter((id) => visibleChapterIds.includes(id));
  }, [visibleChapterIds, bookData, bookNameKey]);

  return (
    <>
      {/* Book Name, links to book's heading */}
      <Button
        variant="ghost"
        className={styles.bookButton}
        introType="down"
        data-book-id={bookNameKey}
        onClick={onToggleOpen}
      >
        {SCRIPTURE_BOOK_NAMES[bookNameKey as ScriptureBookNameKey].name}
      </Button>

      {/* Chapter List */}
      <ul className={styles.chapters} data-open={isOpen}>
        {Object.keys(bookData.chapters).map((chapter) => {
          const chapterId = getChapterId({
            book: bookNameKey as ScriptureBookNameKey,
            chapter: parseInt(chapter),
          });
          const highlighted = highlightedChapterIds.includes(chapterId);

          return (
            <li key={chapter}>
              {/* Chapter Number, links to chapter's heading */}
              <Button
                variant={highlighted ? 'primary' : 'secondary'}
                className={styles.chapterButton}
                introType="down"
                data-chapter-id={chapterId}
                onClick={() => {
                  scrollToChapter(chapterId);
                  onChapterChange();
                }}
              >
                {chapter}
              </Button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
