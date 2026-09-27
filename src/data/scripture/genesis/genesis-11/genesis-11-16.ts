import { type Verse } from '@/types';

export const genesis_11_16: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 11,
    verse: 16,
  },
  words: [
    {
      hebrew: 'וַיְחִי־',
      transliteration: 'vaYechi-',
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
      hebrew: 'עֵבֶר',
      transliteration: 'Eber',
      englishLiteral: 'Crossing (Eber)',
      englishNatural: 'And Crossing (Eber)',
      root: 'eber',
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
      hebrew: 'אַרְבַּע',
      transliteration: 'arba',
      englishLiteral: 'four',
      englishNatural: 'four',
      root: 'arba',
      order: 3,
      morphology: {
        type: 'numeral',
        gender: 'feminine',
        number: 'singular',
      },
    },
    {
      hebrew: 'וּשְׁלֹשִׁים',
      transliteration: 'uShloshim',
      englishLiteral: 'and-thirty',
      englishNatural: 'and thirty',
      root: 'shloshim',
      prefixes: ['u'],
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
      hebrew: 'פֶּלֶג',
      transliteration: 'Peleg',
      englishLiteral: 'Channel (Peleg)',
      englishNatural: 'Channel (Peleg)',
      root: 'peleg',
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
    hebrew: 'וַיְחִי־עֵבֶר אַרְבַּע וּשְׁלֹשִׁים שָׁנָה וַיּוֹלֶד אֶת־פֶּלֶג',
    transliteration: 'vaYechi-Eber arba uShloshim shanah vaYoled et-Peleg',
    englishLiteral:
      'and-lived Crossing (Eber) four and-thirty year, and-he-birthed ↳ Channel (Peleg).',
    englishNatural:
      'And Crossing (Eber) lived four and thirty years, and birthed Channel (Peleg).',
    kjv: 'And Eber lived four and thirty years, and begat Peleg:',
  },
};
