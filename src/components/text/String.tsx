import { LanguageKey, TranslationWord } from '@/types';
import { sortWords } from '@/utils/sortWords';
import { Fragment } from 'react';
import { useSelection } from '@/context/SelectionContext';
import Word from './Word';
import cx from 'classnames';
import styles from './String.module.css';
import { resolveLanguage, toBcp47Lang } from '@/utils/resolveLanguage';

interface StringProps {
  words: TranslationWord[];
  language: LanguageKey;
  // Arbitrary char to place between word renderings
  // usually a space or dash depending on the circumstances
  delimiter?: string;
  showGrammar?: boolean;
  asRawText?: boolean;
}

export const String = ({
  words,
  language,
  delimiter = ' ',
  ...rest
}: StringProps) => {
  // Resolve `original` to actual language used for styling
  const resolvedLanguage = resolveLanguage(words?.[0], language as LanguageKey);

  // Get sorted words based on language order
  const sortedWords = sortWords(words, language);
  const dir = resolvedLanguage === 'hebrew' ? 'rtl' : undefined;

  // Handle selecting/de-selecting words within this verse
  const { selectSingleWord, selectAdditionalWord } = useSelection();

  // handle different selection modes
  const handleClick = (e: MouseEvent, word: TranslationWord) => {
    // console.log('click word', { metaKey: e.metaKey, shiftKey: e.shiftKey });

    if (e.metaKey) {
      selectAdditionalWord(word);
      // console.log({ selectedWords, e, word, i });
    } else {
      selectSingleWord(word);
    }
  };

  return (
    <span
      className={cx(styles.String, styles[resolvedLanguage])}
      dir={dir}
      lang={toBcp47Lang(resolvedLanguage)}
    >
      {sortedWords.map((word, i) => {
        return (
          <Fragment key={`${word.transliteration}-${i}`}>
            <Word
              word={word}
              language={language}
              onClick={(e, word) => handleClick?.(e, word)}
              {...rest}
            />
            {i < words.length && delimiter}
          </Fragment>
        );
      })}
    </span>
  );
};
