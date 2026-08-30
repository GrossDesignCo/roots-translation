import { Verse } from '@/types';

export const micah_1_9: Verse = {
  meta: {
    book: 'Micah',
    chapter: 1,
    verse: 9,
  },
  words: [
    {
      hebrew: 'כִּי',
      transliteration: 'ki',
      englishLiteral: 'that',
      englishNatural: 'that',
      root: 'ki',
      order: 1,
      morphology: {
        type: 'conjunction',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'אֲנוּשָׁה',
      transliteration: 'anushah',
      englishLiteral: 'incurable',
      englishNatural: 'incurable',
      root: 'anush',
      order: 2,
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'adjective',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'מַכּוֹתֶיהָ',
      transliteration: 'makkoteiha',
      englishLiteral: 'blows-her',
      englishNatural: 'her blows',
      root: 'makkah',
      suffixes: ['eha'],
      order: 3,
      morphology: {
        gender: 'feminine',
        number: 'plural',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ';',
        englishNatural: ';',
      },
      lineBreaksAfter: {
        english: 1,
      },
    },
    {
      hebrew: 'כִּי־',
      transliteration: 'ki-',
      englishLiteral: 'that-',
      englishNatural: 'that',
      root: 'ki',
      order: 4,
      morphology: {
        type: 'conjunction',
      },
    },
    {
      hebrew: 'בָאָה',
      transliteration: 'baah',
      englishLiteral: 'she-has-come',
      englishNatural: 'she has come',
      root: 'bo',
      order: 5,
      morphology: {
        gender: 'feminine',
        number: 'singular',
        person: '3rd',
        tense: 'perfect',
        stem: 'qal',
        type: 'verb',
      },
    },
    {
      hebrew: 'עַד־',
      transliteration: 'ad-',
      englishLiteral: 'until-',
      englishNatural: 'until',
      root: 'ad',
      order: 6,
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'יְהוּדָה',
      transliteration: 'Yehudah',
      englishLiteral: 'Praise (Judah)',
      englishNatural: 'Praise (Judah)',
      root: 'yehudah',
      order: 7,
      morphology: {
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ';',
        englishNatural: ';',
      },
      lineBreaksAfter: {
        english: 1,
      },
    },
    {
      hebrew: 'נָגַע',
      transliteration: 'naga',
      englishLiteral: 'he-has-touched',
      englishNatural: 'he has touched',
      root: 'naga',
      order: 8,
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
      hebrew: 'עַד־',
      transliteration: 'ad-',
      englishLiteral: 'until-',
      englishNatural: 'until',
      root: 'ad',
      order: 9,
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'שַׁעַר',
      transliteration: 'shaar',
      englishLiteral: 'gate-of',
      englishNatural: 'the gate of',
      root: 'shaar',
      order: 10,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        state: 'construct',
        type: 'noun',
      },
    },
    {
      hebrew: 'עַמִּי',
      transliteration: 'ammi',
      englishLiteral: 'people-my',
      englishNatural: 'my people',
      root: 'am',
      suffixes: ['i_possessive'],
      order: 11,
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
      hebrew: 'עַד־',
      transliteration: 'ad-',
      englishLiteral: 'until-',
      englishNatural: 'until',
      root: 'ad',
      order: 12,
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'יְרוּשָׁלִָם',
      transliteration: 'Yerushalayim',
      englishLiteral: 'Foundation_of_Peace (Jerusalem)',
      englishNatural: 'Foundation-of-Peace (Jerusalem)',
      root: 'yerushalayim',
      order: 13,
      morphology: {
        type: 'noun',
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
    hebrew:
      'כִּי אֲנוּשָׁה מַכּוֹתֶיהָ כִּי־בָאָה עַד־יְהוּדָה נָגַע עַד־שַׁעַר עַמִּי עַד־יְרוּשָׁלִָם׃',
    transliteration:
      'ki anushah makkoteiha ki-baah ad-Yehudah naga ad-shaar ammi ad-Yerushalayim',
    englishLiteral:
      'that incurable, blows-her; that- she-has-come until- Praise (Judah); he-has-touched until- gate-of people-my, until- Foundation_of_Peace (Jerusalem).',
    englishNatural:
      'that incurable, her blows; that she has come until Praise (Judah); he has touched until the gate of my people, until Foundation-of-Peace (Jerusalem).',
    kjv: 'For her wound is incurable; for it is come unto Judah; he is come unto the gate of my people, even to Jerusalem.',
  },
};
