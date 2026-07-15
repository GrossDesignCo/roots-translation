import { Verse } from '@/types';

export const genesis_8_14: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 8,
    verse: 14,
  },
  words: [
    {
      hebrew: 'וּבַחֹדֶשׁ',
      transliteration: 'uVaChodesh',
      englishLiteral: 'And-in-month',
      englishNatural: 'And in the month',
      root: 'chodesh',
      prefixes: ['u', 'be'],
      order: 1,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'הַשֵּׁנִי',
      transliteration: 'haSheni',
      englishLiteral: 'the-second',
      englishNatural: 'the second',
      root: 'sheni',
      prefixes: ['ha'],
      order: 2,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'numeral',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'בְּשִׁבְעָה',
      transliteration: 'beShivah',
      englishLiteral: 'in-seven',
      englishNatural: 'in seven',
      root: 'sheva',
      prefixes: ['be'],
      order: 3,
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'numeral',
      },
    },
    {
      hebrew: 'וְעֶשְׂרִים',
      transliteration: 'veEsrim',
      englishLiteral: 'and-twenty',
      englishNatural: 'and twenty',
      root: 'esrim',
      prefixes: ['ve'],
      order: 4,
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
      order: 5,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      hebrew: 'לַחֹדֶשׁ',
      transliteration: 'laChodesh',
      englishLiteral: 'to-the-month',
      englishNatural: 'to the month',
      root: 'chodesh',
      prefixes: ['la'],
      order: 6,
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
      hebrew: 'יָבְשָׁה',
      transliteration: 'yavsah',
      englishLiteral: 'she-has-withered',
      englishNatural: 'has withered',
      root: 'yavesh',
      suffixes: ['ah'],
      order: {
        hebrew: 7,
        english: 9,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
        person: '3rd',
        tense: 'perfect',
        stem: 'qal',
        type: 'verb',
      },
      grammarSuffix: {
        englishNatural: '.',
      },
      lineBreaksAfter: {
        english: 1,
      },
    },
    {
      hebrew: 'הָאָרֶץ',
      transliteration: 'haAretz',
      englishLiteral: 'the-land',
      englishNatural: 'the land',
      root: 'eretz',
      prefixes: ['ha'],
      order: {
        hebrew: 8,
        english: 8,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: '.',
      },
      lineBreaksBefore: {
        english: 1,
      },
      lineBreaksAfter: {
        hebrew: 1,
      },
    },
  ],
  expectedTranslations: {
    hebrew:
      'וּבַחֹדֶשׁ הַשֵּׁנִי בְּשִׁבְעָה וְעֶשְׂרִים יוֹם לַחֹדֶשׁ יָבְשָׁה הָאָרֶץ',
    transliteration:
      'uVaChodesh haSheni beShivah veEsrim yom laChodesh yavsah haAretz',
    englishLiteral:
      'And-in-month the-second, in-seven and-twenty day to-the-month, she-has-withered the-land.',
    englishNatural:
      'And in the month the second, in seven and twenty days to the month, the land has withered.',
    kjv: 'And in the second month, on the seven and twentieth day of the month, was the earth dry.',
    lastReviewed: { name: 'Matt Gross', date: '2026-07-15' },
},
};
