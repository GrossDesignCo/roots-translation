import { Verse } from '@/types';

export const jonah_2_1: Verse = {
  meta: {
    book: 'Jonah',
    chapter: 2,
    verse: 1,
  },
  words: [
    {
      hebrew: 'וַיִּתְפַּלֵּל',
      transliteration: 'vaYitpalel',
      englishLiteral: 'And-prayed',
      englishNatural: 'prayed',
      root: 'palal',
      prefixes: ['va'],
      order: {
        hebrew: 1,
        english: 2,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'imperfect',
        stem: 'hithpael',
        type: 'verb',
      },
      lineBreaksBefore: {
        hebrew: 1,
      },
    },
    {
      hebrew: 'יוֹנָה',
      transliteration: 'Yonah',
      englishLiteral: 'Dove (Jonah)',
      englishNatural: 'And Dove (Jonah)',
      root: 'yonah',
      order: {
        hebrew: 2,
        english: 1,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      hebrew: 'אֶל־',
      transliteration: 'el-',
      englishLiteral: 'to-',
      englishNatural: 'to',
      root: 'el',
      order: 3,
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'יְהוָה',
      transliteration: 'YHWH',
      englishLiteral: 'He_Who_Is (YHWH)',
      englishNatural: 'He-Who-Is (YHWH)',
      root: 'yhwh',
      order: 4,
      morphology: {
        type: 'noun',
      },
    },
    {
      hebrew: 'אֱלֹהָיו',
      transliteration: 'elohav',
      englishLiteral: 'Gods-his',
      englishNatural: 'his God',
      root: 'eloah',
      suffixes: ['av'],
      order: 5,
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun',
      },
    },
    {
      hebrew: 'מִמְּעֵי',
      transliteration: 'mimei',
      englishLiteral: 'from-belly-of',
      englishNatural: 'from the belly of',
      root: 'meah',
      prefixes: ['mi'],
      suffixes: ['ei'],
      order: 6,
      morphology: {
        gender: 'masculine',
        number: 'plural',
        state: 'construct',
        type: 'noun',
      },
    },
    {
      hebrew: 'הַדָּגָה',
      transliteration: 'haDagah',
      englishLiteral: 'the-fish',
      englishNatural: 'the fish',
      root: 'dagah',
      prefixes: ['ha'],
      order: 7,
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ';',
        englishNatural: ';',
      },
      lineBreaksAfter: 1,
    },
  ],
  expectedTranslations: {
    hebrew: 'וַיִּתְפַּלֵּל יוֹנָה אֶל־יְהוָה אֱלֹהָיו מִמְּעֵי הַדָּגָה',
    transliteration: 'vaYitpalel Yonah el-YHWH elohav mimei haDagah',
    englishLiteral:
      'And-prayed Dove (Jonah) to- He_Who_Is (YHWH) Gods-his from-belly-of the-fish;',
    englishNatural:
      'And Dove (Jonah) prayed to He-Who-Is (YHWH) his God from the belly of the fish;',
    kjv: "And Jonah prayed unto the LORD his God out of the fish's belly:",
    lastReviewed: { name: 'Matt Gross', date: '2025-12-06' },
  },
};
