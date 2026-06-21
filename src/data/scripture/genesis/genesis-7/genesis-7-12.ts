import { Verse } from '@/types';

export const genesis_7_12: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 7,
    verse: 12,
  },
  words: [
    {
      hebrew: 'וַיְהִי',
      transliteration: 'vayehi',
      englishLiteral: 'And-it-was',
      englishNatural: 'was',
      root: 'hayah',
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
        stem: 'qal',
        type: 'verb',
      },
      lineBreaksBefore: {
        hebrew: 1,
      },
    },
    {
      hebrew: 'הַגֶּשֶׁם',
      transliteration: 'haGeshem',
      englishLiteral: 'the-rain',
      englishNatural: 'And the rain',
      root: 'geshem',
      prefixes: ['ha'],
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
      hebrew: 'עַל־',
      transliteration: 'al-',
      englishLiteral: 'over-',
      englishNatural: 'over',
      root: 'al',
      order: 3,
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'הָאָרֶץ',
      transliteration: 'haAretz',
      englishLiteral: 'the-land',
      englishNatural: 'the land',
      root: 'eretz',
      prefixes: ['ha'],
      order: 4,
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
      hebrew: 'אַרְבָּעִים',
      transliteration: 'arbaim',
      englishLiteral: 'forty',
      englishNatural: 'forty',
      root: 'arbaim',
      order: 5,
      morphology: {
        type: 'numeral',
      },
    },
    {
      hebrew: 'יוֹם',
      transliteration: 'yom',
      englishLiteral: 'day',
      englishNatural: 'days',
      root: 'yom',
      order: 6,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      hebrew: 'וְאַרְבָּעִים',
      transliteration: 'veArbaim',
      englishLiteral: 'and-forty',
      englishNatural: 'and forty',
      root: 'arbaim',
      prefixes: ['ve'],
      order: 7,
      morphology: {
        type: 'numeral',
      },
    },
    {
      hebrew: 'לָיְלָה',
      transliteration: 'laylah',
      englishLiteral: 'night',
      englishNatural: 'nights',
      root: 'layil',
      order: 8,
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
      'וַיְהִי הַגֶּשֶׁם עַל־הָאָרֶץ אַרְבָּעִים יוֹם וְאַרְבָּעִים לָיְלָה',
    transliteration: 'vayehi haGeshem al-haAretz arbaim yom veArbaim laylah',
    englishLiteral:
      'And-it-was the-rain over- the-land, forty day and-forty night.',
    englishNatural:
      'And the rain was over the land, forty days and forty nights.',
    kjv: 'And the rain was upon the earth forty days and forty nights.',
    lastReviewed: { name: 'Matt Gross', date: '2026-06-21' },
  },
};
