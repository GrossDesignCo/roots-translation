import { type Verse } from '@/types';

export const genesis_11_18: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 11,
    verse: 18,
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
      hebrew: 'פֶלֶג',
      transliteration: 'Peleg',
      englishLiteral: 'Channel (Peleg)',
      englishNatural: 'And Channel (Peleg)',
      root: 'peleg',
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
      hebrew: 'שְׁלֹשִׁים',
      transliteration: 'shloshim',
      englishLiteral: 'thirty',
      englishNatural: 'thirty',
      root: 'shloshim',
      order: 3,
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
      order: 4,
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
      order: 5,
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
      order: 6,
      morphology: {
        type: 'particle',
      },
    },
    {
      hebrew: 'רְעוּ',
      transliteration: 'Reu',
      englishLiteral: 'Friend (Reu)',
      englishNatural: 'Friend (Reu)',
      root: 'reu',
      order: 7,
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
    hebrew: 'וַיְחִי־פֶלֶג שְׁלֹשִׁים שָׁנָה וַיּוֹלֶד אֶת־רְעוּ',
    transliteration: 'vaYechi-Peleg shloshim shanah vaYoled et-Reu',
    englishLiteral:
      'and-lived Channel (Peleg) thirty year, and-he-birthed ↳ Friend (Reu).',
    englishNatural:
      'And Channel (Peleg) lived thirty years, and birthed Friend (Reu).',
    kjv: 'And Peleg lived thirty years, and begat Reu:',
  },
};
