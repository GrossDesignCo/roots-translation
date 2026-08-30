import { Verse } from '@/types';

export const genesis_1_24: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 1,
    verse: 24,
  },
  words: [
    {
      hebrew: 'וַיֹּ֣אמֶר',
      transliteration: 'vaYomer',
      englishLiteral: 'And-said',
      englishNatural: 'said',
      root: 'amar',
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
        stem: 'qal',
        type: 'verb',
      },
      grammarSuffix: {
        englishNatural: ',',
      },
      lineBreaksBefore: {
        hebrew: 1,
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
        gender: 'masculine',
        number: 'plural',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
      },
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      hebrew: 'תּוֹצֵ֨א',
      transliteration: 'totze',
      englishLiteral: 'Let-bring_out',
      englishNatural: 'bring-out',
      root: 'yatsa',
      order: {
        hebrew: 3,
        english: 4,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
        person: '3rd',
        tense: 'imperfect',
        stem: 'hiphil',
        type: 'verb',
      },
      grammarPrefix: {
        englishLiteral: '"',
      },
    },
    {
      hebrew: 'הָאָ֜רֶץ',
      transliteration: 'haAretz',
      englishLiteral: 'the-land',
      englishNatural: 'Let the land',
      root: 'eretz',
      prefixes: ['ha'],
      order: {
        hebrew: 4,
        english: 3,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'noun',
      },
      grammarPrefix: {
        englishNatural: '"',
      },
    },
    {
      hebrew: 'נֶ֤פֶשׁ',
      transliteration: 'nephesh',
      englishLiteral: 'throat',
      englishNatural: 'throat',
      root: 'nephesh',
      order: {
        hebrew: 5,
        english: 6,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishNatural: ',',
      },
    },
    {
      hebrew: 'חַיָּה֙',
      transliteration: 'chayah',
      englishLiteral: 'living',
      englishNatural: 'living',
      root: 'chayah',
      order: {
        hebrew: 6,
        english: 5,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'adjective',
      },
      grammarSuffix: {
        englishLiteral: ',',
      },
    },
    {
      hebrew: 'לְמִינָ֔הּ',
      transliteration: 'leMinah',
      englishLiteral: 'to-its-kind',
      englishNatural: 'to its kind',
      root: 'min_kind',
      prefixes: ['le'],
      suffixes: ['ah'],
      order: 7,
      morphology: {
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'בְּהֵמָ֥ה',
      transliteration: 'behemah',
      englishLiteral: 'beast',
      englishNatural: 'beast',
      root: 'behemah',
      order: 8,
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'וָרֶ֛מֶשׂ',
      transliteration: 'vaRemes',
      englishLiteral: 'and-crawler',
      englishNatural: 'and crawler',
      root: 'ramas',
      prefixes: ['va'],
      order: 9,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'וְחַֽיְתוֹ־',
      transliteration: 'veChayto-',
      englishLiteral: 'and-living_being-of',
      englishNatural: 'and living-being of',
      root: 'chayah',
      prefixes: ['ve'],
      suffixes: ['o'],
      order: 10,
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      hebrew: 'אֶ֖רֶץ',
      transliteration: 'eretz',
      englishLiteral: 'land',
      englishNatural: 'land',
      root: 'eretz',
      order: 11,
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: '."',
        englishNatural: '."',
      },
      lineBreaksAfter: 1,
    },
  ],
  expectedTranslations: {
    hebrew:
      'וַיֹּ֣אמֶר אֱלֹהִ֔ים תּוֹצֵ֨א הָאָ֜רֶץ נֶ֤פֶשׁ חַיָּה֙ לְמִינָ֔הּ בְּהֵמָ֥ה וָרֶ֛מֶשׂ וְחַֽיְתוֹ־אֶ֖רֶץ',
    transliteration:
      'vaYomer Elohim totze haAretz nephesh chayah leMinah behemah vaRemes veChayto-eretz',
    englishLiteral:
      'And-said Gods, "Let-bring_out the-land throat living, to-its-kind, beast, and-crawler, and-living_being-of land."',
    englishNatural:
      'And God said, "Let the land bring-out living throat, to its kind, beast, and crawler, and living-being of land."',
    kjv: 'And God said, Let the earth bring forth the living creature after his kind, cattle, and creeping thing, and beast of the earth after his kind:',
    lastReviewed: { name: 'Matt Gross', date: '2025-12-06' },
  },
};
