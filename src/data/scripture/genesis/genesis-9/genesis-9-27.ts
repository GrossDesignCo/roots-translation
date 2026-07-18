import { Verse } from '@/types';

export const genesis_9_27: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 9,
    verse: 27,
  },
  words: [
    {
      hebrew: 'יַפְתְּ',
      transliteration: 'yapht',
      englishLiteral: 'enlarge',
      englishNatural: 'enlarge',
      root: 'patah',
      order: {
        hebrew: 1,
        english: 2,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '2nd',
        tense: 'imperative',
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
      englishNatural: 'God',
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
      grammarSuffix: {
        englishNatural: ',',
      },
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      hebrew: 'לְיֶפֶת',
      transliteration: 'leYafet',
      englishLiteral: 'to-Spacious (Japheth)',
      englishNatural: 'to Spacious (Japheth)',
      root: 'yafet',
      prefixes: ['le'],
      order: 3,
      morphology: {
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'וְיִשְׁכֹּן',
      transliteration: 'veYishkon',
      englishLiteral: 'and-he-will-dwell',
      englishNatural: 'and he will dwell',
      root: 'shakhan',
      prefixes: ['ve'],
      order: 4,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'imperfect',
        stem: 'qal',
        type: 'verb',
      },
    },
    {
      hebrew: 'בְּאָהֳלֵי־',
      transliteration: 'beAhalei-',
      englishLiteral: 'in-tents-of-',
      englishNatural: 'in the tents of',
      root: 'ohel',
      prefixes: ['be'],
      suffixes: ['ey'],
      order: 5,
      morphology: {
        gender: 'masculine',
        number: 'plural',
        state: 'construct',
        type: 'noun',
      },
    },
    {
      hebrew: 'שֵׁם',
      transliteration: 'shem',
      englishLiteral: 'Name (Shem)',
      englishNatural: 'Name (Shem)',
      root: 'shem',
      order: 6,
      morphology: {
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ';',
        englishNatural: ';',
      },
    },
    {
      hebrew: 'וִיהִי',
      transliteration: 'vihi',
      englishLiteral: 'and-let-be',
      englishNatural: 'and let it be',
      root: 'hayah',
      prefixes: ['ve'],
      order: 7,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'jussive',
        stem: 'qal',
        type: 'verb',
      },
      grammarSuffix: {
        englishNatural: ',',
      },
    },
    {
      hebrew: 'כְנַעַן',
      transliteration: 'Kenaan',
      englishLiteral: 'Low (Canaan)',
      englishNatural: 'Low (Canaan)',
      root: 'kenaan',
      order: 8,
      morphology: {
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'עֶבֶד',
      transliteration: 'eved',
      englishLiteral: 'servant',
      englishNatural: 'servant',
      root: 'eved',
      order: 9,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      hebrew: 'לָמוֹ',
      transliteration: 'lamo',
      englishLiteral: 'to-them',
      englishNatural: 'to them',
      root: 'lamed',
      suffixes: ['mo'],
      order: 10,
      morphology: {
        gender: 'masculine',
        number: 'plural',
        person: '3rd',
        type: 'preposition',
      },
      grammarSuffix: {
        englishLiteral: '."',
        englishNatural: '."',
      },
      lineBreaksAfter: 1,
    },
  ],
  expectedTranslations: {
    hebrew:
      'יַפְתְּ אֱלֹהִים לְיֶפֶת וְיִשְׁכֹּן בְּאָהֳלֵי־שֵׁם וִיהִי כְנַעַן עֶבֶד לָמוֹ',
    transliteration:
      'yapht Elohim leYafet veYishkon beAhalei-shem vihi Kenaan eved lamo',
    englishLiteral:
      'enlarge Gods to-Spacious (Japheth), and-he-will-dwell in-tents-of- Name (Shem); and-let-be Low (Canaan), servant to-them."',
    englishNatural:
      'God, enlarge to Spacious (Japheth), and he will dwell in the tents of Name (Shem); and let it be, Low (Canaan), servant to them."',
    kjv: 'God enlarge Japheth, and he shall dwell in the tents of Shem; and let Canaan be their servant.',
    lastReviewed: { name: 'Matt Gross', date: '2026-07-18' },
},
};
