'use client';

import { useSelection } from '@/context/SelectionContext';
import styles from './ScriptureReader.module.css';
import { Book } from '@/components/scripture/Book';
import { useSettings } from '@/context/SettingsContext';
import { scripture } from '@/data/scripture';
import cx from 'classnames';
import { CTACard } from '../CTACard';
import { memo } from 'react';

export const ScriptureReader = memo(function ScriptureReader() {
  const { font } = useSettings();
  const { filterVerses, filteredStructure } = useSelection();

  // Filter books based on filteredStructure
  const filteredBooks = scripture.books.filter((book) => {
    if (!filterVerses || !filteredStructure) return true;
    return filteredStructure.books.includes(book.meta.name.toLowerCase());
  });

  return (
    <div className={cx(styles.scripture, font ? styles[font] : '')}>
      <CTACard
        title="The Bible (Roots Translation)"
        className={styles.prefaceCTACard}
        link={{
          href: '/about',
          label: 'Read the Preface',
        }}
      />

      <div className={styles.bookContainer}>
        {filteredBooks.map((book) => {
          // Filter chapters based on filteredStructure
          const filteredChapters = book.chapters.filter((chapter) => {
            if (!filterVerses || !filteredStructure) return true;
            const bookName = book.meta.name.toLowerCase();
            return filteredStructure.chapters[bookName]?.includes(
              chapter.meta.chapter
            );
          });

          // Only render the book if it has chapters to show
          if (filteredChapters.length === 0) return null;

          // Create a filtered version of the book
          const filteredBook = {
            ...book,
            chapters: filteredChapters,
          };

          return <Book bookData={filteredBook} key={book.meta.name} />;
        })}
      </div>
    </div>
  );
});
