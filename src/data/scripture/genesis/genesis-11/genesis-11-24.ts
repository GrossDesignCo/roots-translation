import { type Verse } from '@/types';

export const genesis_11_24: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 11,
    verse: 24,
  },
  words: [
    {
      hebrew: 'וַיְחִי',
      transliteration: 'vaYechi',
      englishLiteral: 'and-lived',
      englishNatural: 'lived',
      root: 'chayah',
      prefixes: ['va'],
      order: {
        hebrew: 1,
        english: 2,
      },
      morphology: {
        type: 'verb',
        person: '3rd',
        gender: 'masculine',
        number: 'singular',
        stem: 'qal',
        tense: 'imperfect',
      },
      lineBreaksBefore: {
        hebrew: 1,
      },
    },
    {
      hebrew: 'נָחוֹר',
      transliteration: 'Nachor',
      englishLiteral: 'Snorting (Nahor)',
      englishNatural: 'And Snorting (Nahor)',
      root: 'nachor',
      order: {
        hebrew: 2,
        english: 1,
      },
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'singular',
      },
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      hebrew: 'תֵּשַׁע',
      transliteration: 'tesha',
      englishLiteral: 'nine',
      englishNatural: 'nine',
      root: 'tesha',
      order: 3,
      morphology: {
        type: 'numeral',
        gender: 'feminine',
        number: 'singular',
      },
    },
    {
      hebrew: 'וְעֶשְׂרִים',
      transliteration: 'veEsrim',
      englishLiteral: 'and-twenty',
      englishNatural: 'and twenty',
      root: 'esrim',
      prefixes: ['ve'],
      order: 4,
      morphology: {
        type: 'numeral',
        gender: 'masculine',
        number: 'plural',
      },
    },
    {
      hebrew: 'שָׁנָה',
      transliteration: 'shanah',
      englishLiteral: 'year',
      englishNatural: 'years',
      root: 'shanah',
      order: 5,
      morphology: {
        type: 'noun',
        gender: 'feminine',
        number: 'singular',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
      lineBreaksAfter: 1,
    },
    {
      hebrew: 'וַיּוֹלֶד',
      transliteration: 'vaYoled',
      englishLiteral: 'and-he-birthed',
      englishNatural: 'and birthed',
      root: 'yalad',
      prefixes: ['va'],
      order: 6,
      morphology: {
        type: 'verb',
        person: '3rd',
        gender: 'masculine',
        number: 'singular',
        stem: 'hiphil',
        tense: 'imperfect',
      },
    },
    {
      hebrew: 'אֶת־',
      transliteration: 'et-',
      englishLiteral: '↳',
      englishNatural: '',
      root: 'et',
      order: 7,
      morphology: {
        type: 'particle',
      },
    },
    {
      hebrew: 'תָּרַח',
      transliteration: 'Terach',
      englishLiteral: 'Delay (Terah)',
      englishNatural: 'Delay (Terah)',
      root: 'terach',
      order: 8,
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'singular',
      },
      grammarSuffix: {
        englishLiteral: '.',
        englishNatural: '.',
      },
      lineBreaksAfter: 1,
    },
  ],
  expectedTranslations: {
    hebrew: 'וַיְחִי נָחוֹר תֵּשַׁע וְעֶשְׂרִים שָׁנָה וַיּוֹלֶד אֶת־תָּרַח',
    transliteration: 'vaYechi Nachor tesha veEsrim shanah vaYoled et-Terach',
    englishLiteral:
      'and-lived Snorting (Nahor) nine and-twenty year, and-he-birthed ↳ Delay (Terah).',
    englishNatural:
      'And Snorting (Nahor) lived nine and twenty years, and birthed Delay (Terah).',
    kjv: 'And Nahor lived nine and twenty years, and begat Terah:',
  },
};
