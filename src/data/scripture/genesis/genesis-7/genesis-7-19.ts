import { Verse } from '@/types';

export const genesis_7_19: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 7,
    verse: 19,
  },
  words: [
    {
      hebrew: 'וְהַמַּיִם',
      transliteration: 'veHaMayim',
      englishLiteral: 'And-the-waters',
      englishNatural: 'And the waters',
      root: 'mayim',
      prefixes: ['ve', 'ha'],
      order: 1,
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'גָּבְרוּ',
      transliteration: 'gavru',
      englishLiteral: 'they-have-prevailed',
      englishNatural: 'have prevailed',
      root: 'gavar',
      suffixes: ['plural_verb_u'],
      order: 2,
      morphology: {
        gender: 'masculine',
        number: 'plural',
        person: '3rd',
        tense: 'perfect',
        stem: 'qal',
        type: 'verb',
      },
    },
    {
      hebrew: 'מְאֹד',
      transliteration: 'meod',
      englishLiteral: 'very',
      englishNatural: 'very',
      root: 'meod',
      order: 3,
      morphology: {
        type: 'adverb',
      },
    },
    {
      hebrew: 'מְאֹד',
      transliteration: 'meod',
      englishLiteral: 'very',
      englishNatural: 'very',
      root: 'meod',
      order: 4,
      morphology: {
        type: 'adverb',
      },
    },
    {
      hebrew: 'עַל־',
      transliteration: 'al-',
      englishLiteral: 'over-',
      englishNatural: 'over',
      root: 'al',
      order: 5,
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
      order: 6,
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ';',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'וַיְכֻסּוּ',
      transliteration: 'vaYekhusu',
      englishLiteral: 'and-were-covered',
      englishNatural: 'were covered',
      root: 'kasah',
      prefixes: ['va'],
      suffixes: ['plural_verb_u'],
      order: {
        hebrew: 7,
        english: 14,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        person: '3rd',
        tense: 'imperfect',
        stem: 'pual',
        type: 'verb',
      },
      grammarSuffix: {
        englishNatural: '.',
      },
      lineBreaksBefore: {
        hebrew: 1,
      },
      lineBreaksAfter: {
        english: 1,
      },
    },
    {
      hebrew: 'כָּל־',
      transliteration: 'kol-',
      englishLiteral: 'all-',
      englishNatural: 'and all',
      root: 'kol',
      order: {
        hebrew: 8,
        english: 7,
      },
      morphology: {
        type: 'adjective',
      },
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      hebrew: 'הֶהָרִים',
      transliteration: 'heHarim',
      englishLiteral: 'the-mountains',
      englishNatural: 'the mountains',
      root: 'har',
      prefixes: ['ha'],
      suffixes: ['im'],
      order: {
        hebrew: 9,
        english: 8,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun',
      },
    },
    {
      hebrew: 'הַגְּבֹהִים',
      transliteration: 'haGevohim',
      englishLiteral: 'the-tall',
      englishNatural: 'the tall',
      root: 'gavoah',
      prefixes: ['ha'],
      suffixes: ['im'],
      order: {
        hebrew: 10,
        english: 9,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'adjective',
      },
    },
    {
      hebrew: 'אֲשֶׁר־',
      transliteration: 'asher-',
      englishLiteral: 'which-',
      englishNatural: 'which',
      root: 'asher',
      order: {
        hebrew: 11,
        english: 10,
      },
      morphology: {
        type: 'relative',
      },
    },
    {
      hebrew: 'תַּחַת',
      transliteration: 'tachat',
      englishLiteral: 'under',
      englishNatural: 'were under',
      root: 'tachat',
      order: {
        hebrew: 12,
        english: 11,
      },
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'כָּל־',
      transliteration: 'kol-',
      englishLiteral: 'all-',
      englishNatural: 'all',
      root: 'kol',
      order: {
        hebrew: 13,
        english: 12,
      },
      morphology: {
        type: 'adjective',
      },
    },
    {
      hebrew: 'הַשָּׁמָיִם',
      transliteration: 'haShamayim',
      englishLiteral: 'the-skies',
      englishNatural: 'the skies',
      root: 'shamayim',
      prefixes: ['ha'],
      order: {
        hebrew: 14,
        english: 13,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: '.',
      },
      lineBreaksAfter: 1,
    },
  ],
  expectedTranslations: {
    hebrew:
      'וְהַמַּיִם גָּבְרוּ מְאֹד מְאֹד עַל־הָאָרֶץ וַיְכֻסּוּ כָּל־הֶהָרִים הַגְּבֹהִים אֲשֶׁר־תַּחַת כָּל־הַשָּׁמָיִם',
    transliteration:
      'veHaMayim gavru meod meod al-haAretz vaYekhusu kol-heHarim haGevohim asher-tachat kol-haShamayim',
    englishLiteral:
      'And-the-waters they-have-prevailed very very over- the-land; and-were-covered all- the-mountains the-tall which- under all- the-skies.',
    englishNatural:
      'And the waters have prevailed very very over the land, and all the mountains the tall which were under all the skies were covered.',
    kjv: 'And the waters prevailed exceedingly upon the earth; and all the high hills, that were under the whole heaven, were covered.',
    lastReviewed: { name: 'Matt Gross', date: '2026-06-21' },
},
};
