import { Verse } from '@/types';

export const psalms_8_5: Verse = {
  meta: {
    book: 'Psalms',
    chapter: 8,
    verse: 5,
  },
  words: [
    {
      hebrew: 'וַתְּחַסְּרֵ֣הוּ',
      transliteration: 'vatechasrehu',
      englishLiteral: 'and-you-have-made-him-lack',
      englishNatural: 'and you have made him lack',
      root: 'chaser',
      prefixes: ['va'],
      suffixes: ['ehu'],
      order: 1,
      morphology: {
        type: 'verb',
        stem: 'piel',
        tense: 'imperfect',
        gender: 'masculine',
        number: 'singular',
        person: '2nd',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'מְּ֭עַט',
      transliteration: 'meat',
      englishLiteral: 'a_little',
      englishNatural: 'a-little',
      root: 'meat',
      order: 2,
      morphology: {
        type: 'adverb',
      },
    },
    {
      hebrew: 'מֵאֱלֹהִ֑ים',
      transliteration: 'meElohim',
      englishLiteral: 'from-God',
      englishNatural: 'from God',
      root: 'eloah',
      prefixes: ['mi'],
      suffixes: ['im'],
      order: 3,
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'plural',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
      lineBreaksAfter: 1,
    },
    {
      hebrew: 'וְכָב֖וֹד',
      transliteration: 'veKhavod',
      englishLiteral: 'and-glory',
      englishNatural: 'and with glory',
      root: 'kavod',
      prefixes: ['ve'],
      order: 4,
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'singular',
      },
    },
    {
      hebrew: 'וְהָדָ֣ר',
      transliteration: 'veHadar',
      englishLiteral: 'and-honor',
      englishNatural: 'and honor',
      root: 'hadar',
      prefixes: ['ve'],
      order: 5,
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'singular',
      },
    },
    {
      hebrew: 'תְּעַטְּרֵֽהוּ',
      transliteration: 'teAtrehu',
      englishLiteral: 'you-will-crown-him',
      englishNatural: 'you will crown him',
      root: 'atar_crown',
      prefixes: ['te'],
      suffixes: ['ehu'],
      order: 6,
      morphology: {
        type: 'verb',
        stem: 'piel',
        tense: 'imperfect',
        gender: 'masculine',
        number: 'singular',
        person: '2nd',
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
      'וַתְּחַסְּרֵ֣הוּ מְּ֭עַט מֵאֱלֹהִ֑ים וְכָב֖וֹד וְהָדָ֣ר תְּעַטְּרֵֽהוּ',
    transliteration:
      'vatechasrehu meat meElohim veKhavod veHadar teAtrehu',
    englishLiteral:
      'and-you-have-made-him-lack a_little from-God, and-glory and-honor you-will-crown-him.',
    englishNatural:
      'and you have made him lack a-little from God, and with glory and honor you will crown him.',
    kjv: 'For thou hast made him a little lower than the angels, and hast crowned him with glory and honour.',
    lastReviewed: { name: 'Matt Gross', date: '2026-03-31' },
},
};
