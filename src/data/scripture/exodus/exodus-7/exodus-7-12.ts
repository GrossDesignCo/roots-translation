import { Verse } from '@/types';

export const exodus_7_12: Verse = {
  meta: {
    book: 'Exodus',
    chapter: 7,
    verse: 12,
  },
  words: [
    {
      hebrew: 'וַיַּשְׁלִיכוּ',
      transliteration: 'vaYashlikhu',
      englishLiteral: 'And-threw',
      englishNatural: 'threw',
      root: 'shalakh',
      prefixes: ['ve'],
      order: {
        hebrew: 1,
        english: 2,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        person: '3rd',
        tense: 'imperfect',
        stem: 'hiphil',
        type: 'verb',
      },
      lineBreaksBefore: {
        hebrew: 1,
      },
    },
    {
      hebrew: 'אִישׁ',
      transliteration: 'ish',
      englishLiteral: 'man',
      englishNatural: 'And man',
      root: 'ish',
      order: {
        hebrew: 2,
        english: 1,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      hebrew: 'מַטֵּהוּ',
      transliteration: 'mattehu',
      englishLiteral: 'branch-his',
      englishNatural: 'his branch',
      root: 'mateh',
      suffixes: ['hu'],
      order: 3,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishNatural: ',',
      },
    },
    {
      hebrew: 'וַיִּהְיוּ',
      transliteration: 'vaYihyu',
      englishLiteral: 'and-they-were',
      englishNatural: 'and they were',
      root: 'hayah',
      prefixes: ['ve'],
      order: 4,
      morphology: {
        gender: 'masculine',
        number: 'plural',
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
      hebrew: 'לְתַנִּינִם',
      transliteration: 'leTanninim',
      englishLiteral: 'to-monsters',
      englishNatural: 'to monsters',
      root: 'tannin',
      prefixes: ['la'],
      order: 5,
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ';',
        englishNatural: ';',
      },
    },
    {
      hebrew: 'וַיִּבְלַע',
      transliteration: 'vaYivla',
      englishLiteral: 'and-swallowed',
      englishNatural: 'swallowed',
      root: 'bala',
      prefixes: ['ve'],
      order: {
        hebrew: 6,
        english: 8,
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
      hebrew: 'מַטֵּה־',
      transliteration: 'mateh-',
      englishLiteral: 'branch-of-',
      englishNatural: 'and the branch of',
      root: 'mateh',
      order: {
        hebrew: 7,
        english: 6,
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
      hebrew: 'אַהֲרֹן',
      transliteration: 'Aharon',
      englishLiteral: 'Light_Bringer (Aaron)',
      englishNatural: 'Light-Bringer (Aaron)',
      root: 'aharon',
      order: {
        hebrew: 8,
        english: 7,
      },
      morphology: {
        type: 'noun',
      },
    },
    {
      hebrew: 'אֶת־',
      transliteration: 'et-',
      englishLiteral: '↳',
      englishNatural: '',
      root: 'et',
      order: 9,
      morphology: {
        type: 'particle',
      },
    },
    {
      hebrew: 'מַטֹּתָם',
      transliteration: 'mattotam',
      englishLiteral: 'branches-their',
      englishNatural: 'their branches',
      root: 'mateh',
      suffixes: ['am'],
      order: 10,
      morphology: {
        gender: 'masculine',
        number: 'plural',
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
      'וַיַּשְׁלִיכוּ אִישׁ מַטֵּהוּ וַיִּהְיוּ לְתַנִּינִם וַיִּבְלַע מַטֵּה־אַהֲרֹן אֶת־מַטֹּתָם',
    transliteration:
      'vaYashlikhu ish mattehu vaYihyu leTanninim vaYivla mateh-Aharon et-mattotam',
    englishLiteral:
      'And-threw man branch-his and-they-were to-monsters; and-swallowed branch-of- Light_Bringer (Aaron) ↳ branches-their.',
    englishNatural:
      'And man threw his branch, and they were to monsters; and the branch of Light-Bringer (Aaron) swallowed their branches.',
    kjv: "For they cast down every man his rod, and they became serpents: but Aaron's rod swallowed up their rods.",
    lastReviewed: { name: 'Matt Gross', date: '2026-01-18' },
},
};
