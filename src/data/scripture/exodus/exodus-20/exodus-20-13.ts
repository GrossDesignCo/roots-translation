import { Verse } from '@/types';

export const exodus_20_13: Verse = {
  meta: {
    book: 'Exodus',
    chapter: 20,
    verse: 13,
  },
  words: [
    {
      hebrew: 'לֹ֥א',
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
      hebrew: 'תִּרְצָֽח׃',
      transliteration: 'tirtsach',
      englishLiteral: 'you-will-murder',
      englishNatural: 'You will murder',
      root: 'ratsach',
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
    hebrew: 'לֹ֥א תִּרְצָֽח׃',
    transliteration: 'lo tirtsach',
    englishLiteral: 'Not you-will-murder.',
    englishNatural: 'You will murder not.',
    kjv: 'Thou shalt not kill.',
    lastReviewed: { name: 'Matt Gross', date: '2026-07-04' },
},
};
