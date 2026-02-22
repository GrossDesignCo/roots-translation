import { Verse } from '@/types';

export const ezekiel_1_5: Verse = {
  meta: {
    book: 'Ezekiel',
    chapter: 1,
    verse: 5,
  },
  words: [
    {
      hebrew: 'וּמִתּוֹכָהּ',
      transliteration: 'uMitokah',
      englishLiteral: 'And-from-midst-its',
      englishNatural: 'And from its midst',
      root: 'tokh',
      prefixes: ['u', 'mi'],
      suffixes: ['ah'],
      order: 1,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'דְּמוּת',
      transliteration: 'demut',
      englishLiteral: 'likeness-of',
      englishNatural: 'a likeness of',
      root: 'demut',
      order: 2,
      morphology: {
        gender: 'feminine',
        number: 'singular',
        state: 'construct',
        type: 'noun',
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
      },
    },
    {
      hebrew: 'חַיּוֹת',
      transliteration: 'chayot',
      englishLiteral: 'living_beings',
      englishNatural: 'living-beings',
      root: 'chayah',
      order: 4,
      morphology: {
        gender: 'feminine',
        number: 'plural',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ';',
        englishNatural: ';',
      },
      lineBreaksAfter: 1,
    },
    {
      hebrew: 'וְזֶה',
      transliteration: 'veZeh',
      englishLiteral: 'and-this',
      englishNatural: 'and this',
      root: 'zeh',
      prefixes: ['ve'],
      order: 5,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'pronoun',
      },
    },
    {
      hebrew: 'מַרְאֵיהֶן',
      transliteration: 'mareihen',
      englishLiteral: 'appearance-their',
      englishNatural: 'their appearance',
      root: 'mareh',
      suffixes: ['hen'],
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
    {
      hebrew: 'דְּמוּת',
      transliteration: 'demut',
      englishLiteral: 'likeness-of',
      englishNatural: 'a likeness of',
      root: 'demut',
      order: 7,
      morphology: {
        gender: 'feminine',
        number: 'singular',
        state: 'construct',
        type: 'noun',
      },
    },
    {
      hebrew: 'אָדָם',
      transliteration: 'Adam',
      englishLiteral: 'Earthling (Adam)',
      englishNatural: 'Earthling (Adam)',
      root: 'adam',
      order: 8,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      hebrew: 'לָהֵנָּה',
      transliteration: 'lahenah',
      englishLiteral: 'to-them',
      englishNatural: 'to them',
      root: 'lamed',
      suffixes: ['enah'],
      order: 9,
      morphology: {
        gender: 'feminine',
        number: 'plural',
        person: '3rd',
        type: 'preposition',
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
      'וּמִתּוֹכָהּ דְּמוּת אַרְבַּע חַיּוֹת וְזֶה מַרְאֵיהֶן דְּמוּת אָדָם לָהֵנָּה',
    transliteration:
      'uMitokah demut arba chayot veZeh mareihen demut Adam lahenah',
    englishLiteral:
      'And-from-midst-its likeness-of four living_beings; and-this appearance-their, likeness-of Earthling (Adam) to-them.',
    englishNatural:
      'And from its midst a likeness of four living-beings; and this their appearance, a likeness of Earthling (Adam) to them.',
    kjv: 'Also out of the midst thereof came the likeness of four living creatures. And this was their appearance; they had the likeness of a man.',
    lastReviewed: { name: 'Matt Gross', date: '2026-02-22' },
  },
};
