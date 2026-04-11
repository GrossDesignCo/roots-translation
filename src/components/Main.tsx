'use client';
import { Header } from '@/components/Header';
import { ScriptureReader } from './scripture/ScriptureReader';
import styles from './Main.module.css';
import { useMediaBreakpoints } from '@/hooks/useMediaBreakpoints';
import { useSelection } from '@/context/SelectionContext';
import { useViewPanels } from '@/context/ViewPanelsContext';
import LexiconEntryReader from './lexicon/LexiconEntryReader';
import { Button, Sheet } from '@/design-system';
import { formatWord } from '@/utils/formatWord';
import { sortWords } from '@/utils/sortWords';
import Settings from './Settings';
import { LanguageKey } from '@/types';
import { useEffect } from 'react';
import { X } from '@phosphor-icons/react';
import { ScriptureNav } from './scripture/nav';

const languages: LanguageKey[] = [
  'original',
  'transliteration',
  'englishLiteral',
  'englishNatural',
];

export const Main = () => {
  const { isDesktop } = useMediaBreakpoints();
  const { selectedWords } = useSelection();
  const { secondaryPanel, setSecondaryPanel } = useViewPanels();

  const possibleTitles = {
    settings: 'Settings',
    lexicon:
      selectedWords.length > 0
        ? languages
            .map((language) => {
              const sortedWords = sortWords(selectedWords, language);

              return sortedWords
                .map((word) => {
                  const { formattedWordText } = formatWord(word, language);
                  return formattedWordText;
                })
                .join(' ');
            })
            .join(' → ')
        : 'Lexicon',
    scriptureNav: 'Navigate',
  };

  // @ts-expect-error - ts doesn't see that null won't be made a key here
  const secondaryPanelTitle = possibleTitles[secondaryPanel || ''];

  const secondaryPanelContent = (
    <>
      {secondaryPanel === 'lexicon' && <LexiconEntryReader />}
      {secondaryPanel === 'settings' && <Settings />}
      {secondaryPanel === 'scriptureNav' && (
        <ScriptureNav
          onChapterChange={isDesktop ? () => {} : () => setSecondaryPanel(null)}
        />
      )}
    </>
  );

  useEffect(() => {
    const minWidths = {
      settings: '40ch',
      lexicon: 'min(50vw, 80ch)',
      scriptureNav: '40ch',
    };

    // @ts-expect-error - ts doesn't see that null won't be made a key here
    const minWidth = minWidths[secondaryPanel || ''] || '0';
    const body = document.querySelector('body');

    body?.style.setProperty('--main-secondary-panel-width', minWidth);
  }, [secondaryPanel, isDesktop]);

  return (
    <>
      <main className={styles.main}>
        <div className={styles.primaryPanel}>
          <ScriptureReader />

          <Header />
        </div>

        {/* On mobile by default, just render the secondary panel items as sheets */}
        {isDesktop ? (
          <div className={styles.secondaryPanel}>
            <h2 className={styles.secondaryPanelTitle}>
              <span className={styles.secondaryPanelTitleText}>
                {secondaryPanelTitle}
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSecondaryPanel(null)}
              >
                <X size={16} weight="regular" />
              </Button>
            </h2>
            {secondaryPanelContent}
          </div>
        ) : (
          <Sheet
            open={Boolean(secondaryPanel)}
            onOpenChange={(open) => {
              if (!open) setSecondaryPanel(null);
            }}
            title={secondaryPanelTitle}
            expanded
          >
            {secondaryPanelContent}
          </Sheet>
        )}
      </main>
    </>
  );
};
