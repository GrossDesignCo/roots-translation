import { Verse } from '@/types';

export const genesis_8_4: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 8,
    verse: 4,
  },
  words: [
    {
      hebrew: 'וַתָּנַח',
      transliteration: 'vaTannah',
      englishLiteral: 'And-she-will-rest',
      englishNatural: 'rested',
      root: 'nuach',
      prefixes: ['va', 'ta'],
      order: {
        hebrew: 1,
        english: 2,
      },
      morphology: {
        gender: 'feminine',
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
      hebrew: 'הַתֵּבָה',
      transliteration: 'haTevah',
      englishLiteral: 'the-ark',
      englishNatural: 'And the ark',
      root: 'tevah',
      prefixes: ['ha'],
      order: {
        hebrew: 2,
        english: 1,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'noun',
      },
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      hebrew: 'בַּחֹדֶשׁ',
      transliteration: 'baChodesh',
      englishLiteral: 'in-month',
      englishNatural: 'in the month',
      root: 'chodesh',
      prefixes: ['be'],
      order: 3,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      hebrew: 'הַשְּׁבִיעִי',
      transliteration: 'haShvii',
      englishLiteral: 'the-seventh',
      englishNatural: 'the seventh',
      root: 'shevii',
      prefixes: ['ha'],
      order: 4,
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
      hebrew: 'בְּשִׁבְעָה־',
      transliteration: 'beShivah-',
      englishLiteral: 'in-seven-',
      englishNatural: 'in seven',
      root: 'sheva',
      prefixes: ['be'],
      order: 5,
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'numeral',
      },
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      hebrew: 'עָשָׂר',
      transliteration: 'asar',
      englishLiteral: 'ten',
      englishNatural: 'ten',
      root: 'asar',
      order: 6,
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
      order: 7,
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
      order: 8,
      morphology: {
        gender: 'masculine',
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
      hebrew: 'עַל',
      transliteration: 'al',
      englishLiteral: 'over-',
      englishNatural: 'over',
      root: 'al',
      order: 9,
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'הָרֵי',
      transliteration: 'harei',
      englishLiteral: 'the-mountains-of',
      englishNatural: 'the mountains of',
      root: 'har',
      prefixes: ['ha'],
      suffixes: ['ei'],
      order: 10,
      morphology: {
        gender: 'masculine',
        number: 'plural',
        state: 'construct',
        type: 'noun',
      },
    },
    {
      hebrew: 'אֲרָרָט',
      transliteration: 'Ararat',
      englishLiteral: 'Ararat',
      englishNatural: 'Ararat',
      root: 'ararat',
      order: 11,
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
    hebrew:
      'וַתָּנַח הַתֵּבָה בַּחֹדֶשׁ הַשְּׁבִיעִי בְּשִׁבְעָה־עָשָׂר יוֹם לַחֹדֶשׁ עַל הָרֵי אֲרָרָט',
    transliteration:
      'vaTannah haTevah baChodesh haShvii beShivah-asar yom laChodesh al harei Ararat',
    englishLiteral:
      'And-she-will-rest the-ark in-month the-seventh, in-seven- ten day to-the-month, over- the-mountains-of Ararat.',
    englishNatural:
      'And the ark rested in the month the seventh, in seven ten days to the month, over the mountains of Ararat.',
    kjv: 'And the ark rested in the seventh month, on the seventeenth day of the month, upon the mountains of Ararat.',
    lastReviewed: { name: 'Matt Gross', date: '2026-07-13' },
},
};
