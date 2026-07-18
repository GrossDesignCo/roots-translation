import { Verse } from '@/types';

export const genesis_9_14: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 9,
    verse: 14,
  },
  words: [
    {
      hebrew: 'וְהָיָה',
      transliteration: 'veHayah',
      englishLiteral: 'and-it-will-be',
      englishNatural: 'And it will be',
      root: 'hayah',
      prefixes: ['ve'],
      order: 1,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'perfect',
        stem: 'qal',
        type: 'verb',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'בְּעַנְנִי',
      transliteration: 'beAnnani',
      englishLiteral: 'in-my-clouding',
      englishNatural: 'in my clouding',
      root: 'anan_verb',
      prefixes: ['be'],
      suffixes: ['i_possessive'],
      order: 2,
      morphology: {
        tense: 'infinitive_construct',
        stem: 'hiphil',
        type: 'verb',
      },
    },
    {
      hebrew: 'עָנָן',
      transliteration: 'anan',
      englishLiteral: 'cloud',
      englishNatural: 'cloud',
      root: 'anan',
      order: 3,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      hebrew: 'עַל־',
      transliteration: 'al-',
      englishLiteral: 'over-',
      englishNatural: 'over',
      root: 'al',
      order: 4,
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'הָאָרֶץ',
      transliteration: 'haAretz',
      englishLiteral: 'the-land',
      englishNatural: 'the land',
      root: 'eretz',
      prefixes: ['ha'],
      order: 5,
      morphology: {
        gender: 'feminine',
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
      hebrew: 'וְנִרְאֲתָה',
      transliteration: 'veNiretah',
      englishLiteral: 'and-she-will-be-seen',
      englishNatural: 'will be seen',
      root: 'raah',
      prefixes: ['ve'],
      order: {
        hebrew: 6,
        english: 7,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
        person: '3rd',
        tense: 'perfect',
        stem: 'niphal',
        type: 'verb',
      },
      grammarSuffix: {
        englishNatural: ',',
      },
    },
    {
      hebrew: 'הַקֶּשֶׁת',
      transliteration: 'haQeshet',
      englishLiteral: 'the-bow',
      englishNatural: 'and the bow',
      root: 'qeshet',
      prefixes: ['ha'],
      order: {
        hebrew: 7,
        english: 6,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
      },
    },
    {
      hebrew: 'בֶּעָנָן',
      transliteration: 'beAnan',
      englishLiteral: 'in-cloud',
      englishNatural: 'in the cloud',
      root: 'anan',
      prefixes: ['ba'],
      order: 8,
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
  ],
  expectedTranslations: {
    hebrew:
      'וְהָיָה בְּעַנְנִי עָנָן עַל־הָאָרֶץ וְנִרְאֲתָה הַקֶּשֶׁת בֶּעָנָן',
    transliteration:
      'veHayah beAnnani anan al-haAretz veNiretah haQeshet beAnan',
    englishLiteral:
      'and-it-will-be, in-my-clouding cloud over- the-land, and-she-will-be-seen the-bow, in-cloud,',
    englishNatural:
      'And it will be, in my clouding cloud over the land, and the bow will be seen, in the cloud,',
    kjv: 'And it shall come to pass, when I bring clouds over the earth, and the bow is seen in the cloud,',
    lastReviewed: { name: 'Matt Gross', date: '2026-07-18' },
},
};
