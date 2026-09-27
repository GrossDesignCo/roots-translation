import { Verse } from '@/types';

export const genesis_10_23: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 10,
    verse: 23,
  },
  words: [
    {
      hebrew: 'וּבְנֵי',
      transliteration: 'uBenei',
      englishLiteral: 'And-sons-of',
      englishNatural: 'And the sons of',
      root: 'ben',
      prefixes: ['u'],
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
      hebrew: 'אֲרָם',
      transliteration: 'Aram',
      englishLiteral: 'High (Aram)',
      englishNatural: 'High (Aram)',
      root: 'aram',
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
      hebrew: 'עוּץ',
      transliteration: 'Uts',
      englishLiteral: 'Counsel (Uz)',
      englishNatural: 'Counsel (Uz)',
      root: 'uts',
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
      hebrew: 'וְחוּל',
      transliteration: 'veChul',
      englishLiteral: 'and-Writhe (Hul)',
      englishNatural: 'and Writhe (Hul)',
      root: 'chul',
      prefixes: ['ve'],
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
      hebrew: 'וְגֶתֶר',
      transliteration: 'veGether',
      englishLiteral: 'and-Gether (Gether)',
      englishNatural: 'and Gether (Gether)',
      root: 'gether',
      prefixes: ['ve'],
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
      hebrew: 'וָמַשׁ',
      transliteration: 'vaMash',
      englishLiteral: 'and-Feel (Mash)',
      englishNatural: 'and Feel (Mash)',
      root: 'mash_person',
      prefixes: ['va'],
      order: 6,
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
    hebrew: 'וּבְנֵי אֲרָם עוּץ וְחוּל וְגֶתֶר וָמַשׁ',
    transliteration: 'uBenei Aram Uts veChul veGether vaMash',
    englishLiteral:
      'And-sons-of High (Aram): Counsel (Uz), and-Writhe (Hul), and-Gether (Gether), and-Feel (Mash).',
    englishNatural:
      'And the sons of High (Aram): Counsel (Uz), and Writhe (Hul), and Gether (Gether), and Feel (Mash).',
    kjv: 'And the children of Aram; Uz, and Hul, and Gether, and Mash.',
  },
};
