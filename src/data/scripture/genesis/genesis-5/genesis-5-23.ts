import { type Verse } from '@/types';

export const genesis_5_23: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 5,
    verse: 23,
  },
  words: [
    {
      hebrew: 'וַיְהִי',
      transliteration: 'vaYehi',
      englishLiteral: 'and-were',
      englishNatural: 'were',
      root: 'hayah',
      prefixes: ['va'],
      order: {
        hebrew: 1,
        english: 4,
      },
      morphology: {
        type: 'verb',
        person: '3rd',
        gender: 'masculine',
        number: 'plural',
        stem: 'qal',
        tense: 'imperfect',
      },
      lineBreaksBefore: {
        hebrew: 1,
      },
    },
    {
      hebrew: 'כָּל',
      transliteration: 'kol',
      englishLiteral: 'all',
      englishNatural: 'And all',
      root: 'kol',
      order: {
        hebrew: 2,
        english: 1,
      },
      morphology: {
        type: 'adjective',
      },
    },
    {
      hebrew: 'יְמֵי',
      transliteration: 'yemey',
      englishLiteral: 'days-of',
      englishNatural: 'the days of',
      root: 'yom',
      suffixes: ['ey'],
      order: {
        hebrew: 3,
        english: 2,
      },
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'plural',
        state: 'construct',
      },
    },
    {
      hebrew: 'חֲנוֹךְ',
      transliteration: 'Chanokh',
      englishLiteral: 'Dedicated (Enoch)',
      englishNatural: 'Dedicated (Enoch)',
      root: 'Chanokh',
      order: {
        hebrew: 4,
        english: 3,
      },
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'singular',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
      lineBreaksAfter: 1,
    },
    {
      hebrew: 'חֲמֵשׁ',
      transliteration: 'chamesh',
      englishLiteral: 'five',
      englishNatural: 'five',
      root: 'chamesh',
      order: 5,
      morphology: {
        type: 'numeral',
        gender: 'feminine',
        number: 'singular',
      },
    },
    {
      hebrew: 'וְשִׁשִּׁים',
      transliteration: 'veShishim',
      englishLiteral: 'and-sixty',
      englishNatural: 'and sixty',
      root: 'shishim',
      prefixes: ['ve'],
      order: 6,
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
      order: 7,
      morphology: {
        type: 'noun',
        gender: 'feminine',
        number: 'singular',
      },
    },
    {
      hebrew: 'וּשְׁלֹשׁ',
      transliteration: 'uShalosh',
      englishLiteral: 'and-three',
      englishNatural: 'and three',
      root: 'shalosh',
      prefixes: ['u'],
      order: 8,
      morphology: {
        type: 'numeral',
        gender: 'feminine',
        number: 'singular',
      },
    },
    {
      hebrew: 'מֵאוֹת',
      transliteration: 'meot',
      englishLiteral: 'hundreds',
      englishNatural: 'hundred',
      root: 'meah_hundred',
      prefixes: ['me'],
      order: 9,
      morphology: {
        type: 'numeral',
        gender: 'feminine',
        number: 'plural',
        state: 'construct',
      },
    },
    {
      hebrew: 'שָׁנָה',
      transliteration: 'shanah',
      englishLiteral: 'year',
      englishNatural: 'years',
      root: 'shanah',
      order: 10,
      morphology: {
        type: 'noun',
        gender: 'feminine',
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
    hebrew:
      'וַיְהִי כָּל יְמֵי חֲנוֹךְ חֲמֵשׁ וְשִׁשִּׁים שָׁנָה וּשְׁלֹשׁ מֵאוֹת שָׁנָה',
    transliteration:
      'vaYehi kol yemey Chanokh chamesh veShishim shanah uShalosh meot shanah',
    englishLiteral:
      'and-were all days-of Dedicated (Enoch), five and-sixty year and-three hundreds year.',
    englishNatural:
      'And all the days of Dedicated (Enoch), were five and sixty years and three hundred years.',
    kjv: 'And all the days of Enoch were three hundred sixty and five years:',
    lastReviewed: { name: 'Matt Gross', date: '2025-12-06' },
  },
};
