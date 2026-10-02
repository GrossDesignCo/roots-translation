'use client';

import styles from './LexiconEntryReader.module.css';
import { Suspense, use, useState, ViewTransition } from 'react';
import { useSelection } from '@/context/SelectionContext';
import NoEntryPrompt from './NoEntryPrompt';
import { resolveLanguage } from '@/utils/resolveLanguage';
import { SelectWordPrompt } from './SelectWordPrompt';
import { getLexiconEntryKey } from '@/utils/getLexiconEntryKey';
import ReactMarkdown from 'react-markdown';
import RootLinks from './RootLinks';
import { LexiconEntryHeading } from '@/components/lexicon/LexiconEntryHeading';
import { parseLeadingAtxHeading } from '@/utils/lexiconMarkdown';

// Entries are cached for the session so reopening the panel doesn't refetch.
const entries = new Map<string, string | null>();
const requests = new Map<string, Promise<string | null>>();

const fetchEntry = async (key: string, language: string) => {
  try {
    const response = await fetch('/api/lexicon/get-entry', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ key, language }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Failed to fetch entry');
    }

    return (data.lexiconEntry as string) || null;
  } catch (err) {
    console.warn(`Error looking up lexicon entry for ${key}:`, err);
    return null;
  }
};

const getEntry = (id: string, key: string, language: string) => {
  if (entries.has(id)) return entries.get(id) ?? null;

  let request = requests.get(id);
  if (!request) {
    request = fetchEntry(key, language).then((entry) => {
      entries.set(id, entry);
      return entry;
    });
    requests.set(id, request);
  }

  return request;
};

function LexiconMarkdownBody({ source }: { source: string }) {
  const { heading, bodyMarkdown } = parseLeadingAtxHeading(source);
  return (
    <>
      {heading != null && <LexiconEntryHeading title={heading} />}
      <div className="markdown-text">
        <ReactMarkdown>{bodyMarkdown}</ReactMarkdown>
      </div>
    </>
  );
}

function LexiconEntryBody({
  id,
  entryKey,
  language,
}: {
  id: string;
  entryKey: string;
  language: string;
}) {
  const cachedOrRequest = getEntry(id, entryKey, language);
  const fetchedEntry =
    cachedOrRequest instanceof Promise ? use(cachedOrRequest) : cachedOrRequest;
  const [generatedEntry, setGeneratedEntry] = useState<string | null>(null);
  const entry = generatedEntry ?? fetchedEntry;

  if (entry) return <LexiconMarkdownBody source={entry} />;

  return (
    <>
      <p className={styles.error}>
        No Lexicon entry found for &quot;{entryKey}&quot;
      </p>
      <NoEntryPrompt
        onGenerate={(generated: string) => {
          entries.set(id, generated);
          setGeneratedEntry(generated);
        }}
      />
    </>
  );
}

export default function LexiconEntryReader() {
  const { selectedWords } = useSelection();

  if (!selectedWords.length) return <SelectWordPrompt />;

  const entryKey = getLexiconEntryKey(selectedWords);
  const language = resolveLanguage(selectedWords[0], 'original');
  const id = `${language}:${entryKey}`;

  return (
    <div className={styles.LexiconEntry}>
      <RootLinks />

      <Suspense key={id} fallback={<p>Loading Entry...</p>}>
        <ViewTransition enter="entry-in" default="none">
          <div>
            <LexiconEntryBody id={id} entryKey={entryKey} language={language} />
          </div>
        </ViewTransition>
      </Suspense>
    </div>
  );
}
