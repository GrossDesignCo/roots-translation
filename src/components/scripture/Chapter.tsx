'use client';
import Verse from '@/components/scripture/Verse';
import type { Chapter as ChapterData } from '@/types';
import styles from './Chapter.module.css';
import { getChapterId, getBookNameKey } from '@/data/utils/idUtils';
import { Fragment, useEffect, useRef } from 'react';
import { WorkInProgressMarker } from './WorkInProgressMarker';
import { useScripturePosition } from '@/context/ScripturePositionContext';

interface ChapterProps {
  chapterData: ChapterData;
  bookInflated: boolean;
}

export const Chapter = ({ chapterData, bookInflated }: ChapterProps) => {
  const { observe, unobserve, observeForInflation, unobserveForInflation, inflatedChapterIds } =
    useScripturePosition();
  const chapterRef = useRef<HTMLDivElement>(null);
  const chapterId = getChapterId({
    book: getBookNameKey(chapterData.meta.book),
    chapter: chapterData.meta.chapter,
  });

  const isInflated = inflatedChapterIds.has(chapterId);

  // Register with the inflation observer so the context can track proximity
  useEffect(() => {
    const el = chapterRef.current;
    if (!el) return;
    observeForInflation(el);
    return () => unobserveForInflation(el);
  }, [observeForInflation, unobserveForInflation]);

  const shouldRenderVerses = bookInflated && isInflated;

  // Position tracking for nav highlighting — only when verses are rendered
  useEffect(() => {
    if (!shouldRenderVerses) return;
    const el = chapterRef.current;
    if (!el) return;

    observe(el);
    return () => unobserve(el);
  }, [shouldRenderVerses, observe, unobserve]);

  return (
    <div className={styles.chapter} ref={chapterRef} data-chapter-id={chapterId}>
      <h2
        className={styles.chapterNumber}
        id={chapterId}
      >
        {chapterData.meta.chapter}
      </h2>

      {shouldRenderVerses &&
        chapterData?.verses?.map((v, i) => {
          const nonConsecutiveVerse =
            v.meta.verse !== chapterData?.verses[i - 1]?.meta.verse + 1 &&
            v.meta.verse !== 1;

          return (
            <Fragment key={v.meta.verse}>
              {nonConsecutiveVerse && <WorkInProgressMarker />}
              <Verse verse={v} />
            </Fragment>
          );
        })}
    </div>
  );
};
