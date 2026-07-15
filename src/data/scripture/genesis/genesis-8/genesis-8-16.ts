import { Verse } from '@/types';

export const genesis_8_16: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 8,
    verse: 16,
  },
  words: [
    {
      hebrew: 'צֵא',
      transliteration: 'tse',
      englishLiteral: 'Go_out',
      englishNatural: 'Go-out',
      root: 'yatsa',
      order: 1,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '2nd',
        tense: 'imperative',
        stem: 'qal',
        type: 'verb',
      },
      grammarPrefix: {
        englishLiteral: '"',
        englishNatural: '"',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'מִן־',
      transliteration: 'min-',
      englishLiteral: 'from-',
      englishNatural: 'from',
      root: 'min_from',
      order: 2,
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'הַתֵּבָה',
      transliteration: 'haTevah',
      englishLiteral: 'the-ark',
      englishNatural: 'the ark',
      root: 'tevah',
      prefixes: ['ha'],
      order: 3,
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ';',
        englishNatural: ';',
      },
      lineBreaksAfter: 1,
    },
    {
      hebrew: 'אַתָּה',
      transliteration: 'atah',
      englishLiteral: 'you',
      englishNatural: 'you',
      root: 'atah',
      order: 4,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '2nd',
        type: 'pronoun',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'וְאִשְׁתְּךָ',
      transliteration: 'veIshtekha',
      englishLiteral: 'and-woman-your',
      englishNatural: 'and your woman',
      root: 'ishah',
      prefixes: ['ve'],
      suffixes: ['kha'],
      order: 5,
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      hebrew: 'וּבָנֶיךָ',
      transliteration: 'uVanekha',
      englishLiteral: 'and-sons-your',
      englishNatural: 'and your sons',
      root: 'ben',
      prefixes: ['u'],
      suffixes: ['kha'],
      order: 6,
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun',
      },
    },
    {
      hebrew: 'וּנְשֵׁי־',
      transliteration: 'uNeshey-',
      englishLiteral: 'and-women-of-',
      englishNatural: 'and the women of',
      root: 'ishah',
      prefixes: ['u'],
      order: 7,
      morphology: {
        gender: 'feminine',
        number: 'plural',
        state: 'construct',
        type: 'noun',
      },
    },
    {
      hebrew: 'בָנֶיךָ',
      transliteration: 'vanekha',
      englishLiteral: 'sons-your',
      englishNatural: 'your sons',
      root: 'ben',
      suffixes: ['kha'],
      order: 8,
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun',
      },
    },
    {
      hebrew: 'אִתָּךְ',
      transliteration: 'itakh',
      englishLiteral: 'with-you',
      englishNatural: 'with you',
      root: 'et_with',
      suffixes: ['kha'],
      order: 9,
      morphology: {
        type: 'preposition',
      },
      grammarSuffix: {
        englishLiteral: '.',
        englishNatural: '.',
      },
      lineBreaksAfter: 1,
    },
  ],
  expectedTranslations: {
    hebrew:
      'צֵא מִן־הַתֵּבָה אַתָּה וְאִשְׁתְּךָ וּבָנֶיךָ וּנְשֵׁי־בָנֶיךָ אִתָּךְ',
    transliteration:
      'tse min-haTevah atah veIshtekha uVanekha uNeshey-vanekha itakh',
    englishLiteral:
      '"Go_out, from- the-ark; you, and-woman-your and-sons-your and-women-of- sons-your with-you.',
    englishNatural:
      '"Go-out, from the ark; you, and your woman and your sons and the women of your sons with you.',
    kjv: "Go forth from the ark, thou, and thy wife, and thy sons, and thy sons' wives with thee.",
    lastReviewed: { name: 'Matt Gross', date: '2026-07-15' },
},
};
