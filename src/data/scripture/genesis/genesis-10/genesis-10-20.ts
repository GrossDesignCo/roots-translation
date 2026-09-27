import { Verse } from '@/types';

export const genesis_10_20: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 10,
    verse: 20,
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
      hebrew: 'חָם',
      transliteration: 'Cham',
      englishLiteral: 'Hot (Ham)',
      englishNatural: 'Hot (Ham)',
      root: 'cham',
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
      hebrew: 'בְּגוֹיֵהֶם',
      transliteration: 'beGoyeihem',
      englishLiteral: 'in-nations-their',
      englishNatural: 'in their nations',
      root: 'goy',
      prefixes: ['be'],
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
      'אֵלֶּה בְנֵי־חָם לְמִשְׁפְּחֹתָם לִלְשֹׁנֹתָם בְּאַרְצֹתָם בְּגוֹיֵהֶם',
    transliteration:
      'eleh benei-Cham leMishpechotam liLeshonotam beArtzotam beGoyeihem',
    englishLiteral:
      'These sons-of- Hot (Ham), to-families-their, to-tongues-their, in-lands-their, in-nations-their.',
    englishNatural:
      'These are the sons of Hot (Ham), to their families, to their tongues, in their lands, in their nations.',
    kjv: 'These are the sons of Ham, after their families, after their tongues, in their countries, and in their nations.',
  },
};
