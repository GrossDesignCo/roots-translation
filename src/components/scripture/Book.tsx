'use client';
import { Chapter } from './Chapter';
import type { Book as BookData } from '@/types';
import styles from './Book.module.css';
import { useSelection } from '@/context/SelectionContext';
import { getBookNameKey } from '@/data/utils/idUtils';
import { WorkInProgressMarker } from './WorkInProgressMarker';
import { Fragment } from 'react/jsx-runtime';
import { useEffect, useRef, useState } from 'react';

const NEARBY_MARGIN = '500%';

interface BookProps {
  bookData: BookData;
}

export const Book = ({ bookData }: BookProps) => {
  const { filterVerses, filteredStructure } = useSelection();
  const bookRef = useRef<HTMLDivElement>(null);
  const [isNearby, setIsNearby] = useState(false);

  useEffect(() => {
    const el = bookRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsNearby(true);
          observer.disconnect();
        }
      },
      { rootMargin: NEARBY_MARGIN },
    );
    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={styles.Book}
      ref={bookRef}
      data-book-id={getBookNameKey(bookData.meta.name)}
    >
      <div className={styles.bookMeta}>
        <h1 className={styles.BookName} id={getBookNameKey(bookData.meta.name)}>
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

          if (nonConsecutiveChapters) {
            return (
              <Fragment key={chapter.meta.chapter}>
                <WorkInProgressMarker />
                <Chapter
                  chapterData={filteredChapter}
                  renderVerseContent={isNearby}
                />
              </Fragment>
            );
          }

          return (
            <Chapter
              chapterData={filteredChapter}
              renderVerseContent={isNearby}
              key={chapter.meta.chapter}
            />
          );
        })}
      </div>
    </div>
  );
};
