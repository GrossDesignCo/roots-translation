import { Verse } from '@/types';

export const isaiah_41_4: Verse = {
  meta: {
    book: 'Isaiah',
    chapter: 41,
    verse: 4,
  },
  words: [
    {
      hebrew: 'מִי־',
      transliteration: 'mi-',
      englishLiteral: 'who-',
      englishNatural: 'Who',
      root: 'mi',
      order: 1,
      morphology: {
        type: 'pronoun',
      },
    },
    {
      hebrew: 'פָעַל',
      transliteration: 'paal',
      englishLiteral: 'he-has-worked',
      englishNatural: 'has worked',
      root: 'paal_verb',
      order: 2,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'perfect',
        stem: 'qal',
        type: 'verb',
      },
    },
    {
      hebrew: 'וְעָשָׂה',
      transliteration: 'veAsah',
      englishLiteral: 'and-he-has-made',
      englishNatural: 'and has made',
      root: 'asah',
      prefixes: ['ve'],
      order: 3,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'perfect',
        stem: 'qal',
        type: 'verb',
      },
      grammarSuffix: {
        englishNatural: ',',
      },
    },
    {
      hebrew: 'קֹרֵא',
      transliteration: 'qore',
      englishLiteral: 'calling',
      englishNatural: 'calling',
      root: 'qara',
      order: 4,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        tense: 'participle',
        stem: 'qal',
        type: 'verb',
      },
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      hebrew: 'הַדֹּרוֹת',
      transliteration: 'haDorot',
      englishLiteral: 'the-generations',
      englishNatural: 'the generations',
      root: 'dor',
      prefixes: ['ha'],
      suffixes: ['ot'],
      order: 5,
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun',
      },
    },
    {
      hebrew: 'מֵרֹאשׁ',
      transliteration: 'meRosh',
      englishLiteral: 'from-head',
      englishNatural: 'from the head',
      root: 'rosh',
      prefixes: ['mi'],
      order: 6,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        state: 'construct',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ';',
        englishNatural: ';',
      },
      lineBreaksAfter: 1,
    },
    {
      hebrew: 'אֲנִי',
      transliteration: 'ani',
      englishLiteral: 'I',
      englishNatural: 'I am',
      root: 'ani',
      order: 7,
      morphology: {
        type: 'pronoun',
      },
    },
    {
      hebrew: 'יְהוָה',
      transliteration: 'YHWH',
      englishLiteral: 'He_Who_Is (YHWH)',
      englishNatural: 'He-Who-Is (YHWH)',
      root: 'yhwh',
      order: 8,
      morphology: {
        type: 'noun',
      },
    },
    {
      hebrew: 'רִאשׁוֹן',
      transliteration: 'rishon',
      englishLiteral: 'first',
      englishNatural: 'the first',
      root: 'rishon',
      order: 9,
      morphology: {
        type: 'numeral',
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
      order: 10,
      morphology: {
        type: 'particle',
      },
      lineBreaksBefore: {
        english: 1,
      }
    },
    {
      hebrew: 'אַחֲרֹנִים',
      transliteration: 'acharonim',
      englishLiteral: 'last-ones',
      englishNatural: 'the last ones',
      root: 'acharon',
      suffixes: ['im'],
      order: 11,
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
      hebrew: 'אֲנִי־',
      transliteration: 'ani-',
      englishLiteral: 'I-',
      englishNatural: 'I am',
      root: 'ani',
      order: 12,
      morphology: {
        type: 'pronoun',
      },
    },
    {
      hebrew: 'הוּא',
      transliteration: 'hu',
      englishLiteral: 'he',
      englishNatural: 'he',
      root: 'hu',
      order: 13,
      morphology: {
        type: 'pronoun',
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
      'מִי־פָעַל וְעָשָׂה קֹרֵא הַדֹּרוֹת מֵרֹאשׁ אֲנִי יְהוָה רִאשׁוֹן וְאֶת־אַחֲרֹנִים אֲנִי־הוּא',
    transliteration:
      'mi-paal veAsah qore haDorot meRosh ani YHWH rishon veEt-acharonim ani-hu',
    englishLiteral:
      'who- he-has-worked and-he-has-made calling the-generations from-head; I He_Who_Is (YHWH) first, and-↳ last-ones I- he.',
    englishNatural:
      'Who has worked and has made, calling the generations from the head; I am He-Who-Is (YHWH) the first, and the last ones I am he.',
    kjv: 'Who hath wrought and done it? He that called the generations from the beginning. I, the LORD, who am the first, and with the last am the same.',
    lastReviewed: { name: 'Matt Gross', date: '2026-07-14' },
},
};
