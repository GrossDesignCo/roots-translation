import { Verse } from '@/types';

export const psalms_3_4: Verse = {
  meta: {
    book: 'Psalms',
    chapter: 3,
    verse: 4,
  },
  words: [
    {
      hebrew: 'קוֹלִ֗י',
      transliteration: 'qoli',
      englishLiteral: 'my-voice',
      englishNatural: 'with my voice',
      root: 'qol',
      suffixes: ['i_possessive'],
      order: {
        hebrew: 1,
        english: 4,
      },
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'singular',
      },
    },
    {
      hebrew: 'אֶל־',
      transliteration: 'el-',
      englishLiteral: 'to',
      englishNatural: 'to',
      root: 'el',
      order: 2,
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'יְהוָ֥ה',
      transliteration: 'YHWH',
      englishLiteral: 'He_Who_Is (YHWH)',
      englishNatural: 'He-Who-Is (YHWH)',
      root: 'yhwh',
      order: 3,
      morphology: {
        type: 'noun',
      },
    },
    {
      hebrew: 'אֶקְרָ֑א',
      transliteration: 'eQra',
      englishLiteral: 'I-will-call_out',
      englishNatural: 'I call-out',
      root: 'qara',
      prefixes: ['e'],
      order: {
        hebrew: 4,
        english: 1,
      },
      morphology: {
        type: 'verb',
        stem: 'qal',
        tense: 'imperfect',
        person: '1st',
        number: 'singular',
        gender: 'masculine',
      },
      grammarSuffix: {
        englishLiteral: ';',
        englishNatural: ',',
      },
      lineBreaksAfter: 1,
    },
    {
      hebrew: 'וַיַּֽעֲנֵ֨נִי',
      transliteration: 'vaYaaneni',
      englishLiteral: 'and-he-will-answer-me',
      englishNatural: 'and he answers me',
      root: 'anah',
      prefixes: ['va'],
      suffixes: ['ni'],
      order: 5,
      morphology: {
        type: 'verb',
        stem: 'qal',
        tense: 'imperfect',
        person: '3rd',
        number: 'singular',
        gender: 'masculine',
      },
    },
    {
      hebrew: 'מֵהַ֖ר',
      transliteration: 'meHar',
      englishLiteral: 'from-the-mountain-of',
      englishNatural: 'from the mountain of',
      root: 'har',
      prefixes: ['mi', 'ha'],
      order: 6,
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'singular',
        state: 'construct',
      },
    },
    {
      hebrew: 'קָדְשׁ֣וֹ',
      transliteration: 'qodsho',
      englishLiteral: 'his-holiness',
      englishNatural: 'his holiness',
      root: 'qodesh',
      suffixes: ['o'],
      order: 7,
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'singular',
      },
    },
    {
      hebrew: 'סֶֽלָה׃',
      transliteration: 'selah',
      englishLiteral: 'Selah',
      englishNatural: 'Selah',
      root: 'selah',
      order: 8,
      morphology: {
        type: 'interjection',
      },
      grammarSuffix: {
        englishLiteral: '.',
        englishNatural: '.',
      },
    },
  ],
  expectedTranslations: {
    hebrew:
      'קוֹלִ֗י אֶל־יְהוָ֥ה אֶקְרָ֑א וַיַּֽעֲנֵ֨נִי מֵהַ֖ר קָדְשׁ֣וֹ סֶֽלָה׃',
    transliteration:
      'qoli el-YHWH eQra vaYaaneni meHar qodsho selah',
    englishLiteral:
      'my-voice to He_Who_Is (YHWH) I-will-call_out; and-he-will-answer-me from-the-mountain-of his-holiness Selah.',
    englishNatural:
      'I call-out, to He-Who-Is (YHWH) with my voice and he answers me from the mountain of his holiness Selah.',
    kjv: 'I cried unto the LORD with my voice, and he heard me out of his holy hill. Selah.',
    lastReviewed: { name: 'Matt Gross', date: '2026-05-10' },
},
};
