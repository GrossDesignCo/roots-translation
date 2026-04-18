'use client';

import { Suspense, useCallback, useEffect, useMemo } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import RootSummary from '@/components/lexicon/RootSummary';
import ConcordanceTable from '@/components/lexicon/ConcordanceTable';
import { Tabs, TabList, TabPanel } from '@/design-system';
import { LexiconEntryHeading } from '@/components/lexicon/LexiconEntryHeading';
import styles from './page.module.css';
import type { LexiconLanguage } from '@/utils/lexiconRoutes';
import { parseLeadingAtxHeading } from '@/utils/lexiconMarkdown';
import {
  parseLexiconTabSearchParam,
  type LexiconEntryTab,
} from '@/utils/lexiconTab';
import type { LexiconEntryResolved } from '@/utils/lexiconFromDictionary';

interface ConcordanceRow {
  location: { book: string; chapter: number; verse: number };
  wordIndex: number;
  sourceOrder?: number;
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

interface LexiconEntryPageProps {
  entry: LexiconEntryResolved;
  lexiconLanguage: LexiconLanguage;
  wordConcordance: ConcordanceData | null;
  rootConcordance: ConcordanceData | null;
}

interface LexiconEntryPageInnerProps extends LexiconEntryPageProps {
  hasConcordance: boolean;
  activeTab: LexiconEntryTab;
  onTabChange: (tab: LexiconEntryTab) => void;
}

function LexiconEntryPageInner({
  entry,
  lexiconLanguage,
  wordConcordance,
  rootConcordance,
  hasConcordance,
  activeTab,
  onTabChange,
}: LexiconEntryPageInnerProps) {
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
          translatedFrom={entry.translatedFrom}
          cognateHebrew={entry.cognateHebrew}
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
              onValueChange={(id) => onTabChange(id as LexiconEntryTab)}
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
                    className="full-page-bleed"
                    title={`${wordConcordance.occurrences.length} Occurrences of "${entry.key}"`}
                    rows={wordConcordance.occurrences}
                  />
                )}

                {rootConcordance && rootConcordance.occurrences.length > 0 && (
                  <ConcordanceTable
                    className="full-page-bleed"
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

function LexiconEntryUrlSynced({
  entry,
  lexiconLanguage,
  wordConcordance,
  rootConcordance,
  hasConcordance,
}: LexiconEntryPageProps & { hasConcordance: boolean }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const activeTab = useMemo(
    () => parseLexiconTabSearchParam(searchParams.get('tab'), hasConcordance),
    [searchParams, hasConcordance],
  );

  useEffect(() => {
    const raw = searchParams.get('tab');
    if (
      !hasConcordance &&
      raw != null &&
      raw.trim().toLowerCase() === 'concordance'
    ) {
      router.replace(pathname, { scroll: false });
    }
  }, [hasConcordance, searchParams, pathname, router]);

  const onTabChange = useCallback(
    (tab: LexiconEntryTab) => {
      const next = new URLSearchParams(searchParams.toString());
      if (tab === 'entry') {
        next.delete('tab');
      } else {
        next.set('tab', 'concordance');
      }
      const qs = next.toString();
      router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
    },
    [router, pathname, searchParams],
  );

  return (
    <LexiconEntryPageInner
      entry={entry}
      lexiconLanguage={lexiconLanguage}
      wordConcordance={wordConcordance}
      rootConcordance={rootConcordance}
      hasConcordance={hasConcordance}
      activeTab={activeTab}
      onTabChange={onTabChange}
    />
  );
}

export default function LexiconEntryPage({
  initialTab,
  ...props
}: LexiconEntryPageProps & { initialTab: LexiconEntryTab }) {
  const { wordConcordance, rootConcordance } = props;

  const hasConcordance =
    (wordConcordance?.occurrences.length ?? 0) > 0 ||
    (rootConcordance?.occurrences.length ?? 0) > 0;

  return (
    <Suspense
      fallback={
        <LexiconEntryPageInner
          {...props}
          hasConcordance={hasConcordance}
          activeTab={initialTab}
          onTabChange={() => {}}
        />
      }
    >
      <LexiconEntryUrlSynced {...props} hasConcordance={hasConcordance} />
    </Suspense>
  );
}
