import { Verse } from '@/types';

export const psalms_8_7: Verse = {
  meta: {
    book: 'Psalms',
    chapter: 8,
    verse: 7,
  },
  words: [
    {
      hebrew: 'צֹנֶ֣ה',
      transliteration: 'tsoneh',
      englishLiteral: 'flock',
      englishNatural: 'Flock',
      root: 'tzon',
      order: 1,
      morphology: {
        type: 'noun',
        gender: 'feminine',
        number: 'singular',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'וַאֲלָפִ֣ים',
      transliteration: 'vaAlafim',
      englishLiteral: 'and-oxen',
      englishNatural: 'and oxen',
      root: 'elef_ox',
      prefixes: ['va'],
      suffixes: ['im'],
      order: 2,
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'plural',
      },
    },
    {
      hebrew: 'כֻּלָּ֑ם',
      transliteration: 'kulam',
      englishLiteral: 'all-of-them',
      englishNatural: 'all of them',
      root: 'kol',
      suffixes: ['am'],
      order: 3,
      morphology: {
        type: 'adjective',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
      lineBreaksAfter: 1,
    },
    {
      hebrew: 'וְגַ֥ם',
      transliteration: 'veGam',
      englishLiteral: 'and-also',
      englishNatural: 'and also',
      root: 'gam',
      prefixes: ['ve'],
      order: 4,
      morphology: {
        type: 'adverb',
      },
    },
    {
      hebrew: 'בַּהֲמ֥וֹת',
      transliteration: 'bahemot',
      englishLiteral: 'beasts-of',
      englishNatural: 'the beasts of',
      root: 'behemah',
      suffixes: ['ot'],
      order: 5,
      morphology: {
        type: 'noun',
        gender: 'feminine',
        number: 'plural',
        state: 'construct',
      },
    },
    {
      hebrew: 'שָׂדָֽי',
      transliteration: 'sadai',
      englishLiteral: 'field',
      englishNatural: 'the field',
      root: 'sadeh',
      order: 6,
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
    hebrew: 'צֹנֶ֣ה וַאֲלָפִ֣ים כֻּלָּ֑ם וְגַ֥ם בַּהֲמ֥וֹת שָׂדָֽי',
    transliteration: 'tsoneh vaAlafim kulam veGam bahemot sadai',
    englishLiteral:
      'flock and-oxen all-of-them, and-also beasts-of field.',
    englishNatural:
      'Flock and oxen all of them, and also the beasts of the field.',
    kjv: 'All sheep and oxen, yea, and the beasts of the field;',
    lastReviewed: { name: 'Matt Gross', date: '2026-03-31' },
},
};
