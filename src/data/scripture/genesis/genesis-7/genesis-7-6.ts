import { Verse } from '@/types';

export const genesis_7_6: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 7,
    verse: 6,
  },
  words: [
    {
      hebrew: 'וְנֹחַ',
      transliteration: 'veNoach',
      englishLiteral: 'And-Rest (Noah)',
      englishNatural: 'And Rest (Noah)',
      root: 'noach',
      prefixes: ['ve'],
      order: 1,
      morphology: {
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'בֶּן־',
      transliteration: 'ben-',
      englishLiteral: 'son-of-',
      englishNatural: 'a son of',
      root: 'ben',
      order: 2,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        state: 'construct',
        type: 'noun',
      },
    },
    {
      hebrew: 'שֵׁשׁ',
      transliteration: 'shesh',
      englishLiteral: 'six',
      englishNatural: 'six',
      root: 'shesh',
      order: 3,
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
      order: 4,
      morphology: {
        gender: 'feminine',
        number: 'plural',
        type: 'numeral',
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
        gender: 'feminine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
      lineBreaksAfter: 1,
    },
    {
      hebrew: 'וְהַמַּבּוּל',
      transliteration: 'veHaMabbul',
      englishLiteral: 'and-the-flood',
      englishNatural: 'and the flood',
      root: 'mabbul',
      prefixes: ['ve', 'ha'],
      order: 6,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      hebrew: 'הָיָה',
      transliteration: 'hayah',
      englishLiteral: 'it-was',
      englishNatural: 'was',
      root: 'hayah',
      order: 7,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'perfect',
        stem: 'qal',
        type: 'verb',
      },
    },
    {
      hebrew: 'מַיִם',
      transliteration: 'mayim',
      englishLiteral: 'waters',
      englishNatural: 'waters',
      root: 'mayim',
      order: 8,
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun',
      },
    },
    {
      hebrew: 'עַל־',
      transliteration: 'al-',
      englishLiteral: 'over-',
      englishNatural: 'over',
      root: 'al',
      order: 9,
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'הָאָרֶץ',
      transliteration: 'haAretz',
      englishLiteral: 'the-land',
      englishNatural: 'the land',
      root: 'eretz',
      prefixes: ['ha'],
      order: 10,
      morphology: {
        gender: 'feminine',
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
    hebrew:
      'וְנֹחַ בֶּן־שֵׁשׁ מֵאוֹת שָׁנָה וְהַמַּבּוּל הָיָה מַיִם עַל־הָאָרֶץ',
    transliteration:
      'veNoach ben-shesh meot shanah veHaMabbul hayah mayim al-haAretz',
    englishLiteral:
      'And-Rest (Noah), son-of- six hundreds year, and-the-flood it-was waters over- the-land.',
    englishNatural:
      'And Rest (Noah), a son of six hundred years, and the flood was waters over the land.',
    kjv: 'And Noah was six hundred years old when the flood of waters was upon the earth.',
    lastReviewed: { name: 'Matt Gross', date: '2025-12-06' },
  },
};
