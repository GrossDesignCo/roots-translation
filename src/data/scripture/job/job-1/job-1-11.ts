import { Verse } from '@/types';

export const job_1_11: Verse = {
  meta: {
    book: 'Job',
    chapter: 1,
    verse: 11,
  },
  words: [
    {
      hebrew: 'וְאוּלָם',
      transliteration: 'veUlam',
      englishLiteral: 'and-indeed_but',
      englishNatural: 'and indeed-but',
      root: 'ulam',
      prefixes: ['ve'],
      order: 1,
      morphology: {
        type: 'conjunction',
      },
      lineBreaksBefore: {
        hebrew: 1,
      },
    },
    {
      hebrew: 'שְׁלַח־',
      transliteration: 'shelach-',
      englishLiteral: 'send_out-',
      englishNatural: 'send-out',
      root: 'shalach',
      order: {
        hebrew: 2,
        english: 3,
      },
      morphology: {
        type: 'verb',
        stem: 'qal',
        tense: 'imperative',
        person: '2nd',
        gender: 'masculine',
        number: 'singular',
      },
    },
    {
      hebrew: 'נָא',
      transliteration: 'na',
      englishLiteral: 'please',
      englishNatural: 'please',
      root: 'na_particle',
      order: {
        hebrew: 3,
        english: 2,
      },
      morphology: {
        type: 'particle',
      },
    },
    {
      hebrew: 'יָדְךָ',
      transliteration: 'yadekha',
      englishLiteral: 'hand-your',
      englishNatural: 'your hand',
      root: 'yad',
      suffixes: ['ekha'],
      order: 4,
      morphology: {
        type: 'noun',
        gender: 'feminine',
        number: 'dual',
        state: 'absolute',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'וְגַע',
      transliteration: 'veGa',
      englishLiteral: 'and-touch',
      englishNatural: 'and touch',
      root: 'naga',
      prefixes: ['ve'],
      order: 5,
      morphology: {
        type: 'verb',
        stem: 'qal',
        tense: 'imperative',
        person: '2nd',
        gender: 'masculine',
        number: 'singular',
      },
    },
    {
      hebrew: 'בְּכָל־',
      transliteration: 'bekhol-',
      englishLiteral: 'in-all-',
      englishNatural: 'in all',
      root: 'kol',
      prefixes: ['be'],
      order: 6,
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'singular',
      },
    },
    {
      hebrew: 'אֲשֶׁר־',
      transliteration: 'asher-',
      englishLiteral: 'which-',
      englishNatural: 'which',
      root: 'asher',
      order: 7,
      morphology: {
        type: 'particle',
      },
    },
    {
      hebrew: 'לוֹ',
      transliteration: 'lo',
      englishLiteral: 'to-him',
      englishNatural: 'is to him',
      root: 'la',
      suffixes: ['o'],
      order: 8,
      morphology: {
        type: 'preposition',
      },
      grammarSuffix: {
        englishLiteral: ';',
        englishNatural: ';',
      },
      lineBreaksAfter: {
        english: 1,
      },
    },
    {
      hebrew: 'אִם־',
      transliteration: 'im-',
      englishLiteral: 'if-',
      englishNatural: 'if',
      root: 'im',
      order: 9,
      morphology: {
        type: 'conjunction',
      },
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      hebrew: 'לֹא',
      transliteration: 'lo',
      englishLiteral: 'not',
      englishNatural: 'not',
      root: 'lo',
      order: 10,
      morphology: {
        type: 'adverb',
      },
    },
    {
      hebrew: 'עַל־',
      transliteration: 'al-',
      englishLiteral: 'over-',
      englishNatural: 'over',
      root: 'al',
      order: {
        hebrew: 11,
        english: 12,
      },
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'פָּנֶיךָ',
      transliteration: 'panekha',
      englishLiteral: 'faces-your',
      englishNatural: 'your face',
      root: 'panim',
      suffixes: ['ekha'],
      order: {
        hebrew: 12,
        english: 13,
      },
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'plural',
        state: 'absolute',
      },
      grammarSuffix: {
        englishNatural: '.',
      },
    },
    {
      hebrew: 'יְבָרְכֶךָ',
      transliteration: 'yevarKhekha',
      englishLiteral: 'he-will-bless-you',
      englishNatural: 'he will bless you',
      root: 'barakh',
      prefixes: ['ye'],
      suffixes: ['kha'],
      order: {
        hebrew: 13,
        english: 11,
      },
      morphology: {
        type: 'verb',
        stem: 'piel',
        tense: 'imperfect',
        person: '3rd',
        gender: 'masculine',
        number: 'singular',
      },
      grammarSuffix: {
        hebrew: '׃',
        englishLiteral: '.',
      },
      lineBreaksAfter: {
        hebrew: 1,
      },
    },
  ],
  expectedTranslations: {
    hebrew:
      'וְאוּלָם שְׁלַח־נָא יָדְךָ וְגַע בְּכָל־אֲשֶׁר־לוֹ אִם־לֹא עַל־פָּנֶיךָ יְבָרְכֶךָ׃',
    transliteration:
      'veUlam shelach-na yadekha veGa bekhol-asher-lo im-lo al-panekha yevarKhekha',
    englishLiteral:
      'and-indeed_but send_out- please hand-your, and-touch in-all- which- to-him; if- not over- faces-your he-will-bless-you.',
    englishNatural:
      'and indeed-but please send-out your hand, and touch in all which is to him; if not he will bless you over your face.',
    kjv: 'But put forth thine hand now, and touch all that he hath, and he will curse thee to thy face.',
    lastReviewed: { name: 'Matt Gross', date: '2026-04-27' },
},
};
