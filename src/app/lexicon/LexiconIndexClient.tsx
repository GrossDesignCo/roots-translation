'use client';

import Link from 'next/link';
import {
  Tabs,
  TabList,
  TabPanel,
  useTabsSearchParamsSync,
  DataTableScroll,
  DataTableTable,
  DataTableTh,
  DataTableTd,
} from '@/design-system';
import {
  LEXICON_LANGUAGES,
  LEXICON_LANGUAGE_LABELS,
  lexiconEntryPath,
  type LexiconLanguage,
} from '@/utils/lexiconRoutes';
import { toBcp47Lang } from '@/utils/resolveLanguage';
import styles from './page.module.css';

export interface LexiconBrowseRow {
  key: string;
  language: LexiconLanguage;
  originalScript?: string;
  transliteration?: string;
  englishLiteral?: string;
  type?: string;
  hasArticle: boolean;
}

interface LexiconIndexClientProps {
  entriesByLanguage: Record<LexiconLanguage, LexiconBrowseRow[]>;
  /** Server-validated `?tab=` for SSR alignment with the URL */
  urlTab?: LexiconLanguage;
}

export default function LexiconIndexClient({
  entriesByLanguage,
  urlTab,
}: LexiconIndexClientProps) {
  const { value: activeLang, onValueChange } = useTabsSearchParamsSync({
    param: 'tab',
    allowedValues: LEXICON_LANGUAGES,
    defaultValue: 'hebrew',
    initialSelection: urlTab,
  });

  const languageTabs = LEXICON_LANGUAGES.map((lang) => ({
    id: lang,
    label: LEXICON_LANGUAGE_LABELS[lang],
  }));

  return (
    <Tabs value={activeLang} onValueChange={onValueChange}>
      <TabList
        ariaLabel="Lexicon language"
        tabs={languageTabs}
        className={styles.languageTabList}
      />

      {LEXICON_LANGUAGES.map((lang) => {
        const entries = entriesByLanguage[lang];
        const count = entries.length;

        return (
          <TabPanel key={lang} value={lang} className={styles.tabPanel}>
            <p className={styles.panelMeta}>
              {count} {count === 1 ? 'word' : 'words'}{' '}
              <span className={styles.panelMetaHint}>
                · Article = long-form entry; Concordance = dictionary +
                occurrences
              </span>
            </p>

            <DataTableScroll>
              <DataTableTable className={styles.lexiconTable}>
                <thead>
                  <tr>
                    <DataTableTh scope="col" variant="sticky">
                      Script
                    </DataTableTh>
                    <DataTableTh scope="col" variant="wide">
                      Lemma
                    </DataTableTh>
                    <DataTableTh scope="col" variant="wide">
                      English
                    </DataTableTh>
                    <DataTableTh scope="col">Type</DataTableTh>
                    <DataTableTh scope="col" textAlignEdge="end">
                      Format
                    </DataTableTh>
                  </tr>
                </thead>
                <tbody>
                  {entries.map((entry) => {
                    const href = lexiconEntryPath(lang, entry.key);
                    const scriptLang = toBcp47Lang(lang);
                    const lemma = entry.transliteration || entry.key;

                    return (
                      <tr key={`${lang}-${entry.key}`}>
                        <DataTableTd variant="stickyScript" lang={scriptLang}>
                          {entry.originalScript ?? '—'}
                        </DataTableTd>
                        <DataTableTd wrap>
                          <Link href={href} className={styles.lemmaLink}>
                            {lemma}
                          </Link>
                        </DataTableTd>
                        <DataTableTd wrap className={styles.tdEnglish}>
                          {entry.englishLiteral ?? '—'}
                        </DataTableTd>
                        <DataTableTd wrap className={styles.tdType}>
                          {entry.type ?? '—'}
                        </DataTableTd>
                        <DataTableTd textAlignEdge="end">
                          {entry.hasArticle ? (
                            <span className={styles.badge}>Article</span>
                          ) : (
                            <span className={styles.badgeMuted}>
                              Concordance
                            </span>
                          )}
                        </DataTableTd>
                      </tr>
                    );
                  })}
                </tbody>
              </DataTableTable>
            </DataTableScroll>
          </TabPanel>
        );
      })}
    </Tabs>
  );
}
