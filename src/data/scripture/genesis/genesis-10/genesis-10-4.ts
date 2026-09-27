import { Verse } from '@/types';

export const genesis_10_4: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 10,
    verse: 4,
  },
  words: [
    {
      hebrew: 'וּבְנֵי',
      transliteration: 'uBeney',
      englishLiteral: 'And-sons-of',
      englishNatural: 'And the sons of',
      root: 'ben',
      prefixes: ['u'],
      suffixes: ['ei'],
      order: 1,
      morphology: {
        gender: 'masculine',
        number: 'plural',
        state: 'construct',
        type: 'noun',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'יָוָן',
      transliteration: 'Yavan',
      englishLiteral: 'Mire (Javan)',
      englishNatural: 'Mire (Javan)',
      root: 'yavan',
      order: 2,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ':',
        englishNatural: ':',
      },
      lineBreaksAfter: 1,
    },
    {
      hebrew: 'אֱלִישָׁה',
      transliteration: 'Elishah',
      englishLiteral: 'God_helps (Elishah)',
      englishNatural: 'God-helps (Elishah)',
      root: 'elishah',
      order: 3,
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
      hebrew: 'וְתַרְשִׁישׁ',
      transliteration: 'veTarshish',
      englishLiteral: 'and-golden_stone (Tarshish)',
      englishNatural: 'and golden-stone (Tarshish)',
      root: 'tarshish',
      prefixes: ['ve'],
      order: 4,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ';',
        englishNatural: ';',
      },
      lineBreaksAfter: 1,
    },
    {
      hebrew: 'כִּתִּים',
      transliteration: 'Kittim',
      englishLiteral: 'Bruisers (Kittim)',
      englishNatural: 'Bruisers (Kittim)',
      root: 'kittim',
      order: 5,
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
      hebrew: 'וְדֹדָנִים',
      transliteration: 'veDodanim',
      englishLiteral: 'and-Beloveds (Dodanim)',
      englishNatural: 'and Beloveds (Dodanim)',
      root: 'dodanim',
      prefixes: ['ve'],
      order: 6,
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
    hebrew: 'וּבְנֵי יָוָן אֱלִישָׁה וְתַרְשִׁישׁ כִּתִּים וְדֹדָנִים',
    transliteration: 'uBeney Yavan Elishah veTarshish Kittim veDodanim',
    englishLiteral:
      'And-sons-of Mire (Javan): God_helps (Elishah), and-golden_stone (Tarshish); Bruisers (Kittim), and-Beloveds (Dodanim).',
    englishNatural:
      'And the sons of Mire (Javan): God-helps (Elishah), and golden-stone (Tarshish); Bruisers (Kittim), and Beloveds (Dodanim).',
    kjv: 'And the sons of Javan; Elishah, and Tarshish, Kittim, and Dodanim.',
  },
};
