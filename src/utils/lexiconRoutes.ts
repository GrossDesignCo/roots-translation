export const LEXICON_LANGUAGES = ['hebrew', 'greek', 'aramaic'] as const;
export type LexiconLanguage = (typeof LEXICON_LANGUAGES)[number];

export const LEXICON_LANGUAGE_LABELS: Record<LexiconLanguage, string> = {
  hebrew: 'Hebrew',
  greek: 'Greek',
  aramaic: 'Aramaic',
};

export function isLexiconLanguage(value: string): value is LexiconLanguage {
  return (LEXICON_LANGUAGES as readonly string[]).includes(value);
}

export function lexiconEntryPath(lang: LexiconLanguage, key: string): string {
  return `/lexicon/${lang}/${encodeURIComponent(key)}`;
}

export function parseLexiconEntryPath(pathname: string): {
  lang: LexiconLanguage;
  key: string;
} | null {
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length < 3 || segments[0] !== 'lexicon') return null;
  const lang = segments[1];
  const key = decodeURIComponent(segments.slice(2).join('/'));
  if (!isLexiconLanguage(lang)) return null;
  return { lang, key };
}
