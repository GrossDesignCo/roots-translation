import { Verse } from '@/types';

export const genesis_8_7: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 8,
    verse: 7,
  },
  words: [
    {
      hebrew: 'וַיְשַׁלַּח',
      transliteration: 'vaYeshalach',
      englishLiteral: 'And-he-sent',
      englishNatural: 'And he sent',
      root: 'shalach',
      prefixes: ['va'],
      order: 1,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'imperfect',
        stem: 'piel',
        type: 'verb',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'אֶת־',
      transliteration: 'et-',
      englishLiteral: '↳',
      englishNatural: '',
      root: 'et',
      order: 2,
      morphology: {
        type: 'particle',
      },
    },
    {
      hebrew: 'הָעֹרֵב',
      transliteration: 'haOrev',
      englishLiteral: 'the-raven',
      englishNatural: 'the raven',
      root: 'orev',
      prefixes: ['ha'],
      order: 3,
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
      hebrew: 'וַיֵּצֵא',
      transliteration: 'vaYetze',
      englishLiteral: 'And-he-brought_out',
      englishNatural: 'and it went-out',
      root: 'yatsa',
      prefixes: ['va'],
      order: 4,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'imperfect',
        stem: 'qal',
        type: 'verb',
      },
    },
    {
      hebrew: 'יָצוֹא',
      transliteration: 'yatso',
      englishLiteral: 'bringing_out',
      englishNatural: 'going-out',
      root: 'yatsa',
      order: 5,
      morphology: {
        tense: 'infinitive_absolute',
        type: 'verb',
      },
    },
    {
      hebrew: 'וָשׁוֹב',
      transliteration: 'vaShuv',
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
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'עַד־',
      transliteration: 'ad-',
      englishLiteral: 'until-',
      englishNatural: 'until',
      root: 'ad',
      order: 7,
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'יָבֹשׁ',
      transliteration: 'yavosh',
      englishLiteral: 'withered',
      englishNatural: 'dried',
      root: 'yavesh',
      order: {
        hebrew: 8,
        english: 9,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'imperfect',
        stem: 'qal',
        type: 'verb',
      },
    },
    {
      hebrew: 'הַמַּיִם',
      transliteration: 'haMayim',
      englishLiteral: 'the-waters',
      englishNatural: 'the waters',
      root: 'mayim',
      prefixes: ['ha'],
      order: {
        hebrew: 9,
        english: 8,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun',
      },
    },
    {
      hebrew: 'מֵעַל',
      transliteration: 'meAl',
      englishLiteral: 'from-over',
      englishNatural: 'from over',
      root: 'al',
      prefixes: ['me'],
      order: 10,
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
      order: 11,
      morphology: {
        gender: 'feminine',
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
      'וַיְשַׁלַּח אֶת־הָעֹרֵב וַיֵּצֵא יָצוֹא וָשׁוֹב עַד־יָבֹשׁ הַמַּיִם מֵעַל הָאָרֶץ',
    transliteration:
      'vaYeshalach et-haOrev vaYetze yatso vaShuv ad-yavosh haMayim meAl haAretz',
    englishLiteral:
      'And-he-sent ↳ the-raven, And-he-brought_out bringing_out and-returning, until- withered the-waters from-over the-land.',
    englishNatural:
      'And he sent the raven, and it went-out going-out and returning, until the waters dried from over the land.',
    kjv: 'And he sent forth a raven, which went forth to and fro, until the waters were dried up from off the earth.',
    lastReviewed: { name: 'Matt Gross', date: '2026-07-13' },
},
};
