import { Verse } from '@/types';

export const isaiah_6_12: Verse = {
  meta: {
    book: 'Isaiah',
    chapter: 6,
    verse: 12,
  },
  words: [
    {
      hebrew: 'וְרִחַק',
      transliteration: 'veRichaq',
      englishLiteral: 'and-has-removed_far',
      englishNatural: 'will remove-far',
      root: 'rachaq',
      prefixes: ['ve'],
      order: {
        hebrew: 1,
        english: 2,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'perfect',
        stem: 'piel',
        type: 'verb',
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
    },
    {
      hebrew: 'אֶת',
      transliteration: 'et',
      englishLiteral: '↳',
      englishNatural: '',
      root: 'et',
      order: 3,
      morphology: {
        type: 'particle',
      },
    },
    {
      hebrew: 'הָאָדָם',
      transliteration: 'haAdam',
      englishLiteral: 'the-human',
      englishNatural: 'the human',
      root: 'adam',
      prefixes: ['ha'],
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
      hebrew: 'וְרַבָּה',
      transliteration: 'veRabbah',
      englishLiteral: 'and-great',
      englishNatural: 'and great',
      root: 'rav',
      prefixes: ['ve'],
      order: {
        hebrew: 5,
        english: 6,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'adjective',
      },
      grammarSuffix: {
        englishNatural: ',',
      },
    },
    {
      hebrew: 'הָעֲזוּבָה',
      transliteration: 'haAzuvah',
      englishLiteral: 'the-leaving',
      englishNatural: 'the leaving',
      root: 'azav',
      prefixes: ['ha'],
      order: {
        hebrew: 6,
        english: 5
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
        tense: 'participle',
        stem: 'qal',
        type: 'verb',
      },
    },
    {
      hebrew: 'בְּקֶרֶב',
      transliteration: 'beQerev',
      englishLiteral: 'in-midst-of',
      englishNatural: 'in the midst of',
      root: 'qerev',
      prefixes: ['be'],
      order: 7,
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
      order: 8,
      morphology: {
        gender: 'feminine',
        number: 'singular',
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
      'וְרִחַק יְהוָה אֶת הָאָדָם וְרַבָּה הָעֲזוּבָה בְּקֶרֶב הָאָרֶץ',
    transliteration:
      'veRichaq YHWH et haAdam veRabbah haAzuvah beQerev haAretz',
    englishLiteral:
      'and-has-removed_far He_Who_Is (YHWH) ↳ the-human, and-great the-leaving in-midst-of the-land.',
    englishNatural:
      'And He-Who-Is (YHWH) will remove-far the human, the leaving and great, in the midst of the land.',
    kjv: 'And the LORD have removed men far away, and there be a great forsaking in the midst of the land.',
    lastReviewed: { name: 'Matt Gross', date: '2026-07-10' },
},
};
