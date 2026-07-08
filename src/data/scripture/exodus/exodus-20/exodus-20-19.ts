import { Verse } from '@/types';

export const exodus_20_19: Verse = {
  meta: {
    book: 'Exodus',
    chapter: 20,
    verse: 19,
  },
  words: [
    {
      hebrew: 'וַיֹּאמְר֣וּ',
      transliteration: 'vaYomru',
      englishLiteral: 'And-they-will-say',
      englishNatural: 'And they said',
      root: 'amar',
      prefixes: ['va'],
      order: 1,
      morphology: {
        type: 'verb',
        gender: 'masculine',
        number: 'plural',
        person: '3rd',
        tense: 'imperfect',
        stem: 'qal',
      },
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      hebrew: 'אֶל־',
      transliteration: 'el-',
      englishLiteral: 'to-',
      englishNatural: 'to',
      root: 'el',
      order: 2,
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'מֹשֶׁ֔ה',
      transliteration: 'Mosheh',
      englishLiteral: 'Drawn_Out (Moses)',
      englishNatural: 'Drawn-Out (Moses)',
      root: 'moshe',
      order: 3,
      morphology: {
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'דַּבֵּר־',
      transliteration: 'dabber-',
      englishLiteral: 'Speak-',
      englishNatural: 'Speak',
      root: 'dabar',
      order: 4,
      morphology: {
        type: 'verb',
        number: 'singular',
        person: '2nd',
        tense: 'imperative',
        stem: 'piel',
      },
      grammarPrefix: {
        englishLiteral: '"',
        englishNatural: '"',
      },
    },
    {
      hebrew: 'אַתָּ֥ה',
      transliteration: 'attah',
      englishLiteral: 'you',
      englishNatural: 'you',
      root: 'attah',
      order: 5,
      morphology: {
        type: 'pronoun',
        gender: 'masculine',
        number: 'singular',
        person: '2nd',
      },
    },
    {
      hebrew: 'עִמָּ֖נוּ',
      transliteration: 'immanu',
      englishLiteral: 'with-us',
      englishNatural: 'with us',
      root: 'im_with',
      suffixes: ['nu'],
      order: 6,
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'וְנִשְׁמָ֑עָה',
      transliteration: 'veNishmaah',
      englishLiteral: 'and-we-will-hear',
      englishNatural: 'and we will hear',
      root: 'shama',
      prefixes: ['ve'],
      order: 7,
      morphology: {
        type: 'verb',
        number: 'plural',
        person: '1st',
        tense: 'imperfect',
        stem: 'qal',
      },
      grammarSuffix: {
        englishLiteral: ';',
        englishNatural: ';',
      },
    },
    {
      hebrew: 'וְאַל־',
      transliteration: 'veAl-',
      englishLiteral: 'and-not-',
      englishNatural: 'not',
      root: 'al_not',
      prefixes: ['ve'],
      order: {
        hebrew: 8,
        english: 10,
      },
      morphology: {
        type: 'adverb',
      },
    },
    {
      hebrew: 'יְדַבֵּ֥ר',
      transliteration: 'yeDabber',
      englishLiteral: 'he-will-speak',
      englishNatural: 'will speak',
      root: 'dabar',
      order: {
        hebrew: 9,
        english: 9,
      },
      morphology: {
        type: 'verb',
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'imperfect',
        stem: 'piel',
      },
    },
    {
      hebrew: 'עִמָּ֛נוּ',
      transliteration: 'immanu',
      englishLiteral: 'with-us',
      englishNatural: 'with us',
      root: 'im_with',
      suffixes: ['nu'],
      order: {
        hebrew: 10,
        english: 11,
      },
      morphology: {
        type: 'preposition',
      },
      grammarSuffix: {
        englishNatural: ',',
      },
    },
    {
      hebrew: 'אֱלֹהִ֖ים',
      transliteration: 'Elohim',
      englishLiteral: 'Gods',
      englishNatural: 'and God',
      root: 'eloah',
      suffixes: ['im'],
      order: {
        hebrew: 11,
        english: 8,
      },
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'plural',
      },
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      hebrew: 'פֶּן־',
      transliteration: 'pen-',
      englishLiteral: 'lest-',
      englishNatural: 'lest',
      root: 'pen',
      order: 12,
      morphology: {
        type: 'conjunction',
      },
    },
    {
      hebrew: 'נָמֽוּת׃',
      transliteration: 'namut',
      englishLiteral: 'we-will-die',
      englishNatural: 'we die',
      root: 'mot',
      order: 13,
      morphology: {
        type: 'verb',
        number: 'plural',
        person: '1st',
        tense: 'imperfect',
        stem: 'qal',
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
      'וַיֹּאמְר֣וּ אֶל־מֹשֶׁ֔ה דַּבֵּר־אַתָּ֥ה עִמָּ֖נוּ וְנִשְׁמָ֑עָה וְאַל־יְדַבֵּ֥ר עִמָּ֛נוּ אֱלֹהִ֖ים פֶּן־נָמֽוּת׃',
    transliteration:
      'vaYomru el-Mosheh dabber-attah immanu veNishmaah veAl-yeDabber immanu Elohim pen-namut',
    englishLiteral:
      'And-they-will-say to- Drawn_Out (Moses), "Speak- you with-us and-we-will-hear; and-not- he-will-speak with-us Gods lest- we-will-die."',
    englishNatural:
      'And they said to Drawn-Out (Moses), "Speak you with us and we will hear; and God will speak not with us lest we die."',
    kjv: 'And they said unto Moses, Speak thou with us, and we will hear: but let not God speak with us, lest we die.',
    lastReviewed: { name: 'Matt Gross', date: '2026-07-08' },
},
};
