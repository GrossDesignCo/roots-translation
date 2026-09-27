import { Verse } from '@/types';

export const genesis_10_24: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 10,
    verse: 24,
  },
  words: [
    {
      hebrew: 'וְאַרְפַּכְשַׁד',
      transliteration: 'veArpachshad',
      englishLiteral: 'And-Heal_Shaddai (Arpachshad)',
      englishNatural: 'And Heal-Shaddai (Arpachshad)',
      root: 'arpachshad',
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
      hebrew: 'שָׁלַח',
      transliteration: 'Shelach',
      englishLiteral: 'Sent (Shelah)',
      englishNatural: 'Sent (Shelah)',
      root: 'shelach',
      order: 4,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ';',
        englishNatural: ';',
      },
      lineBreaksAfter: 1,
    },
    {
      hebrew: 'וְשֶׁלַח',
      transliteration: 'veShelach',
      englishLiteral: 'and-Sent (Shelah)',
      englishNatural: 'and Sent (Shelah)',
      root: 'shelach',
      prefixes: ['ve'],
      order: 5,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      hebrew: 'יָלַד',
      transliteration: 'yalad',
      englishLiteral: 'he-birthed',
      englishNatural: 'birthed',
      root: 'yalad',
      order: 6,
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
      order: 7,
      morphology: {
        type: 'particle',
      },
    },
    {
      hebrew: 'עֵבֶר',
      transliteration: 'Ever',
      englishLiteral: 'Crossing (Eber)',
      englishNatural: 'Crossing (Eber)',
      root: 'eber',
      order: 8,
      morphology: {
        gender: 'masculine',
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
    hebrew: 'וְאַרְפַּכְשַׁד יָלַד אֶת־שָׁלַח וְשֶׁלַח יָלַד אֶת־עֵבֶר',
    transliteration: 'veArpachshad yalad et-Shelach veShelach yalad et-Ever',
    englishLiteral:
      'And-Heal_Shaddai (Arpachshad) he-birthed ↳ Sent (Shelah); and-Sent (Shelah) he-birthed ↳ Crossing (Eber).',
    englishNatural:
      'And Heal-Shaddai (Arpachshad) birthed Sent (Shelah); and Sent (Shelah) birthed Crossing (Eber).',
    kjv: 'And Arphaxad begat Salah; and Salah begat Eber.',
  },
};
