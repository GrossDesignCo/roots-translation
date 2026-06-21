import { Verse } from '@/types';

export const genesis_7_3: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 7,
    verse: 3,
  },
  words: [
    {
      hebrew: 'גַּם',
      transliteration: 'gam',
      englishLiteral: 'Also',
      englishNatural: 'Also',
      root: 'gam',
      order: 1,
      morphology: {
        type: 'adverb',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'מֵעוֹף',
      transliteration: 'meOph',
      englishLiteral: 'from-flyer',
      englishNatural: 'from the flyer of',
      root: 'oph',
      prefixes: ['mi'],
      order: 2,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      hebrew: 'הַשָּׁמַיִם',
      transliteration: 'haShamayim',
      englishLiteral: 'the-skies',
      englishNatural: 'the skies',
      root: 'shamayim',
      prefixes: ['ha'],
      order: 3,
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun',
      },
    },
    {
      hebrew: 'שִׁבְעָה',
      transliteration: 'shivah',
      englishLiteral: 'seven',
      englishNatural: 'seven',
      root: 'sheva',
      order: 4,
      morphology: {
        type: 'numeral',
      },
    },
    {
      hebrew: 'שִׁבְעָה',
      transliteration: 'shivah',
      englishLiteral: 'seven',
      englishNatural: 'seven',
      root: 'sheva',
      order: 5,
      morphology: {
        type: 'numeral',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'זָכָר',
      transliteration: 'zakhar',
      englishLiteral: 'male',
      englishNatural: 'male',
      root: 'zakhar',
      order: 6,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      hebrew: 'וּנְקֵבָה',
      transliteration: 'uNeqevah',
      englishLiteral: 'and-female',
      englishNatural: 'and female',
      root: 'neqevah',
      prefixes: ['u'],
      order: 7,
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ';',
        englishNatural: ';',
      },
      lineBreaksAfter: 1,
    },
    {
      hebrew: 'לְחַיּוֹת',
      transliteration: 'leChayot',
      englishLiteral: 'to-keep_alive',
      englishNatural: 'to keep-alive',
      root: 'chayah_verb',
      prefixes: ['le'],
      order: 8,
      morphology: {
        tense: 'infinitive_construct',
        stem: 'piel',
        type: 'verb',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'זֶרַע',
      transliteration: 'zera',
      englishLiteral: 'seed',
      englishNatural: 'seed',
      root: 'zera',
      order: 9,
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
      order: 10,
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'פְּנֵי',
      transliteration: 'peney',
      englishLiteral: 'faces-of',
      englishNatural: 'the face of',
      root: 'panim',
      order: 11,
      morphology: {
        gender: 'masculine',
        number: 'plural',
        state: 'construct',
        type: 'noun',
      },
    },
    {
      hebrew: 'כָל־',
      transliteration: 'khol-',
      englishLiteral: 'all-',
      englishNatural: 'all',
      root: 'kol',
      order: 12,
      morphology: {
        type: 'adjective',
      },
    },
    {
      hebrew: 'הָאָרֶץ',
      transliteration: 'haAretz',
      englishLiteral: 'the-land',
      englishNatural: 'the land',
      root: 'eretz',
      prefixes: ['ha'],
      order: 13,
      morphology: {
        gender: 'feminine',
        number: 'singular',
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
      'גַּם מֵעוֹף הַשָּׁמַיִם שִׁבְעָה שִׁבְעָה זָכָר וּנְקֵבָה לְחַיּוֹת זֶרַע עַל־פְּנֵי כָל־הָאָרֶץ',
    transliteration:
      'gam meOph haShamayim shivah shivah zakhar uNeqevah leChayot zera al-peney khol-haAretz',
    englishLiteral:
      'Also from-flyer the-skies seven seven, male and-female; to-keep_alive seed over- faces-of all- the-land.',
    englishNatural:
      'Also from the flyer of the skies seven seven, male and female; to keep-alive seed over the face of all the land.',
    kjv: 'Of fowls also of the air by sevens, the male and the female; to keep seed alive upon the face of all the earth.',
    lastReviewed: { name: 'Matt Gross', date: '2026-06-21' },
},
};
