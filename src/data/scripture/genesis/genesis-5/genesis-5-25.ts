import { type Verse } from '@/types';

export const genesis_5_25: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 5,
    verse: 25,
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
      hebrew: 'מְתוּשָׁלַח',
      transliteration: 'Metushalach',
      englishLiteral: 'Man-of-the-Dart (Methuselah)',
      englishNatural: 'And Man-of-the-Dart (Methuselah)',
      root: 'Metushalach',
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
      hebrew: 'שֶׁבַע',
      transliteration: 'sheva',
      englishLiteral: 'seven',
      englishNatural: 'seven',
      root: 'sheva',
      order: 3,
      morphology: {
        type: 'numeral',
        gender: 'feminine',
        number: 'singular',
      },
    },
    {
      hebrew: 'וּשְׁמֹנִים',
      transliteration: 'uShmonim',
      englishLiteral: 'and-eighty',
      englishNatural: 'and eighty',
      root: 'shmonim',
      prefixes: ['u'],
      order: 4,
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
      order: 5,
      morphology: {
        type: 'noun',
        gender: 'feminine',
        number: 'singular',
      },
    },
    {
      hebrew: 'וּמְאַת',
      transliteration: 'uMeat',
      englishLiteral: 'and-hundred',
      englishNatural: 'and a hundred',
      root: 'meah_hundred',
      prefixes: ['u'],
      order: 6,
      morphology: {
        type: 'numeral',
        gender: 'feminine',
        number: 'singular',
        state: 'construct',
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
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'וַיּוֹלֶד',
      transliteration: 'vaYoled',
      englishLiteral: 'and-birthed',
      englishNatural: 'and birthed',
      root: 'yalad',
      prefixes: ['va'],
      order: 8,
      morphology: {
        type: 'verb',
        person: '3rd',
        gender: 'masculine',
        number: 'singular',
        stem: 'hiphil',
        tense: 'imperfect',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'אֶת־',
      transliteration: 'et-',
      englishLiteral: '↳',
      englishNatural: '',
      root: 'et',
      order: 9,
    },
    {
      hebrew: 'לָמֶךְ',
      transliteration: 'Lemekh',
      englishLiteral: 'Powerful (Lamech)',
      englishNatural: 'Powerful (Lamech)',
      root: 'Lemekh',
      order: 10,
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
    hebrew:
      'וַיְחִי מְתוּשָׁלַח שֶׁבַע וּשְׁמֹנִים שָׁנָה וּמְאַת שָׁנָה וַיּוֹלֶד אֶת־לָמֶךְ',
    transliteration:
      'vaYechi Metushalach sheva uShmonim shanah uMeat shanah vaYoled et-Lemekh',
    englishLiteral:
      'and-lived Man-of-the-Dart (Methuselah) seven and-eighty year and-hundred year, and-birthed ↳ Powerful (Lamech).',
    englishNatural:
      'And Man-of-the-Dart (Methuselah) lived seven and eighty years and a hundred years, and birthed Powerful (Lamech).',
    kjv: 'And Methuselah lived an hundred eighty and seven years, and begat Lamech.',
    lastReviewed: { name: 'Matt Gross', date: '2025-12-06' },
  },
};
