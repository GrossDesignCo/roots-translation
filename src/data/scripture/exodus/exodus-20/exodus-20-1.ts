import { Verse } from '@/types';

export const exodus_20_1: Verse = {
  meta: {
    book: 'Exodus',
    chapter: 20,
    verse: 1,
  },
  words: [
    {
      hebrew: 'וַיְדַבֵּ֣ר',
      transliteration: 'vaYdabber',
      englishLiteral: 'And-he-will-speak',
      englishNatural: 'spoke',
      root: 'dabar',
      prefixes: ['va'],
      order: {
        hebrew: 1,
        english: 2,
      },
      morphology: {
        type: 'verb',
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'imperfect',
        stem: 'piel',
      },
    },
    {
      hebrew: 'אֱלֹהִ֔ים',
      transliteration: 'Elohim',
      englishLiteral: 'Gods',
      englishNatural: 'And God',
      root: 'eloah',
      suffixes: ['im'],
      order: {
        hebrew: 2,
        english: 1,
      },
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'plural',
      },
    },
    {
      hebrew: 'אֵ֛ת',
      transliteration: 'et',
      englishLiteral: '↳',
      englishNatural: '',
      root: 'et',
      order: 3,
    },
    {
      hebrew: 'כָּל־',
      transliteration: 'kol-',
      englishLiteral: 'all-',
      englishNatural: 'all',
      root: 'kol',
      order: 4,
      morphology: {
        type: 'adjective',
      },
    },
    {
      hebrew: 'הַדְּבָרִ֥ים',
      transliteration: 'hadDevarim',
      englishLiteral: 'the-words',
      englishNatural: 'the words',
      root: 'davar',
      prefixes: ['ha'],
      suffixes: ['im'],
      order: 5,
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'plural',
      },
      grammarSuffix: {
        englishNatural: ',',
      },
    },
    {
      hebrew: 'הָאֵ֖לֶּה',
      transliteration: 'haElleh',
      englishLiteral: 'the-these',
      englishNatural: 'these',
      root: 'eleh',
      prefixes: ['ha'],
      order: 6,
      morphology: {
        type: 'pronoun',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'לֵאמֹֽר׃',
      transliteration: 'leEmor',
      englishLiteral: 'to-say',
      englishNatural: 'to say',
      root: 'amar',
      prefixes: ['le'],
      order: 7,
      morphology: {
        type: 'verb',
        tense: 'infinitive_construct',
        stem: 'qal',
      },
      grammarSuffix: {
        englishLiteral: ':',
        englishNatural: ':',
      },
      lineBreaksAfter: 1,
    },
  ],
  expectedTranslations: {
    hebrew: 'וַיְדַבֵּ֣ר אֱלֹהִ֔ים אֵ֛ת כָּל־הַדְּבָרִ֥ים הָאֵ֖לֶּה לֵאמֹֽר׃',
    transliteration: 'vaYdabber Elohim et kol-hadDevarim haElleh leEmor',
    englishLiteral: 'And-he-will-speak Gods ↳ all- the-words the-these, to-say:',
    englishNatural: 'And God spoke all the words, these, to say:',
    kjv: 'And God spake all these words, saying,',
    lastReviewed: { name: 'Matt Gross', date: '2026-07-04' },
},
};
