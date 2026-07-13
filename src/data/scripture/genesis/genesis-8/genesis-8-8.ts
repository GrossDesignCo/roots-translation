import { Verse } from '@/types';

export const genesis_8_8: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 8,
    verse: 8,
  },
  words: [
    {
      hebrew: 'וַיְשַׁלַּח',
      transliteration: 'vaYeshalach',
      englishLiteral: 'And-he-sent',
      englishNatural: 'And he sent',
      root: 'shalach',
      prefixes: ['va'],
      order: 1,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'imperfect',
        stem: 'piel',
        type: 'verb',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'אֶת־',
      transliteration: 'et-',
      englishLiteral: '↳',
      englishNatural: '',
      root: 'et',
      order: 2,
      morphology: {
        type: 'particle',
      },
    },
    {
      hebrew: 'הַיּוֹנָה',
      transliteration: 'haYonah',
      englishLiteral: 'the-dove',
      englishNatural: 'the dove',
      root: 'yonah_dove',
      prefixes: ['ha'],
      order: 3,
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      hebrew: 'מֵאִתּוֹ',
      transliteration: 'meIto',
      englishLiteral: 'from-with-him',
      englishNatural: 'from him',
      root: 'et_with',
      prefixes: ['mi'],
      suffixes: ['o'],
      order: 4,
      morphology: {
        type: 'preposition',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'לִרְאוֹת',
      transliteration: 'lirot',
      englishLiteral: 'to-see',
      englishNatural: 'to see',
      root: 'raah',
      prefixes: ['le'],
      order: 5,
      morphology: {
        tense: 'infinitive_construct',
        stem: 'qal',
        type: 'verb',
      },
    },
    {
      hebrew: 'הֲקַלּוּ',
      transliteration: 'haQallu',
      englishLiteral: 'whether-they-were-light',
      englishNatural: 'whether they were-light',
      root: 'qalal_abate',
      prefixes: ['ha_im'],
      order: {
        hebrew: 6,
        english: 7,
      },
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
      hebrew: 'הַמַּיִם',
      transliteration: 'haMayim',
      englishLiteral: 'the-waters',
      englishNatural: 'the waters',
      root: 'mayim',
      prefixes: ['ha'],
      order: {
        hebrew: 7,
        english: 6,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun',
      },
    },
    {
      hebrew: 'מֵעַל',
      transliteration: 'meAl',
      englishLiteral: 'from-over',
      englishNatural: 'from over',
      root: 'al',
      prefixes: ['me'],
      order: 8,
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
      order: 9,
      morphology: {
        gender: 'masculine',
        number: 'plural',
        state: 'construct',
        type: 'noun',
      },
    },
    {
      hebrew: 'הָאֲדָמָה',
      transliteration: 'haAdamah',
      englishLiteral: 'the-earth',
      englishNatural: 'the earth',
      root: 'adamah',
      prefixes: ['ha'],
      order: 10,
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
      'וַיְשַׁלַּח אֶת־הַיּוֹנָה מֵאִתּוֹ לִרְאוֹת הֲקַלּוּ הַמַּיִם מֵעַל פְּנֵי הָאֲדָמָה',
    transliteration:
      'vaYeshalach et-haYonah meIto lirot haQallu haMayim meAl peney haAdamah',
    englishLiteral:
      'And-he-sent ↳ the-dove from-with-him, to-see whether-they-were-light the-waters from-over faces-of the-earth.',
    englishNatural:
      'And he sent the dove from him, to see the waters whether they were-light from over the face of the earth.',
    kjv: 'Also he sent forth a dove from him, to see if the waters were abated from off the face of the ground;',
    lastReviewed: { name: 'Matt Gross', date: '2026-07-13' },
},
};
