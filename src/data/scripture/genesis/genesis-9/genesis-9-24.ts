import { Verse } from '@/types';

export const genesis_9_24: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 9,
    verse: 24,
  },
  words: [
    {
      hebrew: 'וַיִּיקֶץ',
      transliteration: 'vaYiQets',
      englishLiteral: 'And-he-will-awake',
      englishNatural: 'awoke',
      root: 'quts',
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
        stem: 'qal',
        type: 'verb',
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
      hebrew: 'מִיֵּינוֹ',
      transliteration: 'miYeyno',
      englishLiteral: 'from-wine-his',
      englishNatural: 'from his wine',
      root: 'yayin',
      prefixes: ['mi'],
      suffixes: ['o'],
      order: 3,
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
      hebrew: 'וַיֵּדַע',
      transliteration: 'vaYeda',
      englishLiteral: 'And-he-knew',
      englishNatural: 'and knew',
      root: 'yada',
      prefixes: ['va'],
      order: 4,
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
      hebrew: 'אֵת',
      transliteration: 'et',
      englishLiteral: '↳',
      englishNatural: '',
      root: 'et',
      order: 5,
      morphology: {
        type: 'particle',
      },
    },
    {
      hebrew: 'אֲשֶׁר־',
      transliteration: 'asher-',
      englishLiteral: 'which-',
      englishNatural: 'that-which',
      root: 'asher',
      order: 6,
      morphology: {
        type: 'relative',
      },
    },
    {
      hebrew: 'עָשָׂה',
      transliteration: 'asah',
      englishLiteral: 'had-made',
      englishNatural: 'had made',
      root: 'asah',
      order: {
        hebrew: 7,
        english: 9,
      },
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
      hebrew: 'לוֹ',
      transliteration: 'lo',
      englishLiteral: 'to-him',
      englishNatural: 'to him',
      root: 'lamed',
      suffixes: ['o'],
      order: {
        hebrew: 8,
        english: 10,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        type: 'preposition',
      },
      grammarSuffix: {
        englishNatural: '.',
      },
      lineBreaksAfter: {
        english: 1,
      },
    },
    {
      hebrew: 'בְּנוֹ',
      transliteration: 'beno',
      englishLiteral: 'son-his',
      englishNatural: 'his son',
      root: 'ben',
      suffixes: ['o'],
      order: {
        hebrew: 9,
        english: 7,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        type: 'noun',
      },
    },
    {
      hebrew: 'הַקָּטָן',
      transliteration: 'haQatan',
      englishLiteral: 'the-small',
      englishNatural: 'the small',
      root: 'qatan',
      prefixes: ['ha'],
      order: {
        hebrew: 10,
        english: 8,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'adjective',
      },
      grammarSuffix: {
        englishLiteral: '.',
      },
      lineBreaksAfter: {
        hebrew: 1,
      },
    },
  ],
  expectedTranslations: {
    hebrew:
      'וַיִּיקֶץ נֹחַ מִיֵּינוֹ וַיֵּדַע אֵת אֲשֶׁר־עָשָׂה לוֹ בְּנוֹ הַקָּטָן',
    transliteration:
      'vaYiQets Noach miYeyno vaYeda et asher-asah lo beno haQatan',
    englishLiteral:
      'And-he-will-awake Rest (Noah), from-wine-his; And-he-knew, ↳ which- had-made to-him son-his the-small.',
    englishNatural:
      'And Rest (Noah) awoke from his wine; and knew that-which his son the small had made to him.',
    kjv: 'And Noah awoke from his wine, and knew what his youngest son had done unto him.',
    lastReviewed: { name: 'Matt Gross', date: '2026-07-18' },
},
};
