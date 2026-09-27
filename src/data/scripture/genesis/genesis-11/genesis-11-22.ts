import { type Verse } from '@/types';

export const genesis_11_22: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 11,
    verse: 22,
  },
  words: [
    {
      hebrew: 'וַיְחִי',
      transliteration: 'vaYechi',
      englishLiteral: 'and-lived',
      englishNatural: 'lived',
      root: 'chayah',
      prefixes: ['va'],
      order: {
        hebrew: 1,
        english: 2,
      },
      morphology: {
        type: 'verb',
        person: '3rd',
        gender: 'masculine',
        number: 'singular',
        stem: 'qal',
        tense: 'imperfect',
      },
      lineBreaksBefore: {
        hebrew: 1,
      },
    },
    {
      hebrew: 'שְׂרוּג',
      transliteration: 'Serug',
      englishLiteral: 'Intertwined (Serug)',
      englishNatural: 'And Intertwined (Serug)',
      root: 'serug',
      order: {
        hebrew: 2,
        english: 1,
      },
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'singular',
      },
      lineBreaksBefore: {
        english: 1,
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
      hebrew: 'נָחוֹר',
      transliteration: 'Nachor',
      englishLiteral: 'Snorting (Nahor)',
      englishNatural: 'Snorting (Nahor)',
      root: 'nachor',
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
    hebrew: 'וַיְחִי שְׂרוּג שְׁלֹשִׁים שָׁנָה וַיּוֹלֶד אֶת־נָחוֹר',
    transliteration: 'vaYechi Serug shloshim shanah vaYoled et-Nachor',
    englishLiteral:
      'and-lived Intertwined (Serug) thirty year, and-he-birthed ↳ Snorting (Nahor).',
    englishNatural:
      'And Intertwined (Serug) lived thirty years, and birthed Snorting (Nahor).',
    kjv: 'And Serug lived thirty years, and begat Nahor:',
  },
};
