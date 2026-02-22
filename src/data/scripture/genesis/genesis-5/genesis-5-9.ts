import { type Verse } from '@/types';

export const genesis_5_9: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 5,
    verse: 9,
  },
  words: [
    {
      hebrew: 'וַיְחִי',
      transliteration: 'vaYechi',
      englishLiteral: 'and-lived',
      englishNatural: 'lived',
      root: 'chayah',
      prefixes: ['va'],
      order: {
        hebrew: 1,
        english: 2,
      },
      morphology: {
        type: 'verb',
        person: '3rd',
        gender: 'masculine',
        number: 'singular',
        stem: 'qal',
        tense: 'imperfect',
      },
      lineBreaksBefore: {
        hebrew: 1,
      },
    },
    {
      hebrew: 'אֱנוֹשׁ',
      transliteration: 'Enosh',
      englishLiteral: 'Mortal_Man (Enosh)',
      englishNatural: 'And Mortal-Man (Enosh)',
      root: 'enosh',
      order: {
        hebrew: 2,
        english: 1,
      },
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'singular',
      },
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      hebrew: 'תִּשְׁעִים',
      transliteration: 'tishim',
      englishLiteral: 'ninety',
      englishNatural: 'ninety',
      root: 'tishim',
      order: 3,
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
      order: 4,
      morphology: {
        type: 'noun',
        gender: 'feminine',
        number: 'singular',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
      lineBreaksAfter: 1,
    },
    {
      hebrew: 'וַיּוֹלֶד',
      transliteration: 'vaYoled',
      englishLiteral: 'and-he-birthed',
      englishNatural: 'and birthed',
      root: 'yalad',
      prefixes: ['va'],
      order: 5,
      morphology: {
        type: 'verb',
        person: '3rd',
        gender: 'masculine',
        number: 'singular',
        stem: 'hiphil',
        tense: 'imperfect',
      },
    },
    {
      hebrew: 'אֶת־',
      transliteration: 'et-',
      englishLiteral: '↳',
      englishNatural: '',
      root: 'et',
      order: 6,
      morphology: {
        type: 'particle',
      },
    },
    {
      hebrew: 'קֵינָן',
      transliteration: 'Qeynan',
      englishLiteral: 'Nest (Cainan)',
      englishNatural: 'Nest (Cainan)',
      root: 'qeynan',
      order: 7,
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'singular',
      },
      grammarSuffix: {
        englishLiteral: '.',
        englishNatural: '.',
      },
      lineBreaksAfter: 1,
    },
  ],
  expectedTranslations: {
    hebrew: 'וַיְחִי אֱנוֹשׁ תִּשְׁעִים שָׁנָה וַיּוֹלֶד אֶת־קֵינָן',
    transliteration: 'vaYechi Enosh tishim shanah vaYoled et-Qeynan',
    englishLiteral:
      'and-lived Mortal_Man (Enosh) ninety year, and-he-birthed ↳ Nest (Cainan).',
    englishNatural:
      'And Mortal-Man (Enosh) lived ninety years, and birthed Nest (Cainan).',
    kjv: 'And Enos lived ninety years, and begat Cainan:',
    lastReviewed: { name: 'Matt Gross', date: '2026-02-22' },
},
};
