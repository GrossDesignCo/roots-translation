import { Verse } from '@/types';

export const exodus_20_16: Verse = {
  meta: {
    book: 'Exodus',
    chapter: 20,
    verse: 16,
  },
  words: [
    {
      hebrew: 'לֹא־',
      transliteration: 'lo-',
      englishLiteral: 'Not-',
      englishNatural: 'not',
      root: 'lo',
      order: {
        hebrew: 1,
        english: 2,
      },
      morphology: {
        type: 'adverb',
      },
    },
    {
      hebrew: 'תַעֲנֶ֥ה',
      transliteration: 'taaneh',
      englishLiteral: 'you-will-answer',
      englishNatural: 'You will answer',
      root: 'anah',
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
    },
    {
      hebrew: 'בְרֵעֲךָ֖',
      transliteration: 'veReakha',
      englishLiteral: 'in-friend-your',
      englishNatural: 'against your friend',
      root: 'rea',
      prefixes: ['be'],
      suffixes: ['ekha'],
      order: {
        hebrew: 3,
        english: 5,
      },
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'singular',
      },
      grammarSuffix: {
        englishNatural: '.',
      },
      lineBreaksAfter: {
        english: 1,
      },
    },
    {
      hebrew: 'עֵ֥ד',
      transliteration: 'ed',
      englishLiteral: 'witness',
      englishNatural: 'as a witness of',
      root: 'ed_witness',
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
      hebrew: 'שָֽׁקֶר׃',
      transliteration: 'shaqer',
      englishLiteral: 'falsehood',
      englishNatural: 'falsehood',
      root: 'sheqer',
      order: {
        hebrew: 5,
        english: 4,
      },
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'singular',
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
    hebrew: 'לֹא־תַעֲנֶ֥ה בְרֵעֲךָ֖ עֵ֥ד שָֽׁקֶר׃',
    transliteration: 'lo-taaneh veReakha ed shaqer',
    englishLiteral: 'Not- you-will-answer in-friend-your witness falsehood.',
    englishNatural:
      'You will answer not as a witness of falsehood against your friend.',
    kjv: 'Thou shalt not bear false witness against thy neighbour.',
    lastReviewed: { name: 'Matt Gross', date: '2026-07-04' },
},
};
