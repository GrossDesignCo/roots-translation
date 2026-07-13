import { Verse } from '@/types';

export const genesis_8_3: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 8,
    verse: 3,
  },
  words: [
    {
      hebrew: 'וַיָּשֻׁבוּ',
      transliteration: 'vaYaShuvu',
      englishLiteral: 'And-they-will-return',
      englishNatural: 'returned',
      root: 'shuv',
      prefixes: ['va', 'yi'],
      suffixes: ['plural_verb_u'],
      order: {
        hebrew: 1,
        english: 2,
      },
      morphology: {
        number: 'plural',
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
      hebrew: 'הַמַּיִם',
      transliteration: 'haMayim',
      englishLiteral: 'the-waters',
      englishNatural: 'And the waters',
      root: 'mayim',
      prefixes: ['ha'],
      order: {
        hebrew: 2,
        english: 1,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun',
      },
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      hebrew: 'מֵעַל',
      transliteration: 'meAl',
      englishLiteral: 'from-over',
      englishNatural: 'from over',
      root: 'al',
      prefixes: ['me'],
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
    },
    {
      hebrew: 'הָלוֹךְ',
      transliteration: 'halokh',
      englishLiteral: 'going',
      englishNatural: 'going',
      root: 'halakh',
      order: 5,
      morphology: {
        tense: 'infinitive_absolute',
        type: 'verb',
      },
    },
    {
      hebrew: 'וָשׁוֹב',
      transliteration: 'vaShov',
      englishLiteral: 'and-returning',
      englishNatural: 'and returning',
      root: 'shuv',
      prefixes: ['va'],
      order: 6,
      morphology: {
        tense: 'infinitive_absolute',
        type: 'verb',
      },
      grammarSuffix: {
        englishLiteral: ';',
        englishNatural: ';',
      },
      lineBreaksAfter: 1,
    },
    {
      hebrew: 'וַיַּחְסְרוּ',
      transliteration: 'vaYachseru',
      englishLiteral: 'And-they-will-lack',
      englishNatural: 'lacked',
      root: 'chaser',
      prefixes: ['va'],
      suffixes: ['plural_verb_u'],
      order: {
        hebrew: 7,
        english: 9,
      },
      morphology: {
        number: 'plural',
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
      hebrew: 'הַמַּיִם',
      transliteration: 'haMayim',
      englishLiteral: 'the-waters',
      englishNatural: 'and the waters',
      root: 'mayim',
      prefixes: ['ha'],
      order: {
        hebrew: 8,
        english: 8,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun',
      },
    },
    {
      hebrew: 'מִקְצֵה',
      transliteration: 'miqtzah',
      englishLiteral: 'from-end-of',
      englishNatural: 'from the end of',
      root: 'qetz',
      prefixes: ['mi'],
      order: 9,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        state: 'construct',
        type: 'noun',
      },
    },
    {
      hebrew: 'חֲמִשִּׁים',
      transliteration: 'chamishim',
      englishLiteral: 'fifty',
      englishNatural: 'fifty',
      root: 'chamishim',
      order: 10,
      morphology: {
        type: 'numeral',
      },
    },
    {
      hebrew: 'וּמְאַת',
      transliteration: 'uMeat',
      englishLiteral: 'and-hundred',
      englishNatural: 'and a hundred',
      root: 'meah',
      prefixes: ['u'],
      order: 11,
      morphology: {
        gender: 'feminine',
        number: 'singular',
        state: 'construct',
        type: 'numeral',
      },
    },
    {
      hebrew: 'יוֹם',
      transliteration: 'yom',
      englishLiteral: 'day',
      englishNatural: 'days',
      root: 'yom',
      order: 12,
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
      'וַיָּשֻׁבוּ הַמַּיִם מֵעַל הָאָרֶץ הָלוֹךְ וָשׁוֹב וַיַּחְסְרוּ הַמַּיִם מִקְצֵה חֲמִשִּׁים וּמְאַת יוֹם',
    transliteration:
      'vaYaShuvu haMayim meAl haAretz halokh vaShov vaYachseru haMayim miqtzah chamishim uMeat yom',
    englishLiteral:
      'And-they-will-return the-waters from-over the-land, going and-returning; And-they-will-lack the-waters from-end-of fifty and-hundred day.',
    englishNatural:
      'And the waters returned from over the land, going and returning; and the waters lacked from the end of fifty and a hundred days.',
    kjv: 'And the waters returned from off the earth continually: and after the end of the hundred and fifty days the waters were abated.',
    lastReviewed: { name: 'Matt Gross', date: '2026-07-13' },
},
};
