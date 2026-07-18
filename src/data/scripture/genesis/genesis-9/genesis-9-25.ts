import { Verse } from '@/types';

export const genesis_9_25: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 9,
    verse: 25,
  },
  words: [
    {
      hebrew: 'וַיֹּאמֶר',
      transliteration: 'vayYomer',
      englishLiteral: 'And-he-said',
      englishNatural: 'And he said',
      root: 'amar',
      prefixes: ['va'],
      order: 1,
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
        englishNatural: ',',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'אָרוּר',
      transliteration: 'arur',
      englishLiteral: 'cursed',
      englishNatural: 'Cursed',
      root: 'arar',
      order: 2,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        tense: 'participle',
        stem: 'qal',
        type: 'verb',
      },
      grammarPrefix: {
        englishLiteral: '"',
        englishNatural: '"',
      },
      grammarSuffix: {
        englishNatural: ',',
      },
    },
    {
      hebrew: 'כְּנָעַן',
      transliteration: 'Kenaan',
      englishLiteral: 'Low (Canaan)',
      englishNatural: 'Low (Canaan)',
      root: 'kenaan',
      order: 3,
      morphology: {
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ';',
        englishNatural: ';',
      },
    },
    {
      hebrew: 'עֶבֶד',
      transliteration: 'eved',
      englishLiteral: 'servant-of',
      englishNatural: 'a servant of',
      root: 'eved',
      order: 4,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        state: 'construct',
        type: 'noun',
      },
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      hebrew: 'עֲבָדִים',
      transliteration: 'avadim',
      englishLiteral: 'servants',
      englishNatural: 'servants',
      root: 'eved',
      suffixes: ['im'],
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
      hebrew: 'יִהְיֶה',
      transliteration: 'yihyeh',
      englishLiteral: 'he-will-be',
      englishNatural: 'he will be',
      root: 'hayah',
      order: 6,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'imperfect',
        stem: 'qal',
        type: 'verb',
      },
    },
    {
      hebrew: 'לְאֶחָיו',
      transliteration: 'leAchav',
      englishLiteral: 'to-his-brothers',
      englishNatural: 'to his brothers',
      root: 'ach',
      prefixes: ['le'],
      suffixes: ['av'],
      order: 7,
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: '."',
        englishNatural: '."',
      },
      lineBreaksAfter: 1,
    },
  ],
  expectedTranslations: {
    hebrew:
      'וַיֹּאמֶר אָרוּר כְּנָעַן עֶבֶד עֲבָדִים יִהְיֶה לְאֶחָיו',
    transliteration:
      'vayYomer arur Kenaan eved avadim yihyeh leAchav',
    englishLiteral:
      'And-he-said, "cursed Low (Canaan); servant-of servants, he-will-be to-his-brothers.',
    englishNatural:
      'And he said, "Cursed, Low (Canaan); a servant of servants, he will be to his brothers.',
    kjv: 'And he said: Cursed be Canaan; a servant of servants shall he be unto his brethren.',
    lastReviewed: { name: 'Matt Gross', date: '2026-07-18' },
},
};
