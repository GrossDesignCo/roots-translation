'use client';

import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import RootSummary from '@/components/lexicon/RootSummary';
import ConcordanceTable from '@/components/lexicon/ConcordanceTable';
import { Tabs, TabList, TabPanel } from '@/design-system';
import { LexiconEntryHeading } from '@/components/lexicon/LexiconEntryHeading';
import styles from './page.module.css';
import type { LexiconLanguage } from '@/utils/lexiconRoutes';
import { parseLeadingAtxHeading } from '@/utils/lexiconMarkdown';

interface LexiconEntry {
  key: string;
  language: string;
  content: string;
  root?: {
    key: string;
    originalScript: string;
    transliteration: string;
    englishLiteral: string;
    type?: string;
    description?: string;
  };
  relatedEntries: Array<{
    key: string;
    originalScript: string;
    transliteration: string;
    englishLiteral: string;
    type?: string;
    hasLexiconEntry: boolean;
  }>;
  translatedTo?: Array<{
    key: string;
    originalScript: string;
    transliteration: string;
    englishLiteral: string;
    hasLexiconEntry: boolean;
  }>;
}

interface ConcordanceRow {
  location: { book: string; chapter: number; verse: number };
  wordIndex: number;
  word: {
    originalScript: string;
    transliteration: string;
    englishLiteral: string;
    englishNatural?: string;
    root?: string;
    morphology?: { type?: string; tense?: string; stem?: string };
  };
  context: {
    hebrew: string;
    transliteration: string;
    englishLiteral: string;
    englishNatural: string;
  };
}

interface ConcordanceData {
  key: string;
  language: string;
  root?: string;
  occurrences: ConcordanceRow[];
}

type Tab = 'entry' | 'concordance';

interface LexiconEntryPageProps {
  entry: LexiconEntry;
  lexiconLanguage: LexiconLanguage;
  wordConcordance: ConcordanceData | null;
  rootConcordance: ConcordanceData | null;
}

export default function LexiconEntryPage({
  entry,
  lexiconLanguage,
  wordConcordance,
  rootConcordance,
}: LexiconEntryPageProps) {
  const [activeTab, setActiveTab] = useState<Tab>('entry');

  const hasConcordance =
    (wordConcordance && wordConcordance.occurrences.length > 0) ||
    (rootConcordance && rootConcordance.occurrences.length > 0);

  const { heading: entryHeading, bodyMarkdown } = parseLeadingAtxHeading(
    entry.content,
  );

  const summary = entry.root ? (
    <aside className={styles.aside} aria-label="Root summary">
      <div className={styles.asideSticky}>
        <RootSummary
          root={entry.root}
          relatedEntries={entry.relatedEntries}
          translatedTo={entry.translatedTo}
          lexiconLanguage={lexiconLanguage}
        />
      </div>
    </aside>
  ) : null;

  return (
    <div className={styles.page}>
      <div className={styles.layout}>
        {activeTab === 'entry' && summary}

        <div className={styles.mainColumn}>
          {entryHeading != null && <LexiconEntryHeading title={entryHeading} />}

          {!hasConcordance ? (
            <div className={`${styles.entryContent} markdown-text`}>
              <ReactMarkdown>{bodyMarkdown}</ReactMarkdown>
            </div>
          ) : (
            <Tabs
              value={activeTab}
              onValueChange={(id) => setActiveTab(id as Tab)}
            >
              <TabList
                ariaLabel="Lexicon entry sections"
                tabs={[
                  { id: 'entry', label: 'Entry' },
                  { id: 'concordance', label: 'Concordance' },
                ]}
              />

              <TabPanel
                value="entry"
                id="lexicon-panel-entry"
                className={styles.entryContent}
              >
                <div className="markdown-text">
                  <ReactMarkdown>{bodyMarkdown}</ReactMarkdown>
                </div>
              </TabPanel>

              <TabPanel
                value="concordance"
                id="lexicon-panel-concordance"
                className={styles.concordanceContent}
              >
                {wordConcordance && wordConcordance.occurrences.length > 0 && (
                  <ConcordanceTable
                    title={`Occurrences of "${entry.key}"`}
                    rows={wordConcordance.occurrences}
                  />
                )}

                {rootConcordance && rootConcordance.occurrences.length > 0 && (
                  <ConcordanceTable
                    title={`All words from root "${entry.root?.key || entry.key}"`}
                    rows={rootConcordance.occurrences}
                  />
                )}
              </TabPanel>
            </Tabs>
          )}
        </div>
      </div>
    </div>
  );
}
