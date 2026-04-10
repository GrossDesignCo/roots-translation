import { Verse } from '@/types';

export const psalms_131_0: Verse = {
  meta: {
    book: 'Psalms',
    chapter: 131,
    verse: 0,
  },
  words: [
    {
      hebrew: 'שִׁיר',
      transliteration: 'shir',
      englishLiteral: 'song',
      englishNatural: 'A Song',
      root: 'shir',
      order: 1,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      hebrew: 'הַמַּעֲלוֹת',
      transliteration: 'haMaalot',
      englishLiteral: 'the-overs',
      englishNatural: 'of The Overs',
      root: 'alah',
      prefixes: ['ha'],
      suffixes: ['ot'],
      order: 2,
      morphology: {
        gender: 'feminine',
        number: 'plural',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: '.',
        englishNatural: '.',
      },
      lineBreaksAfter: 1,
    },
    {
      hebrew: 'לְדָוִד',
      transliteration: 'leDavid',
      englishLiteral: 'to-David',
      englishNatural: 'To David',
      root: 'david',
      prefixes: ['le'],
      order: 3,
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
    hebrew: 'שִׁיר הַמַּעֲלוֹת לְדָוִד',
    transliteration: 'shir haMaalot leDavid',
    englishLiteral: 'song the-overs. to-David.',
    englishNatural: 'A Song of The Overs. To David.',
    kjv: 'A Song of degrees of David.',
    lastReviewed: { name: 'Matt Gross', date: '2026-04-10' },
  },
};
