import { Verse } from '@/types';

export const exodus_10_25: Verse = {
  meta: {
    book: 'Exodus',
    chapter: 10,
    verse: 25,
  },
  words: [
    {
      hebrew: 'וַיֹּאמֶר',
      transliteration: 'vaYomer',
      englishLiteral: 'And-said',
      englishNatural: 'said',
      root: 'amar',
      prefixes: ['ve'],
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
      grammarSuffix: {
        englishNatural: ',',
      },
    },
    {
      hebrew: 'מֹשֶׁה',
      transliteration: 'Moshe',
      englishLiteral: 'Drawn_Out (Moses)',
      englishNatural: 'And Drawn-Out (Moses)',
      root: 'moshe',
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
      hebrew: 'גַּם־',
      transliteration: 'gam-',
      englishLiteral: 'also-',
      englishNatural: 'Also',
      root: 'gam',
      order: 3,
      morphology: {
        type: 'adverb',
      },
      lineBreaksBefore: {
        english: 1,
      },
      grammarPrefix: {
        englishNatural: '"',
      },
    },
    {
      hebrew: 'אַתָּה',
      transliteration: 'atah',
      englishLiteral: 'you',
      englishNatural: 'you',
      root: 'atah',
      order: 4,
      morphology: {
        person: '2nd',
        number: 'singular',
        type: 'pronoun',
      },
    },
    {
      hebrew: 'תִּתֵּן',
      transliteration: 'titten',
      englishLiteral: 'will-give',
      englishNatural: 'will give',
      root: 'natan',
      order: 5,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '2nd',
        tense: 'imperfect',
        stem: 'qal',
        type: 'verb',
      },
    },
    {
      hebrew: 'בְּיָדֵנוּ',
      transliteration: 'beYadenu',
      englishLiteral: 'in-hand-our',
      englishNatural: 'in our hand',
      root: 'yad',
      prefixes: ['be'],
      suffixes: ['enu'],
      order: 6,
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      hebrew: 'זְבָחִים',
      transliteration: 'zevachim',
      englishLiteral: 'sacrifices',
      englishNatural: 'sacrifices',
      root: 'zevach',
      order: 7,
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun',
      },
    },
    {
      hebrew: 'וְעֹלֹת',
      transliteration: 'veOlot',
      englishLiteral: 'and-ascending_offerings',
      englishNatural: 'and ascending-offerings',
      root: 'olah',
      prefixes: ['ve'],
      order: 8,
      morphology: {
        gender: 'feminine',
        number: 'plural',
        type: 'noun',
      },
    },
    {
      hebrew: 'וְעָשִׂינוּ',
      transliteration: 'veAsinu',
      englishLiteral: 'and-will-make',
      englishNatural: 'and will make',
      root: 'asah',
      prefixes: ['ve'],
      order: 9,
      morphology: {
        gender: 'common',
        number: 'plural',
        person: '1st',
        tense: 'perfect',
        stem: 'qal',
        type: 'verb',
      },
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      hebrew: 'לַיהוָה',
      transliteration: 'laYHWH',
      englishLiteral: 'to-He_Who_Is (YHWH)',
      englishNatural: 'to He-Who-Is (YHWH)',
      root: 'yhwh',
      prefixes: ['la'],
      order: 10,
      morphology: {
        type: 'noun',
      },
    },
    {
      hebrew: 'אֱלֹהֵינוּ',
      transliteration: 'Eloheinu',
      englishLiteral: 'God-our',
      englishNatural: 'our God',
      root: 'eloah',
      order: 11,
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: '.',
        englishNatural: '."',
      },
      lineBreaksAfter: 1,
    },
  ],
  expectedTranslations: {
    hebrew:
      'וַיֹּאמֶר מֹשֶׁה גַּם־אַתָּה תִּתֵּן בְּיָדֵנוּ זְבָחִים וְעֹלֹת וְעָשִׂינוּ לַיהוָה אֱלֹהֵינוּ',
    transliteration:
      'vaYomer Moshe gam-atah titten beYadenu zevachim veOlot veAsinu laYHWH Eloheinu',
    englishLiteral:
      'And-said Drawn_Out (Moses) also- you will-give in-hand-our sacrifices and-ascending_offerings and-will-make to-He_Who_Is (YHWH) God-our.',
    englishNatural:
      'And Drawn-Out (Moses) said, "Also you will give in our hand sacrifices and ascending-offerings and will make to He-Who-Is (YHWH) our God."',
    kjv: 'And Moses said, Thou must give us also sacrifices and burnt offerings, that we may sacrifice unto the LORD our God.',
    lastReviewed: { name: 'Matt Gross', date: '2026-01-18' },
},
};
