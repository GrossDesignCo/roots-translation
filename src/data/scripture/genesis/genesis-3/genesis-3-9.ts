import { Verse } from '@/types';

export const genesis_3_9: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 3,
    verse: 9,
  },
  words: [
    {
      hebrew: 'וַיִּקְרָא',
      transliteration: 'vaYiqra',
      englishLiteral: 'And-called_out',
      englishNatural: 'called-out',
      root: 'qara',
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
      hebrew: 'אֶל־',
      transliteration: 'el-',
      englishLiteral: 'to-',
      englishNatural: 'to',
      root: 'el',
      order: 4,
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'הָאָדָם',
      transliteration: 'haAdam',
      englishLiteral: 'the-Earthling (Adam)',
      englishNatural: 'the Earthling (Adam)',
      root: 'adam',
      prefixes: ['ha'],
      order: 5,
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
    {
      hebrew: 'וַיֹּאמֶר',
      transliteration: 'vaYomer',
      englishLiteral: 'and-said',
      englishNatural: 'and said',
      root: 'amar',
      prefixes: ['va'],
      order: 6,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'imperfect',
        stem: 'qal',
        type: 'verb',
      },
    },
    {
      hebrew: 'לוֹ',
      transliteration: 'lo',
      englishLiteral: 'to-him',
      englishNatural: 'to him',
      root: 'la',
      suffixes: ['o'],
      order: 7,
      morphology: {
        type: 'preposition',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'אַיֶּכָּה',
      transliteration: 'ayekah',
      englishLiteral: 'Where',
      englishNatural: 'Where are you',
      root: 'ayekah',
      order: 8,
      morphology: {
        type: 'adverb',
      },
      grammarPrefix: {
        englishLiteral: '"',
        englishNatural: '"',
      },
      grammarSuffix: {
        englishLiteral: '?"',
        englishNatural: '?"',
      },
      lineBreaksAfter: 1,
    },
  ],
  expectedTranslations: {
    hebrew: 'וַיִּקְרָא יְהוָה אֱלֹהִים אֶל־הָאָדָם וַיֹּאמֶר לוֹ אַיֶּכָּה',
    transliteration: 'vaYiqra YHWH Elohim el-haAdam vaYomer lo ayekah',
    englishLiteral:
      'And-called_out He_Who_Is (YHWH) Gods to- the-Earthling (Adam), and-said to-him, "Where?"',
    englishNatural:
      'And He-Who-Is (YHWH) God called-out to the Earthling (Adam), and said to him, "Where are you?"',
    kjv: 'And the LORD God called unto Adam, and said unto him, Where art thou?',
    lastReviewed: { name: 'Matt Gross', date: '2026-02-22' },
  },
};
