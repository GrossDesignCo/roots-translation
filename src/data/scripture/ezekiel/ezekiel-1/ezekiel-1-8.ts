import { Verse } from '@/types';

export const ezekiel_1_8: Verse = {
  meta: {
    book: 'Ezekiel',
    chapter: 1,
    verse: 8,
  },
  words: [
    {
      hebrew: 'וִידֵי',
      transliteration: 'viDei',
      englishLiteral: 'And-hands-of',
      englishNatural: 'And hands of',
      root: 'yad',
      prefixes: ['ve'],
      order: 1,
      morphology: {
        gender: 'feminine',
        number: 'dual',
        state: 'construct',
        type: 'noun',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'אָדָם',
      transliteration: 'Adam',
      englishLiteral: 'Earthling (Adam)',
      englishNatural: 'Earthling (Adam)',
      root: 'adam',
      order: 2,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      hebrew: 'מִתַּחַת',
      transliteration: 'miTachat',
      englishLiteral: 'from-under',
      englishNatural: 'from under',
      root: 'tachat',
      prefixes: ['mi'],
      order: 3,
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'כַּנְפֵיהֶם',
      transliteration: 'kanfeihem',
      englishLiteral: 'wings-their',
      englishNatural: 'their wings',
      root: 'kenaf',
      suffixes: ['hem'],
      order: 4,
      morphology: {
        gender: 'feminine',
        number: 'dual',
        type: 'noun',
      },
      lineBreaksAfter: 1,
    },
    {
      hebrew: 'עַל',
      transliteration: 'al',
      englishLiteral: 'over',
      englishNatural: 'over',
      root: 'al',
      order: 5,
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'אַרְבַּעַת',
      transliteration: 'arbaat',
      englishLiteral: 'four-of',
      englishNatural: 'four of',
      root: 'arba',
      order: 6,
      morphology: {
        state: 'construct',
        type: 'numeral',
      },
    },
    {
      hebrew: 'רִבְעֵיהֶם',
      transliteration: 'riveihem',
      englishLiteral: 'sides-their',
      englishNatural: 'their sides',
      root: 'reva',
      suffixes: ['hem'],
      order: 7,
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ';',
        englishNatural: ';',
      },
      lineBreaksAfter: 1,
    },
    {
      hebrew: 'וּפְנֵיהֶם',
      transliteration: 'uFeneihem',
      englishLiteral: 'and-faces-their',
      englishNatural: 'and their faces',
      root: 'panim',
      prefixes: ['u'],
      suffixes: ['hem'],
      order: 8,
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun',
      },
    },
    {
      hebrew: 'וְכַנְפֵיהֶם',
      transliteration: 'veKhanfeihem',
      englishLiteral: 'and-wings-their',
      englishNatural: 'and their wings',
      root: 'kenaf',
      prefixes: ['ve'],
      suffixes: ['hem'],
      order: 9,
      morphology: {
        gender: 'feminine',
        number: 'dual',
        type: 'noun',
      },
    },
    {
      hebrew: 'לְאַרְבַּעְתָּם',
      transliteration: 'leArbatam',
      englishLiteral: 'to-four-them',
      englishNatural: 'to four of them',
      root: 'arba',
      prefixes: ['le'],
      suffixes: ['tam'],
      order: 10,
      morphology: {
        type: 'numeral',
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
      'וִידֵי אָדָם מִתַּחַת כַּנְפֵיהֶם עַל אַרְבַּעַת רִבְעֵיהֶם וּפְנֵיהֶם וְכַנְפֵיהֶם לְאַרְבַּעְתָּם',
    transliteration:
      'viDei Adam miTachat kanfeihem al arbaat riveihem uFeneihem veKhanfeihem leArbatam',
    englishLiteral:
      'And-hands-of Earthling (Adam) from-under wings-their over four-of sides-their; and-faces-their and-wings-their to-four-them.',
    englishNatural:
      'And hands of Earthling (Adam) from under their wings over four of their sides; and their faces and their wings to four of them.',
    kjv: 'And they had the hands of a man under their wings on their four sides; and they four had their faces and their wings.',
    lastReviewed: { name: 'Matt Gross', date: '2026-02-22' },
  },
};
