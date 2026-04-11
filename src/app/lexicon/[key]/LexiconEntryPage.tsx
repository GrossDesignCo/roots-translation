'use client';

import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import LexiconRootHeader from '@/components/lexicon/LexiconRootHeader';
import ConcordanceTable from '@/components/lexicon/ConcordanceTable';
import styles from './page.module.css';
import Link from 'next/link';

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
  wordConcordance: ConcordanceData | null;
  rootConcordance: ConcordanceData | null;
}

export default function LexiconEntryPage({
  entry,
  wordConcordance,
  rootConcordance,
}: LexiconEntryPageProps) {
  const [activeTab, setActiveTab] = useState<Tab>('entry');

  const hasConcordance =
    (wordConcordance && wordConcordance.occurrences.length > 0) ||
    (rootConcordance && rootConcordance.occurrences.length > 0);

  return (
    <div className={styles.page}>
      <nav className={styles.breadcrumb}>
        <Link href="/lexicon" className={styles.breadcrumbLink}>
          Lexicon
        </Link>
        <span className={styles.breadcrumbSep}>/</span>
        <span>{entry.key}</span>
      </nav>

      <LexiconRootHeader
        root={entry.root}
        relatedEntries={entry.relatedEntries}
        translatedTo={entry.translatedTo}
        language={entry.language}
      />

      {hasConcordance && (
        <div className={styles.tabs}>
          <button
            className={`${styles.tab} ${activeTab === 'entry' ? styles.tabActive : ''}`}
            onClick={() => setActiveTab('entry')}
          >
            Entry
          </button>
          <button
            className={`${styles.tab} ${activeTab === 'concordance' ? styles.tabActive : ''}`}
            onClick={() => setActiveTab('concordance')}
          >
            Concordance
          </button>
        </div>
      )}

      {activeTab === 'entry' && (
        <div className={`${styles.entryContent} markdown-text`}>
          <ReactMarkdown>{entry.content}</ReactMarkdown>
        </div>
      )}

      {activeTab === 'concordance' && (
        <div className={styles.concordanceContent}>
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
        </div>
      )}
    </div>
  );
}
