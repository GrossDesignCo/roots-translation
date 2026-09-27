import { Verse } from '@/types';

export const genesis_10_26: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 10,
    verse: 26,
  },
  words: [
    {
      hebrew: 'וְיָקְטָן',
      transliteration: 'veYoqtan',
      englishLiteral: 'And-Small (Joktan)',
      englishNatural: 'And Small (Joktan)',
      root: 'yoqtan',
      prefixes: ['ve'],
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
      hebrew: 'אַלְמוֹדָד',
      transliteration: 'Almodad',
      englishLiteral: 'Almodad (Almodad)',
      englishNatural: 'Almodad (Almodad)',
      root: 'almodad',
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
      hebrew: 'וְאֶת־',
      transliteration: 'veEt-',
      englishLiteral: 'and-↳',
      englishNatural: 'and',
      root: 'et',
      prefixes: ['ve'],
      order: 5,
      morphology: {
        type: 'particle',
      },
    },
    {
      hebrew: 'שָׁלֶף',
      transliteration: 'Shalef',
      englishLiteral: 'Drawn (Sheleph)',
      englishNatural: 'Drawn (Sheleph)',
      root: 'shalef',
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
      hebrew: 'וְאֶת־',
      transliteration: 'veEt-',
      englishLiteral: 'and-↳',
      englishNatural: 'and',
      root: 'et',
      prefixes: ['ve'],
      order: 7,
      morphology: {
        type: 'particle',
      },
    },
    {
      hebrew: 'חֲצַרְמָוֶת',
      transliteration: 'Chatsarmavet',
      englishLiteral: 'Court_of_Death (Hazarmaveth)',
      englishNatural: 'Court-of-Death (Hazarmaveth)',
      root: 'chatsarmavet',
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
    },
    {
      hebrew: 'וְאֶת־',
      transliteration: 'veEt-',
      englishLiteral: 'and-↳',
      englishNatural: 'and',
      root: 'et',
      prefixes: ['ve'],
      order: 9,
      morphology: {
        type: 'particle',
      },
    },
    {
      hebrew: 'יָרַח',
      transliteration: 'Yarach',
      englishLiteral: 'Moon_cycle (Jerah)',
      englishNatural: 'Moon-cycle (Jerah)',
      root: 'yarach',
      order: 10,
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
    hebrew:
      'וְיָקְטָן יָלַד אֶת־אַלְמוֹדָד וְאֶת־שָׁלֶף וְאֶת־חֲצַרְמָוֶת וְאֶת־יָרַח',
    transliteration:
      'veYoqtan yalad et-Almodad veEt-Shalef veEt-Chatsarmavet veEt-Yarach',
    englishLiteral:
      'And-Small (Joktan) he-birthed ↳ Almodad (Almodad), and-↳ Drawn (Sheleph), and-↳ Court_of_Death (Hazarmaveth), and-↳ Moon_cycle (Jerah),',
    englishNatural:
      'And Small (Joktan) birthed Almodad (Almodad), and Drawn (Sheleph), and Court-of-Death (Hazarmaveth), and Moon-cycle (Jerah),',
    kjv: 'And Joktan begat Almodad, and Sheleph, and Hazarmaveth, and Jerah,',
  },
};
