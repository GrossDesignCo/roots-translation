import { Verse } from '@/types';

export const genesis_10_13: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 10,
    verse: 13,
  },
  words: [
    {
      hebrew: 'וּמִצְרַיִם',
      transliteration: 'uMitzrayim',
      englishLiteral: 'And-Double_Narrows (Egypt)',
      englishNatural: 'And Double-Narrows (Egypt)',
      root: 'mitzrayim',
      prefixes: ['u'],
      order: 1,
      morphology: {
        gender: 'masculine',
        number: 'dual',
        type: 'noun',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'יָלַד',
      transliteration: 'yalad',
      englishLiteral: 'he-birthed',
      englishNatural: 'birthed',
      root: 'yalad',
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
      hebrew: 'לוּדִים',
      transliteration: 'Ludim',
      englishLiteral: 'Luds (Ludim)',
      englishNatural: 'Luds (Ludim)',
      root: 'ludim',
      order: 4,
      morphology: {
        gender: 'masculine',
        number: 'plural',
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
      hebrew: 'עֲנָמִים',
      transliteration: 'Anamim',
      englishLiteral: 'Ans (Anamim)',
      englishNatural: 'Ans (Anamim)',
      root: 'anamim',
      order: 6,
      morphology: {
        gender: 'masculine',
        number: 'plural',
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
      order: 7,
      morphology: {
        type: 'particle',
      },
    },
    {
      hebrew: 'לְהָבִים',
      transliteration: 'Lehabim',
      englishLiteral: 'Flames (Lehabim)',
      englishNatural: 'Flames (Lehabim)',
      root: 'lehabim',
      order: 8,
      morphology: {
        gender: 'masculine',
        number: 'plural',
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
      order: 9,
      morphology: {
        type: 'particle',
      },
    },
    {
      hebrew: 'נַפְתֻּחִים',
      transliteration: 'Naphtuhim',
      englishLiteral: 'Of_Ptah (Naphtuhim)',
      englishNatural: 'Of-Ptah (Naphtuhim)',
      root: 'naphtuhim',
      order: 10,
      morphology: {
        gender: 'masculine',
        number: 'plural',
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
    hebrew:
      'וּמִצְרַיִם יָלַד אֶת־לוּדִים וְאֶת־עֲנָמִים וְאֶת־לְהָבִים וְאֶת־נַפְתֻּחִים',
    transliteration:
      'uMitzrayim yalad et-Ludim veEt-Anamim veEt-Lehabim veEt-Naphtuhim',
    englishLiteral:
      'And-Double_Narrows (Egypt) he-birthed ↳ Luds (Ludim), and-↳ Ans (Anamim), and-↳ Flames (Lehabim), and-↳ Of_Ptah (Naphtuhim),',
    englishNatural:
      'And Double-Narrows (Egypt) birthed Luds (Ludim), and Ans (Anamim), and Flames (Lehabim), and Of-Ptah (Naphtuhim),',
    kjv: 'And Mizraim begat Ludim, and Anamim, and Lehabim, and Naphtuhim,',
  },
};
