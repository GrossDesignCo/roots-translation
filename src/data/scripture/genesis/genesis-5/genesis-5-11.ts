import { type Verse } from '@/types';

export const genesis_5_11: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 5,
    verse: 11,
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
      hebrew: 'אֱנוֹשׁ',
      transliteration: 'Enosh',
      englishLiteral: 'Mortal_Man (Enosh)',
      englishNatural: 'Mortal-Man (Enosh)',
      root: 'enosh',
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
      root: 'meah',
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
      'וַיִּהְיוּ כָּל־יְמֵי אֱנוֹשׁ חֲמֵשׁ שָׁנִים וּתְשַׁע מֵאוֹת שָׁנָה וַיָּמֹת',
    transliteration:
      'vaYihyu kol-yemey Enosh chamesh shanim uTesha meot shanah vaYamot',
    englishLiteral:
      'and-were all- days-of Mortal_Man (Enosh) five years and-nine hundreds year, and-he-died.',
    englishNatural:
      'And all the days of Mortal-Man (Enosh) were five years and nine hundred years, and he died.',
    kjv: 'And all the days of Enos were nine hundred and five years: and he died.',
    lastReviewed: { name: 'Matt Gross', date: '2026-02-22' },
},
};
