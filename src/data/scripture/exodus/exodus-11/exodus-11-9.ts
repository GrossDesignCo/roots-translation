import { Verse } from '@/types';

export const exodus_11_9: Verse = {
  meta: {
    book: 'Exodus',
    chapter: 11,
    verse: 9,
  },
  words: [
    {
      hebrew: 'וַיֹּ֤אמֶר',
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
        type: 'verb',
        tense: 'imperfect',
        person: '3rd',
        gender: 'masculine',
        number: 'singular',
        stem: 'qal',
      },
      lineBreaksBefore: {
        hebrew: 1,
      },
    },
    {
      hebrew: 'יְהוָה֙',
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
      hebrew: 'אֶל־',
      transliteration: 'el-',
      englishLiteral: 'to-',
      englishNatural: 'to',
      root: 'el',
      order: 3,
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'מֹשֶׁ֔ה',
      transliteration: 'Moshe',
      englishLiteral: 'Drawn_Out (Moses)',
      englishNatural: 'Drawn-Out (Moses)',
      root: 'moshe',
      order: 4,
      morphology: {
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'לֹא־',
      transliteration: 'lo-',
      englishLiteral: 'not-',
      englishNatural: 'not',
      root: 'lo',
      order: {
        hebrew: 5,
        english: 7,
      },
      morphology: {
        type: 'particle',
      },
    },
    {
      hebrew: 'יִשְׁמַ֥ע',
      transliteration: 'yishma',
      englishLiteral: 'he-will-hear',
      englishNatural: 'will hear',
      root: 'shama',
      order: {
        hebrew: 6,
        english: 6,
      },
      morphology: {
        type: 'verb',
        tense: 'imperfect',
        person: '3rd',
        gender: 'masculine',
        number: 'singular',
        stem: 'qal',
      },
    },
    {
      hebrew: 'אֲלֵיכֶ֖ם',
      transliteration: 'aleykhem',
      englishLiteral: 'to-you',
      englishNatural: 'to you',
      root: 'el',
      suffixes: ['khem'],
      order: {
        hebrew: 7,
        english: 9,
      },
      morphology: {
        type: 'preposition',
      },
      grammarSuffix: {
        englishNatural: ',',
      },
    },
    {
      hebrew: 'פַּרְעֹ֑ה',
      transliteration: 'Paroh',
      englishLiteral: 'Pharaoh',
      englishNatural: 'Pharaoh',
      root: 'paroh',
      order: {
        hebrew: 8,
        english: 5,
      },
      morphology: {
        type: 'noun',
      },
      grammarPrefix: {
        englishNatural: '"',
      },
      lineBreaksBefore: {
        english: 1,
      },
      grammarSuffix: {
        englishLiteral: ';',
      },
    },
    {
      hebrew: 'לְמַ֛עַן',
      transliteration: 'lemaan',
      englishLiteral: 'for-sake-of',
      englishNatural: 'for the sake of',
      root: 'maan',
      prefixes: ['le'],
      order: 9,
      morphology: {
        type: 'conjunction',
      },
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      hebrew: 'רְבוֹת־',
      transliteration: 'rebot-',
      englishLiteral: 'multiplying-',
      englishNatural: 'multiplying',
      root: 'rabah',
      order: 10,
      morphology: {
        type: 'verb',
        tense: 'infinitive_construct',
        stem: 'qal',
      },
    },
    {
      hebrew: 'מוֹפְתַ֖י',
      transliteration: 'moftay',
      englishLiteral: 'wonders-my',
      englishNatural: 'my wonders',
      root: 'mofet',
      suffixes: ['ay'],
      order: 11,
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'plural',
        state: 'construct',
      },
    },
    {
      hebrew: 'בְּאֶ֥רֶץ',
      transliteration: 'beEretz',
      englishLiteral: 'in-land-of',
      englishNatural: 'in the land of',
      root: 'eretz',
      prefixes: ['be'],
      order: 12,
      morphology: {
        type: 'noun',
        gender: 'feminine',
        number: 'singular',
        state: 'construct',
      },
    },
    {
      hebrew: 'מִצְרָֽיִם׃',
      transliteration: 'Mitzrayim',
      englishLiteral: 'Double_Narrows (Egypt)',
      englishNatural: 'Double-Narrows (Egypt)',
      root: 'mitzrayim',
      order: 13,
      morphology: {
        type: 'noun',
        number: 'dual',
      },
      grammarSuffix: {
        hebrew: '׃',
        englishLiteral: '."',
        englishNatural: '."',
      },
      lineBreaksAfter: 1,
    },
  ],
  expectedTranslations: {
    hebrew:
      'וַיֹּ֤אמֶר יְהוָה֙ אֶל־מֹשֶׁ֔ה לֹא־יִשְׁמַ֥ע אֲלֵיכֶ֖ם פַּרְעֹ֑ה לְמַ֛עַן רְבוֹת־מוֹפְתַ֖י בְּאֶ֥רֶץ מִצְרָֽיִם׃',
    transliteration:
      'vaYomer YHWH el-Moshe lo-yishma aleykhem Paroh lemaan rebot-moftay beEretz Mitzrayim',
    englishLiteral:
      'And-said He_Who_Is (YHWH) to- Drawn_Out (Moses), not- he-will-hear to-you Pharaoh; for-sake-of multiplying- wonders-my in-land-of Double_Narrows (Egypt)."',
    englishNatural:
      'And He-Who-Is (YHWH) said to Drawn-Out (Moses), "Pharaoh will hear not to you, for the sake of multiplying my wonders in the land of Double-Narrows (Egypt)."',
    kjv: 'And the LORD said unto Moses, Pharaoh shall not hearken unto you; that my wonders may be multiplied in the land of Egypt.',
    lastReviewed: { name: 'Matt Gross', date: '2026-01-18' },
},
};
