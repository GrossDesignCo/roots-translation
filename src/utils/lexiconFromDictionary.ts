import { roots as hebrewRoots } from '@/data/dictionary/hebrew/roots';
import type { HebrewRootElement } from '@/data/dictionary/hebrew/roots';
import { roots as greekRoots } from '@/data/dictionary/greek/roots';
import type { GreekRootElement } from '@/data/dictionary/greek/roots';
import { roots as aramaicRoots } from '@/data/dictionary/aramaic/roots';
import type { AramaicRootElement } from '@/data/dictionary/aramaic/roots';
import type { LexiconLanguage } from '@/utils/lexiconRoutes';

export interface LexiconRootInfo {
  key: string;
  originalScript: string;
  transliteration: string;
  englishLiteral: string;
  type?: string;
  description?: string;
}

export interface LexiconRelatedEntry extends LexiconRootInfo {
  hasLexiconEntry: boolean;
}

export interface LexiconEntryResolved {
  key: string;
  language: LexiconLanguage;
  content: string;
  root?: LexiconRootInfo;
  relatedEntries: LexiconRelatedEntry[];
  translatedTo?: LexiconRelatedEntry[];
  /** Greek dictionary `translatedFrom` → Hebrew roots */
  translatedFrom?: LexiconRelatedEntry[];
  /** Aramaic dictionary `cognateHebrew` */
  cognateHebrew?: LexiconRelatedEntry[];
}

type AnyRootElement = HebrewRootElement | GreekRootElement | AramaicRootElement;

export function getDictionaryRoots(
  lang: LexiconLanguage,
): Record<string, AnyRootElement> {
  switch (lang) {
    case 'hebrew':
      return hebrewRoots as Record<string, AnyRootElement>;
    case 'greek':
      return greekRoots as Record<string, AnyRootElement>;
    case 'aramaic':
      return aramaicRoots as Record<string, AnyRootElement>;
  }
}

export function normalizeLexiconLookupKey(key: string): string {
  return key.trim().toLowerCase();
}

/**
 * Resolve a dictionary root by exact key or case-insensitive match.
 */
export function findDictionaryRoot(
  lang: LexiconLanguage,
  key: string,
): { dictKey: string; root: AnyRootElement } | null {
  const roots = getDictionaryRoots(lang);
  if (roots[key]) {
    return { dictKey: key, root: roots[key] };
  }
  const target = normalizeLexiconLookupKey(key);
  for (const dictKey of Object.keys(roots)) {
    if (normalizeLexiconLookupKey(dictKey) === target) {
      return { dictKey, root: roots[dictKey] };
    }
  }
  return null;
}

function getOriginalScript(rootData: AnyRootElement): string {
  if ('hebrew' in rootData && rootData.hebrew) return rootData.hebrew;
  if ('greek' in rootData && rootData.greek) return rootData.greek;
  if ('aramaic' in rootData && rootData.aramaic) return rootData.aramaic;
  return '';
}

export function rootElementToLexiconRootInfo(
  dictKey: string,
  rootData: AnyRootElement,
): LexiconRootInfo {
  return {
    key: dictKey,
    originalScript: getOriginalScript(rootData),
    transliteration: rootData.transliteration,
    englishLiteral: rootData.englishLiteral,
    type: rootData.type,
    description: rootData.description,
  };
}

function findRootExact(
  lang: LexiconLanguage,
  key: string,
): AnyRootElement | null {
  const roots = getDictionaryRoots(lang);
  return roots[key] ?? null;
}

export type LexiconArticleChecker = (
  lang: LexiconLanguage,
  key: string,
) => boolean;

