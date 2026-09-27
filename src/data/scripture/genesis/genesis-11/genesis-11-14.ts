import { type Verse } from '@/types';

export const genesis_11_14: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 11,
    verse: 14,
  },
  words: [
    {
      hebrew: 'וְשֶׁלַח',
      transliteration: 'veShelach',
      englishLiteral: 'And-Sent (Shelah)',
      englishNatural: 'And Sent (Shelah)',
      root: 'shelach',
      prefixes: ['ve'],
      order: 1,
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'singular',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'חַי',
      transliteration: 'chai',
      englishLiteral: 'he-lived',
      englishNatural: 'lived',
      root: 'chayah',
      order: 2,
      morphology: {
        type: 'verb',
        person: '3rd',
        gender: 'masculine',
        number: 'singular',
        stem: 'qal',
        tense: 'perfect',
      },
    },
    {
      hebrew: 'שְׁלֹשִׁים',
      transliteration: 'shloshim',
      englishLiteral: 'thirty',
      englishNatural: 'thirty',
      root: 'shloshim',
      order: 3,
      morphology: {
        type: 'numeral',
        gender: 'masculine',
        number: 'plural',
      },
    },
    {
      hebrew: 'שָׁנָה',
      transliteration: 'shanah',
      englishLiteral: 'year',
      englishNatural: 'years',
      root: 'shanah',
      order: 4,
      morphology: {
        type: 'noun',
        gender: 'feminine',
        number: 'singular',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
      lineBreaksAfter: 1,
    },
    {
      hebrew: 'וַיּוֹלֶד',
      transliteration: 'vaYoled',
      englishLiteral: 'and-he-birthed',
      englishNatural: 'and birthed',
      root: 'yalad',
      prefixes: ['va'],
      order: 5,
      morphology: {
        type: 'verb',
        person: '3rd',
        gender: 'masculine',
        number: 'singular',
        stem: 'hiphil',
        tense: 'imperfect',
      },
    },
    {
      hebrew: 'אֶת־',
      transliteration: 'et-',
      englishLiteral: '↳',
      englishNatural: '',
      root: 'et',
      order: 6,
      morphology: {
        type: 'particle',
      },
    },
    {
      hebrew: 'עֵבֶר',
      transliteration: 'Eber',
      englishLiteral: 'Crossing (Eber)',
      englishNatural: 'Crossing (Eber)',
      root: 'eber',
      order: 7,
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'singular',
      },
      grammarSuffix: {
        englishLiteral: '.',
        englishNatural: '.',
      },
      lineBreaksAfter: 1,
    },
  ],
  expectedTranslations: {
    hebrew: 'וְשֶׁלַח חַי שְׁלֹשִׁים שָׁנָה וַיּוֹלֶד אֶת־עֵבֶר',
    transliteration: 'veShelach chai shloshim shanah vaYoled et-Eber',
    englishLiteral:
      'And-Sent (Shelah) he-lived thirty year, and-he-birthed ↳ Crossing (Eber).',
    englishNatural:
      'And Sent (Shelah) lived thirty years, and birthed Crossing (Eber).',
    kjv: 'And Salah lived thirty years, and begat Eber:',
  },
};
