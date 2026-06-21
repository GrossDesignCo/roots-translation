import { Verse } from '@/types';

export const genesis_7_15: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 7,
    verse: 15,
  },
  words: [
    {
      hebrew: 'וַיָּבֹאוּ',
      transliteration: 'vaYavou',
      englishLiteral: 'And-they-came',
      englishNatural: 'And they came',
      root: 'bo',
      prefixes: ['va'],
      suffixes: ['u'],
      order: 1,
      morphology: {
        gender: 'masculine',
        number: 'plural',
        person: '3rd',
        tense: 'imperfect',
        stem: 'qal',
        type: 'verb',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'אֶל־',
      transliteration: 'el-',
      englishLiteral: 'to-',
      englishNatural: 'to',
      root: 'el',
      order: 2,
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'נֹחַ',
      transliteration: 'Noach',
      englishLiteral: 'Rest (Noah)',
      englishNatural: 'Rest (Noah)',
      root: 'noach',
      order: 3,
      morphology: {
        type: 'noun',
      },
    },
    {
      hebrew: 'אֶל־',
      transliteration: 'el-',
      englishLiteral: 'to-',
      englishNatural: 'to',
      root: 'el',
      order: 4,
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'הַתֵּבָה',
      transliteration: 'haTevah',
      englishLiteral: 'the-ark',
      englishNatural: 'the ark',
      root: 'tevah',
      prefixes: ['ha'],
      order: 5,
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
      lineBreaksAfter: 1,
    },
    {
      hebrew: 'שְׁנַיִם',
      transliteration: 'shnayim',
      englishLiteral: 'two',
      englishNatural: 'two',
      root: 'shnayim',
      order: 6,
      morphology: {
        gender: 'masculine',
        number: 'dual',
        type: 'numeral',
      },
    },
    {
      hebrew: 'שְׁנַיִם',
      transliteration: 'shnayim',
      englishLiteral: 'two',
      englishNatural: 'two',
      root: 'shnayim',
      order: 7,
      morphology: {
        gender: 'masculine',
        number: 'dual',
        type: 'numeral',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'מִכָּל־',
      transliteration: 'miKol-',
      englishLiteral: 'from-all-',
      englishNatural: 'from all',
      root: 'kol',
      prefixes: ['mi'],
      order: 8,
      morphology: {
        type: 'noun',
      },
    },
    {
      hebrew: 'הַבָּשָׂר',
      transliteration: 'haBasar',
      englishLiteral: 'the-flesh',
      englishNatural: 'the flesh',
      root: 'basar',
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
      hebrew: 'אֲשֶׁר־',
      transliteration: 'asher-',
      englishLiteral: 'which-',
      englishNatural: 'which',
      root: 'asher',
      order: 10,
      morphology: {
        type: 'particle',
      },
    },
    {
      hebrew: 'בּוֹ',
      transliteration: 'bo',
      englishLiteral: 'in-him',
      englishNatural: 'in it',
      root: 'be',
      suffixes: ['o'],
      order: 11,
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'רוּחַ',
      transliteration: 'ruach',
      englishLiteral: 'wind-of',
      englishNatural: 'the wind of',
      root: 'ruach',
      order: 12,
      morphology: {
        gender: 'feminine',
        number: 'singular',
        state: 'construct',
        type: 'noun',
      },
    },
    {
      hebrew: 'חַיִּים',
      transliteration: 'chayyim',
      englishLiteral: 'lives',
      englishNatural: 'lives',
      root: 'chayyim',
      order: 13,
      morphology: {
        gender: 'masculine',
        number: 'plural',
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
      'וַיָּבֹאוּ אֶל־נֹחַ אֶל־הַתֵּבָה שְׁנַיִם שְׁנַיִם מִכָּל־הַבָּשָׂר אֲשֶׁר־בּוֹ רוּחַ חַיִּים',
    transliteration:
      'vaYavou el-Noach el-haTevah shnayim shnayim miKol-haBasar asher-bo ruach chayyim',
    englishLiteral:
      'And-they-came to- Rest (Noah) to- the-ark, two two, from-all- the-flesh, which- in-him wind-of lives.',
    englishNatural:
      'And they came to Rest (Noah) to the ark, two two, from all the flesh, which in it the wind of lives.',
    kjv: 'And they went in unto Noah into the ark, two and two of all flesh, wherein is the breath of life.',
    lastReviewed: { name: 'Matt Gross', date: '2026-06-21' },
},
};
