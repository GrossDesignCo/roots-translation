import { Verse } from '@/types';

export const psalms_1_5: Verse = {
  meta: {
    book: 'Psalms',
    chapter: 1,
    verse: 5,
  },
  words: [
    {
      hebrew: 'עַל',
      transliteration: 'al',
      englishLiteral: 'Over',
      englishNatural: 'moreover',
      root: 'al',
      order: {
        hebrew: 1,
        english: 2,
      },
      morphology: {
        type: 'conjunction',
      },
      lineBreaksBefore: {
        hebrew: 1,
      },
    },
    {
      hebrew: 'כֵּן',
      transliteration: 'ken',
      englishLiteral: 'so',
      englishNatural: 'So',
      root: 'ken',
      order: {
        hebrew: 2,
        english: 1,
      },
      morphology: {
        type: 'adverb',
      },
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      hebrew: 'לֹא',
      transliteration: 'lo',
      englishLiteral: 'not',
      englishNatural: 'not',
      root: 'lo',
      order: {
        hebrew: 3,
        english: 5,
      },
      morphology: {
        type: 'adverb',
      },
    },
    {
      hebrew: 'יָקֻמוּ',
      transliteration: 'yaqumu',
      englishLiteral: 'they-will-stand_up',
      englishNatural: 'will stand-up',
      root: 'qum',
      prefixes: ['ya'],
      suffixes: ['u'],
      order: 4,
      morphology: {
        gender: 'masculine',
        number: 'plural',
        person: '3rd',
        tense: 'imperfect',
        stem: 'qal',
        type: 'verb',
      },
    },
    {
      hebrew: 'רְשָׁעִים',
      transliteration: 'reshaim',
      englishLiteral: 'wicked-ones',
      englishNatural: 'the wicked',
      root: 'rasha',
      suffixes: ['im'],
      order: {
        hebrew: 5,
        english: 3,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun',
      },
    },
    {
      hebrew: 'בַּמִּשְׁפָּט',
      transliteration: 'baMishpat',
      englishLiteral: 'in-judgment',
      englishNatural: 'in judgment',
      root: 'mishpat',
      prefixes: ['ba'],
      order: 6,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ';',
        englishNatural: ';',
      },
    },
    {
      hebrew: 'וְחַטָּאִים',
      transliteration: 'veChataim',
      englishLiteral: 'and-sinners',
      englishNatural: 'and sinners',
      root: 'chata',
      prefixes: ['ve'],
      suffixes: ['im'],
      order: 7,
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'בַּעֲדַת',
      transliteration: 'baAdat',
      englishLiteral: 'in-assembly-of',
      englishNatural: 'in the assembly of',
      root: 'edah',
      prefixes: ['ba'],
      order: 8,
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      hebrew: 'צַדִּיקִים',
      transliteration: 'tzadiqim',
      englishLiteral: 'righteous-ones',
      englishNatural: 'the righteous',
      root: 'tzadiq',
      suffixes: ['im'],
      order: 9,
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun',
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
      'עַל כֵּן לֹא יָקֻמוּ רְשָׁעִים בַּמִּשְׁפָּט וְחַטָּאִים בַּעֲדַת צַדִּיקִים',
    transliteration:
      'al ken lo yaqumu reshaim baMishpat veChataim baAdat tzadiqim',
    englishLiteral:
      'Over so not they-will-stand_up wicked-ones in-judgment; and-sinners, in-assembly-of righteous-ones.',
    englishNatural:
      'So moreover the wicked will stand-up not in judgment; and sinners, in the assembly of the righteous.',
    kjv: 'Therefore the ungodly shall not stand in the judgment, nor sinners in the congregation of the righteous.',
    lastReviewed: { name: 'Matt Gross', date: '2026-01-18' },
  },
};
