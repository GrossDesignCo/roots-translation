import { Verse } from '@/types';

export const genesis_10_14: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 10,
    verse: 14,
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
      hebrew: 'פַּתְרֻסִים',
      transliteration: 'Pathrusim',
      englishLiteral: 'Southerners (Pathrusim)',
      englishNatural: 'Southerners (Pathrusim)',
      root: 'pathrusim',
      order: 2,
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
      order: 3,
      morphology: {
        type: 'particle',
      },
    },
    {
      hebrew: 'כַּסְלֻחִים',
      transliteration: 'Casluhim',
      englishLiteral: 'Loiners (Casluhim)',
      englishNatural: 'Loiners (Casluhim)',
      root: 'casluhim',
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
      hebrew: 'אֲשֶׁר',
      transliteration: 'asher',
      englishLiteral: 'which',
      englishNatural: 'which',
      root: 'asher',
      order: 5,
      morphology: {
        type: 'relative',
      },
    },
    {
      hebrew: 'יָצְאוּ',
      transliteration: 'yatsau',
      englishLiteral: 'they-have-brought_out',
      englishNatural: 'they have brought-out',
      root: 'yatsa',
      suffixes: ['u'],
      order: 6,
      morphology: {
        gender: 'masculine',
        number: 'plural',
        person: '3rd',
        tense: 'perfect',
        stem: 'qal',
        type: 'verb',
      },
    },
    {
      hebrew: 'מִשָּׁם',
      transliteration: 'miSham',
      englishLiteral: 'from-there',
      englishNatural: 'from there',
      root: 'sham',
      prefixes: ['mi'],
      order: 7,
      morphology: {
        type: 'adverb',
      },
    },
    {
      hebrew: 'פְּלִשְׁתִּים',
      transliteration: 'Pelishtim',
      englishLiteral: 'Wallowers (Philistines)',
      englishNatural: 'Wallowers (Philistines)',
      root: 'pelishtim',
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
      hebrew: 'כַּפְתֹּרִים',
      transliteration: 'Kaphtorim',
      englishLiteral: 'Palm_knobs (Caphtorim)',
      englishNatural: 'Palm-knobs (Caphtorim)',
      root: 'kaphtorim',
      order: 10,
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
      'וְאֶת־פַּתְרֻסִים וְאֶת־כַּסְלֻחִים אֲשֶׁר יָצְאוּ מִשָּׁם פְּלִשְׁתִּים וְאֶת־כַּפְתֹּרִים',
    transliteration:
      'veEt-Pathrusim veEt-Casluhim asher yatsau miSham Pelishtim veEt-Kaphtorim',
    englishLiteral:
      'and-↳ Southerners (Pathrusim), and-↳ Loiners (Casluhim), which they-have-brought_out from-there Wallowers (Philistines), and-↳ Palm_knobs (Caphtorim).',
    englishNatural:
      'and Southerners (Pathrusim), and Loiners (Casluhim), which they have brought-out from there Wallowers (Philistines), and Palm-knobs (Caphtorim).',
    kjv: 'And Pathrusim, and Casluhim, (out of whom came the Philistines,) and Caphtorim.',
  },
};
