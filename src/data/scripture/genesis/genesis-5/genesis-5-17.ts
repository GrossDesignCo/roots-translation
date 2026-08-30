import { type Verse } from '@/types';

export const genesis_5_17: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 5,
    verse: 17,
  },
  words: [
    {
      hebrew: 'וַיִּהְיוּ',
      transliteration: 'vaYihyu',
      englishLiteral: 'and-were',
      englishNatural: 'were',
      root: 'hayah',
      prefixes: ['va'],
      order: {
        hebrew: 1,
        english: 4,
      },
      morphology: {
        type: 'verb',
        person: '3rd',
        gender: 'masculine',
        number: 'plural',
        stem: 'qal',
        tense: 'imperfect',
      },
    },
    {
      hebrew: 'כָּל־',
      transliteration: 'kol-',
      englishLiteral: 'all-',
      englishNatural: 'And all',
      root: 'kol',
      order: {
        hebrew: 2,
        english: 1,
      },
      morphology: {
        type: 'adjective',
      },
    },
    {
      hebrew: 'יְמֵי',
      transliteration: 'yemey',
      englishLiteral: 'days-of',
      englishNatural: 'the days of',
      root: 'yom',
      suffixes: ['ey'],
      order: {
        hebrew: 3,
        english: 2,
      },
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'plural',
        state: 'construct',
      },
    },
    {
      hebrew: 'מַהֲלַלְאֵל',
      transliteration: 'Mahalalel',
      englishLiteral: 'Praise_of_God (Mahalaleel)',
      englishNatural: 'Praise-of-God (Mahalaleel)',
      root: 'mahalalel',
      order: {
        hebrew: 4,
        english: 3,
      },
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'singular',
      },
    },
    {
      hebrew: 'חֲמֵשׁ',
      transliteration: 'chamesh',
      englishLiteral: 'five',
      englishNatural: 'five',
      root: 'chamesh',
      order: 5,
      morphology: {
        type: 'numeral',
        gender: 'feminine',
        number: 'singular',
      },
    },
    {
      hebrew: 'וְתִשְׁעִים',
      transliteration: 'veTishim',
      englishLiteral: 'and-ninety',
      englishNatural: 'and ninety',
      root: 'tishim',
      prefixes: ['ve'],
      order: 6,
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
      order: 7,
      morphology: {
        type: 'noun',
        gender: 'feminine',
        number: 'singular',
      },
    },
    {
      hebrew: 'וּשְׁמֹנֶה',
      transliteration: 'uShmoneh',
      englishLiteral: 'and-eight',
      englishNatural: 'and eight',
      root: 'shmoneh',
      prefixes: ['u'],
      order: 8,
      morphology: {
        type: 'numeral',
        gender: 'feminine',
        number: 'singular',
      },
    },
    {
      hebrew: 'מֵאוֹת',
      transliteration: 'meot',
      englishLiteral: 'hundreds',
      englishNatural: 'hundred',
      root: 'meah_hundred',
      order: 9,
      morphology: {
        type: 'numeral',
        gender: 'feminine',
        number: 'plural',
        state: 'construct',
      },
    },
    {
      hebrew: 'שָׁנָה',
      transliteration: 'shanah',
      englishLiteral: 'year',
      englishNatural: 'years',
      root: 'shanah',
      order: 10,
      morphology: {
        type: 'noun',
        gender: 'feminine',
        number: 'singular',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'וַיָּמֹת',
      transliteration: 'vaYamot',
      englishLiteral: 'and-he-died',
      englishNatural: 'and he died',
      root: 'mut',
      prefixes: ['va'],
      order: 11,
      morphology: {
        type: 'verb',
        person: '3rd',
        gender: 'masculine',
        number: 'singular',
        stem: 'qal',
        tense: 'imperfect',
      },
      lineBreaksBefore: 1,
      grammarSuffix: {
        englishLiteral: '.',
        englishNatural: '.',
      },
      lineBreaksAfter: 1,
    },
  ],
  expectedTranslations: {
    hebrew:
      'וַיִּהְיוּ כָּל־יְמֵי מַהֲלַלְאֵל חֲמֵשׁ וְתִשְׁעִים שָׁנָה וּשְׁמֹנֶה מֵאוֹת שָׁנָה וַיָּמֹת',
    transliteration:
      'vaYihyu kol-yemey Mahalalel chamesh veTishim shanah uShmoneh meot shanah vaYamot',
    englishLiteral:
      'and-were all- days-of Praise_of_God (Mahalaleel) five and-ninety year and-eight hundreds year, and-he-died.',
    englishNatural:
      'And all the days of Praise-of-God (Mahalaleel) were five and ninety years and eight hundred years, and he died.',
    kjv: 'And all the days of Mahalaleel were eight hundred ninety and five years: and he died.',
    lastReviewed: { name: 'Matt Gross', date: '2025-12-06' },
},
};
