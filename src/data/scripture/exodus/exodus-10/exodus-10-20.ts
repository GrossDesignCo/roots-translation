import { Verse } from '@/types';

export const exodus_10_20: Verse = {
  meta: {
    book: 'Exodus',
    chapter: 10,
    verse: 20,
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
        english: 7,
      },
      morphology: {
        type: 'adverb',
      },
      lineBreaksBefore: {
        hebrew: 1,
      },
    },
    {
      hebrew: 'שִׁלַּח',
      transliteration: 'shillach',
      englishLiteral: 'sent_out',
      englishNatural: 'and he sent-out',
      root: 'shalach',
      order: {
        hebrew: 7,
        english: 6,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'perfect',
        stem: 'piel',
        type: 'verb',
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
      order: 8,
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
      prefixes: ['be'],
      suffixes: ['ei'],
      order: 9,
      morphology: {
        gender: 'masculine',
        number: 'plural',
        state: 'construct',
        type: 'noun',
      },
    },
    {
      hebrew: 'יִשְׂרָאֵל',
      transliteration: 'Yisrael',
      englishLiteral: 'Struggles_with_God (Israel)',
      englishNatural: 'Struggles-with-God (Israel)',
      root: 'yisrael',
      order: 10,
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
    hebrew:
      'וַיְחַזֵּק יְהוָה אֶת־לֵב פַּרְעֹה וְלֹא שִׁלַּח אֶת־בְּנֵי יִשְׂרָאֵל',
    transliteration:
      'vaYchazzeq YHWH et-lev Paroh veLo shillach et-benei Yisrael',
    englishLiteral:
      'And-intensified He_Who_Is (YHWH) ↳ heart-of Pharaoh; and-not sent_out ↳ sons-of Struggles_with_God (Israel).',
    englishNatural:
      'And He-Who-Is (YHWH) intensified the heart of Pharaoh, and he sent-out not the sons of Struggles-with-God (Israel).',
    kjv: "But the LORD hardened Pharaoh's heart, so that he would not let the children of Israel go.",
    lastReviewed: { name: 'Matt Gross', date: '2026-01-18' },
},
};