export function buildStubLexiconEntry(
  lang: LexiconLanguage,
  /** Canonical URL / entry key (may differ in casing from dictionary key) */
  entryKey: string,
  dictKey: string,
  rootData: AnyRootElement,
  hasLexiconArticle: LexiconArticleChecker,
): LexiconEntryResolved {
  const rootInfo = rootElementToLexiconRootInfo(dictKey, rootData);

  const relatedKeys = (rootData as { related?: readonly string[] }).related;
  const relatedEntries: LexiconRelatedEntry[] = relatedKeys
    ? (relatedKeys
        .map((rk) => {
          const rd = findRootExact(lang, rk);
          if (!rd) return null;
          return {
            ...rootElementToLexiconRootInfo(rk, rd),
            hasLexiconEntry: hasLexiconArticle(lang, rk),
          };
        })
        .filter(Boolean) as LexiconRelatedEntry[])
    : [];

  let translatedTo: LexiconRelatedEntry[] | undefined;
  if (lang === 'hebrew') {
    const keys = (rootData as HebrewRootElement).translatedTo;
    if (keys?.length) {
      translatedTo = keys
        .map((tk) => {
          const td = findRootExact('greek', tk);
          if (!td) return null;
          return {
            ...rootElementToLexiconRootInfo(tk, td),
            hasLexiconEntry: hasLexiconArticle('greek', tk),
          };
        })
        .filter(Boolean) as LexiconRelatedEntry[];
    }
  }

  if (lang === 'aramaic') {
    const keys = (rootData as AramaicRootElement).translatedTo;
    if (keys?.length) {
      translatedTo = keys
        .map((tk) => {
          const td = findRootExact('greek', tk);
          if (!td) return null;
          return {
            ...rootElementToLexiconRootInfo(tk, td),
            hasLexiconEntry: hasLexiconArticle('greek', tk),
          };
        })
        .filter(Boolean) as LexiconRelatedEntry[];
    }
  }

  let translatedFrom: LexiconRelatedEntry[] | undefined;
  if (lang === 'greek') {
    const keys = (rootData as GreekRootElement).translatedFrom;
    if (keys?.length) {
      translatedFrom = keys
        .map((hk) => {
          const hd = findRootExact('hebrew', hk);
          if (!hd) return null;
          return {
            ...rootElementToLexiconRootInfo(hk, hd),
            hasLexiconEntry: hasLexiconArticle('hebrew', hk),
          };
        })
        .filter(Boolean) as LexiconRelatedEntry[];
    }
  }

  let cognateHebrew: LexiconRelatedEntry[] | undefined;
  if (lang === 'aramaic') {
    const keys = (rootData as AramaicRootElement).cognateHebrew;
    if (keys?.length) {
      cognateHebrew = keys
        .map((hk) => {
          const hd = findRootExact('hebrew', hk);
          if (!hd) return null;
          return {
            ...rootElementToLexiconRootInfo(hk, hd),
            hasLexiconEntry: hasLexiconArticle('hebrew', hk),
          };
        })
        .filter(Boolean) as LexiconRelatedEntry[];
    }
  }

  const title =
    rootInfo.transliteration || rootInfo.originalScript || entryKey;
  const content = `# ${title}

_A full lexicon article for this word is not yet available._`;

  return {
    key: entryKey,
    language: lang,
    content,
    root: rootInfo,
    relatedEntries,
    translatedTo: translatedTo?.length ? translatedTo : undefined,
    translatedFrom: translatedFrom?.length ? translatedFrom : undefined,
    cognateHebrew: cognateHebrew?.length ? cognateHebrew : undefined,
  };
}

export function mergeLexiconBrowseKeys(
  articleKeys: Iterable<string>,
  dictionaryKeys: Iterable<string>,
): string[] {
  const canonicalByNorm = new Map<string, string>();

  for (const k of articleKeys) {
    canonicalByNorm.set(normalizeLexiconLookupKey(k), k);
  }
  for (const k of dictionaryKeys) {
    const n = normalizeLexiconLookupKey(k);
    if (!canonicalByNorm.has(n)) {
      canonicalByNorm.set(n, k);
    }
  }

  return [...canonicalByNorm.values()];
}
