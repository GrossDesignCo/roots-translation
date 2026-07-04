import { Verse } from '@/types';

export const psalms_46_3: Verse = {
  meta: {
    book: 'Psalms',
    chapter: 46,
    verse: 3,
  },
  words: [
    {
      hebrew: 'יֶהֱמ֣וּ',
      transliteration: 'yehemu',
      englishLiteral: 'they-will-roar',
      englishNatural: 'roar',
      root: 'hamah',
      suffixes: ['plural_verb_u'],
      order: {
        hebrew: 1,
        english: 2,
      },
      morphology: {
        type: 'verb',
        number: 'plural',
        person: '3rd',
        tense: 'imperfect',
        stem: 'qal',
      },
    },
    {
      hebrew: 'יֶחְמְר֣וּ',
      transliteration: 'yechmeru',
      englishLiteral: 'they-will-foam',
      englishNatural: 'they foam',
      root: 'chamar_foam',
      suffixes: ['plural_verb_u'],
      order: {
        hebrew: 2,
        english: 3,
      },
      morphology: {
        type: 'verb',
        number: 'plural',
        person: '3rd',
        tense: 'imperfect',
        stem: 'qal',
      },
      grammarSuffix: {
        englishNatural: ';',
      },
    },
    {
      hebrew: 'מֵימָ֑יו',
      transliteration: 'meymav',
      englishLiteral: 'waters-his',
      englishNatural: 'Its waters',
      root: 'mayim',
      suffixes: ['av'],
      order: {
        hebrew: 3,
        english: 1,
      },
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'plural',
      },
      grammarSuffix: {
        englishLiteral: ';',
      },
      lineBreaksAfter: {
        hebrew: 1,
      },
    },
    {
      hebrew: 'יִרְעֲשׁ֥וּ',
      transliteration: 'yiRashu',
      englishLiteral: 'they-will-quake',
      englishNatural: 'quake',
      root: 'raash',
      prefixes: ['yi'],
      suffixes: ['plural_verb_u'],
      order: {
        hebrew: 4,
        english: 5,
      },
      morphology: {
        type: 'verb',
        number: 'plural',
        person: '3rd',
        tense: 'imperfect',
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
      order: {
        hebrew: 5,
        english: 4,
      },
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'plural',
      },
      lineBreaksAfter: {
        english: 1,
      },
    },
    {
      hebrew: 'בְּגַאֲוָת֥וֹ',
      transliteration: 'beGaavato',
      englishLiteral: 'in-swelling-his',
      englishNatural: 'in its swelling',
      root: 'gaavah',
      prefixes: ['be'],
      suffixes: ['o'],
      order: 6,
      morphology: {
        type: 'noun',
        gender: 'feminine',
        number: 'singular',
        state: 'construct',
      },
      grammarSuffix: {
        englishLiteral: '.',
        englishNatural: '.',
      },
    },
    {
      hebrew: 'סֶֽלָה',
      transliteration: 'selah',
      englishLiteral: 'Selah',
      englishNatural: 'Selah',
      root: 'selah',
      order: 7,
      morphology: {
        type: 'interjection',
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
      'יֶהֱמ֣וּ יֶחְמְר֣וּ מֵימָ֑יו יִרְעֲשׁ֥וּ הָרִ֗ים בְּגַאֲוָת֥וֹ סֶֽלָה',
    transliteration: 'yehemu yechmeru meymav yiRashu harim beGaavato selah',
    englishLiteral:
      'they-will-roar they-will-foam waters-his; they-will-quake mountains in-swelling-his. Selah.',
    englishNatural:
      'Its waters roar they foam; mountains quake in its swelling. Selah.',
    kjv: 'Though the waters thereof roar and be troubled, though the mountains shake with the swelling thereof. Selah.',
    lastReviewed: { name: 'Matt Gross', date: '2026-07-04' },
},
};
