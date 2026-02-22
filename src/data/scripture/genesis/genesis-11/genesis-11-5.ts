import { Verse } from '@/types';

export const genesis_11_5: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 11,
    verse: 5,
  },
  words: [
    {
      hebrew: 'וַיֵּרֶד',
      transliteration: 'vayYered',
      englishLiteral: 'And-he-descended',
      englishNatural: 'descended',
      root: 'yarad',
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
      lineBreaksBefore: {
        hebrew: 1,
      },
    },
    {
      hebrew: 'יְהוָה',
      transliteration: 'YHWH',
      englishLiteral: 'He_Who_Is (YHWH)',
      englishNatural: 'And He-Who-Is (YHWH)',
      root: 'yhwh',
      order: {
        hebrew: 2,
        english: 1,
      },
      morphology: {
        type: 'noun',
      },
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      hebrew: 'לִרְאֹת',
      transliteration: 'liRot',
      englishLiteral: 'to-see',
      englishNatural: 'to see',
      root: 'raah',
      prefixes: ['le'],
      order: 3,
      morphology: {
        tense: 'infinitive_construct',
        stem: 'qal',
        type: 'verb',
      },
    },
    {
      hebrew: 'אֶת־',
      transliteration: 'et-',
      englishLiteral: '↳',
      englishNatural: '',
      root: 'et',
      order: 4,
      morphology: {
        type: 'particle',
      },
    },
    {
      hebrew: 'הָעִיר',
      transliteration: 'haIr',
      englishLiteral: 'the-city',
      englishNatural: 'the city',
      root: 'ir',
      prefixes: ['ha'],
      order: 5,
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      hebrew: 'וְאֶת־',
      transliteration: 'veEt-',
      englishLiteral: 'and-↳',
      englishNatural: 'and',
      root: 'et',
      prefixes: ['ve'],
      order: 6,
      morphology: {
        type: 'particle',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'הַמִּגְדָּל',
      transliteration: 'haMigdal',
      englishLiteral: 'the-tower',
      englishNatural: 'the tower',
      root: 'migdal',
      prefixes: ['ha'],
      order: 7,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      hebrew: 'אֲשֶׁר',
      transliteration: 'asher',
      englishLiteral: 'which',
      englishNatural: 'which',
      root: 'asher',
      order: 8,
      morphology: {
        type: 'particle',
      },
    },
    {
      hebrew: 'בָּנוּ',
      transliteration: 'banu',
      englishLiteral: 'they-had-built',
      englishNatural: 'had built',
      root: 'banah',
      suffixes: ['u'],
      order: {
        hebrew: 9,
        english: 11,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        person: '3rd',
        tense: 'perfect',
        stem: 'qal',
        type: 'verb',
      },
      grammarSuffix: {
        englishNatural: '.',
      },
      lineBreaksAfter: {
        english: 1,
      },
    },
    {
      hebrew: 'בְּנֵי',
      transliteration: 'beney',
      englishLiteral: 'sons-of',
      englishNatural: 'the sons of',
      root: 'ben',
      order: {
        hebrew: 10,
        english: 9,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun',
      },
    },
    {
      hebrew: 'הָאָדָם',
      transliteration: 'haAdam',
      englishLiteral: 'the-Earthling (Adam)',
      englishNatural: 'the Earthling (Adam)',
      root: 'adam',
      prefixes: ['ha'],
      order: {
        hebrew: 11,
        english: 10,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
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
      'וַיֵּרֶד יְהוָה לִרְאֹת אֶת־הָעִיר וְאֶת־הַמִּגְדָּל אֲשֶׁר בָּנוּ בְּנֵי הָאָדָם',
    transliteration:
      'vayYered YHWH liRot et-haIr veEt-haMigdal asher banu beney haAdam',
    englishLiteral:
      'And-he-descended He_Who_Is (YHWH) to-see ↳ the-city and-↳ the-tower which they-had-built sons-of the-Earthling (Adam).',
    englishNatural:
      'And He-Who-Is (YHWH) descended to see the city and the tower which the sons of the Earthling (Adam) had built.',
    kjv: 'And the LORD came down to see the city and the tower, which the children of men builded.',
    lastReviewed: { name: 'Matt Gross', date: '2026-02-22' },
},
};
