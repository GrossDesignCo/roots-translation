// import { useTheme } from 'next-themes';
import { LanguageKey, TranslationWord } from '@/types';
import { useSelection } from '@/context/SelectionContext';
import cx from 'classnames';
import styles from './Word.module.css';
import { LineBreaks } from './LineBreaks';
import { resolveWordOrderKey } from '@/utils/resolveWordOrderKey';
import { resolveLineBreaks } from '@/utils/resolveLineBreaks';
import { formatWord } from '@/utils/formatWord';
import { useLexicon } from '@/context/LexiconContext';
import { useMemo } from 'react';

export interface WordProps {
  word: TranslationWord;
  language: LanguageKey;
  showGrammar?: boolean;
  asRawText?: boolean;
  onClick?: (e: MouseEvent, word: TranslationWord) => void;
}

export default function Word({
  word,
  language = 'englishLiteral',
  showGrammar,
  onClick,
}: WordProps) {
  const { hasEntry } = useLexicon();
  const showEntryLink = useMemo(
    () => hasEntry(word.transliteration),
    [hasEntry, word.transliteration],
  );

  // Visual states
  const { selectedWords } = useSelection();
  const isSelected = selectedWords.includes(word);
  const selectedRoots = selectedWords.map((w) => w.root);
  const hasSelectedRoot = word.root && selectedRoots.includes(word.root);

  // const { resolvedTheme } = useTheme();
  // const reverseTheme = resolvedTheme === 'light' ? 'dark' : 'light';

  // Get the actual text + grammar of the word to render based on props + data
  const { wordText, formattedWordText } = formatWord(
    word,
    language,
    showGrammar,
  );

  // Determine what kind of line breaks to show
  const wordOrderKey = resolveWordOrderKey(word, language);
  const lineBreaksAfter = showGrammar ? (
    <LineBreaks
      numberOfBreaks={resolveLineBreaks(word?.lineBreaksAfter, wordOrderKey)}
    />
  ) : null;
  const lineBreaksBefore = showGrammar ? (
    <LineBreaks
      numberOfBreaks={resolveLineBreaks(word?.lineBreaksBefore, wordOrderKey)}
    />
  ) : null;

  return (
    <>
      {lineBreaksBefore}

      {wordText && (
        <span
          // @ts-expect-error - MouseEvents are dumb
          onClick={(e) => onClick?.(e, word)}
          role="button"
          aria-label={`${wordText}${isSelected ? ', selected' : ''}`}
          aria-pressed={isSelected ? 'true' : 'false'}
          tabIndex={0}
          className={cx(styles.TranslationWord, [`word=${wordText}`], {
            [styles.hasEntry]: showEntryLink,
          })}
        >
          <span
            className={cx(styles.Word, {
              'highlight-strong': isSelected,
              'highlight-soft': hasSelectedRoot && !isSelected,
            })}
          >
            {formattedWordText}
          </span>
        </span>
      )}

      {lineBreaksAfter}
    </>
  );
}
