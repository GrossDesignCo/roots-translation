import { Verse } from '@/types';

export const exodus_7_8: Verse = {
  meta: {
    book: 'Exodus',
    chapter: 7,
    verse: 8,
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
      hebrew: 'וְאֶל־',
      transliteration: 'veEl-',
      englishLiteral: 'and-to-',
      englishNatural: 'and to',
      root: 'el',
      prefixes: ['ve'],
      order: 5,
      morphology: {
        type: 'preposition',
      },
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      hebrew: 'אַהֲרֹן',
      transliteration: 'Aharon',
      englishLiteral: 'Light_Bringer (Aaron)',
      englishNatural: 'Light-Bringer (Aaron)',
      root: 'aharon',
      order: 6,
      morphology: {
        type: 'noun',
      },
      grammarSuffix: {
        englishNatural: ',',
      },
    },
    {
      hebrew: 'לֵאמֹר',
      transliteration: 'lemor',
      englishLiteral: 'to-say',
      englishNatural: 'saying',
      root: 'lemor',
      order: 7,
      morphology: {
        tense: 'infinitive_construct',
        stem: 'qal',
        type: 'verb',
      },
      grammarSuffix: {
        englishLiteral: ':',
        englishNatural: ',',
      },
      lineBreaksAfter: 1,
    },
  ],
  expectedTranslations: {
    hebrew: 'וַיֹּאמֶר יְהוָה אֶל־מֹשֶׁה וְאֶל־אַהֲרֹן לֵאמֹר',
    transliteration: 'vaYomer YHWH el-Moshe veEl-Aharon lemor',
    englishLiteral:
      'And-said He_Who_Is (YHWH) to- Drawn_Out (Moses) and-to- Light_Bringer (Aaron) to-say:',
    englishNatural:
      'And He-Who-Is (YHWH) said to Drawn-Out (Moses), and to Light-Bringer (Aaron), saying,',
    kjv: 'And the LORD spake unto Moses and unto Aaron, saying,',
    lastReviewed: { name: 'Matt Gross', date: '2026-01-18' },
},
};
