import { Verse } from '@/types';

export const genesis_9_9: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 9,
    verse: 9,
  },
  words: [
    {
      hebrew: 'וַאֲנִי',
      transliteration: 'vaAni',
      englishLiteral: 'And-I',
      englishNatural: 'And I',
      root: 'ani',
      prefixes: ['va'],
      order: 1,
      morphology: {
        gender: 'common',
        number: 'singular',
        person: '1st',
        type: 'pronoun',
      },
      grammarPrefix: {
        englishLiteral: '"',
        englishNatural: '"',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'הִנְנִי',
      transliteration: 'hineni',
      englishLiteral: 'behold-me',
      englishNatural: 'behold me',
      root: 'hineh',
      suffixes: ['ni'],
      order: 2,
      morphology: {
        type: 'interjection',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'מֵקִים',
      transliteration: 'meqim',
      englishLiteral: 'causing-to-stand_up',
      englishNatural: 'causing to stand-up',
      root: 'qum',
      order: 3,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        tense: 'participle',
        stem: 'hiphil',
        type: 'verb',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'אֶת־',
      transliteration: 'et-',
      englishLiteral: '↳',
      englishNatural: '',
      root: 'et',
      order: 4,
      morphology: {
        type: 'particle',
      },
    },
    {
      hebrew: 'בְּרִיתִי',
      transliteration: 'beriti',
      englishLiteral: 'my-covenant',
      englishNatural: 'my covenant',
      root: 'berit',
      suffixes: ['i_possessive'],
      order: 5,
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      hebrew: 'אִתְּכֶם',
      transliteration: 'itkhem',
      englishLiteral: 'with-you',
      englishNatural: 'with you',
      root: 'et',
      suffixes: ['khem'],
      order: 6,
      morphology: {
        gender: 'masculine',
        number: 'plural',
        person: '2nd',
        type: 'preposition',
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
      order: 7,
      morphology: {
        type: 'particle',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'זַרְעֲכֶם',
      transliteration: 'zarkhem',
      englishLiteral: 'your-seed',
      englishNatural: 'your seed',
      root: 'zera',
      suffixes: ['khem'],
      order: 8,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      hebrew: 'אַחֲרֵיכֶם',
      transliteration: 'acharekhem',
      englishLiteral: 'after-you',
      englishNatural: 'after you',
      root: 'achar',
      suffixes: ['khem'],
      order: 9,
      morphology: {
        type: 'preposition',
      },
      grammarSuffix: {
        englishLiteral: ';',
        englishNatural: ';',
      },
      lineBreaksAfter: 1,
    },
  ],
  expectedTranslations: {
    hebrew:
      'וַאֲנִי הִנְנִי מֵקִים אֶת־בְּרִיתִי אִתְּכֶם וְאֶת־זַרְעֲכֶם אַחֲרֵיכֶם',
    transliteration:
      'vaAni hineni meqim et-beriti itkhem veEt-zarkhem acharekhem',
    englishLiteral:
      '"And-I, behold-me, causing-to-stand_up, ↳ my-covenant with-you, and-↳ your-seed after-you;',
    englishNatural:
      '"And I, behold me, causing to stand-up, my covenant with you, and your seed after you;',
    kjv: 'And I, behold, I establish my covenant with you, and with your seed after you;',
    lastReviewed: { name: 'Matt Gross', date: '2026-02-14' },
},
};
