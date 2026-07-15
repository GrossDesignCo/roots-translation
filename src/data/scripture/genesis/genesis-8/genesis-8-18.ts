import { Verse } from '@/types';

export const genesis_8_18: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 8,
    verse: 18,
  },
  words: [
    {
      hebrew: 'וַיֵּצֵא',
      transliteration: 'vayYetse',
      englishLiteral: 'And-he-brought_out',
      englishNatural: 'brought-out',
      root: 'yatsa',
      prefixes: ['va'],
      order: {
        hebrew: 1,
        english: 2,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'imperfect',
        stem: 'qal',
        type: 'verb',
      },
      lineBreaksBefore: {
        hebrew: 1,
      },
      grammarSuffix: {
        englishNatural: ',',
      },
      lineBreaksAfter: {
        english: 1,
      },
    },
    {
      hebrew: 'נֹחַ',
      transliteration: 'Noach',
      englishLiteral: 'Rest (Noah)',
      englishNatural: 'And Rest (Noah)',
      root: 'noach',
      order: {
        hebrew: 2,
        english: 1,
      },
      morphology: {
        type: 'noun',
      },
      lineBreaksBefore: {
        english: 1,
      },
      grammarSuffix: {
        englishLiteral: ';',
      },
      lineBreaksAfter: {
        hebrew: 1,
      },
    },
    {
      hebrew: 'וּבָנָיו',
      transliteration: 'uVanav',
      englishLiteral: 'and-sons-his',
      englishNatural: 'and his sons',
      root: 'ben',
      prefixes: ['u'],
      suffixes: ['av'],
      order: 3,
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun',
      },
    },
    {
      hebrew: 'וְאִשְׁתּוֹ',
      transliteration: 'veIshto',
      englishLiteral: 'and-woman-his',
      englishNatural: 'and his woman',
      root: 'ishah',
      prefixes: ['ve'],
      suffixes: ['o'],
      order: 4,
      morphology: {
        gender: 'feminine',
        number: 'singular',
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
      order: 5,
      morphology: {
        gender: 'feminine',
        number: 'plural',
        state: 'construct',
        type: 'noun',
      },
    },
    {
      hebrew: 'בָנָיו',
      transliteration: 'vanav',
      englishLiteral: 'sons-his',
      englishNatural: 'his sons',
      root: 'ben',
      suffixes: ['av'],
      order: 6,
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'אִתּוֹ',
      transliteration: 'itto',
      englishLiteral: 'with-him',
      englishNatural: 'with him',
      root: 'et_with',
      suffixes: ['o'],
      order: 7,
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
      'וַיֵּצֵא נֹחַ וּבָנָיו וְאִשְׁתּוֹ וּנְשֵׁי־בָנָיו אִתּוֹ',
    transliteration:
      'vayYetse Noach uVanav veIshto uNeshey-vanav itto',
    englishLiteral:
      'And-he-brought_out Rest (Noah); and-sons-his and-woman-his and-women-of- sons-his, with-him.',
    englishNatural:
      'And Rest (Noah) brought-out, and his sons and his woman and the women of his sons, with him.',
    kjv: "And Noah went forth, and his sons, and his wife, and his sons' wives with him;",
    lastReviewed: { name: 'Matt Gross', date: '2026-07-15' },
},
};
