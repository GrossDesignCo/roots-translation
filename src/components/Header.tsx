import React, { ReactNode } from 'react';
// import { ClearSelectionControl } from './ClearSelectionControl';
import styles from './Header.module.css';
import Link from 'next/link';
import { Gear, Info, TextT } from '@phosphor-icons/react';
import { Button, Tooltip } from '@/design-system';
import { ConcordanceModeControl } from './ConcordanceModeControl';
import {
  SECONDARY_PANELS,
  SecondaryPanelKey,
  useViewPanels,
} from '@/context/ViewPanelsContext';

const panelControls: Record<
  SecondaryPanelKey,
  { label: string; content: ReactNode }
> = {
  lexicon: {
    label: 'Show Lexicon',
    content: <TextT size={20} weight="regular" />,
  },
  scriptureNav: { label: 'Navigate to Chapter', content: 'Nav' },
  settings: {
    label: 'Show Settings',
    content: <Gear size={20} weight="regular" />,
  },
};

export const Header = () => {
  const { secondaryPanel, setSecondaryPanel } = useViewPanels();

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.appTitleContainer}>
          <h1 className={styles.appTitle}>Roots</h1>

          <Tooltip label="About">
            <Link href="/about">
              <Button variant="ghost" size="sm">
                <Info size={20} weight="regular" />
              </Button>
            </Link>
          </Tooltip>
        </div>

        <div className={styles.controls}>
          {/* <ClearSelectionControl /> */}

          <ConcordanceModeControl />
          {SECONDARY_PANELS.map((panel) => {
            const { label, content } = panelControls[panel];
            return (
              <Tooltip key={panel} label={label}>
                <Button
                  aria-label={label}
                  aria-pressed={secondaryPanel === panel}
                  variant={secondaryPanel === panel ? 'primary' : 'ghost'}
                  onClick={() => setSecondaryPanel(panel)}
                >
                  {content}
                </Button>
              </Tooltip>
            );
          })}
        </div>
      </div>
    </header>
  );
};
