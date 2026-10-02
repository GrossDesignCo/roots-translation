'use client';
import { Header } from '@/components/Header';
import { ScriptureReader } from './scripture/ScriptureReader';
import styles from './Main.module.css';
import { useMediaBreakpoints } from '@/hooks/useMediaBreakpoints';
import { useSelection } from '@/context/SelectionContext';
import { SecondaryPanelKey, useViewPanels } from '@/context/ViewPanelsContext';
import LexiconEntryReader from './lexicon/LexiconEntryReader';
import { Button } from '@/design-system';
import { formatWord } from '@/utils/formatWord';
import { sortWords } from '@/utils/sortWords';
import Settings from './Settings';
import { LanguageKey } from '@/types';
import { useEffect, ViewTransition } from 'react';
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

  const titles: Record<SecondaryPanelKey, string> = {
    settings: 'Settings',
    lexicon:
      selectedWords.length > 0
        ? languages
            .map((language) =>
              sortWords(selectedWords, language)
                .map((word) => formatWord(word, language).formattedWordText)
                .join(' '),
            )
            .join(' → ')
        : 'Lexicon',
    scriptureNav: 'Navigate',
  };
  useEffect(() => {
    if (!secondaryPanel) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSecondaryPanel(null);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [secondaryPanel, setSecondaryPanel]);

  return (
    <main className={styles.main}>
      {/* Fades scrolling text under the status bar / notch (does not inset or clip content) */}
      <div className={styles.safeAreaTopFade} aria-hidden />
      <div className={styles.primaryPanel}>
        <ScriptureReader />

        <Header />
      </div>

      <aside
        className={styles.secondaryPanel}
        data-panel={secondaryPanel ?? undefined}
        aria-label={secondaryPanel ? titles[secondaryPanel] : undefined}
      >
        {secondaryPanel && (
          <ViewTransition default="none" enter="panel-in" exit="panel-out">
            <div className={styles.panelFrame}>
              <Button
                variant="ghost"
                size="sm"
                aria-label="Close panel"
                className={styles.closeButton}
                onClick={() => setSecondaryPanel(null)}
              >
                <X size={16} weight="regular" />
              </Button>

              <ViewTransition
                key={secondaryPanel}
                default="none"
                enter={{
                  'panel-forward': 'view-from-end',
                  'panel-back': 'view-from-start',
                  default: 'none',
                }}
                exit={{
                  'panel-forward': 'view-to-start',
                  'panel-back': 'view-to-end',
                  'panel-widen': 'view-ride-widen',
                  'panel-narrow': 'view-ride-narrow',
                  default: 'none',
                }}
              >
                <div className={styles.view} data-panel={secondaryPanel}>
                  <h2 className={styles.title}>{titles[secondaryPanel]}</h2>

                  {secondaryPanel === 'lexicon' && <LexiconEntryReader />}
                  {secondaryPanel === 'settings' && <Settings />}
                  {secondaryPanel === 'scriptureNav' && (
                    <ScriptureNav
                      onChapterChange={
                        isDesktop ? () => {} : () => setSecondaryPanel(null)
                      }
                    />
                  )}
                </div>
              </ViewTransition>
            </div>
          </ViewTransition>
        )}
      </aside>
    </main>
  );
};
