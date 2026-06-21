import { Verse } from '@/types';

export const genesis_7_16: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 7,
    verse: 16,
  },
  words: [
    {
      hebrew: 'וְהַבָּאִים',
      transliteration: 'veHaBaim',
      englishLiteral: 'And-the-coming_ones',
      englishNatural: 'And the coming-ones',
      root: 'bo',
      prefixes: ['ve', 'ha'],
      suffixes: ['im'],
      order: 1,
      morphology: {
        gender: 'masculine',
        number: 'plural',
        tense: 'participle',
        stem: 'qal',
        type: 'verb',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'זָכָר',
      transliteration: 'zakhar',
      englishLiteral: 'male',
      englishNatural: 'male',
      root: 'zakhar',
      order: 2,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      hebrew: 'וּנְקֵבָה',
      transliteration: 'uNeqevah',
      englishLiteral: 'and-female',
      englishNatural: 'and female',
      root: 'neqevah',
      prefixes: ['u'],
      order: 3,
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      hebrew: 'מִכָּל־',
      transliteration: 'miKol-',
      englishLiteral: 'from-all-',
      englishNatural: 'from all',
      root: 'kol',
      prefixes: ['mi'],
      order: 4,
      morphology: {
        type: 'noun',
      },
    },
    {
      hebrew: 'בָּשָׂר',
      transliteration: 'basar',
      englishLiteral: 'flesh',
      englishNatural: 'flesh',
      root: 'basar',
      order: 5,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      hebrew: 'בָּאוּ',
      transliteration: 'bau',
      englishLiteral: 'they-have-come',
      englishNatural: 'they came',
      root: 'bo',
      order: 6,
      morphology: {
        gender: 'masculine',
        number: 'plural',
        person: '3rd',
        tense: 'perfect',
        stem: 'qal',
        type: 'verb',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
      lineBreaksAfter: 1,
    },
    {
      hebrew: 'כַּאֲשֶׁר',
      transliteration: 'kaAsher',
      englishLiteral: 'as-which',
      englishNatural: 'as which',
      root: 'asher',
      prefixes: ['ka'],
      order: 7,
      morphology: {
        type: 'particle',
      },
    },
    {
      hebrew: 'צִוָּה',
      transliteration: 'tzivvah',
      englishLiteral: 'he-has-commanded',
      englishNatural: 'commanded',
      root: 'tzavah',
      order: {
        hebrew: 8,
        english: 9,
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
      hebrew: 'אֹתוֹ',
      transliteration: 'oto',
      englishLiteral: 'him',
      englishNatural: 'him',
      root: 'et',
      suffixes: ['o'],
      order: {
        hebrew: 9,
        english: 10,
      },
      morphology: {
        type: 'particle',
      },
      grammarSuffix: {
        englishNatural: '.',
      },
      lineBreaksAfter: {
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
        hebrew: 10,
        english: 8,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: '.',
      },
      lineBreaksAfter: {
        hebrew: 1,
      },
    },
    {
      hebrew: 'וַיִּסְגֹּר',
      transliteration: 'vaYisgor',
      englishLiteral: 'And-closed',
      englishNatural: 'closed',

      root: 'sagar',
      prefixes: ['va'],
      order: {
        hebrew: 11,
        english: 12,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'imperfect',
        stem: 'qal',
        type: 'verb',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'יְהוָה',
      transliteration: 'YHWH',
      englishLiteral: 'He_Who_Is (YHWH)',
      englishNatural: 'And He-Who-Is (YHWH)',
      root: 'yhwh',
      order: {
        hebrew: 12,
        english: 11,
      },
      morphology: {
        type: 'noun',
      },
    },
    {
      hebrew: 'בַּעֲדוֹ',
      transliteration: 'baAdo',
      englishLiteral: 'behind-him',
      englishNatural: 'behind him',
      root: 'baad',
      prefixes: ['ba'],
      suffixes: ['o'],
      order: 13,
      morphology: {
        type: 'preposition',
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
      'וְהַבָּאִים זָכָר וּנְקֵבָה מִכָּל־בָּשָׂר בָּאוּ כַּאֲשֶׁר צִוָּה אֹתוֹ אֱלֹהִים וַיִּסְגֹּר יְהוָה בַּעֲדוֹ',
    transliteration:
      'veHaBaim zakhar uNeqevah miKol-basar bau kaAsher tzivvah oto Elohim vaYisgor YHWH baAdo',
    englishLiteral:
      'And-the-coming_ones male and-female from-all- flesh they-have-come, as-which he-has-commanded him Gods. And-closed He_Who_Is (YHWH) behind-him.',
    englishNatural:
      'And the coming-ones male and female from all flesh they came, as which God commanded him. And He-Who-Is (YHWH) closed behind him.',
    kjv: 'And they that went in, went in male and female of all flesh, as God had commanded him: and the LORD shut him in.',
    lastReviewed: { name: 'Matt Gross', date: '2026-06-21' },
},
};
