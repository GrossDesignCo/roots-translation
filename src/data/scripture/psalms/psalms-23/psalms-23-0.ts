import { Verse } from '@/types';

export const psalms_23_0: Verse = {
  meta: {
    book: 'Psalms',
    chapter: 23,
    verse: 0,
  },
  words: [
    {
      hebrew: 'מִזְמ֥וֹר',
      transliteration: 'mizmor',
      englishLiteral: 'melody',
      englishNatural: 'A melody',
      root: 'mizmor',
      order: 1,
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'singular',
      },
    },
    {
      hebrew: 'לְדָוִ֑ד',
      transliteration: 'leDavid',
      englishLiteral: 'to-David',
      englishNatural: 'to David',
      root: 'david',
      prefixes: ['le'],
      order: 2,
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
    hebrew: 'מִזְמ֥וֹר לְדָוִ֑ד',
    transliteration: 'mizmor leDavid',
    englishLiteral: 'melody to-David.',
    englishNatural: 'A melody to David.',
    kjv: 'A Psalm of David.',
    lastReviewed: { name: 'Matt Gross', date: '2026-04-10' },
},
};
