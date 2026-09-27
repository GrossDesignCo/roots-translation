import { Verse } from '@/types';

export const genesis_10_15: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 10,
    verse: 15,
  },
  words: [
    {
      hebrew: 'וּכְנַעַן',
      transliteration: 'uKenaan',
      englishLiteral: 'And-Low (Canaan)',
      englishNatural: 'And Low (Canaan)',
      root: 'kenaan',
      prefixes: ['u'],
      order: 1,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'יָלַד',
      transliteration: 'yalad',
      englishLiteral: 'he-birthed',
      englishNatural: 'birthed',
      root: 'yalad',
      order: 2,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'perfect',
        stem: 'qal',
        type: 'verb',
      },
    },
    {
      hebrew: 'אֶת־',
      transliteration: 'et-',
      englishLiteral: '↳',
      englishNatural: '',
      root: 'et',
      order: 3,
      morphology: {
        type: 'particle',
      },
    },
    {
      hebrew: 'צִידֹן',
      transliteration: 'Tsidon',
      englishLiteral: 'Fishery (Sidon)',
      englishNatural: 'Fishery (Sidon)',
      root: 'tsidon',
      order: 4,
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
      hebrew: 'בְּכֹרוֹ',
      transliteration: 'bekhoro',
      englishLiteral: 'firstborn-his',
      englishNatural: 'his firstborn',
      root: 'bekhor',
      suffixes: ['o'],
      order: 5,
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
      hebrew: 'וְאֶת־',
      transliteration: 'veEt-',
      englishLiteral: 'and-↳',
      englishNatural: 'and',
      root: 'et',
      prefixes: ['ve'],
      order: 6,
      morphology: {
        type: 'particle',
      },
    },
    {
      hebrew: 'חֵת',
      transliteration: 'Chet',
      englishLiteral: 'Heth (Heth)',
      englishNatural: 'Heth (Heth)',
      root: 'chet',
      order: 7,
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
  ],
  expectedTranslations: {
    hebrew: 'וּכְנַעַן יָלַד אֶת־צִידֹן בְּכֹרוֹ וְאֶת־חֵת',
    transliteration: 'uKenaan yalad et-Tsidon bekhoro veEt-Chet',
    englishLiteral:
      'And-Low (Canaan) he-birthed ↳ Fishery (Sidon), firstborn-his, and-↳ Heth (Heth),',
    englishNatural:
      'And Low (Canaan) birthed Fishery (Sidon), his firstborn, and Heth (Heth),',
    kjv: 'And Canaan begat Sidon his firstborn, and Heth,',
  },
};
