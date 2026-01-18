import { Verse } from '@/types';

export const exodus_2_4: Verse = {
  meta: {
    book: 'Exodus',
    chapter: 2,
    verse: 4,
  },
  words: [
    {
      hebrew: 'וַתֵּתַצַּב',
      transliteration: 'vaTetatzav',
      englishLiteral: 'And-positioned-herself',
      englishNatural: 'positioned-herself',
      root: 'yatzav',
      prefixes: ['va'],
      order: {
        hebrew: 1,
        english: 2,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
        person: '3rd',
        tense: 'imperfect',
        stem: 'hithpael',
        type: 'verb',
      },
      lineBreaksBefore: {
        hebrew: 1,
      },
    },
    {
      hebrew: 'אֲחֹתוֹ',
      transliteration: 'achoto',
      englishLiteral: 'sister-his',
      englishNatural: 'And his sister',
      root: 'achot',
      suffixes: ['o'],
      order: {
        hebrew: 2,
        english: 1,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'noun',
      },
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      hebrew: 'מֵרָחֹק',
      transliteration: 'meRachok',
      englishLiteral: 'from-distance',
      englishNatural: 'from a distance',
      root: 'rachok',
      prefixes: ['me'],
      order: 3,
      morphology: {
        type: 'adverb',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'לְדֵעָה',
      transliteration: 'leDeah',
      englishLiteral: 'to-know',
      englishNatural: 'to know',
      root: 'yada',
      prefixes: ['le'],
      order: 4,
      morphology: {
        tense: 'infinitive_construct',
        stem: 'qal',
        type: 'verb',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'מַה־',
      transliteration: 'mah-',
      englishLiteral: 'what-',
      englishNatural: 'what',
      root: 'mah',
      order: 5,
      morphology: {
        type: 'pronoun',
      },
    },
    {
      hebrew: 'יֵּעָשֶׂה',
      transliteration: 'yeaseh',
      englishLiteral: 'will-be-made',
      englishNatural: 'would be made',
      root: 'asah',
      order: 6,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'imperfect',
        stem: 'niphal',
        type: 'verb',
      },
    },
    {
      hebrew: 'לוֹ',
      transliteration: 'lo',
      englishLiteral: 'to-him',
      englishNatural: 'to him',
      root: 'lo_to_him',
      order: 7,
      morphology: {
        type: 'preposition',
      },
      grammarSuffix: {
        englishLiteral: '.',
        englishNatural: '.',
      },
      lineBreaksAfter: 1,
    },
  ],
  expectedTranslations: {
    hebrew: 'וַתֵּתַצַּב אֲחֹתוֹ מֵרָחֹק לְדֵעָה מַה־יֵּעָשֶׂה לוֹ',
    transliteration: 'vaTetatzav achoto meRachok leDeah mah-yeaseh lo',
    englishLiteral:
      'And-positioned-herself sister-his from-distance, to-know what- will-be-made to-him.',
    englishNatural:
      'And his sister positioned-herself from a distance, to know what would be made to him.',
    kjv: 'And his sister stood afar off, to wit what would be done to him.',
    lastReviewed: { name: 'Matt Gross', date: '2026-01-18' },
  },
};
