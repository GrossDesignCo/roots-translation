import { type Verse } from '@/types';

export const genesis_11_20: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 11,
    verse: 20,
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
      hebrew: 'רְעוּ',
      transliteration: 'Reu',
      englishLiteral: 'Friend (Reu)',
      englishNatural: 'And Friend (Reu)',
      root: 'reu',
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
      hebrew: 'שְׁתַּיִם',
      transliteration: 'shtayim',
      englishLiteral: 'two',
      englishNatural: 'two',
      root: 'shnayim',
      order: 3,
      morphology: {
        type: 'numeral',
        gender: 'feminine',
        number: 'dual',
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
      hebrew: 'שְׂרוּג',
      transliteration: 'Serug',
      englishLiteral: 'Intertwined (Serug)',
      englishNatural: 'Intertwined (Serug)',
      root: 'serug',
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
    hebrew: 'וַיְחִי רְעוּ שְׁתַּיִם וּשְׁלֹשִׁים שָׁנָה וַיּוֹלֶד אֶת־שְׂרוּג',
    transliteration: 'vaYechi Reu shtayim uShloshim shanah vaYoled et-Serug',
    englishLiteral:
      'and-lived Friend (Reu) two and-thirty year, and-he-birthed ↳ Intertwined (Serug).',
    englishNatural:
      'And Friend (Reu) lived two and thirty years, and birthed Intertwined (Serug).',
    kjv: 'And Reu lived two and thirty years, and begat Serug:',
  },
};
