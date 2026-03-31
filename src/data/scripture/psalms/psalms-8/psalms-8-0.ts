import { Verse } from '@/types';

export const psalms_8_0: Verse = {
  meta: {
    book: 'Psalms',
    chapter: 8,
    verse: 0,
  },
  words: [
    {
      hebrew: 'לַמְנַצֵּ֥חַ',
      transliteration: 'laMnatseach',
      englishLiteral: 'to-the-one-who-endures',
      englishNatural: 'To the one-who-endures',
      root: 'natsach',
      prefixes: ['la'],
      order: 1,
      morphology: {
        type: 'verb',
        stem: 'piel',
        tense: 'participle',
        gender: 'masculine',
        number: 'singular',
      },
    },
    {
      hebrew: 'עַל־',
      transliteration: 'al-',
      englishLiteral: 'over-',
      englishNatural: 'over',
      root: 'al',
      order: 2,
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'הַגִּתִּ֑ית',
      transliteration: 'haGittit',
      englishLiteral: 'the-Gittith',
      englishNatural: 'the Gittith',
      root: 'gittit',
      prefixes: ['ha'],
      order: 3,
      morphology: {
        type: 'noun',
        gender: 'feminine',
        number: 'singular',
      },
      grammarSuffix: {
        englishLiteral: '.',
        englishNatural: '.',
      },
      lineBreaksAfter: 1,
    },
    {
      hebrew: 'מִזְמ֖וֹר',
      transliteration: 'mizmor',
      englishLiteral: 'melody',
      englishNatural: 'A melody',
      root: 'mizmor',
      order: 4,
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'singular',
      },
    },
    {
      hebrew: 'לְדָוִֽד',
      transliteration: 'leDavid',
      englishLiteral: 'to-David',
      englishNatural: 'to David',
      root: 'david',
      prefixes: ['le'],
      order: 5,
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
    hebrew: 'לַמְנַצֵּ֥חַ עַל־הַגִּתִּ֑ית מִזְמ֖וֹר לְדָוִֽד',
    transliteration: 'laMnatseach al-haGittit mizmor leDavid',
    englishLiteral:
      'to-the-one-who-endures over- the-Gittith. melody to-David.',
    englishNatural: 'To the one-who-endures over the Gittith. A melody to David.',
    kjv: 'To the chief Musician upon Gittith, A Psalm of David.',
    lastReviewed: { name: 'Matt Gross', date: '2026-03-31' },
},
};
