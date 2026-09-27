import { type Verse } from '@/types';

export const genesis_11_26: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 11,
    verse: 26,
  },
  words: [
    {
      hebrew: 'וַיְחִי־',
      transliteration: 'vaYechi-',
      englishLiteral: 'and-lived',
      englishNatural: 'lived',
      root: 'chayah',
      prefixes: ['va'],
      order: {
        hebrew: 1,
        english: 2,
      },
      morphology: {
        type: 'verb',
        person: '3rd',
        gender: 'masculine',
        number: 'singular',
        stem: 'qal',
        tense: 'imperfect',
      },
      lineBreaksBefore: {
        hebrew: 1,
      },
    },
    {
      hebrew: 'תֶרַח',
      transliteration: 'Terach',
      englishLiteral: 'Delay (Terah)',
      englishNatural: 'And Delay (Terah)',
      root: 'terach',
      order: {
        hebrew: 2,
        english: 1,
      },
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'singular',
      },
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      hebrew: 'שִׁבְעִים',
      transliteration: 'shivim',
      englishLiteral: 'seventy',
      englishNatural: 'seventy',
      root: 'shivim',
      order: 3,
      morphology: {
        type: 'numeral',
        gender: 'masculine',
        number: 'plural',
      },
    },
    {
      hebrew: 'שָׁנָה',
      transliteration: 'shanah',
      englishLiteral: 'year',
      englishNatural: 'years',
      root: 'shanah',
      order: 4,
      morphology: {
        type: 'noun',
        gender: 'feminine',
        number: 'singular',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
      lineBreaksAfter: 1,
    },
    {
      hebrew: 'וַיּוֹלֶד',
      transliteration: 'vaYoled',
      englishLiteral: 'and-he-birthed',
      englishNatural: 'and birthed',
      root: 'yalad',
      prefixes: ['va'],
      order: 5,
      morphology: {
        type: 'verb',
        person: '3rd',
        gender: 'masculine',
        number: 'singular',
        stem: 'hiphil',
        tense: 'imperfect',
      },
    },
    {
      // english 6 immediately before Abram at 7
      hebrew: 'אֶת־',
      transliteration: 'et-',
      englishLiteral: '↳',
      englishNatural: '',
      root: 'et',
      order: 6,
      morphology: {
        type: 'particle',
      },
    },
    {
      hebrew: 'אַבְרָם',
      transliteration: 'Abram',
      englishLiteral: 'Exalted-Father (Abram)',
      englishNatural: 'Exalted-Father (Abram)',
      root: 'abram',
      order: 7,
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'singular',
      },
      grammarSuffix: {
        englishNatural: ',',
      },
    },
    {
      // english 8 immediately before Nachor at 9
      hebrew: 'אֶת־',
      transliteration: 'et-',
      englishLiteral: '↳',
      englishNatural: '',
      root: 'et',
      order: 8,
      morphology: {
        type: 'particle',
      },
    },
    {
      hebrew: 'נָחוֹר',
      transliteration: 'Nachor',
      englishLiteral: 'Snorting (Nahor)',
      englishNatural: 'Snorting (Nahor)',
      root: 'nachor',
      order: 9,
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'singular',
      },
      grammarSuffix: {
        englishNatural: ',',
      },
    },
    {
      hebrew: 'וְאֶת־',
      transliteration: 'veEt-',
      englishLiteral: 'and-↳',
      englishNatural: 'and',
      root: 'et',
      prefixes: ['ve'],
      order: 10,
      morphology: {
        type: 'particle',
      },
    },
    {
      hebrew: 'הָרָן',
      transliteration: 'Haran',
      englishLiteral: 'Mountaineer (Haran)',
      englishNatural: 'Mountaineer (Haran)',
      root: 'haran',
      order: 11,
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'singular',
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
      'וַיְחִי־תֶרַח שִׁבְעִים שָׁנָה וַיּוֹלֶד אֶת־אַבְרָם אֶת־נָחוֹר וְאֶת־הָרָן',
    transliteration:
      'vaYechi-Terach shivim shanah vaYoled et-Abram et-Nachor veEt-Haran',
    englishLiteral:
      'and-lived Delay (Terah) seventy year, and-he-birthed ↳ Exalted-Father (Abram) ↳ Snorting (Nahor) and-↳ Mountaineer (Haran).',
    englishNatural:
      'And Delay (Terah) lived seventy years, and birthed Exalted-Father (Abram), Snorting (Nahor), and Mountaineer (Haran).',
    kjv: 'And Terah lived seventy years, and begat Abram, Nahor, and Haran.',
  },
};
