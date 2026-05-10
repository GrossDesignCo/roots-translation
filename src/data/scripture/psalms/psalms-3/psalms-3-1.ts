import { Verse } from '@/types';

export const psalms_3_1: Verse = {
  meta: {
    book: 'Psalms',
    chapter: 3,
    verse: 1,
  },
  words: [
    {
      hebrew: 'יְהוָ֗ה',
      transliteration: 'YHWH',
      englishLiteral: 'He_Who_Is (YHWH)',
      englishNatural: 'He-Who-Is (YHWH)',
      root: 'yhwh',
      order: 1,
      morphology: {
        type: 'noun',
      },
      grammarSuffix: {
        englishNatural: ',',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'מָֽה־',
      transliteration: 'mah-',
      englishLiteral: 'what-',
      englishNatural: 'what',
      root: 'mah',
      order: 2,
      morphology: {
        type: 'pronoun',
      },
    },
    {
      hebrew: 'רַבּ֥וּ',
      transliteration: 'rabbu',
      englishLiteral: 'have-been_many',
      englishNatural: 'have been-many',
      root: 'rabab',
      order: 3,
      morphology: {
        type: 'verb',
        stem: 'qal',
        tense: 'perfect',
        person: '3rd',
        gender: 'common',
        number: 'plural',
      },
    },
    {
      hebrew: 'צָרָ֑י',
      transliteration: 'tsarai',
      englishLiteral: 'my-enemies',
      englishNatural: 'my enemies',
      root: 'tzar',
      suffixes: ['i_possessive'],
      order: 4,
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'plural',
        state: 'absolute',
      },
      grammarSuffix: {
        englishNatural: ';',
      },
      lineBreaksAfter: 1,
    },
    {
      hebrew: 'רַבִּ֗ים',
      transliteration: 'rabbim',
      englishLiteral: 'many',
      englishNatural: 'many',
      root: 'rav',
      suffixes: ['im'],
      order: 5,
      morphology: {
        type: 'adjective',
        gender: 'masculine',
        number: 'plural',
      },
    },
    {
      hebrew: 'קָמִ֥ים',
      transliteration: 'qamim',
      englishLiteral: 'ones-standing_up',
      englishNatural: 'ones-standing-up',
      root: 'qum',
      suffixes: ['im'],
      order: 6,
      morphology: {
        type: 'verb',
        stem: 'qal',
        tense: 'participle',
        gender: 'masculine',
        number: 'plural',
      },
    },
    {
      hebrew: 'עָלָֽי׃',
      transliteration: 'alay',
      englishLiteral: 'over-me',
      englishNatural: 'over me',
      root: 'al',
      suffixes: ['ay'],
      order: 7,
      morphology: {
        type: 'preposition',
      },
      grammarSuffix: {
        englishLiteral: '.',
        englishNatural: '.',
      },
    },
  ],
  expectedTranslations: {
    hebrew: 'יְהוָ֗ה מָֽה־רַבּ֥וּ צָרָ֑י רַבִּ֗ים קָמִ֥ים עָלָֽי׃',
    transliteration: 'YHWH mah-rabbu tsarai rabbim qamim alay',
    englishLiteral:
      'He_Who_Is (YHWH) what- have-been_many my-enemies many ones-standing_up over-me.',
    englishNatural:
      'He-Who-Is (YHWH), what have been-many my enemies; many ones-standing-up over me.',
    kjv: 'LORD, how are they increased that trouble me! many are they that rise up against me.',
    lastReviewed: { name: 'Matt Gross', date: '2026-05-10' },
},
};
