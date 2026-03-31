import { Verse } from '@/types';

export const psalms_8_1: Verse = {
  meta: {
    book: 'Psalms',
    chapter: 8,
    verse: 1,
  },
  words: [
    {
      hebrew: 'יְהוָ֤ה',
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
      hebrew: 'אֲדֹנֵ֗ינוּ',
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
      hebrew: 'אַדִּ֣יר',
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
      hebrew: 'שִׁ֭מְךָ',
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
      hebrew: 'הָאָ֑רֶץ',
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
        englishLiteral: ';',
        englishNatural: ';',
      },
      lineBreaksAfter: 1,
    },
    {
      hebrew: 'אֲשֶׁ֥ר',
      transliteration: 'asher',
      englishLiteral: 'which',
      englishNatural: 'which',
      root: 'asher',
      order: 8,
      morphology: {
        type: 'relative',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'תְּנָ֥ה',
      transliteration: 'tenah',
      englishLiteral: 'give!',
      englishNatural: 'give',
      root: 'natan',
      order: 9,
      morphology: {
        type: 'verb',
        stem: 'qal',
        tense: 'imperative',
        gender: 'masculine',
        number: 'singular',
        person: '2nd',
      },
    },
    {
      hebrew: 'ה֝וֹדְךָ֗',
      transliteration: 'hodkha',
      englishLiteral: 'your-splendor',
      englishNatural: 'your splendor',
      root: 'hod',
      suffixes: ['kha'],
      order: 10,
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'singular',
        state: 'construct',
      },
    },
    {
      hebrew: 'עַל־',
      transliteration: 'al-',
      englishLiteral: 'over-',
      englishNatural: 'over',
      root: 'al',
      order: 11,
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'הַשָּׁמָֽיִם',
      transliteration: 'haShamayim',
      englishLiteral: 'the-skies',
      englishNatural: 'the skies',
      root: 'shamayim',
      prefixes: ['ha'],
      order: 12,
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'plural',
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
      'יְהוָ֤ה אֲדֹנֵ֗ינוּ מָֽה־אַדִּ֣יר שִׁ֭מְךָ בְּכָל־הָאָ֑רֶץ אֲשֶׁ֥ר תְּנָ֥ה ה֝וֹדְךָ֗ עַל־הַשָּׁמָֽיִם',
    transliteration:
      'YHWH adoneinu mah-addir shimkha beKhol-haAretz asher tenah hodkha al-haShamayim',
    englishLiteral:
      'He_Who_Is (YHWH), our-lord, what- majestic your-name in-all- the-land; which give! your-splendor over- the-skies.',
    englishNatural:
      'He-Who-Is (YHWH), our lord, how majestic, your name in all the land; which give your splendor over the skies.',
    kjv: 'O LORD our Lord, how excellent is thy name in all the earth! who hast set thy glory above the heavens.',
    lastReviewed: { name: 'Matt Gross', date: '2026-03-31' },
},
};
