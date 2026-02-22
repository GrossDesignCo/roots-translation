import { Verse } from '@/types';

export const genesis_2_25: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 2,
    verse: 25,
  },
  words: [
    {
      hebrew: 'וַיִּהְיוּ',
      transliteration: 'vaYihyu',
      englishLiteral: 'And-they-were',
      englishNatural: 'were',
      root: 'hayah',
      prefixes: ['va'],
      order: {
        hebrew: 1,
        english: 2,
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
      hebrew: 'שְׁנֵיהֶם',
      transliteration: 'shenehem',
      englishLiteral: 'two-of-them',
      englishNatural: 'And the two of them',
      root: 'sheni',
      suffixes: ['hem'],
      order: {
        hebrew: 2,
        english: 1,
      },
      morphology: {
        gender: 'masculine',
        number: 'dual',
        type: 'numeral',
      },
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      hebrew: 'עֲרוּמִּים',
      transliteration: 'arummim',
      englishLiteral: 'naked',
      englishNatural: 'naked',
      root: 'arom',
      order: 3,
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'adjective',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'הָאָדָם',
      transliteration: 'haAdam',
      englishLiteral: 'the-Earthling (Adam)',
      englishNatural: 'the Earthling (Adam)',
      root: 'adam',
      prefixes: ['ha'],
      order: 4,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      hebrew: 'וְאִשְׁתּוֹ',
      transliteration: 'veIshto',
      englishLiteral: 'and-his-woman',
      englishNatural: 'and his woman',
      root: 'ishah',
      prefixes: ['ve'],
      suffixes: ['o'],
      order: 5,
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'וְלֹא',
      transliteration: 'veLo',
      englishLiteral: 'and-not',
      englishNatural: 'not',
      root: 'lo',
      prefixes: ['ve'],
      order: {
        hebrew: 6,
        english: 7,
      },
      morphology: {
        type: 'adverb',
      },
      grammarSuffix: {
        englishNatural: '.',
      },
      lineBreaksAfter: {
        english: 1,
      },
    },
    {
      hebrew: 'יִתְבּוֹשָׁשׁוּ׃',
      transliteration: 'yitboshashu',
      englishLiteral: 'were-ashamed',
      englishNatural: 'and were ashamed',
      root: 'bosh',
      order: {
        hebrew: 7,
        english: 6,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        person: '3rd',
        tense: 'imperfect',
        stem: 'hithpael',
        type: 'verb',
      },
      grammarSuffix: {
        englishLiteral: '.',
      },
      lineBreaksAfter: {
        hebrew: 1,
      },
    },
  ],
  expectedTranslations: {
    hebrew:
      'וַיִּהְיוּ שְׁנֵיהֶם עֲרוּמִּים הָאָדָם וְאִשְׁתּוֹ וְלֹא יִתְבּוֹשָׁשׁוּ׃',
    transliteration: 'vaYihyu shenehem arummim haAdam veIshto veLo yitboshashu',
    englishLiteral:
      'And-they-were two-of-them naked, the-Earthling (Adam) and-his-woman, and-not were-ashamed.',
    englishNatural:
      'And the two of them were naked, the Earthling (Adam) and his woman, and were ashamed not.',
    kjv: 'And they were both naked, the man and his wife, and were not ashamed.',
    lastReviewed: { name: 'Matt Gross', date: '2026-02-22' },
  },
};
