import { Verse } from '@/types';

export const genesis_5_31: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 5,
    verse: 31,
  },
  words: [
    {
      hebrew: 'וַיְהִי',
      transliteration: 'vaYehi',
      englishLiteral: 'And-was',
      englishNatural: 'were',
      root: 'hayah',
      prefixes: ['va'],
      order: {
        hebrew: 1,
        english: 4,
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
    },
    {
      hebrew: 'כָּל־',
      transliteration: 'kol-',
      englishLiteral: 'all-',
      englishNatural: 'And all',
      root: 'kol',
      order: {
        hebrew: 2,
        english: 1,
      },
      morphology: {
        type: 'adjective',
      },
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      hebrew: 'יְמֵי',
      transliteration: 'yemey',
      englishLiteral: 'days-of',
      englishNatural: 'the days of',
      root: 'yom',
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
      hebrew: 'לֶמֶךְ',
      transliteration: 'Lemekh',
      englishLiteral: 'Powerful (Lamech)',
      englishNatural: 'Powerful (Lamech)',
      root: 'Lemekh',
      order: {
        hebrew: 4,
        english: 3,
      },
      morphology: {
        type: 'noun',
        state: 'absolute',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
      lineBreaksAfter: 1,
    },
    {
      hebrew: 'שֶׁבַע',
      transliteration: 'sheva',
      englishLiteral: 'seven',
      englishNatural: 'seven',
      root: 'sheva',
      order: 5,
      morphology: {
        type: 'numeral',
      },
    },
    {
      hebrew: 'וְשִׁבְעִים',
      transliteration: 'veShivim',
      englishLiteral: 'and-seventy',
      englishNatural: 'and seventy',
      root: 'shivim',
      prefixes: ['ve'],
      order: 6,
      morphology: {
        type: 'numeral',
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
        state: 'absolute',
      },
    },
    {
      hebrew: 'וּשְׁבַע',
      transliteration: 'uSheva',
      englishLiteral: 'and-seven',
      englishNatural: 'and seven',
      root: 'sheva',
      prefixes: ['u'],
      order: 8,
      morphology: {
        type: 'numeral',
      },
    },
    {
      hebrew: 'מֵאוֹת',
      transliteration: 'meot',
      englishLiteral: 'hundreds',
      englishNatural: 'hundred',
      root: 'meah_hundred',
      order: 9,
      morphology: {
        type: 'numeral',
        number: 'plural',
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
        state: 'absolute',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'וַיָּמֹת',
      transliteration: 'vaYamot',
      englishLiteral: 'and-died',
      englishNatural: 'and he died',
      root: 'mut',
      prefixes: ['va'],
      order: 11,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'imperfect',
        stem: 'qal',
        type: 'verb',
      },
      lineBreaksBefore: 1,
      grammarSuffix: {
        englishLiteral: '.',
        englishNatural: '.',
      },
      lineBreaksAfter: 1,
    },
  ],
  expectedTranslations: {
    hebrew:
      'וַיְהִי כָּל־יְמֵי לֶמֶךְ שֶׁבַע וְשִׁבְעִים שָׁנָה וּשְׁבַע מֵאוֹת שָׁנָה וַיָּמֹת',
    transliteration:
      'vaYehi kol-yemey Lemekh sheva veShivim shanah uSheva meot shanah vaYamot',
    englishLiteral:
      'And-was all- days-of Powerful (Lamech), seven and-seventy year and-seven hundreds year, and-died.',
    englishNatural:
      'And all the days of Powerful (Lamech), were seven and seventy years and seven hundred years, and he died.',
    kjv: 'And all the days of Lamech were seven hundred seventy and seven years: and he died.',
    lastReviewed: { name: 'Matt Gross', date: '2025-12-06' },
  },
};
