import { Verse } from '@/types';

export const exodus_5_5: Verse = {
  meta: {
    book: 'Exodus',
    chapter: 5,
    verse: 5,
  },
  words: [
    {
      hebrew: 'וַיֹּאמֶר',
      transliteration: 'vaYomer',
      englishLiteral: 'And-said',
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
      lineBreaksBefore: {
        hebrew: 1,
      },
      grammarSuffix: {
        englishNatural: ',',
      },
    },
    {
      hebrew: 'פַּרְעֹה',
      transliteration: 'Paroh',
      englishLiteral: 'Pharaoh',
      englishNatural: 'And Pharaoh',
      root: 'paroh',
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
      hebrew: 'הֵן־',
      transliteration: 'hen-',
      englishLiteral: 'behold-',
      englishNatural: 'Behold',
      root: 'hen',
      order: {
        hebrew: 3,
        english: 3,
      },
      morphology: {
        type: 'interjection',
      },
      grammarPrefix: {
        englishLiteral: '"',
        englishNatural: '"',
      },
      grammarSuffix: {
        englishNatural: ',',
      },
    },
    {
      hebrew: 'רַבִּים',
      transliteration: 'rabbim',
      englishLiteral: 'many',
      englishNatural: 'many',
      root: 'rav',
      suffixes: ['im'],
      order: {
        hebrew: 4,
        english: 7,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'adjective',
      },
      grammarSuffix: {
        englishNatural: ',',
      },
    },
    {
      hebrew: 'עַתָּה',
      transliteration: 'atah',
      englishLiteral: 'now',
      englishNatural: 'now',
      root: 'atah',
      order: {
        hebrew: 5,
        english: 6,
      },
      morphology: {
        type: 'adverb',
      },
    },
    {
      hebrew: 'עַם',
      transliteration: 'am',
      englishLiteral: 'people-of',
      englishNatural: 'the people of',
      root: 'am',
      order: {
        hebrew: 6,
        english: 4,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        state: 'construct',
        type: 'noun',
      },
    },
    {
      hebrew: 'הָאָרֶץ',
      transliteration: 'haAretz',
      englishLiteral: 'the-land',
      englishNatural: 'the land',
      root: 'eretz',
      prefixes: ['ha'],
      order: {
        hebrew: 7,
        english: 5,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishNatural: ',',
      },
    },
    {
      hebrew: 'וְהִשְׁבַּתֶּם',
      transliteration: 'veHishbatem',
      englishLiteral: 'and-will-cause_to_sabbath',
      englishNatural: 'and you cause them to sabbath',
      root: 'shavat',
      prefixes: ['ve'],
      suffixes: ['tem'],
      order: {
        hebrew: 8,
        english: 8,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        person: '2nd',
        tense: 'perfect',
        stem: 'hiphil',
        type: 'verb',
      },
    },
    {
      hebrew: 'אֹתָם',
      transliteration: 'otam',
      englishLiteral: '↳',
      englishNatural: '',
      root: 'et',
      suffixes: ['am'],
      order: 9,
      morphology: {
        type: 'particle',
      },
    },
    {
      hebrew: 'מִסִּבְלֹתָם',
      transliteration: 'miSivlotam',
      englishLiteral: 'from-burdens-their',
      englishNatural: 'from their burdens',
      root: 'sevel',
      prefixes: ['mi'],
      suffixes: ['am'],
      order: 10,
      morphology: {
        gender: 'feminine',
        number: 'plural',
        type: 'noun',
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
      'וַיֹּאמֶר פַּרְעֹה הֵן־רַבִּים עַתָּה עַם הָאָרֶץ וְהִשְׁבַּתֶּם אֹתָם מִסִּבְלֹתָם',
    transliteration:
      'vaYomer Paroh hen-rabbim atah am haAretz veHishbatem otam miSivlotam',
    englishLiteral:
      'And-said Pharaoh "behold- many now people-of the-land and-will-cause_to_sabbath ↳ from-burdens-their."',
    englishNatural:
      'And Pharaoh said, "Behold, the people of the land, now many, and you cause them to sabbath from their burdens."',
    kjv: 'And Pharaoh said, Behold, the people of the land now are many, and ye make them rest from their burdens.',
    lastReviewed: { name: 'Matt Gross', date: '2026-01-18' },
},
};
