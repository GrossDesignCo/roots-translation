import { LanguageKey, ResolvedLanguageKey, TranslationWord } from '@/types';

export const resolveLanguage = (
  word: TranslationWord,
  language?: LanguageKey
) => {
  let key: ResolvedLanguageKey;

  // Resolve non-language keywords into their specific languages for the given word
  if (language === 'original' || language === undefined) {
    // Assume either hebrew or greek for now
    key = word.hebrew ? 'hebrew' : word.greek ? 'greek' : 'aramaic';
  }
  // Otherwise assume the language is an appropriate key
  else {
    key = language;
  }

  return key;
};

const bcp47Map: Record<string, string> = {
  hebrew: 'he',
  greek: 'el',
  aramaic: 'arc',
};

export const toBcp47Lang = (language: string): string | undefined =>
  bcp47Map[language];
