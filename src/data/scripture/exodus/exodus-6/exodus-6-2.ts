import { Verse } from '@/types';

export const exodus_6_2: Verse = {
  meta: {
    book: 'Exodus',
    chapter: 6,
    verse: 2,
  },
  words: [
    {
      hebrew: 'וַיְדַבֵּר',
      transliteration: 'vayDaber',
      englishLiteral: 'And-spoke',
      englishNatural: 'spoke',
      root: 'davar',
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
        stem: 'piel',
        type: 'verb',
      },
      lineBreaksBefore: {
        hebrew: 1,
      },
    },
    {
      hebrew: 'אֱלֹהִים',
      transliteration: 'Elohim',
      englishLiteral: 'Gods',
      englishNatural: 'And God',
      root: 'eloah',
      suffixes: ['im'],
      order: {
        hebrew: 2,
        english: 1,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun',
      },
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      hebrew: 'אֶל־',
      transliteration: 'el-',
      englishLiteral: 'to-',
      englishNatural: 'to',
      root: 'el',
      order: 3,
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'מֹשֶׁה',
      transliteration: 'Moshe',
      englishLiteral: 'Drawn_Out (Moses)',
      englishNatural: 'Drawn-Out (Moses)',
      root: 'moshe',
      order: 4,
      morphology: {
        type: 'noun',
      },
    },
    {
      hebrew: 'וַיֹּאמֶר',
      transliteration: 'vaYomer',
      englishLiteral: 'and-said',
      englishNatural: 'and said',
      root: 'amar',
      prefixes: ['va'],
      order: 5,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'imperfect',
        stem: 'qal',
        type: 'verb',
      },
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      hebrew: 'אֵלָיו',
      transliteration: 'elav',
      englishLiteral: 'to-him',
      englishNatural: 'to him',
      root: 'el',
      suffixes: ['av'],
      order: 6,
      morphology: {
        type: 'preposition',
      },
      grammarSuffix: {
        englishNatural: ',',
      },
    },
    {
      hebrew: 'אֲנִי',
      transliteration: 'ani',
      englishLiteral: 'I',
      englishNatural: 'I',
      root: 'ani',
      order: 7,
      morphology: {
        person: '1st',
        number: 'singular',
        type: 'pronoun',
      },
      grammarPrefix: {
        englishLiteral: '"',
        englishNatural: '"',
      },
      grammarSuffix: {
        englishNatural: ',',
      },
    },
    {
      hebrew: 'יְהוָה',
      transliteration: 'YHWH',
      englishLiteral: 'He_Who_Is (YHWH)',
      englishNatural: 'He-Who-Is (YHWH)',
      root: 'yhwh',
      order: 8,
      morphology: {
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
    hebrew: 'וַיְדַבֵּר אֱלֹהִים אֶל־מֹשֶׁה וַיֹּאמֶר אֵלָיו אֲנִי יְהוָה',
    transliteration: 'vayDaber Elohim el-Moshe vaYomer elav ani YHWH',
    englishLiteral:
      'And-spoke Gods to- Drawn_Out (Moses) and-said to-him "I He_Who_Is (YHWH).',
    englishNatural:
      'And God spoke to Drawn-Out (Moses) and said to him, "I, He-Who-Is (YHWH).',
    kjv: 'And God spake unto Moses, and said unto him, I am the LORD:',
    lastReviewed: { name: 'Matt Gross', date: '2026-01-18' },
},
};
