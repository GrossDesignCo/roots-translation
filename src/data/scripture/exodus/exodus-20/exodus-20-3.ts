import { Verse } from '@/types';

export const exodus_20_3: Verse = {
  meta: {
    book: 'Exodus',
    chapter: 20,
    verse: 3,
  },
  words: [
    {
      hebrew: 'לֹ֣א',
      transliteration: 'lo',
      englishLiteral: 'Not',
      englishNatural: 'No',
      root: 'lo',
      order: 1,
      morphology: {
        type: 'adverb',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'יִהְיֶ֥ה־',
      transliteration: 'yihyeh-',
      englishLiteral: 'he-will-be-',
      englishNatural: 'will be',
      root: 'hayah',
      order: {
        hebrew: 2,
        english: 4,
      },
      morphology: {
        type: 'verb',
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'imperfect',
        stem: 'qal',
      },
    },
    {
      hebrew: 'לְךָ֛',
      transliteration: 'lekha',
      englishLiteral: 'to-you',
      englishNatural: 'to you',
      root: 'lamed',
      suffixes: ['ekha'],
      order: {
        hebrew: 3,
        english: 5,
      },
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'אֱלֹהִ֥ים',
      transliteration: 'Elohim',
      englishLiteral: 'gods',
      englishNatural: 'gods',
      root: 'eloah',
      suffixes: ['im'],
      order: {
        hebrew: 4,
        english: 3,
      },
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'plural',
      },
    },
    {
      hebrew: 'אֲחֵרִ֖ים',
      transliteration: 'acherim',
      englishLiteral: 'others',
      englishNatural: 'other',
      root: 'acher',
      suffixes: ['im'],
      order: {
        hebrew: 5,
        english: 2,
      },
      morphology: {
        type: 'adjective',
        gender: 'masculine',
        number: 'plural',
      },
    },
    {
      hebrew: 'עַל־',
      transliteration: 'al-',
      englishLiteral: 'over-',
      englishNatural: 'over',
      root: 'al',
      order: 6,
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'פָּנָֽי׃',
      transliteration: 'panai',
      englishLiteral: 'faces-my',
      englishNatural: 'my face',
      root: 'panim',
      suffixes: ['ai'],
      order: 7,
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'plural',
      },
      grammarSuffix: {
        englishLiteral: '.',
        englishNatural: '.',
      },
      lineBreaksAfter: 1,
    },
  ],
  expectedTranslations: {
    hebrew: 'לֹ֣א יִהְיֶ֥ה־לְךָ֛ אֱלֹהִ֥ים אֲחֵרִ֖ים עַל־פָּנָֽי׃',
    transliteration: 'lo yihyeh-lekha Elohim acherim al-panai',
    englishLiteral: 'Not he-will-be- to-you gods others over- faces-my.',
    englishNatural: 'No other gods will be to you over my face.',
    kjv: 'Thou shalt not have other gods before me.',
    lastReviewed: { name: 'Matt Gross', date: '2026-07-08' },
},
};
