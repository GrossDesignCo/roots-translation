import { Verse } from '@/types';

export const psalms_8_9: Verse = {
  meta: {
    book: 'Psalms',
    chapter: 8,
    verse: 9,
  },
  words: [
    {
      hebrew: 'יְהוָ֥ה',
      transliteration: 'YHWH',
      englishLiteral: 'He_Who_Is (YHWH)',
      englishNatural: 'He-Who-Is (YHWH)',
      root: 'yhwh',
      order: 1,
      morphology: {
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'אֲדֹנֵ֑ינוּ',
      transliteration: 'adoneinu',
      englishLiteral: 'our-lord',
      englishNatural: 'our lord',
      root: 'adon',
      suffixes: ['einu'],
      order: 2,
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'singular',
        state: 'construct',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'מָֽה־',
      transliteration: 'mah-',
      englishLiteral: 'what-',
      englishNatural: 'how',
      root: 'mah',
      order: 3,
      morphology: {
        type: 'pronoun',
      },
    },
    {
      hebrew: 'אַדִּ֥יר',
      transliteration: 'addir',
      englishLiteral: 'majestic',
      englishNatural: 'majestic',
      root: 'addir',
      order: 4,
      morphology: {
        type: 'adjective',
        gender: 'masculine',
        number: 'singular',
      },
      grammarSuffix: {
        englishNatural: ',',
      },
    },
    {
      hebrew: 'שִׁ֝מְךָ֗',
      transliteration: 'shimkha',
      englishLiteral: 'your-name',
      englishNatural: 'your name',
      root: 'shem',
      suffixes: ['kha'],
      order: 5,
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'singular',
        state: 'construct',
      },
    },
    {
      hebrew: 'בְּכָל־',
      transliteration: 'beKhol-',
      englishLiteral: 'in-all-',
      englishNatural: 'in all',
      root: 'kol',
      prefixes: ['be'],
      order: 6,
      morphology: {
        type: 'adjective',
      },
    },
    {
      hebrew: 'הָאָֽרֶץ',
      transliteration: 'haAretz',
      englishLiteral: 'the-land',
      englishNatural: 'the land',
      root: 'eretz',
      prefixes: ['ha'],
      order: 7,
      morphology: {
        type: 'noun',
        gender: 'feminine',
        number: 'singular',
      },
      grammarSuffix: {
        hebrew: '׃',
        englishLiteral: '.',
        englishNatural: '.',
      },
      lineBreaksAfter: 1,
    },
  ],
  expectedTranslations: {
    hebrew:
      'יְהוָ֥ה אֲדֹנֵ֑ינוּ מָֽה־אַדִּ֥יר שִׁ֝מְךָ֗ בְּכָל־הָאָֽרֶץ׃',
    transliteration:
      'YHWH adoneinu mah-addir shimkha beKhol-haAretz',
    englishLiteral:
      'He_Who_Is (YHWH), our-lord, what- majestic your-name in-all- the-land.',
    englishNatural:
      'He-Who-Is (YHWH), our lord, how majestic, your name in all the land.',
    kjv: 'O LORD our Lord, how excellent is thy name in all the earth!',
    lastReviewed: { name: 'Matt Gross', date: '2026-03-31' },
},
};
