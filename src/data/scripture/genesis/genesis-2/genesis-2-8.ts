import { Verse } from '@/types';

export const genesis_2_8: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 2,
    verse: 8,
  },
  words: [
    {
      hebrew: 'וַיִּטַּע',
      transliteration: 'vaYitta',
      englishLiteral: 'And-planted',
      englishNatural: 'planted',
      root: 'nata',
      prefixes: ['va'],
      order: {
        hebrew: 1,
        english: 3,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'imperfect',
        stem: 'qal',
        type: 'verb',
      },
      lineBreaksBefore: {
        hebrew: 1,
      },
    },
    {
      hebrew: 'יְהוָה',
      transliteration: 'YHWH',
      englishLiteral: 'He_Who_Is (YHWH)',
      englishNatural: 'And He-Who-Is (YHWH)',
      root: 'yhwh',
      order: {
        hebrew: 2,
        english: 1,
      },
      morphology: {
        type: 'noun',
      },
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      hebrew: 'אֱלֹהִים',
      transliteration: 'Elohim',
      englishLiteral: 'Gods',
      englishNatural: 'God',
      root: 'eloah',
      suffixes: ['im'],
      order: {
        hebrew: 3,
        english: 2,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun',
      },
    },
    {
      hebrew: 'גַּן',
      transliteration: 'gan',
      englishLiteral: 'garden',
      englishNatural: 'a garden',
      root: 'gan',
      order: 4,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      hebrew: 'בְּעֵדֶן',
      transliteration: 'beEden',
      englishLiteral: 'in-Delight (Eden)',
      englishNatural: 'in Delight (Eden)',
      root: 'eden',
      prefixes: ['be'],
      order: 5,
      morphology: {
        type: 'noun',
      },
    },
    {
      hebrew: 'מִקֶּדֶם',
      transliteration: 'miQedem',
      englishLiteral: 'from-east',
      englishNatural: 'from the east',
      root: 'qedem',
      prefixes: ['mi'],
      order: 6,
      morphology: {
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'וַיָּשֶׂם',
      transliteration: 'vaYasem',
      englishLiteral: 'and-set',
      englishNatural: 'and set',
      root: 'sim',
      prefixes: ['va'],
      order: 7,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'imperfect',
        stem: 'qal',
        type: 'verb',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'שָׁם',
      transliteration: 'sham',
      englishLiteral: 'there',
      englishNatural: 'there',
      root: 'sham',
      order: 8,
      morphology: {
        type: 'adverb',
      },
    },
    {
      hebrew: 'אֶת־',
      transliteration: 'et-',
      englishLiteral: '↳',
      englishNatural: '',
      root: 'et',
      order: 9,
    },
    {
      hebrew: 'הָאָדָם',
      transliteration: 'haAdam',
      englishLiteral: 'the-Earthling (Adam)',
      englishNatural: 'the Earthling (Adam)',
      root: 'adam',
      prefixes: ['ha'],
      order: 10,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      hebrew: 'אֲשֶׁר',
      transliteration: 'asher',
      englishLiteral: 'which',
      englishNatural: 'which',
      root: 'asher',
      order: 11,
      morphology: {
        type: 'relative',
      },
    },
    {
      hebrew: 'יָצָר׃',
      transliteration: 'yatsar',
      englishLiteral: 'formed',
      englishNatural: 'he formed',
      root: 'yatsar',
      order: 12,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'perfect',
        stem: 'qal',
        type: 'verb',
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
      'וַיִּטַּע יְהוָה אֱלֹהִים גַּן בְּעֵדֶן מִקֶּדֶם וַיָּשֶׂם שָׁם אֶת־הָאָדָם אֲשֶׁר יָצָר׃',
    transliteration:
      'vaYitta YHWH Elohim gan beEden miQedem vaYasem sham et-haAdam asher yatsar',
    englishLiteral:
      'And-planted He_Who_Is (YHWH) Gods garden in-Delight (Eden) from-east, and-set there ↳ the-Earthling (Adam) which formed.',
    englishNatural:
      'And He-Who-Is (YHWH) God planted a garden in Delight (Eden) from the east, and set there the Earthling (Adam) which he formed.',
    kjv: 'And the LORD God planted a garden eastward in Eden; and there he put the man whom he had formed.',
    lastReviewed: { name: 'Matt Gross', date: '2026-02-22' },
  },
};
