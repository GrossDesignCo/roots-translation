import { Verse } from '@/types';

export const genesis_9_29: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 9,
    verse: 29,
  },
  words: [
    {
      hebrew: 'וַיִּהְיוּ',
      transliteration: 'vayihyu',
      englishLiteral: 'And-were',
      englishNatural: 'were',
      root: 'hayah',
      prefixes: ['va'],
      suffixes: ['u'],
      order: {
        hebrew: 1,
        english: 4,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        person: '3rd',
        tense: 'imperfect',
        stem: 'qal',
        type: 'verb',
      },
      lineBreaksBefore: {
        hebrew: 1,
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
        type: 'noun',
      },
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      hebrew: 'יְמֵי־',
      transliteration: 'yemey-',
      englishLiteral: 'days-of-',
      englishNatural: 'the days of',
      root: 'yom',
      suffixes: ['ei'],
      order: {
        hebrew: 3,
        english: 2,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        state: 'construct',
        type: 'noun',
      },
    },
    {
      hebrew: 'נֹחַ',
      transliteration: 'Noach',
      englishLiteral: 'Rest (Noah)',
      englishNatural: 'Rest (Noah)',
      root: 'noach',
      order: {
        hebrew: 4,
        english: 3,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      hebrew: 'תְּשַׁע',
      transliteration: 'tesha',
      englishLiteral: 'nine',
      englishNatural: 'nine',
      root: 'tesha',
      order: 5,
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'numeral',
      },
    },
    {
      hebrew: 'מֵאוֹת',
      transliteration: 'meot',
      englishLiteral: 'hundreds',
      englishNatural: 'hundred',
      root: 'meah_hundred',
      suffixes: ['ot'],
      order: 6,
      morphology: {
        gender: 'feminine',
        number: 'plural',
        type: 'numeral',
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
        gender: 'feminine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      hebrew: 'וַחֲמִשִּׁים',
      transliteration: 'vachamishim',
      englishLiteral: 'and-fifty',
      englishNatural: 'and fifty',
      root: 'chamishim',
      prefixes: ['va'],
      order: 8,
      morphology: {
        gender: 'common',
        number: 'plural',
        type: 'numeral',
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
        gender: 'feminine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
      lineBreaksAfter: 1,
    },
    {
      hebrew: 'וַיָּמֹת',
      transliteration: 'vayamot',
      englishLiteral: 'and-he-died',
      englishNatural: 'and he died',
      root: 'mut',
      prefixes: ['va'],
      order: 10,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'imperfect',
        stem: 'qal',
        type: 'verb',
      },
      grammarSuffix: {
        englishLiteral: '.',
        englishNatural: '.',
      },
      lineBreaksAfter: 1,
    },
  ],
  expectedTranslations: {
    hebrew:
      'וַיִּהְיוּ כָּל־יְמֵי־נֹחַ תְּשַׁע מֵאוֹת שָׁנָה וַחֲמִשִּׁים שָׁנָה וַיָּמֹת',
    transliteration:
      'vayihyu kol-yemey-Noach tesha meot shanah vachamishim shanah vayamot',
    englishLiteral:
      'And-were all- days-of- Rest (Noah) nine hundreds year and-fifty year, and-he-died.',
    englishNatural:
      'And all the days of Rest (Noah) were nine hundred years and fifty years, and he died.',
    kjv: 'And all the days of Noah were nine hundred and fifty years: and he died.',
    lastReviewed: { name: 'Matt Gross', date: '2026-07-18' },
},
};
