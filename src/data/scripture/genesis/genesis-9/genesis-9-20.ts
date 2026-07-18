import { Verse } from '@/types';

export const genesis_9_20: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 9,
    verse: 20,
  },
  words: [
    {
      hebrew: 'וַיָּחֶל',
      transliteration: 'vaYachel',
      englishLiteral: 'And-began',
      englishNatural: 'began',
      root: 'chalal',
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
        stem: 'hiphil',
        type: 'verb',
      },
      grammarSuffix: {
        englishNatural: ',',
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
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
      },
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      hebrew: 'אִישׁ',
      transliteration: 'ish',
      englishLiteral: 'man-of',
      englishNatural: 'a man of',
      root: 'ish',
      order: {
        hebrew: 3,
        english: 3,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        state: 'construct',
        type: 'noun',
      },
    },
    {
      hebrew: 'הָאֲדָמָה',
      transliteration: 'haAdamah',
      englishLiteral: 'the-earth',
      englishNatural: 'the earth',
      root: 'adamah',
      prefixes: ['ha'],
      order: {
        hebrew: 4,
        english: 4,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ';',
        englishNatural: ';',
      },
    },
    {
      hebrew: 'וַיִּטַּע',
      transliteration: 'vaYitta',
      englishLiteral: 'And-planted',
      englishNatural: 'and planted',
      root: 'nata',
      prefixes: ['va'],
      order: 5,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'imperfect',
        stem: 'qal',
        type: 'verb',
      },
      grammarSuffix: {
        englishLiteral: ',',
      },
      lineBreaksBefore: {
        hebrew: 1,
      },
    },
    {
      hebrew: 'כָּרֶם',
      transliteration: 'kerem',
      englishLiteral: 'vineyard',
      englishNatural: 'a vineyard',
      root: 'kerem',
      order: 6,
      morphology: {
        gender: 'masculine',
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
    hebrew: 'וַיָּחֶל נֹחַ אִישׁ הָאֲדָמָה וַיִּטַּע כָּרֶם',
    transliteration: 'vaYachel Noach ish haAdamah vaYitta kerem',
    englishLiteral:
      'And-began Rest (Noah), man-of the-earth; And-planted, vineyard.',
    englishNatural:
      'And Rest (Noah) began, a man of the earth; and planted a vineyard.',
    kjv: 'And Noah the husbandman began, and planted a vineyard.',
    lastReviewed: { name: 'Matt Gross', date: '2026-07-18' },
},
};
