import { Verse } from '@/types';

export const genesis_3_20: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 3,
    verse: 20,
  },
  words: [
    {
      hebrew: 'וַיִּקְרָא',
      transliteration: 'vayYiqra',
      englishLiteral: 'And-he-called_out',
      englishNatural: 'called-out',
      root: 'qara',
      prefixes: ['va', 'yi'],
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
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      hebrew: 'שֵׁם',
      transliteration: 'shem',
      englishLiteral: 'name',
      englishNatural: 'name',
      root: 'shem',
      order: {
        hebrew: 3,
        english: 4,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      hebrew: 'אִשְׁתּוֹ',
      transliteration: 'ishto',
      englishLiteral: 'woman-his',
      englishNatural: "his woman's",
      root: 'ishah',
      suffixes: ['o'],
      order: {
        hebrew: 4,
        english: 3,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      hebrew: 'חַוָּה',
      transliteration: 'Chavah',
      englishLiteral: 'Life (Eve)',
      englishNatural: 'Life (Eve)',
      root: 'chavah',
      order: 5,
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ';',
        englishNatural: ';',
      },
    },
    {
      hebrew: 'כִּי',
      transliteration: 'ki',
      englishLiteral: 'that',
      englishNatural: 'that',
      root: 'ki',
      order: 6,
      morphology: {
        type: 'conjunction',
      },
    },
    {
      hebrew: 'הִוא',
      transliteration: 'hi',
      englishLiteral: 'she',
      englishNatural: 'she',
      root: 'hi',
      order: 7,
      morphology: {
        gender: 'feminine',
        number: 'singular',
        person: '3rd',
        type: 'pronoun',
      },
    },
    {
      hebrew: 'הָיְתָה',
      transliteration: 'hayetah',
      englishLiteral: 'was',
      englishNatural: 'was',
      root: 'hayah',
      suffixes: ['ah'],
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
      hebrew: 'אֵם',
      transliteration: 'em',
      englishLiteral: 'Mother',
      englishNatural: 'Mother',
      root: 'em',
      order: 9,
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      hebrew: 'כָּל־',
      transliteration: 'kol-',
      englishLiteral: 'all',
      englishNatural: 'of all',
      root: 'kol',
      order: 10,
      morphology: {
        type: 'adjective',
      },
    },
    {
      hebrew: 'חָי׃',
      transliteration: 'chai',
      englishLiteral: 'Living',
      englishNatural: 'Living',
      root: 'chai',
      order: 11,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'adjective',
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
      'וַיִּקְרָא הָאָדָם שֵׁם אִשְׁתּוֹ חַוָּה כִּי הִוא הָיְתָה אֵם כָּל־חָי׃',
    transliteration:
      'vayYiqra haAdam shem ishto Chavah ki hi hayetah em kol-chai',
    englishLiteral:
      'And-he-called_out the-Earthling (Adam) name woman-his Life (Eve); that she was Mother all Living.',
    englishNatural:
      "And the Earthling (Adam) called-out his woman's name Life (Eve); that she was Mother of all Living.",
    kjv: "And Adam called his wife's name Eve; because she was the mother of all living.",
    lastReviewed: { name: 'Matt Gross', date: '2026-02-22' },
  },
};
