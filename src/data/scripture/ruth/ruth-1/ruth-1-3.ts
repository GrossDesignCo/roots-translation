import { Verse } from '@/types';

export const ruth_1_3: Verse = {
  meta: {
    book: 'Ruth',
    chapter: 1,
    verse: 3,
  },
  words: [
    {
      hebrew: 'וַיָּ֥מָת',
      transliteration: 'vaYamat',
      englishLiteral: 'And-died',
      englishNatural: 'died',
      root: 'mut',
      prefixes: ['va'],
      order: {
        hebrew: 1,
        english: 4,
      },
      morphology: {
        type: 'verb',
        tense: 'imperfect',
        person: '3rd',
        gender: 'masculine',
        number: 'singular',
        stem: 'qal',
      },
      lineBreaksBefore: {
        hebrew: 1,
      },
      grammarSuffix: {
        englishNatural: ',',
      },
    },
    {
      hebrew: 'אֱלִימֶ֖לֶךְ',
      transliteration: 'Elimelekh',
      englishLiteral: 'My_God_King (Elimelech)',
      englishNatural: 'And My-God-King (Elimelech)',
      root: 'elimelekh',
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
      hebrew: 'אִ֣ישׁ',
      transliteration: 'ish',
      englishLiteral: 'man-of',
      englishNatural: 'the man of',
      root: 'ish',
      order: {
        hebrew: 3,
        english: 2,
      },
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'singular',
        state: 'construct',
      },
    },
    {
      hebrew: 'נָעֳמִ֑י',
      transliteration: 'Naomi',
      englishLiteral: 'Pleasant_My (Naomi)',
      englishNatural: 'My-Pleasant (Naomi)',
      root: 'naomi',
      order: {
        hebrew: 4,
        english: 3,
      },
      morphology: {
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ';',
      },
    },
    {
      hebrew: 'וַתִּשָּׁאֵ֥ר',
      transliteration: 'vatTishare',
      englishLiteral: 'and-was-left',
      englishNatural: 'was left',
      root: 'shaar_remain',
      prefixes: ['va'],
      order: {
        hebrew: 5,
        english: 6,
      },
      morphology: {
        type: 'verb',
        tense: 'imperfect',
        person: '3rd',
        gender: 'feminine',
        number: 'singular',
        stem: 'niphal',
      },
      lineBreaksBefore: {
        english: 1,
      },
      grammarSuffix: {
        englishNatural: ',',
      },
    },
    {
      hebrew: 'הִ֖יא',
      transliteration: 'hi',
      englishLiteral: 'she',
      englishNatural: 'and she',
      root: 'hi',
      order: {
        hebrew: 6,
        english: 5,
      },
      morphology: {
        type: 'pronoun',
      },
      grammarSuffix: {
        englishLiteral: ';',
      },
    },
    {
      hebrew: 'וּשְׁנֵ֥י',
      transliteration: 'usheney',
      englishLiteral: 'and-two-of',
      englishNatural: 'and the two of',
      root: 'shenayim',
      prefixes: ['u'],
      order: 7,
      morphology: {
        type: 'numeral',
        state: 'construct',
      },
    },
    {
      hebrew: 'בָנֶֽיהָ׃',
      transliteration: 'vaneha',
      englishLiteral: 'sons-her',
      englishNatural: 'her sons',
      root: 'ben',
      suffixes: ['ha_feminine'],
      order: 8,
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'plural',
        state: 'construct',
      },
      grammarSuffix: {
        hebrew: '׃',
        englishLiteral: '.',
        englishNatural: '.',
      },
      lineBreaksAfter: 1,
    },
  ],
  expectedTranslations: {
    hebrew: 'וַיָּ֥מָת אֱלִימֶ֖לֶךְ אִ֣ישׁ נָעֳמִ֑י וַתִּשָּׁאֵ֥ר הִ֖יא וּשְׁנֵ֥י בָנֶֽיהָ׃',
    transliteration:
      'vaYamat Elimelekh ish Naomi vatTishare hi usheney vaneha',
    englishLiteral:
      'And-died My_God_King (Elimelech) man-of Pleasant_My (Naomi); and-was-left she; and-two-of sons-her.',
    englishNatural:
      'And My-God-King (Elimelech) the man of My-Pleasant (Naomi) died, and she was left, and the two of her sons.',
    kjv: 'And Elimelech Naomis husband died; and she was left, and her two sons.',
    lastReviewed: { name: 'Matt Gross', date: '2026-02-03' },
},
};
