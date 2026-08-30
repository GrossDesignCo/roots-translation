import { Verse } from '@/types';

export const genesis_5_28: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 5,
    verse: 28,
  },
  words: [
    {
      hebrew: 'וַיְחִי',
      transliteration: 'vaYechi',
      englishLiteral: 'And-lived',
      englishNatural: 'lived',
      root: 'chayah',
      prefixes: ['va'],
      order: {
        hebrew: 1,
        english: 2,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'perfect',
        stem: 'qal',
        type: 'verb',
      },
      lineBreaksBefore: {
        hebrew: 1,
      },
    },
    {
      hebrew: 'לֶמֶךְ',
      transliteration: 'Lemekh',
      englishLiteral: 'Lamech',
      englishNatural: 'And Lamech',
      root: 'Lemekh',
      order: {
        hebrew: 2,
        english: 1,
      },
      morphology: {
        type: 'noun',
        state: 'absolute',
      },
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      hebrew: 'שְׁתַּיִם',
      transliteration: 'shtayim',
      englishLiteral: 'two',
      englishNatural: 'two',
      root: 'shnayim',
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
        state: 'absolute',
      },
    },
    {
      hebrew: 'וּמְאַת',
      transliteration: 'uMeat',
      englishLiteral: 'and-hundred',
      englishNatural: 'and a hundred',
      root: 'meah_hundred',
      prefixes: ['u', 'me'],
      order: 6,
      morphology: {
        type: 'numeral',
        gender: 'feminine',
        number: 'singular',
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
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'imperfect',
        stem: 'qal',
        type: 'verb',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'בֵּן',
      transliteration: 'ben',
      englishLiteral: 'son',
      englishNatural: 'a son',
      root: 'ben',
      order: 9,
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'singular',
        state: 'absolute',
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
      'וַיְחִי לֶמֶךְ שְׁתַּיִם וּשְׁמֹנִים שָׁנָה וּמְאַת שָׁנָה וַיּוֹלֶד בֵּן',
    transliteration:
      'vaYechi Lemekh shtayim uShmonim shanah uMeat shanah vaYoled ben',
    englishLiteral:
      'And-lived Lamech two and-eighty year and-hundred year, and-birthed son.',
    englishNatural:
      'And Lamech lived two and eighty years and a hundred years, and birthed a son.',
    kjv: 'And Lamech lived an hundred eighty and two years, and begat a son:',
    lastReviewed: { name: 'Matt Gross', date: '2025-12-06' },
  },
};
