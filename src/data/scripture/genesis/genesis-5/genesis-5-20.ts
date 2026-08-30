import { type Verse } from '@/types';

export const genesis_5_20: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 5,
    verse: 20,
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
      hebrew: 'יָרֶד',
      transliteration: 'Yared',
      englishLiteral: 'Descending (Jared)',
      englishNatural: 'Descending (Jared)',
      root: 'yared',
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
      hebrew: 'שְׁתַּיִם',
      transliteration: 'shtayim',
      englishLiteral: 'two',
      englishNatural: 'two',
      root: 'shnayim',
      order: 5,
      morphology: {
        type: 'numeral',
        gender: 'feminine',
        number: 'dual',
      },
    },
    {
      hebrew: 'וְשִׁשִּׁים',
      transliteration: 'veShishim',
      englishLiteral: 'and-sixty',
      englishNatural: 'and sixty',
      root: 'shishim',
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
      hebrew: 'וּתְשַׁע',
      transliteration: 'uTesha',
      englishLiteral: 'and-nine',
      englishNatural: 'and nine',
      root: 'tesha',
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
      'וַיִּהְיוּ כָּל־יְמֵי יָרֶד שְׁתַּיִם וְשִׁשִּׁים שָׁנָה וּתְשַׁע מֵאוֹת שָׁנָה וַיָּמֹת',
    transliteration:
      'vaYihyu kol-yemey Yared shtayim veShishim shanah uTesha meot shanah vaYamot',
    englishLiteral:
      'and-were all- days-of Descending (Jared) two and-sixty year and-nine hundreds year, and-he-died.',
    englishNatural:
      'And all the days of Descending (Jared) were two and sixty years and nine hundred years, and he died.',
    kjv: 'And all the days of Jared were nine hundred sixty and two years: and he died.',
    lastReviewed: { name: 'Matt Gross', date: '2025-12-06' },
},
};
