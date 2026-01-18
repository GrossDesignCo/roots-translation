import { Verse } from '@/types';

export const exodus_10_29: Verse = {
  meta: {
    book: 'Exodus',
    chapter: 10,
    verse: 29,
  },
  words: [
    {
      hebrew: 'וַיֹּ֥אמֶר',
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
      lineBreaksBefore: {
        hebrew: 1,
      },
      grammarSuffix: {
        englishNatural: ',',
      },
    },
    {
      hebrew: 'מֹשֶׁ֖ה',
      transliteration: 'Moshe',
      englishLiteral: 'Drawn_Out (Moses)',
      englishNatural: 'And Drawn-Out (Moses)',
      root: 'moshe',
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
      grammarSuffix: {
        englishLiteral: ',',
      },
    },
    {
      hebrew: 'כֵּ֣ן',
      transliteration: 'ken',
      englishLiteral: 'so',
      englishNatural: 'So',
      root: 'ken',
      order: 3,
      morphology: {
        type: 'adverb',
      },
      grammarPrefix: {
        englishNatural: '"',
      },
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      hebrew: 'דִּבַּ֑רְתָּ',
      transliteration: 'dibarta',
      englishLiteral: 'you-spoke',
      englishNatural: 'you have spoken',
      root: 'dabar',
      suffixes: ['ta'],
      order: 4,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '2nd',
        tense: 'perfect',
        stem: 'piel',
        type: 'verb',
      },
      grammarSuffix: {
        englishLiteral: ';',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'לֹא־',
      transliteration: 'lo-',
      englishLiteral: 'not',
      englishNatural: 'not',
      root: 'lo',
      order: {
        hebrew: 5,
        english: 6,
      },
      morphology: {
        type: 'adverb',
      },
    },
    {
      hebrew: 'אֹסִ֥ף',
      transliteration: 'osif',
      englishLiteral: 'I-will-add',
      englishNatural: 'I will add',
      root: 'yasaf',
      order: {
        hebrew: 6,
        english: 5,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '1st',
        tense: 'imperfect',
        stem: 'hiphil',
        type: 'verb',
      },
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      hebrew: 'עוֹד֙',
      transliteration: 'od',
      englishLiteral: 'again',
      englishNatural: 'again',
      root: 'od',
      order: 7,
      morphology: {
        type: 'adverb',
      },
      grammarSuffix: {
        englishLiteral: ',',
      },
    },
    {
      hebrew: 'רְא֖וֹת',
      transliteration: 'reot',
      englishLiteral: 'to-see',
      englishNatural: 'to see',
      root: 'raah',
      order: 8,
      morphology: {
        tense: 'infinitive_construct',
        stem: 'qal',
        type: 'verb',
      },
    },
    {
      hebrew: 'פָּנֶֽיךָ׃',
      transliteration: 'panekha',
      englishLiteral: 'faces-your',
      englishNatural: 'your face',
      root: 'panim',
      suffixes: ['ekha'],
      order: 9,
      morphology: {
        gender: 'masculine',
        number: 'plural',
        state: 'construct',
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
      'וַיֹּ֥אמֶר מֹשֶׁ֖ה כֵּ֣ן דִּבַּ֑רְתָּ לֹא־אֹסִ֥ף עוֹד֙ רְא֖וֹת פָּנֶֽיךָ׃',
    transliteration: 'vaYomer Moshe ken dibarta lo-osif od reot panekha',
    englishLiteral:
      'And-said Drawn_Out (Moses), so you-spoke; not I-will-add again, to-see faces-your."',
    englishNatural:
      'And Drawn-Out (Moses) said, "So you have spoken, I will add not again to see your face."',
    kjv: 'And Moses said, Thou hast spoken well, I will see thy face again no more.',
    lastReviewed: { name: 'Matt Gross', date: '2026-01-18' },
},
};
