import { Verse } from '@/types';

export const genesis_5_32: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 5,
    verse: 32,
  },
  words: [
    {
      hebrew: 'וְנֹחַ',
      transliteration: 'veNoach',
      englishLiteral: 'And-Rest (Noah)',
      englishNatural: 'And Rest (Noah)',
      root: 'nuach',
      prefixes: ['ve'],
      order: 1,
      morphology: {
        type: 'noun',
        state: 'absolute',
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
      englishLiteral: 'son-of',
      englishNatural: 'a son of',
      root: 'ben',
      order: 2,
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'singular',
        state: 'construct',
      },
    },
    {
      hebrew: 'חֲמֵשׁ',
      transliteration: 'chamesh',
      englishLiteral: 'five',
      englishNatural: 'five',
      root: 'chamesh',
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
      order: 5,
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
      englishLiteral: 'and-he-birthed',
      englishNatural: 'birthed',
      root: 'yalad',
      prefixes: ['va'],
      order: {
        hebrew: 6,
        english: 7,
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
      hebrew: 'נֹחַ',
      transliteration: 'Noach',
      englishLiteral: 'Rest (Noah)',
      englishNatural: 'and Rest (Noah)',
      root: 'nuach',
      order: {
        hebrew: 7,
        english: 6,
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
      hebrew: 'אֶת־',
      transliteration: 'et-',
      englishLiteral: '↳',
      root: 'et',
      order: 8,
    },
    {
      hebrew: 'שֵׁם',
      transliteration: 'Shem',
      englishLiteral: 'Name (Shem)',
      englishNatural: 'Name (Shem)',
      root: 'shem',
      order: 9,
      morphology: {
        type: 'noun',
        state: 'absolute',
      },
      grammarSuffix: {
        englishNatural: ',',
      },
    },
    {
      hebrew: 'אֶת־',
      transliteration: 'et-',
      englishLiteral: '↳',
      root: 'et',
      order: 10,
    },
    {
      hebrew: 'חָם',
      transliteration: 'Cham',
      englishLiteral: 'Hot (Ham)',
      englishNatural: 'Hot (Ham)',
      root: 'cham',
      order: 11,
      morphology: {
        type: 'noun',
        state: 'absolute',
      },
      grammarSuffix: {
        englishNatural: ',',
      },
    },
    {
      hebrew: 'וְאֶת־',
      transliteration: 'veEt-',
      englishLiteral: 'and-↳',
      englishNatural: 'and',
      root: 'et',
      prefixes: ['ve'],
      order: 12,
    },
    {
      hebrew: 'יָפֶת',
      transliteration: 'Yafet',
      englishLiteral: 'Spacious (Japheth)',
      englishNatural: 'Spacious (Japheth)',
      root: 'yafet',
      order: 13,
      morphology: {
        type: 'noun',
        state: 'absolute',
      },
      grammarSuffix: {
        englishLiteral: '.',
        englishNatural: '.',
      },
      lineBreaksAfter: {
        hebrew: 1,
      },
    },
  ],
  expectedTranslations: {
    hebrew:
      'וְנֹחַ בֶּן־חֲמֵשׁ מֵאוֹת שָׁנָה וַיּוֹלֶד נֹחַ אֶת־שֵׁם אֶת־חָם וְאֶת־יָפֶת',
    transliteration:
      'veNoach ben-chamesh meot shanah vaYoled Noach et-Shem et-Cham veEt-Yafet',
    englishLiteral:
      'And-Rest (Noah), son-of five hundreds year, and-he-birthed Rest (Noah) ↳ Name (Shem) ↳ Hot (Ham) and-↳ Spacious (Japheth).',
    englishNatural:
      'And Rest (Noah), a son of five hundred years, and Rest (Noah) birthed Name (Shem), Hot (Ham), and Spacious (Japheth).',
    kjv: 'And Noah was five hundred years old: and Noah begat Shem, Ham, and Japheth.',
    lastReviewed: { name: 'Matt Gross', date: '2025-12-06' },
  },
};
