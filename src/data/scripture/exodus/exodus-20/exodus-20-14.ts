import { Verse } from '@/types';

export const exodus_20_14: Verse = {
  meta: {
    book: 'Exodus',
    chapter: 20,
    verse: 14,
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
      hebrew: 'תִּנְאָֽף׃',
      transliteration: 'tinaf',
      englishLiteral: 'you-will-commit_adultery',
      englishNatural: 'You will commit-adultery',
      root: 'naaf',
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
    hebrew: 'לֹ֣א תִּנְאָֽף׃',
    transliteration: 'lo tinaf',
    englishLiteral: 'Not you-will-commit_adultery.',
    englishNatural: 'You will commit-adultery not.',
    kjv: 'Thou shalt not commit adultery.',
    lastReviewed: { name: 'Matt Gross', date: '2026-07-04' },
},
};
