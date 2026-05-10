import { Verse } from '@/types';

export const psalms_3_2: Verse = {
  meta: {
    book: 'Psalms',
    chapter: 3,
    verse: 2,
  },
  words: [
    {
      hebrew: 'רַ֭בִּים',
      transliteration: 'rabbim',
      englishLiteral: 'many',
      englishNatural: 'Many',
      root: 'rav',
      suffixes: ['im'],
      order: 1,
      morphology: {
        type: 'adjective',
        gender: 'masculine',
        number: 'plural',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'אֹמְרִ֣ים',
      transliteration: 'omrim',
      englishLiteral: 'say-s',
      englishNatural: 'say',
      root: 'amar',
      suffixes: ['im'],
      order: 2,
      morphology: {
        type: 'verb',
        stem: 'qal',
        tense: 'participle',
        gender: 'masculine',
        number: 'plural',
      },
    },
    {
      hebrew: 'לְנַפְשִׁ֑י',
      transliteration: 'leNafshi',
      englishLiteral: 'to-my-throat',
      englishNatural: 'to my throat',
      root: 'nephesh',
      prefixes: ['le'],
      suffixes: ['i_possessive'],
      order: 3,
      morphology: {
        type: 'noun',
        gender: 'feminine',
        number: 'singular',
        state: 'absolute',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
      lineBreaksAfter: 1,
    },
    {
      hebrew: 'אֵ֤ין',
      transliteration: 'ein',
      englishLiteral: 'nothing',
      englishNatural: 'No',
      root: 'ein',
      order: 4,
      morphology: {
        type: 'adverb',
      },
      grammarPrefix: {
        englishLiteral: '"',
        englishNatural: '"',
      },
    },
    {
      hebrew: 'יְשׁוּעָ֖תָה',
      transliteration: 'yeshuatah',
      englishLiteral: 'salvation',
      englishNatural: 'salvation',
      root: 'yeshuah',
      order: 5,
      morphology: {
        type: 'noun',
        gender: 'feminine',
        number: 'singular',
        state: 'absolute',
      },
    },
    {
      hebrew: 'ל֣וֹ',
      transliteration: 'lo',
      englishLiteral: 'to-him',
      englishNatural: 'to him',
      root: 'la',
      suffixes: ['o'],
      order: 6,
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'בֵֽאלֹהִ֣ים',
      transliteration: 'beElohim',
      englishLiteral: 'in-Gods',
      englishNatural: 'in God',
      root: 'eloah',
      prefixes: ['be'],
      suffixes: ['im'],
      order: 7,
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'plural',
      },
      grammarSuffix: {
        englishLiteral: '."',
        englishNatural: '."',
      },
    },
    {
      hebrew: 'סֶֽלָה׃',
      transliteration: 'selah',
      englishLiteral: 'Selah',
      englishNatural: 'Selah',
      root: 'selah',
      order: 8,
      morphology: {
        type: 'interjection',
      },
      grammarSuffix: {
        englishLiteral: '.',
        englishNatural: '.',
      },
    },
  ],
  expectedTranslations: {
    hebrew:
      'רַ֭בִּים אֹמְרִ֣ים לְנַפְשִׁ֑י אֵ֤ין יְשׁוּעָ֖תָה ל֣וֹ בֵֽאלֹהִ֣ים סֶֽלָה׃',
    transliteration:
      'rabbim omrim leNafshi ein yeshuatah lo beElohim selah',
    englishLiteral:
      'many say-s to-my-throat, "nothing salvation to-him in-Gods." Selah.',
    englishNatural:
      'Many say to my throat, "No salvation to him in God." Selah.',
    kjv: 'Many there be which say of my soul, There is no help for him in God. Selah.',
    lastReviewed: { name: 'Matt Gross', date: '2026-05-10' },
  },
};
