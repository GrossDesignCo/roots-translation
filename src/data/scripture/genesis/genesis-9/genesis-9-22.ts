import { Verse } from '@/types';

export const genesis_9_22: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 9,
    verse: 22,
  },
  words: [
    {
      hebrew: 'וַיַּרְא',
      transliteration: 'vaYar',
      englishLiteral: 'And-saw',
      englishNatural: 'saw',
      root: 'raah',
      prefixes: ['va'],
      order: {
        hebrew: 1,
        english: 4,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'imperfect',
        stem: 'qal',
        type: 'verb',
      },
      grammarSuffix: {
        hebrew: ',',
        transliteration: ',',
        englishLiteral: ',',
      },
      lineBreaksBefore: {
        hebrew: 1,
      },
    },
    {
      hebrew: 'חָם',
      transliteration: 'Cham',
      englishLiteral: 'Hot (Ham)',
      englishNatural: 'And Hot (Ham)',
      root: 'cham',
      order: {
        hebrew: 2,
        english: 1,
      },
      morphology: {
        type: 'noun',
      },
      grammarSuffix: {
        englishNatural: ',',
      },
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      hebrew: 'אֲבִי',
      transliteration: 'avi',
      englishLiteral: 'father-of',
      englishNatural: 'the father of',
      root: 'av',
      order: {
        hebrew: 3,
        english: 2,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        state: 'construct',
        type: 'noun',
      },
    },
    {
      hebrew: 'כְנַעַן',
      transliteration: 'Kenaan',
      englishLiteral: 'Low (Canaan)',
      englishNatural: 'Low (Canaan)',
      root: 'kenaan',
      order: {
        hebrew: 4,
        english: 3,
      },
      morphology: {
        type: 'noun',
      },
      grammarSuffix: {
        hebrew: ',',
        transliteration: ',',
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'אֵת',
      transliteration: 'et',
      englishLiteral: '↳',
      englishNatural: '',
      root: 'et',
      order: {
        hebrew: 5,
        english: 5,
      },
      morphology: {
        type: 'particle',
      },
      grammarSuffix: {
        hebrew: ',',
        transliteration: ',',
        englishLiteral: ',',
      },
    },
    {
      hebrew: 'עֶרְוַת',
      transliteration: 'ervat',
      englishLiteral: 'nakedness-of',
      englishNatural: 'the nakedness of',
      root: 'ervah',
      order: {
        hebrew: 6,
        english: 6,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
        state: 'construct',
        type: 'noun',
      },
    },
    {
      hebrew: 'אָבִיו',
      transliteration: 'aviv',
      englishLiteral: 'father-his',
      englishNatural: 'his father',
      root: 'av',
      suffixes: ['av'],
      order: {
        hebrew: 7,
        english: 7,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        type: 'noun',
      },
      grammarSuffix: {
        hebrew: ';',
        transliteration: ';',
        englishLiteral: ';',
        englishNatural: ';',
      },
    },
    {
      hebrew: 'וַיַּגֵּד',
      transliteration: 'vaYagged',
      englishLiteral: 'And-declared',
      englishNatural: 'and declared',
      root: 'nagad',
      prefixes: ['va'],
      order: 8,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'imperfect',
        stem: 'hiphil',
        type: 'verb',
      },
      lineBreaksBefore: {
        hebrew: 1,
      },
    },
    {
      hebrew: 'לִשְׁנֵי־',
      transliteration: 'liShney-',
      englishLiteral: 'to-two-',
      englishNatural: 'to his two',
      root: 'shnayim',
      prefixes: ['le'],
      order: {
        hebrew: 9,
        english: 9,
      },
      morphology: {
        gender: 'masculine',
        number: 'dual',
        state: 'construct',
        type: 'numeral',
      },
    },
    {
      hebrew: 'אֶחָיו',
      transliteration: 'echav',
      englishLiteral: 'brothers-his',
      englishNatural: 'brothers',
      root: 'ach',
      suffixes: ['av'],
      order: {
        hebrew: 10,
        english: 10,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        person: '3rd',
        type: 'noun',
      },
      grammarSuffix: {
        hebrew: ',',
        transliteration: ',',
        englishLiteral: ',',
      },
    },
    {
      hebrew: 'בַּחוּץ',
      transliteration: 'baChutz',
      englishLiteral: 'in-outside',
      englishNatural: 'outside',
      root: 'chutz',
      prefixes: ['ba'],
      order: 11,
      morphology: {
        type: 'adverb',
      },
      grammarSuffix: {
        hebrew: '.',
        transliteration: '.',
        englishLiteral: '.',
        englishNatural: '.',
      },
      lineBreaksAfter: 1,
    },
  ],
  expectedTranslations: {
    hebrew:
      'וַיַּרְא, חָם אֲבִי כְנַעַן, אֵת, עֶרְוַת אָבִיו; וַיַּגֵּד לִשְׁנֵי־אֶחָיו, בַּחוּץ.',
    transliteration:
      'vaYar, Cham avi Kenaan, et, ervat aviv; vaYagged liShney-echav, baChutz.',
    englishLiteral:
      'And-saw, Hot (Ham) father-of Low (Canaan), ↳, nakedness-of father-his; And-declared to-two- brothers-his, in-outside.',
    englishNatural:
      'And Hot (Ham), the father of Low (Canaan), saw the nakedness of his father; and declared to his two brothers outside.',
    kjv: 'And Ham, the father of Canaan, saw the nakedness of his father, and told his two brethren without.',
    lastReviewed: { name: 'Matt Gross', date: '2026-07-18' },
},
};
