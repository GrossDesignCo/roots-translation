import { Verse } from '@/types';

export const exodus_20_15: Verse = {
  meta: {
    book: 'Exodus',
    chapter: 20,
    verse: 15,
  },
  words: [
    {
      hebrew: 'לֹ֣א',
      transliteration: 'lo',
      englishLiteral: 'Not',
      englishNatural: 'not',
      root: 'lo',
      order: {
        hebrew: 1,
        english: 2,
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
      hebrew: 'תִּגְנֹֽב׃',
      transliteration: 'tignov',
      englishLiteral: 'you-will-steal',
      englishNatural: 'You will steal',
      root: 'ganav',
      prefixes: ['ti'],
      order: {
        hebrew: 2,
        english: 1,
      },
      morphology: {
        type: 'verb',
        number: 'singular',
        person: '2nd',
        tense: 'imperfect',
        stem: 'qal',
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
    hebrew: 'לֹ֣א תִּגְנֹֽב׃',
    transliteration: 'lo tignov',
    englishLiteral: 'Not you-will-steal.',
    englishNatural: 'You will steal not.',
    kjv: 'Thou shalt not steal.',
    lastReviewed: { name: 'Matt Gross', date: '2026-07-04' },
},
};
