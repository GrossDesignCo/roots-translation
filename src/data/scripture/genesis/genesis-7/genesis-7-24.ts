import { Verse } from '@/types';

export const genesis_7_24: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 7,
    verse: 24,
  },
  words: [
    {
      hebrew: 'וַיִּגְבְּרוּ',
      transliteration: 'vayyiGberu',
      englishLiteral: 'and-they-will-prevail',
      englishNatural: 'prevailed',
      root: 'gavar',
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
    },
    {
      hebrew: 'הַמַּיִם',
      transliteration: 'hamMayim',
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
    },
    {
      hebrew: 'חֲמִשִּׁים',
      transliteration: 'chamishim',
      englishLiteral: 'fifty',
      englishNatural: 'fifty',
      root: 'chamishim',
      order: 5,
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
      order: 6,
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
      order: 7,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: '.',
        englishNatural: '.',
      },
    },
  ],
  expectedTranslations: {
    hebrew:
      'וַיִּגְבְּרוּ הַמַּיִם עַל־הָאָרֶץ חֲמִשִּׁים וּמְאַת יוֹם',
    transliteration:
      'vayyiGberu hamMayim al-haAretz chamishim uMeat yom',
    englishLiteral:
      'and-they-will-prevail the-waters over- the-land, fifty and-hundred day.',
    englishNatural:
      'And the waters prevailed over the land, fifty and a hundred days.',
    kjv: 'And the waters prevailed upon the earth an hundred and fifty days.',
    lastReviewed: { name: 'Matt Gross', date: '2026-06-21' },
},
};
