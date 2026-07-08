import { Verse } from '@/types';

export const exodus_20_6: Verse = {
  meta: {
    book: 'Exodus',
    chapter: 20,
    verse: 6,
  },
  words: [
    {
      hebrew: 'וְעֹ֥שֶׂה',
      transliteration: 'veOseh',
      englishLiteral: 'And-making',
      englishNatural: 'And making',
      root: 'asah',
      prefixes: ['ve'],
      order: 1,
      morphology: {
        type: 'verb',
        gender: 'masculine',
        number: 'singular',
        tense: 'participle',
        stem: 'qal',
      },
    },
    {
      hebrew: 'חֶ֖סֶד',
      transliteration: 'chesed',
      englishLiteral: 'steadfast_love',
      englishNatural: 'steadfast-love',
      root: 'chesed',
      order: 2,
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'singular',
      },
    },
    {
      hebrew: 'לַאֲלָפִ֑ים',
      transliteration: 'laAlafim',
      englishLiteral: 'to-thousands',
      englishNatural: 'to thousands',
      root: 'elef',
      prefixes: ['la'],
      suffixes: ['im'],
      order: 3,
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'plural',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'לְאֹהֲבַ֖י',
      transliteration: 'leOhavai',
      englishLiteral: 'to-loving-me',
      englishNatural: 'to ones loving me',
      root: 'ahav',
      prefixes: ['le'],
      suffixes: ['ai'],
      order: 4,
      morphology: {
        type: 'verb',
        number: 'plural',
        tense: 'participle',
        stem: 'qal',
      },
      lineBreaksBefore: {
        english: 1,
      }
    },
    {
      hebrew: 'וּלְשֹׁמְרֵ֥י',
      transliteration: 'uleShomrei',
      englishLiteral: 'and-to-keeping',
      englishNatural: 'and to ones keeping',
      root: 'shamar',
      prefixes: ['u', 'le'],
      order: 5,
      morphology: {
        type: 'verb',
        number: 'plural',
        tense: 'participle',
        stem: 'qal',
        state: 'construct',
      },
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      hebrew: 'מִצְוֺתָֽי׃',
      transliteration: 'mitsvotai',
      englishLiteral: 'commandments-my',
      englishNatural: 'my commandments',
      root: 'mitsvah',
      suffixes: ['ai'],
      order: 6,
      morphology: {
        type: 'noun',
        gender: 'feminine',
        number: 'plural',
      },
      grammarSuffix: {
        englishLiteral: '.',
        englishNatural: '.',
      },
      lineBreaksAfter: 1,
    },
  ],
  expectedTranslations: {
    hebrew: 'וְעֹ֥שֶׂה חֶ֖סֶד לַאֲלָפִ֑ים לְאֹהֲבַ֖י וּלְשֹׁמְרֵ֥י מִצְוֺתָֽי׃',
    transliteration: 'veOseh chesed laAlafim leOhavai uleShomrei mitsvotai',
    englishLiteral:
      'And-making steadfast_love to-thousands, to-loving-me and-to-keeping commandments-my.',
    englishNatural:
      'And making steadfast-love to thousands, to ones loving me and to ones keeping my commandments.',
    kjv: 'And shewing mercy unto thousands of them that love me, and keep my commandments.',
    lastReviewed: { name: 'Matt Gross', date: '2026-07-08' },
},
};
