import { type Verse } from '@/types';

export const genesis_11_12: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 11,
    verse: 12,
  },
  words: [
    {
      hebrew: 'וְאַרְפַּכְשַׁד',
      transliteration: 'veArpachshad',
      englishLiteral: 'And-Heal_Shaddai (Arpachshad)',
      englishNatural: 'And Heal-Shaddai (Arpachshad)',
      root: 'arpachshad',
      prefixes: ['ve'],
      order: 1,
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'singular',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'חַי',
      transliteration: 'chai',
      englishLiteral: 'he-lived',
      englishNatural: 'lived',
      root: 'chayah',
      order: 2,
      morphology: {
        type: 'verb',
        person: '3rd',
        gender: 'masculine',
        number: 'singular',
        stem: 'qal',
        tense: 'perfect',
      },
    },
    {
      hebrew: 'חָמֵשׁ',
      transliteration: 'chamesh',
      englishLiteral: 'five',
      englishNatural: 'five',
      root: 'chamesh',
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
      hebrew: 'שָׁלַח',
      transliteration: 'Shelach',
      englishLiteral: 'Sent (Shelah)',
      englishNatural: 'Sent (Shelah)',
      root: 'shelach',
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
    hebrew: 'וְאַרְפַּכְשַׁד חַי חָמֵשׁ וּשְׁלֹשִׁים שָׁנָה וַיּוֹלֶד אֶת־שָׁלַח',
    transliteration:
      'veArpachshad chai chamesh uShloshim shanah vaYoled et-Shelach',
    englishLiteral:
      'And-Heal_Shaddai (Arpachshad) he-lived five and-thirty year, and-he-birthed ↳ Sent (Shelah).',
    englishNatural:
      'And Heal-Shaddai (Arpachshad) lived five and thirty years, and birthed Sent (Shelah).',
    kjv: 'And Arphaxad lived five and thirty years, and begat Salah:',
  },
};
