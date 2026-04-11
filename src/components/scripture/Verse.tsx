'use client';
import type { Verse as VerseType, LanguageKey } from '@/types';
import { useSettings } from '@/context/SettingsContext';
import { String } from '../text/String';
import styles from './Verse.module.css';
import { useLexicon } from '@/context/LexiconContext';
import { useEffect, useMemo } from 'react';
import { resolveLanguage, toBcp47Lang } from '@/utils/resolveLanguage';
import { useSelection } from '@/context/SelectionContext';
import { getVerseId, getBookNameKey } from '@/data/utils/idUtils';

interface VerseProps {
  verse: VerseType;
}

export default function Verse({ verse }: VerseProps) {
  const { languages } = useSettings();

  const isShowingMultiple = languages.length > 1;

  const { checkWordsForEntryPresence } = useLexicon();

  useEffect(() => {
    const resolvedOGLanguage = resolveLanguage(verse.words?.[0], 'original');
    checkWordsForEntryPresence(
      verse.words.map((word) => word.transliteration),
      resolvedOGLanguage,
    );
  }, [
    verse.words,
    verse.meta.chapter,
    verse.meta.verse,
    checkWordsForEntryPresence,
  ]);

  const { selectedWords, filterVerses } = useSelection();

  const isFilteredOut = useMemo(() => {
    if (!filterVerses) return false;
    const roots = verse.words.map((word) => word.root);
    return !selectedWords.some((word) => roots.includes(word.root));
  }, [filterVerses, selectedWords, verse.words]);

  const verseId = getVerseId({
    book: getBookNameKey(verse.meta.book),
    chapter: verse.meta.chapter,
    verse: verse.meta.verse,
  });

  if (Boolean(selectedWords.length) && isFilteredOut) return;

  const verseContent = (
    <span data-verse-id={verseId}>
      {verse.meta.verse ? (
        <sup className={styles.VerseNumber} id={verseId}>
          {verse.meta.verse}
        </sup>
      ) : null}

      {languages.map((language) => {
        const resolvedLanguage = resolveLanguage(
          verse.words?.[0],
          language as LanguageKey,
        );
        const dir = resolvedLanguage === 'hebrew' ? 'rtl' : undefined;
        const renderedString = (
          <String
            words={verse.words}
            language={language as LanguageKey}
            key={resolvedLanguage}
            showGrammar
          />
        );

        return isShowingMultiple ? (
          <span
            className={styles.VerseAsBlock}
            dir={dir}
            lang={toBcp47Lang(resolvedLanguage)}
            key={language}
          >
            {renderedString}
          </span>
        ) : (
          renderedString
        );
      })}
    </span>
  );

  return isShowingMultiple ? (
    <div className={styles.VersesAsBlocks}>{verseContent}</div>
  ) : (
    verseContent
  );
}
