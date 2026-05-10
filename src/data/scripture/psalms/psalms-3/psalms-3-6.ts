import { Verse } from '@/types';

export const psalms_3_6: Verse = {
  meta: {
    book: 'Psalms',
    chapter: 3,
    verse: 6,
  },
  words: [
    {
      hebrew: 'לֹ֘א',
      transliteration: 'lo',
      englishLiteral: 'not',
      englishNatural: 'not',
      root: 'lo',
      order: {
        hebrew: 1,
        english: 2,
      },
      morphology: {
        type: 'adverb',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'אִ֫ירָ֥א',
      transliteration: 'eIra',
      englishLiteral: 'I-will-fear',
      englishNatural: 'I will fear',
      root: 'yare',
      prefixes: ['e'],
      order: {
        hebrew: 2,
        english: 1,
      },
      morphology: {
        type: 'verb',
        stem: 'qal',
        tense: 'imperfect',
        person: '1st',
        gender: 'masculine',
        number: 'singular',
      },
    },
    {
      hebrew: 'מֵרִבְב֥וֹת',
      transliteration: 'meRivevot',
      englishLiteral: 'from-ten_thousands-of',
      englishNatural: 'from ten-thousands of',
      root: 'revavah',
      prefixes: ['mi'],
      suffixes: ['ot'],
      order: 3,
      morphology: {
        type: 'noun',
        gender: 'feminine',
        number: 'plural',
        state: 'construct',
      },
    },
    {
      hebrew: 'עָ֑ם',
      transliteration: 'am',
      englishLiteral: 'people',
      englishNatural: 'people',
      root: 'am',
      order: 4,
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'singular',
        state: 'absolute',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'אֲשֶׁ֥ר',
      transliteration: 'asher',
      englishLiteral: 'which',
      englishNatural: 'which',
      root: 'asher',
      order: 5,
      morphology: {
        type: 'relative',
      },
    },
    {
      hebrew: 'סָ֝בִ֗יב',
      transliteration: 'saviv',
      englishLiteral: 'all_around',
      englishNatural: 'all-around',
      root: 'saviv',
      order: 6,
      morphology: {
        type: 'adverb',
      },
    },
    {
      hebrew: 'שָׁ֣תוּ',
      transliteration: 'shatu',
      englishLiteral: 'they-have-appointed',
      englishNatural: 'they have appointed',
      root: 'shit',
      suffixes: ['plural_verb_u'],
      order: 7,
      morphology: {
        type: 'verb',
        stem: 'qal',
        tense: 'perfect',
        person: '3rd',
        gender: 'masculine',
        number: 'plural',
      },
    },
    {
      hebrew: 'עָלָֽי׃',
      transliteration: 'alay',
      englishLiteral: 'over-me',
      englishNatural: 'over me',
      root: 'al',
      suffixes: ['ay'],
      order: 8,
      morphology: {
        type: 'preposition',
      },
      grammarSuffix: {
        englishLiteral: '.',
        englishNatural: '.',
      },
    },
  ],
  expectedTranslations: {
    hebrew:
      'לֹ֘א אִ֫ירָ֥א מֵרִבְב֥וֹת עָ֑ם אֲשֶׁ֥ר סָ֝בִ֗יב שָׁ֣תוּ עָלָֽי׃',
    transliteration:
      'lo eIra meRivevot am asher saviv shatu alay',
    englishLiteral:
      'not I-will-fear from-ten_thousands-of people, which all_around they-have-appointed over-me.',
    englishNatural:
      'I will fear not from ten-thousands of people, which all-around they have appointed over me.',
    kjv: 'I will not be afraid of ten thousands of people, that have set themselves against me round about.',
    lastReviewed: { name: 'Matt Gross', date: '2026-05-10' },
},
};
