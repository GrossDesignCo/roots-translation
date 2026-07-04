import { Verse } from '@/types';

export const psalms_46_2: Verse = {
  meta: {
    book: 'Psalms',
    chapter: 46,
    verse: 2,
  },
  words: [
    {
      hebrew: 'עַל־',
      transliteration: 'al-',
      englishLiteral: 'Over-',
      englishNatural: 'Therefore',
      root: 'al',
      order: 1,
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'כֵּ֤ן',
      transliteration: 'ken',
      englishLiteral: 'so',
      englishNatural: '',
      root: 'ken',
      order: 2,
      morphology: {
        type: 'adverb',
      },
    },
    {
      hebrew: 'לֹא־',
      transliteration: 'lo-',
      englishLiteral: 'not-',
      englishNatural: 'not',
      root: 'lo',
      order: 3,
      morphology: {
        type: 'adverb',
      },
    },
    {
      hebrew: 'נִירָ֗א',
      transliteration: 'nira',
      englishLiteral: 'we-will-fear',
      englishNatural: 'will we fear',
      root: 'yare',
      order: 4,
      morphology: {
        type: 'verb',
        number: 'plural',
        person: '1st',
        tense: 'imperfect',
        stem: 'qal',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
      lineBreaksAfter: 1,
    },
    {
      hebrew: 'בְּהָמִ֥יר',
      transliteration: 'beHamir',
      englishLiteral: 'in-changing',
      englishNatural: 'in the changing of',
      root: 'mur',
      prefixes: ['be'],
      order: 5,
      morphology: {
        type: 'verb',
        tense: 'infinitive_construct',
        stem: 'hiphil',
      },
    },
    {
      hebrew: 'אָ֑רֶץ',
      transliteration: 'aretz',
      englishLiteral: 'land',
      englishNatural: 'land',
      root: 'eretz',
      order: 6,
      morphology: {
        type: 'noun',
        gender: 'feminine',
        number: 'singular',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
      lineBreaksAfter: 1,
    },
    {
      hebrew: 'וּבְמ֥וֹט',
      transliteration: 'uveMot',
      englishLiteral: 'and-in-tottering',
      englishNatural: 'and in the tottering of',
      root: 'mut_totter',
      prefixes: ['u', 'be'],
      order: 7,
      morphology: {
        type: 'verb',
        tense: 'infinitive_construct',
        stem: 'qal',
      },
    },
    {
      hebrew: 'הָרִ֗ים',
      transliteration: 'harim',
      englishLiteral: 'mountains',
      englishNatural: 'mountains',
      root: 'har',
      suffixes: ['im'],
      order: 8,
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'plural',
      },
    },
    {
      hebrew: 'בְּלֵ֣ב',
      transliteration: 'beLev',
      englishLiteral: 'in-heart-of',
      englishNatural: 'in the heart of',
      root: 'lev',
      prefixes: ['be'],
      order: 9,
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'singular',
        state: 'construct',
      },
    },
    {
      hebrew: 'יַמִּֽים׃',
      transliteration: 'yammim',
      englishLiteral: 'seas',
      englishNatural: 'seas',
      root: 'yam',
      suffixes: ['im'],
      order: 10,
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'plural',
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
      'עַל־כֵּ֤ן לֹא־נִירָ֗א בְּהָמִ֥יר אָ֑רֶץ וּבְמ֥וֹט הָרִ֗ים בְּלֵ֣ב יַמִּֽים׃',
    transliteration:
      'al-ken lo-nira beHamir aretz uveMot harim beLev yammim',
    englishLiteral:
      'Over- so not- we-will-fear, in-changing land, and-in-tottering mountains in-heart-of seas.',
    englishNatural:
      'Therefore not will we fear, in the changing of land, and in the tottering of mountains in the heart of seas.',
    kjv: 'Therefore will not we fear, though the earth be removed, and though the mountains be carried into the midst of the sea;',
    lastReviewed: { name: 'Matt Gross', date: '2026-07-04' },
},
};
