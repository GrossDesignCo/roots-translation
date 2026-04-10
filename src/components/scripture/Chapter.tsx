'use client';
import Verse from '@/components/scripture/Verse';
import type { Chapter as ChapterData } from '@/types';
import styles from './Chapter.module.css';
import { getChapterId, getBookNameKey } from '@/data/utils/idUtils';
import { Fragment, useEffect, useRef, useState } from 'react';
import { WorkInProgressMarker } from './WorkInProgressMarker';
import { useScripturePosition } from '@/context/ScripturePositionContext';

const NEARBY_MARGIN = '500%';

interface ChapterProps {
  chapterData: ChapterData;
  renderVerseContent: boolean;
}

export const Chapter = ({ chapterData, renderVerseContent }: ChapterProps) => {
  const { observe, unobserve } = useScripturePosition();
  const chapterRef = useRef<HTMLDivElement>(null);
  const [isNearby, setIsNearby] = useState(false);
  const chapterId = getChapterId({
    book: getBookNameKey(chapterData.meta.book),
    chapter: chapterData.meta.chapter,
  });

  // Chapter-level proximity check: only inflate verses when this chapter
  // is within range, even if the parent book is already nearby.
  useEffect(() => {
    const el = chapterRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsNearby(true);
          observer.disconnect();
        }
      },
      { rootMargin: NEARBY_MARGIN }
    );
    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  const shouldRenderVerses = renderVerseContent && isNearby;

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
