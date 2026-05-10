import { Verse } from '@/types';

export const psalms_3_0: Verse = {
  meta: {
    book: 'Psalms',
    chapter: 3,
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
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'בְּבָרְח֥וֹ',
      transliteration: 'beVorcho',
      englishLiteral: 'in-his-fleeing',
      englishNatural: 'in his fleeing',
      root: 'barach',
      prefixes: ['be'],
      suffixes: ['o'],
      order: 3,
      morphology: {
        type: 'verb',
        stem: 'qal',
        tense: 'infinitive_construct',
      },
    },
    {
      hebrew: 'מִפְּנֵ֗י',
      transliteration: 'miPney',
      englishLiteral: 'from-faces_of',
      englishNatural: 'from the face of',
      root: 'panim',
      prefixes: ['mi'],
      order: 4,
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'plural',
        state: 'construct',
      },
    },
    {
      hebrew: 'אַבְשָׁל֥וֹם',
      transliteration: 'Avshalom',
      englishLiteral: 'Father_of_Peace (Absalom)',
      englishNatural: 'Father-of-Peace (Absalom)',
      root: 'avshalom',
      order: 5,
      morphology: {
        type: 'noun',
      },
      grammarSuffix: {
        englishNatural: ',',
      },
    },
    {
      hebrew: 'בְּנֽוֹ',
      transliteration: 'beno',
      englishLiteral: 'son-his',
      englishNatural: 'his son',
      root: 'ben',
      suffixes: ['o'],
      order: 6,
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'singular',
      },
      grammarSuffix: {
        englishLiteral: '.',
        englishNatural: '.',
      },
    },
  ],
  expectedTranslations: {
    hebrew: 'מִזְמ֥וֹר לְדָוִ֑ד בְּבָרְח֥וֹ מִפְּנֵ֗י אַבְשָׁל֥וֹם בְּנֽוֹ',
    transliteration: 'mizmor leDavid beVorcho miPney Avshalom beno',
    englishLiteral:
      'melody to-David, in-his-fleeing from-faces_of Father_of_Peace (Absalom) son-his.',
    englishNatural:
      'A melody to David, in his fleeing from the face of Father-of-Peace (Absalom), his son.',
    kjv: 'A Psalm of David, when he fled from Absalom his son.',
    lastReviewed: { name: 'Matt Gross', date: '2026-05-10' },
  },
};
