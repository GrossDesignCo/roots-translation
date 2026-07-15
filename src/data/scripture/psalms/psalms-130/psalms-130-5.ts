import { Verse } from '@/types';

export const psalms_130_5: Verse = {
  meta: {
    book: 'Psalms',
    chapter: 130,
    verse: 5,
  },
  words: [
    {
      hebrew: 'קִוִּיתִי',
      transliteration: 'qivviti',
      englishLiteral: 'I-have-waited-in_tension',
      englishNatural: 'I have waited-in-tension',
      root: 'qavah',
      suffixes: ['ti'],
      order: 1,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '1st',
        tense: 'perfect',
        stem: 'piel',
        type: 'verb',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'יְהוָה',
      transliteration: 'YHWH',
      englishLiteral: 'He_Who_Is (YHWH)',
      englishNatural: 'He-Who-Is (YHWH)',
      root: 'yhwh',
      order: 2,
      morphology: {
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ';',
      },
    },
    {
      hebrew: 'קִוְּתָה',
      transliteration: 'qivvetah',
      englishLiteral: 'she-has-waited-in_tension',
      englishNatural: 'has waited-in-tension',
      root: 'qavah',
      order: {
        hebrew: 3,
        english: 4,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
        person: '3rd',
        tense: 'perfect',
        stem: 'piel',
        type: 'verb',
      },
      grammarSuffix: {
        englishNatural: ';',
      },
    },
    {
      hebrew: 'נַפְשִׁי',
      transliteration: 'nafshi',
      englishLiteral: 'my-throat',
      englishNatural: 'my soul',
      root: 'nephesh',
      suffixes: ['i'],
      order: {
        hebrew: 4,
        english: 3,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
        person: '1st',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ';',
      },
      lineBreaksAfter: 1,
    },
    {
      hebrew: 'וְלִדְבָרוֹ',
      transliteration: 'veLiDvaro',
      englishLiteral: 'and-to-word-his',
      englishNatural: 'and to his word',
      root: 'davar',
      prefixes: ['ve', 'le'],
      suffixes: ['o'],
      order: 5,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      hebrew: 'הוֹחָלְתִּי',
      transliteration: 'hochalti',
      englishLiteral: 'I-have-waited-patiently',
      englishNatural: 'I have waited-patiently',
      root: 'yachal',
      suffixes: ['ti'],
      order: 6,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '1st',
        tense: 'perfect',
        stem: 'hiphil',
        type: 'verb',
      },
      grammarSuffix: {
        englishLiteral: '.',
        englishNatural: '.',
      },
      lineBreaksAfter: 1,
    },
  ],
  expectedTranslations: {
    hebrew: 'קִוִּיתִי יְהוָה קִוְּתָה נַפְשִׁי וְלִדְבָרוֹ הוֹחָלְתִּי',
    transliteration: 'qivviti YHWH qivvetah nafshi veLiDvaro hochalti',
    englishLiteral:
      'I-have-waited-in_tension He_Who_Is (YHWH), she-has-waited-in_tension my-throat; and-to-word-his I-have-waited-patiently.',
    englishNatural:
      'I have waited-in-tension He-Who-Is (YHWH); my soul has waited-in-tension; and to his word I have waited-patiently.',
    kjv: 'I wait for the LORD, my soul doth wait, and in His word do I hope.',
    lastReviewed: { name: 'Matt Gross', date: '2026-07-15' },
},
};
