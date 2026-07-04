import { Verse } from '@/types';

export const psalms_46_0: Verse = {
  meta: {
    book: 'Psalms',
    chapter: 46,
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
      hebrew: 'לִבְנֵי־',
      transliteration: 'liVney-',
      englishLiteral: 'to-sons-of-',
      englishNatural: 'of the sons of',
      root: 'ben',
      prefixes: ['li'],
      suffixes: ['ey'],
      order: 2,
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'plural',
        state: 'construct',
      },
    },
    {
      hebrew: 'קֹ֑רַח',
      transliteration: 'Qorach',
      englishLiteral: 'Korah',
      englishNatural: 'Korah',
      root: 'korach',
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
    {
      hebrew: 'עַל־',
      transliteration: 'al-',
      englishLiteral: 'over-',
      englishNatural: 'Over',
      root: 'al',
      order: 4,
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'עֲלָמ֥וֹת',
      transliteration: 'alamot',
      englishLiteral: 'maidens',
      englishNatural: 'maidens',
      root: 'alamot',
      order: 5,
      morphology: {
        type: 'noun',
        gender: 'feminine',
        number: 'plural',
      },
      grammarSuffix: {
        englishLiteral: '.',
        englishNatural: '.',
      },
      lineBreaksAfter: 1,
    },
    {
      hebrew: 'שִֽׁיר׃',
      transliteration: 'shir',
      englishLiteral: 'A-song',
      englishNatural: 'A song',
      root: 'shir',
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
      lineBreaksAfter: 1,
    },
  ],
  expectedTranslations: {
    hebrew: 'לַמְנַצֵּ֥חַ לִבְנֵי־קֹ֑רַח עַל־עֲלָמ֥וֹת שִֽׁיר׃',
    transliteration: 'laMnatseach liVney-Qorach al-alamot shir',
    englishLiteral:
      'to-the-one-who-endures to-sons-of- Korah. over- maidens. A-song.',
    englishNatural:
      'To the one-who-endures of the sons of Korah. Over maidens. A song.',
    kjv: 'To the chief Musician for the sons of Korah, A Song upon Alamoth.',
    lastReviewed: { name: 'Matt Gross', date: '2026-07-04' },
},
};
