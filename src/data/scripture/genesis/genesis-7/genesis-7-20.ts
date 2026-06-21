import { Verse } from '@/types';

export const genesis_7_20: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 7,
    verse: 20,
  },
  words: [
    {
      hebrew: 'חֲמֵשׁ',
      transliteration: 'chamesh',
      englishLiteral: 'Five',
      englishNatural: 'Five',
      root: 'chamesh',
      order: 1,
      morphology: {
        type: 'numeral',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'עֶשְׂרֵה',
      transliteration: 'esreh',
      englishLiteral: 'ten',
      englishNatural: 'ten',
      root: 'esreh',
      order: 2,
      morphology: {
        type: 'numeral',
      },
    },
    {
      hebrew: 'אַמָּה',
      transliteration: 'ammah',
      englishLiteral: 'cubits',
      englishNatural: 'cubits',
      root: 'ammah',
      order: 3,
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      hebrew: 'מִלְמַעְלָה',
      transliteration: 'milmalah',
      englishLiteral: 'from-to-upward',
      englishNatural: 'upward',
      root: 'maala',
      prefixes: ['mi', 'le'],
      order: 4,
      morphology: {
        type: 'adverb',
      },
    },
    {
      hebrew: 'גָּבְרוּ',
      transliteration: 'gavru',
      englishLiteral: 'they-have-prevailed',
      englishNatural: 'have prevailed',
      root: 'gavar',
      suffixes: ['plural_verb_u'],
      order: {
        hebrew: 5,
        english: 6,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        person: '3rd',
        tense: 'perfect',
        stem: 'qal',
        type: 'verb',
      },
      grammarSuffix: {
        englishNatural: ',',
      },
    },
    {
      hebrew: 'הַמָּיִם',
      transliteration: 'haMayim',
      englishLiteral: 'the-waters',
      englishNatural: 'the waters',
      root: 'mayim',
      prefixes: ['ha'],
      order: {
        hebrew: 6,
        english: 5,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ';',
      },
    },
    {
      hebrew: 'וַיְכֻסּוּ',
      transliteration: 'vaYekhusu',
      englishLiteral: 'and-were-covered',
      englishNatural: 'were covered',
      root: 'kasah',
      prefixes: ['va'],
      suffixes: ['plural_verb_u'],
      order: {
        hebrew: 7,
        english: 8,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        person: '3rd',
        tense: 'imperfect',
        stem: 'pual',
        type: 'verb',
      },
      grammarSuffix: {
        englishNatural: '.',
      },
      lineBreaksBefore: {
        hebrew: 1,
      },
      lineBreaksAfter: 1,
    },
    {
      hebrew: 'הֶהָרִים',
      transliteration: 'heHarim',
      englishLiteral: 'the-mountains',
      englishNatural: 'and the mountains',
      root: 'har',
      prefixes: ['ha'],
      suffixes: ['im'],
      order: {
        hebrew: 8,
        english: 7,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: '.',
      },
      lineBreaksBefore: {
        english: 1,
      },
    },
  ],
  expectedTranslations: {
    hebrew:
      'חֲמֵשׁ עֶשְׂרֵה אַמָּה מִלְמַעְלָה גָּבְרוּ הַמָּיִם וַיְכֻסּוּ הֶהָרִים',
    transliteration:
      'chamesh esreh ammah milmalah gavru haMayim vaYekhusu heHarim',
    englishLiteral:
      'Five ten cubits from-to-upward they-have-prevailed the-waters; and-were-covered the-mountains.',
    englishNatural:
      'Five ten cubits upward the waters have prevailed, and the mountains were covered.',
    kjv: 'Fifteen cubits upward did the waters prevail; and the mountains were covered.',
    lastReviewed: { name: 'Matt Gross', date: '2026-06-21' },
},
};
