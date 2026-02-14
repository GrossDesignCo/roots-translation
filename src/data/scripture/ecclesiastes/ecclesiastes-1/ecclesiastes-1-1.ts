import { Verse } from '@/types';

export const ecclesiastes_1_1: Verse = {
  meta: {
    book: 'Ecclesiastes',
    chapter: 1,
    verse: 1,
  },
  words: [
    {
      hebrew: 'דִּבְרֵי֙',
      transliteration: 'divRey',
      englishLiteral: 'Words-of',
      englishNatural: 'The words of',
      root: 'davar',
      order: 1,
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'plural',
        state: 'construct',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'קֹהֶ֣לֶת',
      transliteration: 'qohelet',
      englishLiteral: 'Assembler',
      englishNatural: 'Assembler',
      root: 'qahal',
      order: 2,
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'singular',
      },
      grammarSuffix: {
        englishNatural: ',',
      },
    },
    {
      hebrew: 'בֶּן־',
      transliteration: 'ben-',
      englishLiteral: 'son-of',
      englishNatural: 'the son of',
      root: 'ben',
      order: 3,
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'singular',
        state: 'construct',
      },
    },
    {
      hebrew: 'דָּוִ֔ד',
      transliteration: 'David',
      englishLiteral: 'Beloved (David)',
      englishNatural: 'Beloved (David)',
      root: 'david',
      order: 4,
      morphology: {
        type: 'noun',
      },
      grammarSuffix: {
        englishNatural: ',',
      },
    },
    {
      hebrew: 'מֶ֖לֶךְ',
      transliteration: 'melekh',
      englishLiteral: 'king',
      englishNatural: 'king',
      root: 'melekh',
      order: 5,
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'singular',
      },
    },
    {
      hebrew: 'בִּירוּשָׁלִָֽם',
      transliteration: 'biYrushalayim',
      englishLiteral: 'in-Foundation_of_Peace (Jerusalem)',
      englishNatural: 'in Foundation-of-Peace (Jerusalem)',
      root: 'yerushalayim',
      prefixes: ['be'],
      order: 6,
      morphology: {
        type: 'noun',
        gender: 'feminine',
        number: 'singular',
      },
      grammarSuffix: {
        hebrew: '׃',
        englishLiteral: '.',
        englishNatural: '.',
      },
      lineBreaksAfter: 1,
    },
  ],
  expectedTranslations: {
    hebrew: 'דִּבְרֵי֙ קֹהֶ֣לֶת בֶּן־דָּוִ֔ד מֶ֖לֶךְ בִּירוּשָׁלִָֽם׃',
    transliteration: 'divRey qohelet ben-David melekh biYrushalayim',
    englishLiteral: 'Words-of Assembler son-of Beloved (David) king in-Foundation_of_Peace (Jerusalem).',
    englishNatural: 'The words of Assembler, the son of Beloved (David), king in Foundation-of-Peace (Jerusalem).',
    kjv: 'The words of the Preacher, the son of David, king in Jerusalem.',
    lastReviewed: { name: 'Matt Gross', date: '2026-02-14' },
  },
};
