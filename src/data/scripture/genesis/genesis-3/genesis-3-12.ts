import { Verse } from '@/types';

export const genesis_3_12: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 3,
    verse: 12,
  },
  words: [
    {
      hebrew: 'וַיֹּאמֶר',
      transliteration: 'vaYomer',
      englishLiteral: 'And-he-said',
      englishNatural: 'said',
      root: 'amar',
      prefixes: ['va'],
      order: {
        hebrew: 1,
        english: 2,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'imperfect',
        stem: 'qal',
        type: 'verb',
      },
      grammarSuffix: {
        englishNatural: ',',
      },
      lineBreaksBefore: {
        hebrew: 1,
      },
    },
    {
      hebrew: 'הָאָדָם',
      transliteration: 'haAdam',
      englishLiteral: 'the-Earthling (Adam)',
      englishNatural: 'And the Earthling (Adam)',
      root: 'adam',
      prefixes: ['ha'],
      order: {
        hebrew: 2,
        english: 1,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
      },
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      hebrew: 'הָאִשָּׁה',
      transliteration: 'haIshah',
      englishLiteral: 'The-woman',
      englishNatural: 'The woman',
      root: 'ishah',
      prefixes: ['ha'],
      order: 3,
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'noun',
      },
      grammarPrefix: {
        englishLiteral: '"',
        englishNatural: '"',
      },
    },
    {
      hebrew: 'אֲשֶׁר',
      transliteration: 'asher',
      englishLiteral: 'which',
      englishNatural: 'which',
      root: 'asher',
      order: 4,
      morphology: {
        type: 'relative',
      },
    },
    {
      hebrew: 'נָתַתָּה',
      transliteration: 'natata',
      englishLiteral: 'you-gave',
      englishNatural: 'you gave',
      root: 'natan',
      suffixes: ['ta'],
      order: 5,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '2nd',
        tense: 'perfect',
        stem: 'qal',
        type: 'verb',
      },
    },
    {
      hebrew: 'עִמָּדִי',
      transliteration: 'imadi',
      englishLiteral: 'with-me',
      englishNatural: 'with me',
      root: 'im_with',
      suffixes: ['adi'],
      order: 6,
      morphology: {
        type: 'preposition',
      },
      grammarSuffix: {
        englishLiteral: ';',
        englishNatural: ';',
      },
    },
    {
      hebrew: 'הִיא',
      transliteration: 'hi',
      englishLiteral: 'she',
      englishNatural: 'she',
      root: 'hi',
      order: 7,
      morphology: {
        type: 'pronoun',
      },
    },
    {
      hebrew: 'נָתְנָה־',
      transliteration: 'natnah-',
      englishLiteral: 'she-gave-',
      englishNatural: 'gave',
      root: 'natan',
      suffixes: ['nah'],
      order: 8,
      morphology: {
        gender: 'feminine',
        number: 'singular',
        person: '3rd',
        tense: 'perfect',
        stem: 'qal',
        type: 'verb',
      },
    },
    {
      hebrew: 'לִּי',
      transliteration: 'li',
      englishLiteral: 'to-me',
      englishNatural: 'to me',
      prefixes: ['li'],
      suffixes: ['i'],
      order: 9,
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'מִן־',
      transliteration: 'min-',
      englishLiteral: 'from-',
      englishNatural: 'from',
      root: 'min',
      order: 10,
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'הָעֵץ',
      transliteration: 'haEtz',
      englishLiteral: 'the-tree',
      englishNatural: 'the tree',
      root: 'etz',
      prefixes: ['ha'],
      order: 11,
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
      hebrew: 'וָאֹכֵל',
      transliteration: 'vaOkhel',
      englishLiteral: 'and-I-ate',
      englishNatural: 'and I ate',
      root: 'akhal',
      prefixes: ['va'],
      order: 12,
      morphology: {
        gender: 'common',
        number: 'singular',
        person: '1st',
        tense: 'imperfect',
        stem: 'qal',
        type: 'verb',
      },
      grammarSuffix: {
        englishLiteral: '."',
        englishNatural: '."',
      },
      lineBreaksAfter: 1,
    },
  ],
  expectedTranslations: {
    hebrew:
      'וַיֹּאמֶר הָאָדָם הָאִשָּׁה אֲשֶׁר נָתַתָּה עִמָּדִי הִיא נָתְנָה־לִּי מִן־הָעֵץ וָאֹכֵל',
    transliteration:
      'vaYomer haAdam haIshah asher natata imadi hi natnah-li min-haEtz vaOkhel',
    englishLiteral:
      'And-he-said the-Earthling (Adam), "The-woman which you-gave with-me; she she-gave- to-me from- the-tree, and-I-ate."',
    englishNatural:
      'And the Earthling (Adam) said, "The woman which you gave with me; she gave to me from the tree, and I ate."',
    kjv: 'And the man said, The woman whom thou gavest to be with me, she gave me of the tree, and I did eat.',
    lastReviewed: { name: 'Matt Gross', date: '2026-02-22' },
  },
};
