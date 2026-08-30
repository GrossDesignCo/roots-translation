import { Verse } from '@/types';

export const genesis_9_28: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 9,
    verse: 28,
  },
  words: [
    {
      hebrew: 'וַיְחִי־',
      transliteration: 'vayechi-',
      englishLiteral: 'And-lived-',
      englishNatural: 'lived',
      root: 'chayah',
      prefixes: ['va'],
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
      hebrew: 'נֹחַ',
      transliteration: 'Noach',
      englishLiteral: 'Rest (Noah)',
      englishNatural: 'And Rest (Noah)',
      root: 'noach',
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
      hebrew: 'אַחַר',
      transliteration: 'achar',
      englishLiteral: 'after',
      englishNatural: 'after',
      root: 'achar',
      order: 3,
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'הַמַּבּוּל',
      transliteration: 'haMabbul',
      englishLiteral: 'the-flood',
      englishNatural: 'the flood',
      root: 'mabbul',
      prefixes: ['ha'],
      order: 4,
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
      hebrew: 'שְׁלֹשׁ',
      transliteration: 'shelosh',
      englishLiteral: 'three',
      englishNatural: 'three',
      root: 'shalosh',
      order: 5,
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'numeral',
      },
    },
    {
      hebrew: 'מֵאוֹת',
      transliteration: 'meot',
      englishLiteral: 'hundreds',
      englishNatural: 'hundred',
      root: 'meah_hundred',
      suffixes: ['ot'],
      order: 6,
      morphology: {
        gender: 'feminine',
        number: 'plural',
        type: 'numeral',
      },
    },
    {
      hebrew: 'שָׁנָה',
      transliteration: 'shanah',
      englishLiteral: 'year',
      englishNatural: 'years',
      root: 'shanah',
      order: 7,
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      hebrew: 'וַחֲמִשִּׁים',
      transliteration: 'vachamishim',
      englishLiteral: 'and-fifty',
      englishNatural: 'and fifty',
      root: 'chamishim',
      prefixes: ['va'],
      order: 8,
      morphology: {
        gender: 'common',
        number: 'plural',
        type: 'numeral',
      },
    },
    {
      hebrew: 'שָׁנָה',
      transliteration: 'shanah',
      englishLiteral: 'year',
      englishNatural: 'years',
      root: 'shanah',
      order: 9,
      morphology: {
        gender: 'feminine',
        number: 'singular',
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
      'וַיְחִי־נֹחַ אַחַר הַמַּבּוּל שְׁלֹשׁ מֵאוֹת שָׁנָה וַחֲמִשִּׁים שָׁנָה',
    transliteration:
      'vayechi-Noach achar haMabbul shelosh meot shanah vachamishim shanah',
    englishLiteral:
      'And-lived- Rest (Noah) after the-flood, three hundreds year and-fifty year.',
    englishNatural:
      'And Rest (Noah) lived after the flood, three hundred years and fifty years.',
    kjv: 'And Noah lived after the flood three hundred and fifty years.',
    lastReviewed: { name: 'Matt Gross', date: '2025-12-06' },
},
};
