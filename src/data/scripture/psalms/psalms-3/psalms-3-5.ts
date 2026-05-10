import { Verse } from '@/types';

export const psalms_3_5: Verse = {
  meta: {
    book: 'Psalms',
    chapter: 3,
    verse: 5,
  },
  words: [
    {
      hebrew: 'אֲנִ֥י',
      transliteration: 'ani',
      englishLiteral: 'I',
      englishNatural: 'I',
      root: 'ani',
      order: 1,
      morphology: {
        type: 'pronoun',
        person: '1st',
        number: 'singular',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'שָׁכַ֗בְתִּי',
      transliteration: 'shakhavti',
      englishLiteral: 'I-have-lain_down',
      englishNatural: 'have lain-down',
      root: 'shakav',
      suffixes: ['ti'],
      order: 2,
      morphology: {
        type: 'verb',
        stem: 'qal',
        tense: 'perfect',
        person: '1st',
        number: 'singular',
        gender: 'masculine',
      },
    },
    {
      hebrew: 'וָאִ֫ישָׁ֥נָה',
      transliteration: 'vaIshanah',
      englishLiteral: 'and-I-will-sleep',
      englishNatural: 'and I slept',
      root: 'yashen',
      prefixes: ['va'],
      order: 3,
      morphology: {
        type: 'verb',
        stem: 'qal',
        tense: 'imperfect',
        person: '1st',
        number: 'singular',
        gender: 'masculine',
      },
      grammarSuffix: {
        englishLiteral: ';',
        englishNatural: ';',
      },
      lineBreaksAfter: 1,
    },
    {
      hebrew: 'הֱקִיצ֑וֹתִי',
      transliteration: 'heQitsoti',
      englishLiteral: 'I-have-awoken',
      englishNatural: 'I have awoken',
      root: 'quts',
      prefixes: ['hi'],
      suffixes: ['ti'],
      order: 4,
      morphology: {
        type: 'verb',
        stem: 'hiphil',
        tense: 'perfect',
        person: '1st',
        number: 'singular',
        gender: 'masculine',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'כִּ֖י',
      transliteration: 'ki',
      englishLiteral: 'that',
      englishNatural: 'that',
      root: 'ki',
      order: 5,
      morphology: {
        type: 'conjunction',
      },
    },
    {
      hebrew: 'יְהוָ֣ה',
      transliteration: 'YHWH',
      englishLiteral: 'He_Who_Is (YHWH)',
      englishNatural: 'He-Who-Is (YHWH)',
      root: 'yhwh',
      order: 6,
      morphology: {
        type: 'noun',
      },
    },
    {
      hebrew: 'יִסְמְכֵֽנִי׃',
      transliteration: 'yiSmkheni',
      englishLiteral: 'he-will-support-me',
      englishNatural: 'supports me',
      root: 'samakh',
      prefixes: ['yi'],
      suffixes: ['ni'],
      order: 7,
      morphology: {
        type: 'verb',
        stem: 'qal',
        tense: 'imperfect',
        person: '3rd',
        number: 'singular',
        gender: 'masculine',
      },
      grammarSuffix: {
        englishLiteral: '.',
        englishNatural: '.',
      },
    },
  ],
  expectedTranslations: {
    hebrew:
      'אֲנִ֥י שָׁכַ֗בְתִּי וָאִ֫ישָׁ֥נָה הֱקִיצ֑וֹתִי כִּ֖י יְהוָ֣ה יִסְמְכֵֽנִי׃',
    transliteration:
      'ani shakhavti vaIshanah heQitsoti ki YHWH yiSmkheni',
    englishLiteral:
      'I I-have-lain_down and-I-will-sleep; I-have-awoken, that He_Who_Is (YHWH) he-will-support-me.',
    englishNatural:
      'I have lain-down and I slept; I have awoken, that He-Who-Is (YHWH) supports me.',
    kjv: 'I laid me down and slept; I awaked; for the LORD sustained me.',
    lastReviewed: { name: 'Matt Gross', date: '2026-05-10' },
},
};
