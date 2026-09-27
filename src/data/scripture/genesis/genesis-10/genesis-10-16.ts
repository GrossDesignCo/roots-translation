import { Verse } from '@/types';

export const genesis_10_16: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 10,
    verse: 16,
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
      hebrew: 'הַיְבוּסִי',
      transliteration: 'haYebusi',
      englishLiteral: 'the-Jebusite',
      englishNatural: 'the Jebusite',
      root: 'yebusi',
      prefixes: ['ha'],
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
      hebrew: 'הָאֱמֹרִי',
      transliteration: 'haEmori',
      englishLiteral: 'the-Amorite',
      englishNatural: 'the Amorite',
      root: 'emori',
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
    },
    {
      hebrew: 'וְאֵת',
      transliteration: 'veEt',
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
      hebrew: 'הַגִּרְגָּשִׁי',
      transliteration: 'haGirgashi',
      englishLiteral: 'the-Girgashite',
      englishNatural: 'the Girgashite',
      root: 'girgashi',
      prefixes: ['ha'],
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
    hebrew: 'וְאֶת־הַיְבוּסִי וְאֶת־הָאֱמֹרִי וְאֵת הַגִּרְגָּשִׁי',
    transliteration: 'veEt-haYebusi veEt-haEmori veEt haGirgashi',
    englishLiteral:
      'and-↳ the-Jebusite, and-↳ the-Amorite, and-↳ the-Girgashite,',
    englishNatural:
      'and the Jebusite, and the Amorite, and the Girgashite,',
    kjv: 'And the Jebusite, and the Amorite, and the Girgasite,',
  },
};
