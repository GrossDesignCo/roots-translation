import Link from 'next/link';
import { useSelection } from '@/context/SelectionContext';
import { useLexicon } from '@/context/LexiconContext';
import {
  roots as hebrewRoots,
  HebrewRootElement,
} from '@/data/dictionary/hebrew/roots';
import {
  roots as greekRoots,
  GreekRootElement,
} from '@/data/dictionary/greek/roots';
import {
  roots as aramaicRoots,
  AramaicRootElement,
} from '@/data/dictionary/aramaic/roots';
import { HebrewRoot, GreekRoot, AramaicRoot } from '@/types';
import styles from './LexiconEntryReader.module.css';
import { toBcp47Lang } from '@/utils/resolveLanguage';

const findRoot = (word: string) => {
  return (
    hebrewRoots[word as HebrewRoot] ||
    greekRoots[word as GreekRoot] ||
    aramaicRoots[word as AramaicRoot]
  );
};

export default function RootLinks() {
  const { selectedWords } = useSelection();

  if (!selectedWords.length || !selectedWords[0].root) return null;

  return (
    <div className={styles.rootLinks}>
      <div className={styles.rootList}>
        {selectedWords.map((word) => {
          const root = word.root;
          if (!root) return null;

          const rootWord = findRoot(root);
          const relatedRoots = rootWord?.related?.map((r) => findRoot(r));

          return (
            <div key={word.transliteration} className={styles.rootEntries}>
              <div className={styles.rootEntry}>
                <div>Root:</div>
                <DictionaryEntry
                  key={rootWord.transliteration}
                  rootWord={rootWord}
                />
              </div>

              {relatedRoots && (
                <div className={styles.relatedRoots}>
                  <div>Related:</div>
                  <div className={styles.relatedRootsEntries}>
                    {relatedRoots.map((r) => (
                      <DictionaryEntry key={r.transliteration} rootWord={r} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export const DictionaryEntry = ({
  rootWord,
}: {
  rootWord: HebrewRootElement | GreekRootElement | AramaicRootElement;
}) => {
  const { hasEntry } = useLexicon();
  // @ts-expect-error - hebrew, greek, and aramaic have different keys
  const { hebrew, greek, aramaic, transliteration, englishLiteral, type } =
    rootWord;
  const originalText = hebrew || greek || aramaic;
  const scriptLang = toBcp47Lang(
    hebrew ? 'hebrew' : greek ? 'greek' : 'aramaic',
  );
  const entryExists = hasEntry(transliteration);

  const content = (
    <>
      <span lang={scriptLang}>{originalText}</span> → {transliteration} →{' '}
      {englishLiteral} ({type})
    </>
  );

  if (entryExists) {
    return (
      <Link href={`/lexicon/${transliteration}`} className={styles.rootLink}>
        {content}
      </Link>
    );
  }

  return <div>{content}</div>;
};
