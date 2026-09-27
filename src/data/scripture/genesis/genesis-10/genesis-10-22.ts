import { Verse } from '@/types';

export const genesis_10_22: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 10,
    verse: 22,
  },
  words: [
    {
      hebrew: 'בְּנֵי',
      transliteration: 'benei',
      englishLiteral: 'Sons-of',
      englishNatural: 'The sons of',
      root: 'ben',
      suffixes: ['ei'],
      order: 1,
      morphology: {
        gender: 'masculine',
        number: 'plural',
        state: 'construct',
        type: 'noun',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'שֵׁם',
      transliteration: 'Shem',
      englishLiteral: 'Name (Shem)',
      englishNatural: 'Name (Shem)',
      root: 'shem',
      order: 2,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ':',
        englishNatural: ':',
      },
      lineBreaksAfter: 1,
    },
    {
      hebrew: 'עֵילָם',
      transliteration: 'Elam',
      englishLiteral: 'Hidden (Elam)',
      englishNatural: 'Hidden (Elam)',
      root: 'elam',
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
      hebrew: 'וְאַשּׁוּר',
      transliteration: 'veAshur',
      englishLiteral: 'and-Steppe (Assyria)',
      englishNatural: 'and Steppe (Assyria)',
      root: 'ashur',
      prefixes: ['ve'],
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
      hebrew: 'וְאַרְפַּכְשַׁד',
      transliteration: 'veArpachshad',
      englishLiteral: 'and-Heal_Shaddai (Arpachshad)',
      englishNatural: 'and Heal-Shaddai (Arpachshad)',
      root: 'arpachshad',
      prefixes: ['ve'],
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
      hebrew: 'וְלוּד',
      transliteration: 'veLud',
      englishLiteral: 'and-Lud (Lud)',
      englishNatural: 'and Lud (Lud)',
      root: 'lud',
      prefixes: ['ve'],
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
      hebrew: 'וַאֲרָם',
      transliteration: 'vaAram',
      englishLiteral: 'and-High (Aram)',
      englishNatural: 'and High (Aram)',
      root: 'aram',
      prefixes: ['va'],
      order: 7,
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
    hebrew: 'בְּנֵי שֵׁם עֵילָם וְאַשּׁוּר וְאַרְפַּכְשַׁד וְלוּד וַאֲרָם',
    transliteration: 'benei Shem Elam veAshur veArpachshad veLud vaAram',
    englishLiteral:
      'Sons-of Name (Shem): Hidden (Elam), and-Steppe (Assyria), and-Heal_Shaddai (Arpachshad), and-Lud (Lud), and-High (Aram).',
    englishNatural:
      'The sons of Name (Shem): Hidden (Elam), and Steppe (Assyria), and Heal-Shaddai (Arpachshad), and Lud (Lud), and High (Aram).',
    kjv: 'The children of Shem; Elam, and Asshur, and Arphaxad, and Lud, and Aram.',
  },
};
