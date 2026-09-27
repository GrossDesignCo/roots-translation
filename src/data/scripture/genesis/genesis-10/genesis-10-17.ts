import { Verse } from '@/types';

export const genesis_10_17: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 10,
    verse: 17,
  },
  words: [
    {
      hebrew: 'וְאֶת־',
      transliteration: 'veEt-',
      englishLiteral: 'and-↳',
      englishNatural: 'and',
      root: 'et',
      prefixes: ['ve'],
      order: 1,
      morphology: {
        type: 'particle',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'הַחִוִּי',
      transliteration: 'haChivi',
      englishLiteral: 'the-Hivite',
      englishNatural: 'the Hivite',
      root: 'chivi',
      prefixes: ['ha'],
      order: 2,
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
      hebrew: 'וְאֶת־',
      transliteration: 'veEt-',
      englishLiteral: 'and-↳',
      englishNatural: 'and',
      root: 'et',
      prefixes: ['ve'],
      order: 3,
      morphology: {
        type: 'particle',
      },
    },
    {
      hebrew: 'הָעַרְקִי',
      transliteration: 'haArqi',
      englishLiteral: 'the-Arkite',
      englishNatural: 'the Arkite',
      root: 'arqi',
      prefixes: ['ha'],
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
      hebrew: 'וְאֶת־',
      transliteration: 'veEt-',
      englishLiteral: 'and-↳',
      englishNatural: 'and',
      root: 'et',
      prefixes: ['ve'],
      order: 5,
      morphology: {
        type: 'particle',
      },
    },
    {
      hebrew: 'הַסִּינִי',
      transliteration: 'haSini',
      englishLiteral: 'the-Sinite',
      englishNatural: 'the Sinite',
      root: 'sini',
      prefixes: ['ha'],
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
      lineBreaksAfter: 1,
    },
  ],
  expectedTranslations: {
    hebrew: 'וְאֶת־הַחִוִּי וְאֶת־הָעַרְקִי וְאֶת־הַסִּינִי',
    transliteration: 'veEt-haChivi veEt-haArqi veEt-haSini',
    englishLiteral: 'and-↳ the-Hivite, and-↳ the-Arkite, and-↳ the-Sinite,',
    englishNatural: 'and the Hivite, and the Arkite, and the Sinite,',
    kjv: 'And the Hivite, and the Arkite, and the Sinite,',
  },
};
