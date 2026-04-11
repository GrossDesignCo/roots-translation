'use client';
import { Chapter } from './Chapter';
import type { Book as BookData } from '@/types';
import styles from './Book.module.css';
import { useSelection } from '@/context/SelectionContext';
import { getBookNameKey } from '@/data/utils/idUtils';
import { WorkInProgressMarker } from './WorkInProgressMarker';
import { Fragment } from 'react/jsx-runtime';
import { useInflation } from '@/context/ScripturePositionContext';

interface BookProps {
  bookData: BookData;
}

export const Book = ({ bookData }: BookProps) => {
  const { filterVerses, filteredStructure } = useSelection();
  const { isBookInflated } = useInflation();
  const bookKey = getBookNameKey(bookData.meta.name);
  const inflated = isBookInflated(bookKey);

  return (
    <div className={styles.Book} data-book-id={bookKey}>
      <div className={styles.bookMeta}>
        <h1 className={styles.BookName} id={bookKey}>
          {bookData?.meta?.name}
        </h1>

        <div className={styles.translationChain}>
          {bookData?.meta?.translationChain}
        </div>
      </div>

      <div className={styles.chapters}>
        {bookData?.chapters?.map((chapter, i) => {
          const filteredVerses = chapter.verses.filter((verse) => {
            if (!filterVerses || !filteredStructure) return true;
            const bookName = bookData.meta.name.toLowerCase();
            return filteredStructure.verses[bookName]?.[
              chapter.meta.chapter
            ]?.includes(verse.meta.verse);
          });

          if (filteredVerses.length === 0) return null;

          const filteredChapter = {
            ...chapter,
            verses: filteredVerses,
          };

          const nonConsecutiveChapters =
            chapter.meta.chapter !==
              bookData.chapters[i - 1]?.meta.chapter + 1 &&
            chapter.meta.chapter !== 1;

          return (
            <Fragment key={chapter.meta.chapter}>
              {nonConsecutiveChapters && <WorkInProgressMarker />}
              <Chapter chapterData={filteredChapter} bookInflated={inflated} />
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};
