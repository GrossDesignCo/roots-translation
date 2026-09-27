import { Verse } from '@/types';

export const genesis_10_3: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 10,
    verse: 3,
  },
  words: [
    {
      hebrew: 'וּבְנֵי',
      transliteration: 'uBeney',
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
      hebrew: 'גֹּמֶר',
      transliteration: 'Gomer',
      englishLiteral: 'Complete (Gomer)',
      englishNatural: 'Complete (Gomer)',
      root: 'gomer',
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
      hebrew: 'אַשְׁכְּנַז',
      transliteration: 'Ashkenaz',
      englishLiteral: 'Fire_scatter (Ashkenaz)',
      englishNatural: 'Fire-scatter (Ashkenaz)',
      root: 'ashkenaz',
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
      hebrew: 'וְרִיפַת',
      transliteration: 'veRiphath',
      englishLiteral: 'and-Sink (Riphath)',
      englishNatural: 'and Sink (Riphath)',
      root: 'riphath',
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
      hebrew: 'וְתֹגַרְמָה',
      transliteration: 'veTogarmah',
      englishLiteral: 'and-Bone_all (Togarmah)',
      englishNatural: 'and Bone-all (Togarmah)',
      root: 'togarmah',
      prefixes: ['ve'],
      order: 5,
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
    hebrew: 'וּבְנֵי גֹּמֶר אַשְׁכְּנַז וְרִיפַת וְתֹגַרְמָה',
    transliteration: 'uBeney Gomer Ashkenaz veRiphath veTogarmah',
    englishLiteral:
      'And-sons-of Complete (Gomer): Fire_scatter (Ashkenaz), and-Sink (Riphath), and-Bone_all (Togarmah).',
    englishNatural:
      'And the sons of Complete (Gomer): Fire-scatter (Ashkenaz), and Sink (Riphath), and Bone-all (Togarmah).',
    kjv: 'And the sons of Gomer; Ashkenaz, and Riphath, and Togarmah.',
  },
};
