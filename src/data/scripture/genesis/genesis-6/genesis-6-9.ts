import { Verse } from '@/types';

export const genesis_6_9: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 6,
    verse: 9,
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
      hebrew: 'תּוֹלְדֹת',
      transliteration: 'toledot',
      englishLiteral: 'birthings-of',
      englishNatural: 'are the birthings of',
      root: 'toledot',
      order: 2,
      morphology: {
        gender: 'feminine',
        number: 'plural',
        state: 'construct',
        type: 'noun',
      },
    },
    {
      hebrew: 'נֹחַ',
      transliteration: 'noach',
      englishLiteral: 'Rest (Noah)',
      englishNatural: 'Rest (Noah)',
      root: 'noach',
      order: 3,
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
      hebrew: 'נֹחַ',
      transliteration: 'noach',
      englishLiteral: 'Rest (Noah)',
      englishNatural: 'Rest (Noah)',
      root: 'noach',
      order: 4,
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
      hebrew: 'אִישׁ',
      transliteration: 'ish',
      englishLiteral: 'man',
      englishNatural: 'a man',
      root: 'ish',
      order: 5,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      hebrew: 'צַדִּיק',
      transliteration: 'tzaddiq',
      englishLiteral: 'righteous',
      englishNatural: 'righteous',
      root: 'tzaddiq',
      order: 6,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'adjective',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'תָּמִים',
      transliteration: 'tamim',
      englishLiteral: 'wholesome',
      englishNatural: 'wholesome',
      root: 'tamim',
      order: 7,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'adjective',
      },
    },
    {
      hebrew: 'הָיָה',
      transliteration: 'hayah',
      englishLiteral: 'he-was',
      englishNatural: 'he was',
      root: 'hayah',
      order: 8,
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
      hebrew: 'בְּדֹרֹתָיו',
      transliteration: 'bedorotav',
      englishLiteral: 'in-generation-his',
      englishNatural: 'in his generation',
      root: 'dor',
      prefixes: ['be'],
      suffixes: ['av'],
      order: 9,
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ';',
        englishNatural: ';',
      },
      lineBreaksAfter: 1,
    },
    {
      hebrew: 'אֶת־',
      transliteration: 'et-',
      englishLiteral: '↳',
      englishNatural: '',
      root: 'et',
      order: {
        hebrew: 10,
        english: 12,
      },
      morphology: {
        type: 'particle',
      },
    },
    {
      hebrew: 'הָאֱלֹהִים',
      transliteration: 'haElohim',
      englishLiteral: 'the-Gods',
      englishNatural: 'the God',
      root: 'eloah',
      prefixes: ['ha'],
      order: {
        hebrew: 11,
        english: 13,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun',
      },
      grammarSuffix: {
        englishNatural: '.',
      },
      lineBreaksAfter: {
        english: 1,
      },
    },
    {
      hebrew: 'הִתְהַלֶּךְ־',
      transliteration: 'hithalekh-',
      englishLiteral: 'walked-with-',
      englishNatural: 'walked-with',
      root: 'halakh',
      order: {
        hebrew: 12,
        english: 11,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'perfect',
        stem: 'hithpael',
        type: 'verb',
      },
    },
    {
      hebrew: 'נֹחַ',
      transliteration: 'noach',
      englishLiteral: 'Rest (Noah)',
      englishNatural: 'Rest (Noah)',
      root: 'noach',
      order: {
        hebrew: 13,
        english: 10,
      },
      morphology: {
        type: 'noun',
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
      'אֵלֶּה תּוֹלְדֹת נֹחַ נֹחַ אִישׁ צַדִּיק תָּמִים הָיָה בְּדֹרֹתָיו אֶת־הָאֱלֹהִים הִתְהַלֶּךְ־נֹחַ',
    transliteration:
      'eleh toledot noach noach ish tzaddiq tamim hayah bedorotav et-haElohim hithalekh-noach',
    englishLiteral:
      'These birthings-of Rest (Noah); Rest (Noah), man righteous, wholesome he-was in-generation-his; ↳ the-Gods walked-with- Rest (Noah).',
    englishNatural:
      'These are the birthings of Rest (Noah); Rest (Noah), a man righteous, wholesome he was in his generation; Rest (Noah) walked-with the God.',
    kjv: 'These are the generations of Noah: Noah was a just man and perfect in his generations, and Noah walked with God.',
    lastReviewed: { name: 'Matt Gross', date: '2026-04-10' },
  },
};
