import { Verse } from '@/types';

export const genesis_2_15: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 2,
    verse: 15,
  },
  words: [
    {
      hebrew: 'וַיִּקַּח',
      transliteration: 'vaYikach',
      englishLiteral: 'And-took',
      englishNatural: 'took',
      root: 'lakach',
      prefixes: ['va'],
      order: {
        hebrew: 1,
        english: 3,
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
      hebrew: 'אֱלֹהִים',
      transliteration: 'Elohim',
      englishLiteral: 'Gods',
      englishNatural: 'God',
      root: 'eloah',
      suffixes: ['im'],
      order: {
        hebrew: 3,
        english: 2,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun',
      },
    },
    {
      hebrew: 'אֶת־',
      transliteration: 'et-',
      englishLiteral: '↳',
      englishNatural: '',
      root: 'et',
      order: 4,
    },
    {
      hebrew: 'הָאָדָם',
      transliteration: 'haAdam',
      englishLiteral: 'the-Earthling (Adam)',
      englishNatural: 'the Earthling (Adam)',
      root: 'adam',
      prefixes: ['ha'],
      order: 5,
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
      hebrew: 'וַיַּנִּחֵהוּ',
      transliteration: 'vaYanNichehu',
      englishLiteral: 'and-rested-him',
      englishNatural: 'and rested him',
      root: 'nuach',
      prefixes: ['va'],
      suffixes: ['ehu'],
      order: 6,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'imperfect',
        stem: 'hiphil',
        type: 'verb',
      },
    },
    {
      hebrew: 'בְגַן־',
      transliteration: 'beGan-',
      englishLiteral: 'in-Garden-',
      englishNatural: 'in Garden',
      root: 'gan',
      prefixes: ['be'],
      order: 7,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      hebrew: 'עֵדֶן',
      transliteration: 'Eden',
      englishLiteral: 'Delight (Eden)',
      englishNatural: 'Delight (Eden)',
      root: 'eden',
      order: 8,
      morphology: {
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'לְעָבְדָהּ',
      transliteration: 'leAvdah',
      englishLiteral: 'to-serve-her',
      englishNatural: 'to serve her',
      root: 'avad',
      prefixes: ['le'],
      suffixes: ['ah'],
      order: 9,
      morphology: {
        type: 'verb',
        stem: 'qal',
        tense: 'infinitive_construct',
      },
    },
    {
      hebrew: 'וּלְשָׁמְרָהּ׃',
      transliteration: 'uLeShamrah',
      englishLiteral: 'and-to-keep-her',
      englishNatural: 'and to keep her',
      root: 'shamar',
      prefixes: ['u', 'le'],
      suffixes: ['ah'],
      order: 10,
      morphology: {
        type: 'verb',
        stem: 'qal',
        tense: 'infinitive_construct',
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
      'וַיִּקַּח יְהוָה אֱלֹהִים אֶת־הָאָדָם וַיַּנִּחֵהוּ בְגַן־עֵדֶן לְעָבְדָהּ וּלְשָׁמְרָהּ׃',
    transliteration:
      'vaYikach YHWH Elohim et-haAdam vaYanNichehu beGan-Eden leAvdah uLeShamrah',
    englishLiteral:
      'And-took He_Who_Is (YHWH) Gods ↳ the-Earthling (Adam), and-rested-him in-Garden- Delight (Eden), to-serve-her and-to-keep-her.',
    englishNatural:
      'And He-Who-Is (YHWH) God took the Earthling (Adam), and rested him in Garden Delight (Eden), to serve her and to keep her.',
    kjv: 'And the LORD God took the man, and put him into the garden of Eden to dress it and to keep it.',
    lastReviewed: { name: 'Matt Gross', date: '2026-02-22' },
  },
};
