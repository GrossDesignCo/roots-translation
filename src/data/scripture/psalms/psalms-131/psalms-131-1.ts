import { Verse } from '@/types';

export const psalms_131_1: Verse = {
  meta: {
    book: 'Psalms',
    chapter: 131,
    verse: 1,
  },
  words: [
    {
      hebrew: 'יְהוָה',
      transliteration: 'YHWH',
      englishLiteral: 'He_Who_Is (YHWH)',
      englishNatural: 'He-Who-Is (YHWH)',
      root: 'yhwh',
      order: 1,
      morphology: {
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'לֹא־',
      transliteration: 'lo-',
      englishLiteral: 'not-',
      englishNatural: 'not',
      root: 'lo',
      order: {
        hebrew: 2,
        english: 4,
      },
      morphology: {
        type: 'adverb',
      },
      grammarSuffix: {
        englishNatural: ',',
      },
    },
    {
      hebrew: 'גָבַהּ',
      transliteration: 'gavah',
      englishLiteral: 'is-tall',
      englishNatural: 'is tall',
      root: 'gavah',
      order: 3,
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
      hebrew: 'לִבִּי',
      transliteration: 'libi',
      englishLiteral: 'my-heart',
      englishNatural: 'my heart',
      root: 'lev',
      suffixes: ['i'],
      order: {
        hebrew: 4,
        english: 2,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '1st',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
      },
    },
    {
      hebrew: 'וְלֹא־',
      transliteration: 'velo-',
      englishLiteral: 'and-not-',
      englishNatural: 'not',
      root: 'lo',
      prefixes: ['ve'],
      order: {
        hebrew: 5,
        english: 7,
      },
      morphology: {
        type: 'adverb',
      },
      grammarSuffix: {
        englishNatural: ',',
      },
      lineBreaksBefore: {
        hebrew: 1,
      },
      lineBreaksAfter: {
        english: 1,
      },
    },
    {
      hebrew: 'רָמוּ',
      transliteration: 'ramu',
      englishLiteral: 'are-high',
      englishNatural: 'are high',
      root: 'rum',
      order: 6,
      morphology: {
        gender: 'common',
        number: 'plural',
        person: '3rd',
        tense: 'perfect',
        stem: 'qal',
        type: 'verb',
      },
    },
    {
      hebrew: 'עֵינַי',
      transliteration: 'einai',
      englishLiteral: 'my-eyes',
      englishNatural: 'and my eyes',
      root: 'ayin_eye',
      suffixes: ['ai'],
      order: {
        hebrew: 7,
        english: 5,
      },
      morphology: {
        gender: 'feminine',
        number: 'dual',
        person: '1st',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
      },
      lineBreaksBefore: {
        english: 1,
      },
      lineBreaksAfter: {
        hebrew: 1,
      },
    },
    {
      hebrew: 'וְלֹא־',
      transliteration: 'velo-',
      englishLiteral: 'and-not-',
      englishNatural: 'not',
      root: 'lo',
      prefixes: ['ve'],
      order: {
        hebrew: 8,
        english: 9,
      },
      morphology: {
        type: 'adverb',
      },
      grammarSuffix: {
        englishNatural: ',',
      },
      lineBreaksAfter: {
        english: 1,
      },
    },
    {
      hebrew: 'הִלַּכְתִּי',
      transliteration: 'hilakhti',
      englishLiteral: 'I-have-walked',
      englishNatural: 'and I have walked',
      root: 'halakh',
      prefixes: ['hi'],
      suffixes: ['ti'],
      order: {
        hebrew: 9,
        english: 8,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '1st',
        tense: 'perfect',
        stem: 'hithpael',
        type: 'verb',
      },
      grammarSuffix: {
        englishLiteral: ',',
      },
      lineBreaksAfter: {
        hebrew: 1,
      },
    },
    {
      hebrew: 'בִּגְדֹלוֹת',
      transliteration: 'biGdolot',
      englishLiteral: 'in-greats',
      englishNatural: 'in greats',
      root: 'gadol',
      prefixes: ['bi'],
      suffixes: ['ot'],
      order: 10,
      morphology: {
        gender: 'feminine',
        number: 'plural',
        type: 'adjective',
      },
    },
    {
      hebrew: 'וּבְנִפְלָאוֹת',
      transliteration: 'uvNiFlaot',
      englishLiteral: 'and-in-wonders',
      englishNatural: 'and in wonders',
      root: 'pala',
      prefixes: ['u', 'be'],
      suffixes: ['ot'],
      order: 11,
      morphology: {
        gender: 'feminine',
        number: 'plural',
        tense: 'participle',
        stem: 'niphal',
        type: 'verb',
      },
    },
    {
      hebrew: 'מִמֶּנִּי',
      transliteration: 'mimeni',
      englishLiteral: 'from-me',
      englishNatural: 'from me',
      root: 'min',
      suffixes: ['ni'],
      order: 12,
      morphology: {
        person: '1st',
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
      'יְהוָה לֹא־גָבַהּ לִבִּי וְלֹא־רָמוּ עֵינַי וְלֹא־הִלַּכְתִּי בִּגְדֹלוֹת וּבְנִפְלָאוֹת מִמֶּנִּי',
    transliteration:
      'YHWH lo-gavah libi velo-ramu einai velo-hilakhti biGdolot uvNiFlaot mimeni',
    englishLiteral:
      'He_Who_Is (YHWH), not- is-tall my-heart, and-not- are-high my-eyes, and-not- I-have-walked, in-greats and-in-wonders from-me.',
    englishNatural:
      'He-Who-Is (YHWH), my heart is tall not, and my eyes are high not, and I have walked not, in greats and in wonders from me.',
    kjv: 'LORD, my heart is not haughty, nor mine eyes lofty: neither do I exercise myself in great matters, or in things too high for me.',
    lastReviewed: { name: 'Matt Gross', date: '2026-04-10' },
  },
};
