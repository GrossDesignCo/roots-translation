import { Verse } from '@/types';

export const genesis_9_18: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 9,
    verse: 18,
  },
  words: [
    {
      hebrew: 'וַיִּהְיוּ',
      transliteration: 'vaYihyu',
      englishLiteral: 'and-were',
      englishNatural: 'were',
      root: 'hayah',
      prefixes: ['va'],
      order: {
        hebrew: 1,
        english: 6,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
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
      hebrew: 'בְנֵי־',
      transliteration: 'beney-',
      englishLiteral: 'sons-of-',
      englishNatural: 'And the sons of',
      root: 'ben',
      suffixes: ['ei'],
      order: {
        hebrew: 2,
        english: 1,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        state: 'construct',
        type: 'noun',
      },
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      hebrew: 'נֹחַ',
      transliteration: 'Noach',
      englishLiteral: 'Rest (Noah)',
      englishNatural: 'Rest (Noah)',
      root: 'noach',
      order: {
        hebrew: 3,
        english: 2,
      },
      morphology: {
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'הַיֹּצְאִים',
      transliteration: 'haYotzeim',
      englishLiteral: 'the-going-out',
      englishNatural: 'that went forth',
      root: 'yatsa',
      prefixes: ['ha'],
      suffixes: ['im'],
      order: {
        hebrew: 4,
        english: 3,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        tense: 'participle',
        stem: 'qal',
        type: 'verb',
      },
    },
    {
      hebrew: 'מִן־',
      transliteration: 'min-',
      englishLiteral: 'from-',
      englishNatural: 'from',
      root: 'min',
      order: {
        hebrew: 5,
        english: 4,
      },
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'הַתֵּבָה',
      transliteration: 'haTevah',
      englishLiteral: 'the-ark',
      englishNatural: 'the ark',
      root: 'tevah',
      prefixes: ['ha'],
      order: {
        hebrew: 6,
        english: 5,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: '--',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'שֵׁם',
      transliteration: 'Shem',
      englishLiteral: 'Name (Shem)',
      englishNatural: 'Name (Shem)',
      root: 'shem',
      order: 7,
      morphology: {
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'וְחָם',
      transliteration: 'veCham',
      englishLiteral: 'and-Hot (Ham)',
      englishNatural: 'and Hot (Ham)',
      root: 'cham',
      prefixes: ['ve'],
      order: 8,
      morphology: {
        type: 'noun',
      },
      grammarSuffix: {
        englishNatural: ',',
      },
    },
    {
      hebrew: 'וָיָפֶת',
      transliteration: 'vaYafet',
      englishLiteral: 'and-Spacious (Japheth)',
      englishNatural: 'and Spacious (Japheth)',
      root: 'yafet',
      prefixes: ['va'],
      order: 9,
      morphology: {
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ';',
        englishNatural: ';',
      },
      lineBreaksAfter: 1,
    },
    {
      hebrew: 'וְחָם',
      transliteration: 'veCham',
      englishLiteral: 'and-Hot (Ham)',
      englishNatural: 'and Hot (Ham)',
      root: 'cham',
      prefixes: ['ve'],
      order: 10,
      morphology: {
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
      lineBreaksBefore: {
        hebrew: 1,
      },
    },
    {
      hebrew: 'הוּא',
      transliteration: 'hu',
      englishLiteral: 'he',
      englishNatural: 'he',
      root: 'hu',
      order: 11,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        type: 'pronoun',
      },
      grammarSuffix: {
        englishNatural: ',',
      },
    },
    {
      hebrew: 'אֲבִי',
      transliteration: 'avi',
      englishLiteral: 'father-of',
      englishNatural: 'father of',
      root: 'av',
      order: 12,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        state: 'construct',
        type: 'noun',
      },
    },
    {
      hebrew: 'כְנָעַן',
      transliteration: 'Kenaan',
      englishLiteral: 'Low (Canaan)',
      englishNatural: 'Low (Canaan)',
      root: 'kenaan',
      order: 13,
      morphology: {
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
      'וַיִּהְיוּ בְנֵי־נֹחַ הַיֹּצְאִים מִן־הַתֵּבָה שֵׁם וְחָם וָיָפֶת וְחָם הוּא אֲבִי כְנָעַן',
    transliteration:
      'vaYihyu beney-Noach haYotzeim min-haTevah Shem veCham vaYafet veCham hu avi Kenaan',
    englishLiteral:
      'and-were sons-of- Rest (Noah), the-going-out from- the-ark-- Name (Shem), and-Hot (Ham) and-Spacious (Japheth); and-Hot (Ham), he father-of Low (Canaan).',
    englishNatural:
      'And the sons of Rest (Noah), that went forth from the ark, were Name (Shem), and Hot (Ham), and Spacious (Japheth); and Hot (Ham), he, father of Low (Canaan).',
    kjv: 'And the sons of Noah, that went forth from the ark, were Shem, and Ham, and Japheth; and Ham is the father of Canaan.',
    lastReviewed: { name: 'Matt Gross', date: '2026-07-18' },
},
};
