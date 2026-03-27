import { Verse } from '@/types';

export const daniel_7_3: Verse = {
  meta: {
    book: 'Daniel',
    chapter: 7,
    verse: 3,
  },
  words: [
    {
      aramaic: 'וְאַרְבַּ֤ע',
      transliteration: 'veArba',
      englishLiteral: 'And-four',
      englishNatural: 'And four',
      root: 'arba',
      prefixes: ['ve'],
      order: 1,
      morphology: {
        type: 'numeral',
        gender: 'feminine',
      },
      lineBreaksBefore: 1,
    },
    {
      aramaic: 'חֵיוָן֙',
      transliteration: 'kheyvan',
      englishLiteral: 'beasts',
      englishNatural: 'beasts',
      root: 'cheiva',
      order: {
        aramaic: 2,
        english: 3,
      },
      morphology: {
        type: 'noun',
        gender: 'feminine',
        number: 'plural',
      },
      grammarSuffix: {
        englishNatural: ',',
      },
    },
    {
      aramaic: 'רַבְרְבָ֔ן',
      transliteration: 'ravravan',
      englishLiteral: 'great',
      englishNatural: 'great',
      root: 'rav',
      order: {
        aramaic: 3,
        english: 2,
      },
      morphology: {
        type: 'adjective',
        gender: 'feminine',
        number: 'plural',
      },
    },
    {
      aramaic: 'סָלְקָ֖ן',
      transliteration: 'salqan',
      englishLiteral: 'coming_up',
      englishNatural: 'coming up',
      root: 'salaq',
      order: 4,
      morphology: {
        type: 'verb',
        tense: 'participle',
        gender: 'feminine',
        number: 'plural',
        stem: 'qal',
      },
    },
    {
      aramaic: 'מִן־',
      transliteration: 'min-',
      englishLiteral: 'from-',
      englishNatural: 'from',
      root: 'min_from',
      order: 5,
      morphology: {
        type: 'preposition',
      },
    },
    {
      aramaic: 'יַמָּ֑א',
      transliteration: 'yamma',
      englishLiteral: 'the-sea',
      englishNatural: 'the sea',
      root: 'yam',
      order: 6,
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'singular',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      aramaic: 'שָׁנְיָ֖ן',
      transliteration: 'shanyan',
      englishLiteral: 'different',
      englishNatural: 'different',
      root: 'shena',
      order: {
        aramaic: 7,
        english: 8,
      },
      morphology: {
        type: 'verb',
        tense: 'participle',
        gender: 'feminine',
        number: 'plural',
        stem: 'qal',
      },
      lineBreaksBefore: {
        aramaic: 1,
      },
    },
    {
      aramaic: 'דָּ֥א',
      transliteration: 'da',
      englishLiteral: 'this',
      englishNatural: 'this',
      root: 'da',
      order: {
        aramaic: 8,
        english: 7,
      },
      morphology: {
        type: 'pronoun',
        gender: 'feminine',
        number: 'singular',
      },
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      aramaic: 'מִן־',
      transliteration: 'min-',
      englishLiteral: 'from-',
      englishNatural: 'from',
      root: 'min_from',
      order: 9,
      morphology: {
        type: 'preposition',
      },
    },
    {
      aramaic: 'דָּֽא',
      transliteration: 'da',
      englishLiteral: 'this',
      englishNatural: 'this',
      root: 'da',
      order: 10,
      morphology: {
        type: 'pronoun',
        gender: 'feminine',
        number: 'singular',
      },
      grammarSuffix: {
        aramaic: '׃',
        englishLiteral: '.',
        englishNatural: '.',
      },
      lineBreaksAfter: 1,
    },
  ],
  expectedTranslations: {
    aramaic: 'וְאַרְבַּ֤ע חֵיוָן֙ רַבְרְבָ֔ן סָלְקָ֖ן מִן־יַמָּ֑א שָׁנְיָ֖ן דָּ֥א מִן־דָּֽא׃',
    transliteration: 'veArba kheyvan ravravan salqan min-yamma shanyan da min-da',
    englishLiteral: 'And-four beasts great coming_up from- the-sea, different this from- this.',
    englishNatural: 'And four great beasts, coming up from the sea, this different from this.',
    kjv: 'And four great beasts came up from the sea, diverse one from another.',
    lastReviewed: { name: 'Matt Gross', date: '2026-03-27' },
  },
};
