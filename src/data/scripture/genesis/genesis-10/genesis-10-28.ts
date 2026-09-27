import { Verse } from '@/types';

export const genesis_10_28: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 10,
    verse: 28,
  },
  words: [
    {
      hebrew: 'וְאֶת־',
      transliteration: 'veEt-',
      englishLiteral: 'and-↳',
      englishNatural: 'and',
      root: 'et',
      prefixes: ['ve'],
      order: 1,
      morphology: {
        type: 'particle',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'עוֹבָל',
      transliteration: 'Oval',
      englishLiteral: 'Obal (Obal)',
      englishNatural: 'Obal (Obal)',
      root: 'oval',
      order: 2,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'וְאֶת־',
      transliteration: 'veEt-',
      englishLiteral: 'and-↳',
      englishNatural: 'and',
      root: 'et',
      prefixes: ['ve'],
      order: 3,
      morphology: {
        type: 'particle',
      },
    },
    {
      hebrew: 'אֲבִימָאֵל',
      transliteration: 'Avimael',
      englishLiteral: 'Father_is_God (Abimael)',
      englishNatural: 'Father-is-God (Abimael)',
      root: 'avimael',
      order: 4,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'וְאֶת־',
      transliteration: 'veEt-',
      englishLiteral: 'and-↳',
      englishNatural: 'and',
      root: 'et',
      prefixes: ['ve'],
      order: 5,
      morphology: {
        type: 'particle',
      },
    },
    {
      hebrew: 'שְׁבָא',
      transliteration: 'Sheba',
      englishLiteral: 'Oath (Sheba)',
      englishNatural: 'Oath (Sheba)',
      root: 'sheba',
      order: 6,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
      lineBreaksAfter: 1,
    },
  ],
  expectedTranslations: {
    hebrew: 'וְאֶת־עוֹבָל וְאֶת־אֲבִימָאֵל וְאֶת־שְׁבָא',
    transliteration: 'veEt-Oval veEt-Avimael veEt-Sheba',
    englishLiteral:
      'and-↳ Obal (Obal), and-↳ Father_is_God (Abimael), and-↳ Oath (Sheba),',
    englishNatural:
      'and Obal (Obal), and Father-is-God (Abimael), and Oath (Sheba),',
    kjv: 'And Obal, and Abimael, and Sheba,',
  },
};
