import { Verse } from '@/types';

export const micah_2_5: Verse = {
  meta: {
    book: 'Micah',
    chapter: 2,
    verse: 5,
  },
  words: [
    {
      hebrew: 'לָכֵן',
      transliteration: 'lakhen',
      englishLiteral: 'therefore',
      englishNatural: 'Therefore',
      root: 'lakhen',
      order: 1,
      morphology: {
        type: 'adverb',
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
        english: 3,
      },
      morphology: {
        type: 'adverb',
      },
    },
    {
      hebrew: 'יִהְיֶה',
      transliteration: 'yihyeh',
      englishLiteral: 'he-will-be',
      englishNatural: 'there will be',
      root: 'hayah',
      prefixes: ['yi'],
      order: {
        hebrew: 3,
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
    },
    {
      hebrew: 'לְךָ',
      transliteration: 'lekha',
      englishLiteral: 'to-you',
      englishNatural: 'to you',
      root: 'le',
      suffixes: ['kha'],
      order: 4,
      morphology: {
        type: 'preposition',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'מַשְׁלִיךְ',
      transliteration: 'maShlikh',
      englishLiteral: 'one-who-throws',
      englishNatural: 'one who throws',
      root: 'shalakh',
      prefixes: ['ma'],
      order: 5,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        tense: 'participle',
        stem: 'hiphil',
        type: 'verb',
      },
    },
    {
      hebrew: 'חֶבֶל',
      transliteration: 'chevel',
      englishLiteral: 'cord',
      englishNatural: 'a cord',
      root: 'chevel',
      order: 6,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      hebrew: 'בְּגוֹרָל',
      transliteration: 'beGoral',
      englishLiteral: 'in-lot',
      englishNatural: 'in a lot',
      root: 'goral',
      prefixes: ['be'],
      order: 7,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ';',
        englishNatural: ',',
      },
      lineBreaksAfter: {
        english: 1,
      },
    },
    {
      hebrew: 'בִּקְהַל',
      transliteration: 'biQahal',
      englishLiteral: 'in-congregation-of',
      englishNatural: 'in the congregation of',
      root: 'qahal_congregation',
      prefixes: ['be'],
      order: 8,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        state: 'construct',
        type: 'noun',
      },
    },
    {
      hebrew: 'יְהוָה',
      transliteration: 'YHWH',
      englishLiteral: 'He_Who_Is (YHWH)',
      englishNatural: 'He-Who-Is (YHWH)',
      root: 'yhwh',
      order: 9,
      morphology: {
        type: 'noun',
      },
      grammarSuffix: {
        hebrew: '׃',
        englishLiteral: '."',
        englishNatural: '."',
      },
      lineBreaksAfter: 1,
    },
  ],
  expectedTranslations: {
    hebrew:
      'לָכֵן לֹא־יִהְיֶה לְךָ מַשְׁלִיךְ חֶבֶל בְּגוֹרָל בִּקְהַל יְהוָה׃',
    transliteration:
      'lakhen lo-yihyeh lekha maShlikh chevel beGoral biQahal YHWH',
    englishLiteral:
      'therefore not- he-will-be to-you, one-who-throws cord in-lot; in-congregation-of He_Who_Is (YHWH)."',
    englishNatural:
      'Therefore there will be not to you, one who throws a cord in a lot, in the congregation of He-Who-Is (YHWH)."',
    kjv: 'Therefore thou shalt have none that shall cast a cord by lot in the congregation of the LORD.',
  },
};
