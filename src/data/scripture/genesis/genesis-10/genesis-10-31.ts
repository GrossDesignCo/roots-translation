import { Verse } from '@/types';

export const genesis_10_31: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 10,
    verse: 31,
  },
  words: [
    {
      hebrew: 'אֵלֶּה',
      transliteration: 'eleh',
      englishLiteral: 'These',
      englishNatural: 'These',
      root: 'eleh',
      order: 1,
      morphology: {
        type: 'pronoun',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'בְנֵי־',
      transliteration: 'benei-',
      englishLiteral: 'sons-of-',
      englishNatural: 'are the sons of',
      root: 'ben',
      suffixes: ['ei'],
      order: 2,
      morphology: {
        gender: 'masculine',
        number: 'plural',
        state: 'construct',
        type: 'noun',
      },
    },
    {
      hebrew: 'שֵׁם',
      transliteration: 'Shem',
      englishLiteral: 'Name (Shem)',
      englishNatural: 'Name (Shem)',
      root: 'shem',
      order: 3,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
      lineBreaksAfter: 1,
    },
    {
      hebrew: 'לְמִשְׁפְּחֹתָם',
      transliteration: 'leMishpechotam',
      englishLiteral: 'to-families-their',
      englishNatural: 'to their families',
      root: 'mishpachah',
      prefixes: ['le'],
      suffixes: ['ot', 'am'],
      order: 4,
      morphology: {
        gender: 'feminine',
        number: 'plural',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'לִלְשֹׁנֹתָם',
      transliteration: 'liLeshonotam',
      englishLiteral: 'to-tongues-their',
      englishNatural: 'to their tongues',
      root: 'lashon',
      prefixes: ['le'],
      suffixes: ['ot', 'am'],
      order: 5,
      morphology: {
        gender: 'feminine',
        number: 'plural',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'בְּאַרְצֹתָם',
      transliteration: 'beArtzotam',
      englishLiteral: 'in-lands-their',
      englishNatural: 'in their lands',
      root: 'eretz',
      prefixes: ['be'],
      suffixes: ['ot', 'am'],
      order: 6,
      morphology: {
        gender: 'feminine',
        number: 'plural',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'לְגוֹיֵהֶם',
      transliteration: 'leGoyeihem',
      englishLiteral: 'to-nations-their',
      englishNatural: 'to their nations',
      root: 'goy',
      prefixes: ['le'],
      suffixes: ['ei', 'hem'],
      order: 7,
      morphology: {
        gender: 'masculine',
        number: 'plural',
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
      'אֵלֶּה בְנֵי־שֵׁם לְמִשְׁפְּחֹתָם לִלְשֹׁנֹתָם בְּאַרְצֹתָם לְגוֹיֵהֶם',
    transliteration:
      'eleh benei-Shem leMishpechotam liLeshonotam beArtzotam leGoyeihem',
    englishLiteral:
      'These sons-of- Name (Shem), to-families-their, to-tongues-their, in-lands-their, to-nations-their.',
    englishNatural:
      'These are the sons of Name (Shem), to their families, to their tongues, in their lands, to their nations.',
    kjv: 'These are the sons of Shem, after their families, after their tongues, in their lands, after their nations.',
  },
};
