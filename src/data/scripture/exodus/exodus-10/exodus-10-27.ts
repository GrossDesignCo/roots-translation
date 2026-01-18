import { Verse } from '@/types';

export const exodus_10_27: Verse = {
  meta: {
    book: 'Exodus',
    chapter: 10,
    verse: 27,
  },
  words: [
    {
      hebrew: 'וַיְחַזֵּק',
      transliteration: 'vaYchazzeq',
      englishLiteral: 'And-intensified',
      englishNatural: 'intensified',
      root: 'chazaq',
      prefixes: ['ve'],
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
      grammarSuffix: {
        englishNatural: ',',
      },
    },
    {
      hebrew: 'יְהוָה',
      transliteration: 'YHWH',
      englishLiteral: 'He_Who_Is (YHWH)',
      englishNatural: 'And He-Who-Is (YHWH)',
      root: 'yhwh',
      order: {
        hebrew: 2,
        english: 1,
      },
      morphology: {
        type: 'noun',
      },
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      hebrew: 'אֶת־',
      transliteration: 'et-',
      englishLiteral: '↳',
      englishNatural: '',
      root: 'et',
      order: 3,
      morphology: {
        type: 'particle',
      },
    },
    {
      hebrew: 'לֵב',
      transliteration: 'lev',
      englishLiteral: 'heart-of',
      englishNatural: 'the heart of',
      root: 'lev',
      order: 4,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        state: 'construct',
        type: 'noun',
      },
    },
    {
      hebrew: 'פַּרְעֹה',
      transliteration: 'Paroh',
      englishLiteral: 'Pharaoh',
      englishNatural: 'Pharaoh',
      root: 'paroh',
      order: 5,
      morphology: {
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ';',
        englishNatural: ',',
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
        hebrew: 6,
        english: 8,
      },
      morphology: {
        type: 'adverb',
      },
      lineBreaksBefore: {
        hebrew: 1,
      },
    },
    {
      hebrew: 'אָבָה',
      transliteration: 'avah',
      englishLiteral: 'was_willing',
      englishNatural: 'and he was willing',
      root: 'avah',
      order: {
        hebrew: 7,
        english: 6,
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
      hebrew: 'לְשַׁלְּחָם',
      transliteration: 'leshalcham',
      englishLiteral: 'to-send_out-them',
      englishNatural: 'to send-out them',
      root: 'shalach',
      prefixes: ['la'],
      suffixes: ['am'],
      order: {
        hebrew: 8,
        english: 9,
      },
      morphology: {
        tense: 'infinitive_construct',
        stem: 'piel',
        type: 'verb',
      },
      grammarSuffix: {
        englishLiteral: '.',
        englishNatural: '.',
      },
      lineBreaksAfter: 1,
    },
  ],
  expectedTranslations: {
    hebrew: 'וַיְחַזֵּק יְהוָה אֶת־לֵב פַּרְעֹה וְלֹא אָבָה לְשַׁלְּחָם',
    transliteration: 'vaYchazzeq YHWH et-lev Paroh veLo avah leshalcham',
    englishLiteral:
      'And-intensified He_Who_Is (YHWH) ↳ heart-of Pharaoh; and-not was_willing to-send_out-them.',
    englishNatural:
      'And He-Who-Is (YHWH) intensified, the heart of Pharaoh, and he was willing not to send-out them.',
    kjv: "But the LORD hardened Pharaoh's heart, and he would not let them go.",
    lastReviewed: { name: 'Matt Gross', date: '2026-01-18' },
},
};
