import { type Verse } from '@/types';

export const genesis_5_14: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 5,
    verse: 14,
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
      hebrew: 'קֵינָן',
      transliteration: 'Qeynan',
      englishLiteral: 'Nest (Cainan)',
      englishNatural: 'Nest (Cainan)',
      root: 'qeynan',
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
      hebrew: 'עֶשֶׂר',
      transliteration: 'eser',
      englishLiteral: 'ten',
      englishNatural: 'ten',
      root: 'esreh',
      order: 5,
      morphology: {
        type: 'numeral',
        gender: 'feminine',
        number: 'singular',
      },
    },
    {
      hebrew: 'שָׁנִים',
      transliteration: 'shanim',
      englishLiteral: 'years',
      englishNatural: 'years',
      root: 'shanah',
      suffixes: ['im'],
      order: 6,
      morphology: {
        type: 'noun',
        gender: 'feminine',
        number: 'plural',
      },
    },
    {
      hebrew: 'וּתְשַׁע',
      transliteration: 'uTesha',
      englishLiteral: 'and-nine',
      englishNatural: 'and nine',
      root: 'tesha',
      prefixes: ['u'],
      order: 7,
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
      order: 8,
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
      order: 9,
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
      order: 10,
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
      'וַיִּהְיוּ כָּל־יְמֵי קֵינָן עֶשֶׂר שָׁנִים וּתְשַׁע מֵאוֹת שָׁנָה וַיָּמֹת',
    transliteration:
      'vaYihyu kol-yemey Qeynan eser shanim uTesha meot shanah vaYamot',
    englishLiteral:
      'and-were all- days-of Nest (Cainan) ten years and-nine hundreds year, and-he-died.',
    englishNatural:
      'And all the days of Nest (Cainan) were ten years and nine hundred years, and he died.',
    kjv: 'And all the days of Cainan were nine hundred and ten years: and he died.',
    lastReviewed: { name: 'Matt Gross', date: '2025-12-06' },
},
};
