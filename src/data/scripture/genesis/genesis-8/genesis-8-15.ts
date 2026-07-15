import { Verse } from '@/types';

export const genesis_8_15: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 8,
    verse: 15,
  },
  words: [
    {
      hebrew: 'וַיְדַבֵּר',
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
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'imperfect',
        stem: 'piel',
        type: 'verb',
      },
      lineBreaksBefore: {
        hebrew: 1,
      },
    },
    {
      hebrew: 'אֱלֹהִים',
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
        gender: 'masculine',
        number: 'plural',
        type: 'noun',
      },
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      hebrew: 'אֶל־',
      transliteration: 'el-',
      englishLiteral: 'to-',
      englishNatural: 'to',
      root: 'el',
      order: 3,
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'נֹחַ',
      transliteration: 'Noach',
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
    },
    {
      hebrew: 'לֵאמֹר',
      transliteration: 'leEmor',
      englishLiteral: 'to-say',
      englishNatural: 'saying',
      root: 'amar',
      prefixes: ['le'],
      order: 5,
      morphology: {
        type: 'verb',
        stem: 'qal',
        tense: 'infinitive_construct',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
  ],
  expectedTranslations: {
    hebrew: 'וַיְדַבֵּר אֱלֹהִים אֶל־נֹחַ לֵאמֹר',
    transliteration: 'vaYdabber Elohim el-Noach leEmor',
    englishLiteral: 'And-he-will-speak Gods to- Rest (Noah), to-say,',
    englishNatural: 'And God spoke to Rest (Noah), saying,',
    kjv: 'And God spoke unto Noah, saying:',
    lastReviewed: { name: 'Matt Gross', date: '2026-07-15' },
},
};
