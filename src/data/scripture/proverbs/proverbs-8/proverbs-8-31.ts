import { Verse } from '@/types';

export const proverbs_8_31: Verse = {
  meta: {
    book: 'Proverbs',
    chapter: 8,
    verse: 31,
  },
  words: [
    {
      hebrew: 'מְשַׂחֶקֶת',
      transliteration: 'mesacheqet',
      englishLiteral: 'laughing',
      englishNatural: 'laughing',
      root: 'sachaq',
      order: 1,
      morphology: {
        gender: 'feminine',
        number: 'singular',
        tense: 'participle',
        stem: 'piel',
        type: 'verb',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'בְּתֵבֵל',
      transliteration: 'beTevel',
      englishLiteral: 'in-world-of',
      englishNatural: 'in the world of',
      root: 'tevel',
      prefixes: ['be'],
      order: 2,
      morphology: {
        gender: 'feminine',
        number: 'singular',
        state: 'construct',
        type: 'noun',
      },
    },
    {
      hebrew: 'אַרְצוֹ',
      transliteration: 'artso',
      englishLiteral: 'his-land',
      englishNatural: 'his land',
      root: 'eretz',
      suffixes: ['o'],
      order: 3,
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'וְשַׁעֲשֻׁעַי',
      transliteration: 'veShaashuai',
      englishLiteral: 'and-my-darlings',
      englishNatural: 'and my darlings',
      root: 'shaashua',
      prefixes: ['ve'],
      suffixes: ['i'],
      order: 4,
      morphology: {
        gender: 'masculine',
        number: 'plural',
        person: '1st',
        type: 'noun',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'אֶת־',
      transliteration: 'et-',
      englishLiteral: '↳',
      englishNatural: '',
      root: 'et',
      order: 5,
      morphology: {
        type: 'particle',
      },
    },
    {
      hebrew: 'בְּנֵי',
      transliteration: 'benei',
      englishLiteral: 'sons-of',
      englishNatural: 'the sons of',
      root: 'ben',
      order: 6,
      morphology: {
        gender: 'masculine',
        number: 'plural',
        state: 'construct',
        type: 'noun',
      },
    },
    {
      hebrew: 'אָדָם',
      transliteration: 'adam',
      englishLiteral: 'Earthling (Adam)',
      englishNatural: 'Earthling (Adam)',
      root: 'adam',
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
    },
  ],
  expectedTranslations: {
    hebrew: 'מְשַׂחֶקֶת בְּתֵבֵל אַרְצוֹ וְשַׁעֲשֻׁעַי אֶת־בְּנֵי אָדָם',
    transliteration: 'mesacheqet beTevel artso veShaashuai et-benei adam',
    englishLiteral:
      'laughing in-world-of his-land, and-my-darlings ↳ sons-of Earthling (Adam).',
    englishNatural:
      'laughing in the world of his land, and my darlings the sons of Earthling (Adam).',
    kjv: 'Rejoicing in the habitable part of his earth; and my delights were with the sons of men.',
    lastReviewed: { name: 'Matt Gross', date: '2026-02-22' },
},
};
