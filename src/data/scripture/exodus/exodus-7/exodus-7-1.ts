import { Verse } from '@/types';

export const exodus_7_1: Verse = {
  meta: {
    book: 'Exodus',
    chapter: 7,
    verse: 1,
  },
  words: [
    {
      hebrew: 'וַיֹּאמֶר',
      transliteration: 'vaYomer',
      englishLiteral: 'And-said',
      englishNatural: 'said',
      root: 'amar',
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
      hebrew: 'יְהוָה',
      transliteration: 'YHWH',
      englishLiteral: 'He_Who_Is (YHWH)',
      englishNatural: 'And He-Who-Is (YHWH)',
      root: 'yhwh',
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
      hebrew: 'מֹשֶׁה',
      transliteration: 'Moshe',
      englishLiteral: 'Drawn_Out (Moses)',
      englishNatural: 'Drawn-Out (Moses)',
      root: 'moshe',
      order: 4,
      morphology: {
        type: 'noun',
      },
      grammarSuffix: {
        englishNatural: ',',
      },
    },
    {
      hebrew: 'רְאֵה',
      transliteration: 'reeh',
      englishLiteral: 'see',
      englishNatural: 'See',
      root: 'raah',
      order: 5,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '2nd',
        tense: 'imperative',
        stem: 'qal',
        type: 'verb',
      },
      grammarPrefix: {
        englishLiteral: '"',
        englishNatural: '"',
      },
      grammarSuffix: {
        englishNatural: ',',
      },
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      hebrew: 'נְתַתִּיךָ',
      transliteration: 'netaticha',
      englishLiteral: 'I-give-you',
      englishNatural: 'I have given you',
      root: 'natan',
      suffixes: ['kha'],
      order: 6,
      morphology: {
        gender: 'common',
        number: 'singular',
        person: '1st',
        tense: 'perfect',
        stem: 'qal',
        type: 'verb',
      },
      grammarSuffix: {
        englishNatural: ',',
      },
    },
    {
      hebrew: 'אֱלֹהִים',
      transliteration: 'Elohim',
      englishLiteral: 'Gods',
      englishNatural: 'God',
      root: 'eloah',
      suffixes: ['im'],
      order: 7,
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun',
      },
    },
    {
      hebrew: 'לְפַרְעֹה',
      transliteration: 'leParoh',
      englishLiteral: 'to-Pharaoh',
      englishNatural: 'to Pharaoh',
      root: 'paroh',
      prefixes: ['la'],
      order: 8,
      morphology: {
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ';',
        englishNatural: ';',
      },
    },
    {
      hebrew: 'וְאַהֲרֹן',
      transliteration: 'veAharon',
      englishLiteral: 'and-Light_Bringer (Aaron)',
      englishNatural: 'and Light-Bringer (Aaron)',
      root: 'aharon',
      prefixes: ['ve'],
      order: 9,
      morphology: {
        type: 'noun',
      },
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      hebrew: 'אָחִיךָ',
      transliteration: 'achicha',
      englishLiteral: 'brother-your',
      englishNatural: 'your brother',
      root: 'ach',
      suffixes: ['kha'],
      order: 10,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishNatural: ',',
      },
    },
    {
      hebrew: 'יִהְיֶה',
      transliteration: 'yihyeh',
      englishLiteral: 'will-be',
      englishNatural: 'will be',
      root: 'hayah',
      order: 11,
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
      hebrew: 'נְבִיאֶךָ',
      transliteration: 'neviekha',
      englishLiteral: 'prophet-your',
      englishNatural: 'your prophet',
      root: 'navi',
      suffixes: ['kha'],
      order: 12,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: '."',
        englishNatural: '."',
      },
      lineBreaksAfter: 1,
    },
  ],
  expectedTranslations: {
    hebrew:
      'וַיֹּאמֶר יְהוָה אֶל־מֹשֶׁה רְאֵה נְתַתִּיךָ אֱלֹהִים לְפַרְעֹה וְאַהֲרֹן אָחִיךָ יִהְיֶה נְבִיאֶךָ',
    transliteration:
      'vaYomer YHWH el-Moshe reeh netaticha Elohim leParoh veAharon achicha yihyeh neviekha',
    englishLiteral:
      'And-said He_Who_Is (YHWH) to- Drawn_Out (Moses) "see I-give-you Gods to-Pharaoh; and-Light_Bringer (Aaron) brother-your will-be prophet-your."',
    englishNatural:
      'And He-Who-Is (YHWH) said to Drawn-Out (Moses), "See, I have given you, God to Pharaoh; and Light-Bringer (Aaron) your brother, will be your prophet."',
    kjv: 'And the LORD said unto Moses, See, I have made thee a god to Pharaoh: and Aaron thy brother shall be thy prophet.',
    lastReviewed: { name: 'Matt Gross', date: '2026-01-18' },
},
};
