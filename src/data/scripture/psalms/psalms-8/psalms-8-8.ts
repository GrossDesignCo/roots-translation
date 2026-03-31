import { Verse } from '@/types';

export const psalms_8_8: Verse = {
  meta: {
    book: 'Psalms',
    chapter: 8,
    verse: 8,
  },
  words: [
    {
      hebrew: 'צִפּ֣וֹר',
      transliteration: 'tsippor',
      englishLiteral: 'bird-of',
      englishNatural: 'The bird of',
      root: 'tzippor',
      order: 1,
      morphology: {
        type: 'noun',
        gender: 'feminine',
        number: 'singular',
        state: 'construct',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'שָׁ֭מַיִם',
      transliteration: 'shamayim',
      englishLiteral: 'skies',
      englishNatural: 'skies',
      root: 'shamayim',
      order: 2,
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'plural',
      },
    },
    {
      hebrew: 'וּדְגֵ֣י',
      transliteration: 'uDgei',
      englishLiteral: 'and-fish-of',
      englishNatural: 'and the fish of',
      root: 'dagah',
      prefixes: ['u'],
      suffixes: ['ei'],
      order: 3,
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'plural',
        state: 'construct',
      },
    },
    {
      hebrew: 'הַיָּ֑ם',
      transliteration: 'haYam',
      englishLiteral: 'the-sea',
      englishNatural: 'the sea',
      root: 'yam',
      prefixes: ['ha'],
      order: 4,
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'singular',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
      lineBreaksAfter: 1,
    },
    {
      hebrew: 'עֹ֝בֵ֗ר',
      transliteration: 'over',
      englishLiteral: 'passing-through',
      englishNatural: 'passing-through',
      root: 'avar',
      order: 5,
      morphology: {
        type: 'verb',
        stem: 'qal',
        tense: 'participle',
        gender: 'masculine',
        number: 'singular',
      },
    },
    {
      hebrew: 'אָרְח֥וֹת',
      transliteration: 'orchot',
      englishLiteral: 'paths-of',
      englishNatural: 'the paths of',
      root: 'orach',
      suffixes: ['ot'],
      order: 6,
      morphology: {
        type: 'noun',
        gender: 'feminine',
        number: 'plural',
        state: 'construct',
      },
    },
    {
      hebrew: 'יַמִּֽים',
      transliteration: 'yamim',
      englishLiteral: 'seas',
      englishNatural: 'seas',
      root: 'yam',
      suffixes: ['im'],
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
    hebrew:
      'צִפּ֣וֹר שָׁ֭מַיִם וּדְגֵ֣י הַיָּ֑ם עֹ֝בֵ֗ר אָרְח֥וֹת יַמִּֽים',
    transliteration:
      'tsippor shamayim uDgei haYam over orchot yamim',
    englishLiteral:
      'bird-of skies and-fish-of the-sea, passing-through paths-of seas.',
    englishNatural:
      'The bird of skies and the fish of the sea, passing-through the paths of seas.',
    kjv: 'The fowl of the air, and the fish of the sea, and whatsoever passeth through the paths of the seas.',
    lastReviewed: { name: 'Matt Gross', date: '2026-03-31' },
},
};
