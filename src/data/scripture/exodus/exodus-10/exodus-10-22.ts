import { Verse } from '@/types';

export const exodus_10_22: Verse = {
  meta: {
    book: 'Exodus',
    chapter: 10,
    verse: 22,
  },
  words: [
    {
      hebrew: 'וַיֵּט',
      transliteration: 'vaYet',
      englishLiteral: 'And-stretched_out',
      englishNatural: 'stretched-out',
      root: 'natah',
      prefixes: ['ve'],
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
      hebrew: 'מֹשֶׁה',
      transliteration: 'Moshe',
      englishLiteral: 'Drawn_Out (Moses)',
      englishNatural: 'And Drawn-Out (Moses)',
      root: 'moshe',
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
      hebrew: 'אֶת־',
      transliteration: 'et-',
      englishLiteral: '↳',
      englishNatural: '',
      root: 'et',
      order: 3,
      morphology: {
        type: 'particle',
      },
    },
    {
      hebrew: 'יָדוֹ',
      transliteration: 'yado',
      englishLiteral: 'hand-his',
      englishNatural: 'his hand',
      root: 'yad',
      suffixes: ['o'],
      order: 4,
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      hebrew: 'עַל־',
      transliteration: 'al-',
      englishLiteral: 'over-',
      englishNatural: 'over',
      root: 'al',
      order: 5,
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'הַשָּׁמָיִם',
      transliteration: 'haShamayim',
      englishLiteral: 'the-skies',
      englishNatural: 'the skies',
      root: 'shamayim',
      prefixes: ['ha'],
      order: 6,
      morphology: {
        gender: 'masculine',
        number: 'dual',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ';',
        englishNatural: ';',
      },
    },
    {
      hebrew: 'וַיְהִי',
      transliteration: 'vaYhi',
      englishLiteral: 'and-was',
      englishNatural: 'and it was',
      root: 'hayah',
      prefixes: ['ve'],
      order: 7,
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
        english: 1,
      },
    },
    {
      hebrew: 'חֹשֶׁךְ־',
      transliteration: 'choshekh-',
      englishLiteral: 'darkness-of',
      englishNatural: 'darkness of',
      root: 'choshekh',
      order: 8,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        state: 'construct',
        type: 'noun',
      },
    },
    {
      hebrew: 'אֲפֵלָה',
      transliteration: 'afelah',
      englishLiteral: 'gloom',
      englishNatural: 'gloom',
      root: 'afelah',
      order: 9,
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      hebrew: 'בְּכָל־',
      transliteration: 'beKhol-',
      englishLiteral: 'in-all-of-',
      englishNatural: 'in all',
      root: 'kol',
      prefixes: ['be'],
      order: 10,
      morphology: {
        type: 'noun',
      },
    },
    {
      hebrew: 'אֶרֶץ',
      transliteration: 'eretz',
      englishLiteral: 'land-of',
      englishNatural: 'the land of',
      root: 'eretz',
      order: 11,
      morphology: {
        gender: 'feminine',
        number: 'singular',
        state: 'construct',
        type: 'noun',
      },
    },
    {
      hebrew: 'מִצְרַיִם',
      transliteration: 'Mitzrayim',
      englishLiteral: 'Double_Straits (Egypt)',
      englishNatural: 'Double-Straits (Egypt)',
      root: 'mitzrayim',
      order: 12,
      morphology: {
        type: 'noun',
      },
    },
    {
      hebrew: 'שְׁלֹשֶׁת',
      transliteration: 'sheloshet',
      englishLiteral: 'three-of',
      englishNatural: 'three',
      root: 'shalosh',
      order: 13,
      morphology: {
        number: 'plural',
        state: 'construct',
        type: 'numeral',
      },
    },
    {
      hebrew: 'יָמִים',
      transliteration: 'yamim',
      englishLiteral: 'days',
      englishNatural: 'days',
      root: 'yom',
      order: 14,
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun',
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
      'וַיֵּט מֹשֶׁה אֶת־יָדוֹ עַל־הַשָּׁמָיִם וַיְהִי חֹשֶׁךְ־אֲפֵלָה בְּכָל־אֶרֶץ מִצְרַיִם שְׁלֹשֶׁת יָמִים',
    transliteration:
      'vaYet Moshe et-yado al-haShamayim vaYhi choshekh-afelah beKhol-eretz Mitzrayim sheloshet yamim',
    englishLiteral:
      'And-stretched_out Drawn_Out (Moses) ↳ hand-his over- the-skies; and-was darkness-of gloom in-all-of- land-of Double_Straits (Egypt) three-of days.',
    englishNatural:
      'And Drawn-Out (Moses) stretched-out his hand over the skies; and it was darkness of gloom in all the land of Double-Straits (Egypt) three days.',
    kjv: 'And Moses stretched forth his hand toward heaven; and there was a thick darkness in all the land of Egypt three days:',
    lastReviewed: { name: 'Matt Gross', date: '2026-01-18' },
},
};
