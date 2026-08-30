import { Verse } from '@/types';

export const genesis_9_21: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 9,
    verse: 21,
  },
  words: [
    {
      hebrew: 'וַיֵּשְׁתְּ',
      transliteration: 'vaYisht',
      englishLiteral: 'and-he-drank',
      englishNatural: 'and he drank',
      root: 'shatah',
      prefixes: ['va'],
      order: 1,
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
      hebrew: 'מִן־',
      transliteration: 'min-',
      englishLiteral: 'from-',
      englishNatural: 'from',
      root: 'min',
      order: 2,
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'הַיַּיִן',
      transliteration: 'haYayin',
      englishLiteral: 'the-wine',
      englishNatural: 'the wine',
      root: 'yayin',
      prefixes: ['ha'],
      order: 3,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'וַיִּשְׁכָּר',
      transliteration: 'vaYishkar',
      englishLiteral: 'and-he-was-drunk',
      englishNatural: 'and was drunk',
      root: 'shakhar',
      prefixes: ['va'],
      order: 4,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'imperfect',
        stem: 'qal',
        type: 'verb',
      },
      grammarSuffix: {
        englishLiteral: ';',
        englishNatural: ';',
      },
      lineBreaksAfter: {
        hebrew: 1,
      },
    },
    {
      hebrew: 'וַיִּתְגַּל',
      transliteration: 'vaYitgal',
      englishLiteral: 'and-he-was-revealed',
      englishNatural: 'and was revealed',
      root: 'galah',
      prefixes: ['va'],
      order: 5,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'imperfect',
        stem: 'hithpael',
        type: 'verb',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
      lineBreaksBefore: {
        hebrew: 1,
      },
    },
    {
      hebrew: 'בְּתוֹךְ',
      transliteration: 'beTokh',
      englishLiteral: 'in-midst-of',
      englishNatural: 'in the midst of',
      root: 'tokh',
      prefixes: ['be'],
      order: 6,
      morphology: {
        type: 'noun',
      },
    },
    {
      hebrew: 'אָהֳלֹה',
      transliteration: 'ahaloh',
      englishLiteral: 'tent-his',
      englishNatural: 'his tent',
      root: 'ohel',
      suffixes: ['o'],
      order: 7,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: '.',
        englishNatural: '.',
      },
      lineBreaksAfter: 1,
    },
  ],
  expectedTranslations: {
    hebrew: 'וַיֵּשְׁתְּ מִן־הַיַּיִן וַיִּשְׁכָּר וַיִּתְגַּל בְּתוֹךְ אָהֳלֹה',
    transliteration: 'vaYisht min-haYayin vaYishkar vaYitgal beTokh ahaloh',
    englishLiteral:
      'and-he-drank from- the-wine, and-he-was-drunk; and-he-was-revealed, in-midst-of tent-his.',
    englishNatural:
      'and he drank from the wine, and was drunk; and was revealed, in the midst of his tent.',
    kjv: 'And he drank of the wine, and was drunken; and he was uncovered within his tent.',
    lastReviewed: { name: 'Matt Gross', date: '2026-07-18' },
},
};
