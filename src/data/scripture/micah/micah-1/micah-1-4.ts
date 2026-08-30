import { Verse } from '@/types';

export const micah_1_4: Verse = {
  meta: {
    book: 'Micah',
    chapter: 1,
    verse: 4,
  },
  words: [
    {
      hebrew: 'וְנָמַסּוּ',
      transliteration: 'veNamasu',
      englishLiteral: 'and-they-have-been-melted',
      englishNatural: 'will be melted',
      root: 'masas',
      prefixes: ['ve'],
      order: {
        hebrew: 1,
        english: 2,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        person: '3rd',
        tense: 'perfect',
        stem: 'niphal',
        type: 'verb',
      },
    },
    {
      hebrew: 'הֶהָרִים',
      transliteration: 'heHarim',
      englishLiteral: 'the-mountains',
      englishNatural: 'and the mountains',
      root: 'har',
      prefixes: ['ha'],
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
      hebrew: 'תַּחְתָּיו',
      transliteration: 'tachtav',
      englishLiteral: 'under-him',
      englishNatural: 'under him',
      root: 'tachat',
      suffixes: ['av'],
      order: 3,
      morphology: {
        type: 'preposition',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'וְהָעֲמָקִים',
      transliteration: 'veHaAmaqim',
      englishLiteral: 'and-the-valleys',
      englishNatural: 'and the valleys',
      root: 'emeq',
      prefixes: ['ve', 'ha'],
      suffixes: ['im'],
      order: 4,
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
      hebrew: 'יִתְבַּקָּעוּ',
      transliteration: 'yitbaqaqu',
      englishLiteral: 'they-will-break_open',
      englishNatural: 'will break-open',
      root: 'baqa',
      prefixes: ['yit'],
      suffixes: ['u'],
      order: 5,
      morphology: {
        gender: 'masculine',
        number: 'plural',
        person: '3rd',
        tense: 'imperfect',
        stem: 'hithpael',
        type: 'verb',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'כַּדּוֹנַג',
      transliteration: 'kaDonag',
      englishLiteral: 'like-wax',
      englishNatural: 'like wax',
      root: 'donag',
      prefixes: ['ka'],
      order: 6,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      hebrew: 'מִפְּנֵי',
      transliteration: 'miPney',
      englishLiteral: 'from-faces-of',
      englishNatural: 'from the faces of',
      root: 'panim',
      prefixes: ['mi'],
      order: 7,
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'הָאֵשׁ',
      transliteration: 'haEsh',
      englishLiteral: 'the-fire',
      englishNatural: 'the fire',
      root: 'esh',
      prefixes: ['ha'],
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
      hebrew: 'כְּמַיִם',
      transliteration: 'keMayim',
      englishLiteral: 'like-waters',
      englishNatural: 'like waters',
      root: 'mayim',
      prefixes: ['ke'],
      order: 9,
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
      hebrew: 'מֻגָּרִים',
      transliteration: 'mugarim',
      englishLiteral: 'cascaded',
      englishNatural: 'cascaded',
      root: 'nagar',
      suffixes: ['im'],
      order: 10,
      morphology: {
        gender: 'masculine',
        number: 'plural',
        tense: 'participle',
        stem: 'hophal',
        type: 'verb',
      },
    },
    {
      hebrew: 'בְּמוֹרָד',
      transliteration: 'beMorad',
      englishLiteral: 'in-descent',
      englishNatural: 'in a descent',
      root: 'morad',
      prefixes: ['be'],
      order: 11,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        hebrew: '׃',
        englishLiteral: '.',
        englishNatural: '.',
      },
      lineBreaksAfter: 1,
    },
  ],
  expectedTranslations: {
    hebrew:
      'וְנָמַסּוּ הֶהָרִים תַּחְתָּיו וְהָעֲמָקִים יִתְבַּקָּעוּ כַּדּוֹנַג מִפְּנֵי הָאֵשׁ כְּמַיִם מֻגָּרִים בְּמוֹרָד׃',
    transliteration:
      'veNamasu heHarim tachtav veHaAmaqim yitbaqaqu kaDonag miPney haEsh keMayim mugarim beMorad',
    englishLiteral:
      'and-they-have-been-melted the-mountains under-him, and-the-valleys they-will-break_open, like-wax from-faces-of the-fire, like-waters cascaded in-descent.',
    englishNatural:
      'and the mountains will be melted under him, and the valleys will break-open, like wax from the faces of the fire, like waters cascaded in a descent.',
    kjv: 'And the mountains shall be molten under him, and the valleys shall be cleft, as wax before the fire, and as the waters that are poured down a steep place.',
  },
};
