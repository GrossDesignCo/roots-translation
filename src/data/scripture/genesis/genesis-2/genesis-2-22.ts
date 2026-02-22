import { Verse } from '@/types';

export const genesis_2_22: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 2,
    verse: 22,
  },
  words: [
    {
      hebrew: 'וַיִּבֶן',
      transliteration: 'vaYiven',
      englishLiteral: 'And-built',
      englishNatural: 'built',
      root: 'banah',
      prefixes: ['va'],
      order: {
        hebrew: 1,
        english: 3,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'imperfect',
        stem: 'qal',
        type: 'verb',
      },
      lineBreaksBefore: {
        hebrew: 1,
      },
    },
    {
      hebrew: 'יְהוָה',
      transliteration: 'YHWH',
      englishLiteral: 'He_Who_Is (YHWH)',
      englishNatural: 'And He-Who-Is (YHWH)',
      root: 'yhwh',
      order: {
        hebrew: 2,
        english: 1,
      },
      morphology: {
        type: 'noun',
      },
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      hebrew: 'אֱלֹהִים',
      transliteration: 'Elohim',
      englishLiteral: 'Gods',
      englishNatural: 'God',
      root: 'eloah',
      suffixes: ['im'],
      order: {
        hebrew: 3,
        english: 2,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun',
      },
    },
    {
      hebrew: 'אֶת־',
      transliteration: 'et-',
      englishLiteral: '↳',
      englishNatural: '',
      root: 'et',
      order: 4,
    },
    {
      hebrew: 'הַצֵּלָע',
      transliteration: 'haTzela',
      englishLiteral: 'the-side',
      englishNatural: 'the side',
      root: 'tzela',
      prefixes: ['ha'],
      order: 5,
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      hebrew: 'אֲשֶׁר',
      transliteration: 'asher',
      englishLiteral: 'which',
      englishNatural: 'which',
      root: 'asher',
      order: 6,
      morphology: {
        type: 'relative',
      },
    },
    {
      hebrew: 'לָקַח',
      transliteration: 'lakach',
      englishLiteral: 'he-took',
      englishNatural: 'he took',
      root: 'lakach',
      order: 7,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'perfect',
        stem: 'qal',
        type: 'verb',
      },
    },
    {
      hebrew: 'מִן־',
      transliteration: 'min-',
      englishLiteral: 'from-',
      englishNatural: 'from',
      root: 'min',
      order: 8,
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'הָאָדָם',
      transliteration: 'haAdam',
      englishLiteral: 'the-Earthling (Adam)',
      englishNatural: 'the Earthling (Adam)',
      root: 'adam',
      prefixes: ['ha'],
      order: 9,
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
      hebrew: 'לְאִשָּׁה',
      transliteration: 'leIshah',
      englishLiteral: 'to-woman',
      englishNatural: 'into a woman',
      root: 'ishah',
      prefixes: ['le'],
      order: 10,
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'וַיְבִאֶהָ',
      transliteration: 'vaYeviEha',
      englishLiteral: 'and-brought-her',
      englishNatural: 'and brought her',
      root: 'bo',
      prefixes: ['va'],
      suffixes: ['ah'],
      order: 11,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'imperfect',
        stem: 'hiphil',
        type: 'verb',
      },
    },
    {
      hebrew: 'אֶל־',
      transliteration: 'el-',
      englishLiteral: 'to-',
      englishNatural: 'to',
      root: 'el',
      order: 12,
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'הָאָדָם׃',
      transliteration: 'haAdam',
      englishLiteral: 'the-Earthling (Adam)',
      englishNatural: 'the Earthling (Adam)',
      root: 'adam',
      prefixes: ['ha'],
      order: 13,
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
    hebrew:
      'וַיִּבֶן יְהוָה אֱלֹהִים אֶת־הַצֵּלָע אֲשֶׁר לָקַח מִן־הָאָדָם לְאִשָּׁה וַיְבִאֶהָ אֶל־הָאָדָם׃',
    transliteration:
      'vaYiven YHWH Elohim et-haTzela asher lakach min-haAdam leIshah vaYeviEha el-haAdam',
    englishLiteral:
      'And-built He_Who_Is (YHWH) Gods ↳ the-side which he-took from- the-Earthling (Adam), to-woman, and-brought-her to- the-Earthling (Adam).',
    englishNatural:
      'And He-Who-Is (YHWH) God built the side which he took from the Earthling (Adam), into a woman, and brought her to the Earthling (Adam).',
    kjv: 'And the rib, which the LORD God had taken from man, made he a woman, and brought her unto the man.',
    lastReviewed: { name: 'Matt Gross', date: '2026-02-22' },
  },
};
