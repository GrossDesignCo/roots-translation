import { Verse } from '@/types';

export const exodus_7_13: Verse = {
  meta: {
    book: 'Exodus',
    chapter: 7,
    verse: 13,
  },
  words: [
    {
      hebrew: 'וַיֶּחֱזַק',
      transliteration: 'vaYechezaq',
      englishLiteral: 'And-intensified',
      englishNatural: 'intensified',
      root: 'chazaq',
      prefixes: ['ve'],
      order: {
        hebrew: 1,
        english: 3,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'imperfect',
        stem: 'qal',
        type: 'verb',
      },
      grammarSuffix: {
        englishNatural: ',',
      },
      lineBreaksBefore: {
        hebrew: 1,
      },
    },
    {
      hebrew: 'לֵב',
      transliteration: 'lev',
      englishLiteral: 'heart-of',
      englishNatural: 'And the heart of',
      root: 'lev',
      order: {
        hebrew: 2,
        english: 1,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        state: 'construct',
        type: 'noun',
      },
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      hebrew: 'פַּרְעֹה',
      transliteration: 'Paroh',
      englishLiteral: 'Pharaoh',
      englishNatural: 'Pharaoh',
      root: 'paroh',
      order: {
        hebrew: 3,
        english: 2,
      },
      morphology: {
        type: 'noun',
      },
    },
    {
      hebrew: 'וְלֹא',
      transliteration: 'veLo',
      englishLiteral: 'and-not',
      englishNatural: 'not',
      root: 'lo',
      prefixes: ['ve'],
      order: {
        hebrew: 4,
        english: 5,
      },
      morphology: {
        type: 'adverb',
      },
      lineBreaksBefore: {
        hebrew: 1,
      },
    },
    {
      hebrew: 'שָׁמַע',
      transliteration: 'shama',
      englishLiteral: 'heard',
      englishNatural: 'and he heard',
      root: 'shama',
      order: {
        hebrew: 5,
        english: 4,
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
        english: 1,
      },
    },
    {
      hebrew: 'אֲלֵהֶם',
      transliteration: 'alehem',
      englishLiteral: 'to-them',
      englishNatural: 'to them',
      root: 'alehem',
      order: 6,
      morphology: {
        type: 'preposition',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ';',
      },
    },
    {
      hebrew: 'כַּאֲשֶׁר',
      transliteration: 'kaAsher',
      englishLiteral: 'as-which',
      englishNatural: 'as which',
      root: 'kaasher',
      order: 7,
      morphology: {
        type: 'conjunction',
      },
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      hebrew: 'דִּבֶּר',
      transliteration: 'diber',
      englishLiteral: 'spoke',
      englishNatural: 'had spoken',
      root: 'dabar',
      order: {
        hebrew: 8,
        english: 9,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'perfect',
        stem: 'piel',
        type: 'verb',
      },
      grammarSuffix: {
        englishNatural: '.',
      },
      lineBreaksAfter: {
        english: 1,
      },
    },
    {
      hebrew: 'יְהוָה',
      transliteration: 'YHWH',
      englishLiteral: 'He_Who_Is (YHWH)',
      englishNatural: 'He-Who-Is (YHWH)',
      root: 'yhwh',
      order: {
        hebrew: 9,
        english: 8,
      },
      morphology: {
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: '.',
      },
      lineBreaksAfter: {
        hebrew: 1,
      },
    },
  ],
  expectedTranslations: {
    hebrew:
      'וַיֶּחֱזַק לֵב פַּרְעֹה וְלֹא שָׁמַע אֲלֵהֶם כַּאֲשֶׁר דִּבֶּר יְהוָה',
    transliteration:
      'vaYechezaq lev Paroh veLo shama alehem kaAsher diber YHWH',
    englishLiteral:
      'And-intensified heart-of Pharaoh and-not heard to-them, as-which spoke He_Who_Is (YHWH).',
    englishNatural:
      'And the heart of Pharaoh intensified, and he heard not to them; as which He-Who-Is (YHWH) had spoken.',
    kjv: "And he hardened Pharaoh's heart, that he hearkened not unto them; as the LORD had said.",
    lastReviewed: { name: 'Matt Gross', date: '2026-01-18' },
},
};
