import { Verse } from '@/types';

export const genesis_10_27: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 10,
    verse: 27,
  },
  words: [
    {
      hebrew: 'וְאֶת־',
      transliteration: 'veEt-',
      englishLiteral: 'and-↳',
      englishNatural: 'and',
      root: 'et',
      prefixes: ['ve'],
      order: 1,
      morphology: {
        type: 'particle',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'הֲדוֹרָם',
      transliteration: 'Hadoram',
      englishLiteral: 'Honor (Hadoram)',
      englishNatural: 'Honor (Hadoram)',
      root: 'hadoram',
      order: 2,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
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
      order: 3,
      morphology: {
        type: 'particle',
      },
    },
    {
      hebrew: 'אוּזָל',
      transliteration: 'Uzal',
      englishLiteral: 'Uzal (Uzal)',
      englishNatural: 'Uzal (Uzal)',
      root: 'uzal',
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
    },
    {
      hebrew: 'וְאֶת־',
      transliteration: 'veEt-',
      englishLiteral: 'and-↳',
      englishNatural: 'and',
      root: 'et',
      prefixes: ['ve'],
      order: 5,
      morphology: {
        type: 'particle',
      },
    },
    {
      hebrew: 'דִּקְלָה',
      transliteration: 'Diqlah',
      englishLiteral: 'Palm (Diklah)',
      englishNatural: 'Palm (Diklah)',
      root: 'diqlah',
      order: 6,
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
  ],
  expectedTranslations: {
    hebrew: 'וְאֶת־הֲדוֹרָם וְאֶת־אוּזָל וְאֶת־דִּקְלָה',
    transliteration: 'veEt-Hadoram veEt-Uzal veEt-Diqlah',
    englishLiteral: 'and-↳ Honor (Hadoram), and-↳ Uzal (Uzal), and-↳ Palm (Diklah),',
    englishNatural: 'and Honor (Hadoram), and Uzal (Uzal), and Palm (Diklah),',
    kjv: 'And Hadoram, and Uzal, and Diklah,',
  },
};
