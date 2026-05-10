import { Verse } from '@/types';

export const psalms_3_3: Verse = {
  meta: {
    book: 'Psalms',
    chapter: 3,
    verse: 3,
  },
  words: [
    {
      hebrew: 'וְאַתָּ֣ה',
      transliteration: 'veAttah',
      englishLiteral: 'And-you',
      englishNatural: 'And you',
      root: 'atah',
      prefixes: ['ve'],
      order: 1,
      morphology: {
        type: 'pronoun',
        person: '2nd',
        gender: 'masculine',
        number: 'singular',
      },
      grammarSuffix: {
        englishNatural: ',',
      },
    },
    {
      hebrew: 'יְ֭הוָה',
      transliteration: 'YHWH',
      englishLiteral: 'He_Who_Is (YHWH)',
      englishNatural: 'He-Who-Is (YHWH)',
      root: 'yhwh',
      order: 2,
      morphology: {
        type: 'noun',
      },
      grammarSuffix: {
        englishNatural: ',',
      },
    },
    {
      hebrew: 'מָגֵ֣ן',
      transliteration: 'magen',
      englishLiteral: 'shield',
      englishNatural: 'are a shield',
      root: 'magen',
      order: 3,
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'singular',
        state: 'absolute',
      },
    },
    {
      hebrew: 'בַּעֲדִ֑י',
      transliteration: 'baAdi',
      englishLiteral: 'around-me',
      englishNatural: 'around me',
      root: 'baad',
      suffixes: ['i_possessive'],
      order: 4,
      morphology: {
        type: 'preposition',
      },
      grammarSuffix: {
        englishLiteral: ';',
        englishNatural: ';',
      },
      lineBreaksAfter: 1,
    },
    {
      hebrew: 'כְּבוֹדִ֗י',
      transliteration: 'kevodi',
      englishLiteral: 'my-glory',
      englishNatural: 'my glory',
      root: 'kavod',
      suffixes: ['i_possessive'],
      order: 5,
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'singular',
        state: 'absolute',
      },
    },
    {
      hebrew: 'וּמֵרִ֥ים',
      transliteration: 'uMerim',
      englishLiteral: 'and-raising',
      englishNatural: 'and the one-raising',
      root: 'rum_verb',
      prefixes: ['u'],
      order: 6,
      morphology: {
        type: 'verb',
        stem: 'hiphil',
        tense: 'participle',
        gender: 'masculine',
        number: 'singular',
      },
    },
    {
      hebrew: 'רֹאשִֽׁי',
      transliteration: 'roshi',
      englishLiteral: 'my-head',
      englishNatural: 'my head',
      root: 'rosh',
      suffixes: ['i_possessive'],
      order: 7,
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'singular',
        state: 'absolute',
      },
      grammarSuffix: {
        hebrew: '׃',
        englishLiteral: '.',
        englishNatural: '.',
      },
    },
  ],
  expectedTranslations: {
    hebrew:
      'וְאַתָּ֣ה יְ֭הוָה מָגֵ֣ן בַּעֲדִ֑י כְּבוֹדִ֗י וּמֵרִ֥ים רֹאשִֽׁי׃',
    transliteration: 'veAttah YHWH magen baAdi kevodi uMerim roshi',
    englishLiteral:
      'And-you He_Who_Is (YHWH) shield around-me; my-glory and-raising my-head.',
    englishNatural:
      'And you, He-Who-Is (YHWH), are a shield around me; my glory and the one-raising my head.',
    kjv: 'But thou, O LORD, art a shield for me; my glory, and the lifter up of mine head.',
    lastReviewed: { name: 'Matt Gross', date: '2026-05-10' },
},
};
