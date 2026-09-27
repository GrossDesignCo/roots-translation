import { Verse } from '@/types';

export const genesis_10_2: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 10,
    verse: 2,
  },
  words: [
    {
      hebrew: 'בְּנֵי',
      transliteration: 'beney',
      englishLiteral: 'sons-of',
      englishNatural: 'The sons of',
      root: 'ben',
      suffixes: ['ei'],
      order: 1,
      morphology: {
        gender: 'masculine',
        number: 'plural',
        state: 'construct',
        type: 'noun',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'יֶפֶת',
      transliteration: 'Yafet',
      englishLiteral: 'Spacious (Japheth)',
      englishNatural: 'Spacious (Japheth)',
      root: 'yafet',
      order: 2,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ':',
        englishNatural: ':',
      },
      lineBreaksAfter: 1,
    },
    {
      hebrew: 'גֹּמֶר',
      transliteration: 'Gomer',
      englishLiteral: 'Complete (Gomer)',
      englishNatural: 'Complete (Gomer)',
      root: 'gomer',
      order: 3,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'וּמָגוֹג',
      transliteration: 'uMagog',
      englishLiteral: 'and-From_Gog (Magog)',
      englishNatural: 'and From-Gog (Magog)',
      root: 'magog',
      prefixes: ['u'],
      order: 4,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'וּמָדַי',
      transliteration: 'uMadai',
      englishLiteral: 'and-Measure (Madai)',
      englishNatural: 'and Measure (Madai)',
      root: 'madai',
      prefixes: ['u'],
      order: 5,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'וְיָוָן',
      transliteration: 'veYavan',
      englishLiteral: 'and-Mire (Javan)',
      englishNatural: 'and Mire (Javan)',
      root: 'yavan',
      prefixes: ['ve'],
      order: 6,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'וְתֻבָל',
      transliteration: 'veTuval',
      englishLiteral: 'and-World (Tubal)',
      englishNatural: 'and World (Tubal)',
      root: 'tubal',
      prefixes: ['ve'],
      order: 7,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'וּמֶשֶׁךְ',
      transliteration: 'uMeshech',
      englishLiteral: 'and-Drawing (Meshech)',
      englishNatural: 'and Drawing (Meshech)',
      root: 'meshech',
      prefixes: ['u'],
      order: 8,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'וְתִירָס',
      transliteration: 'veTiras',
      englishLiteral: 'and-Moist (Tiras)',
      englishNatural: 'and Moist (Tiras)',
      root: 'tiras',
      prefixes: ['ve'],
      order: 9,
      morphology: {
        gender: 'masculine',
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
      'בְּנֵי יֶפֶת גֹּמֶר וּמָגוֹג וּמָדַי וְיָוָן וְתֻבָל וּמֶשֶׁךְ וְתִירָס',
    transliteration:
      'beney Yafet Gomer uMagog uMadai veYavan veTuval uMeshech veTiras',
    englishLiteral:
      'sons-of Spacious (Japheth): Complete (Gomer), and-From_Gog (Magog), and-Measure (Madai), and-Mire (Javan), and-World (Tubal), and-Drawing (Meshech), and-Moist (Tiras).',
    englishNatural:
      'The sons of Spacious (Japheth): Complete (Gomer), and From-Gog (Magog), and Measure (Madai), and Mire (Javan), and World (Tubal), and Drawing (Meshech), and Moist (Tiras).',
    kjv: 'The sons of Japheth; Gomer, and Magog, and Madai, and Javan, and Tubal, and Meshech, and Tiras.',
  },
};
