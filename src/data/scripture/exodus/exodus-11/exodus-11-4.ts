import { Verse } from '@/types';

export const exodus_11_4: Verse = {
  meta: {
    book: 'Exodus',
    chapter: 11,
    verse: 4,
  },
  words: [
    {
      hebrew: 'וַיֹּ֣אמֶר',
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
      hebrew: 'מֹשֶׁ֔ה',
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
      hebrew: 'כֹּ֖ה',
      transliteration: 'koh',
      englishLiteral: 'thus',
      englishNatural: 'Thus',
      root: 'koh',
      order: 3,
      morphology: {
        type: 'adverb',
      },
      grammarPrefix: {
        englishNatural: '"',
      },
    },
    {
      hebrew: 'אָמַ֣ר',
      transliteration: 'amar',
      englishLiteral: 'said',
      englishNatural: 'has said',
      root: 'amar',
      order: 4,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'perfect',
        stem: 'qal',
        type: 'verb',
      },
    },
    {
      hebrew: 'יְהוָ֑ה',
      transliteration: 'YHWH',
      englishLiteral: 'He_Who_Is (YHWH)',
      englishNatural: 'He-Who-Is (YHWH)',
      root: 'yhwh',
      order: 5,
      morphology: {
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'כַּחֲצֹ֣ת',
      transliteration: 'kaChatzot',
      englishLiteral: 'as-halving',
      englishNatural: 'as the halving of',
      root: 'chatzot',
      prefixes: ['ka'],
      order: 6,
      morphology: {
        type: 'noun',
      },
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      hebrew: 'הַלַּ֔יְלָה',
      transliteration: 'haLaylah',
      englishLiteral: 'the-night',
      englishNatural: 'the night',
      root: 'layil',
      prefixes: ['ha'],
      suffixes: ['ah'],
      order: 7,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      hebrew: 'אֲנִ֥י',
      transliteration: 'ani',
      englishLiteral: 'I',
      englishNatural: 'I',
      root: 'ani',
      order: 8,
      morphology: {
        type: 'pronoun',
      },
    },
    {
      hebrew: 'יוֹצֵ֖א',
      transliteration: 'yotse',
      englishLiteral: 'bringing_out',
      englishNatural: 'will bring-out',
      root: 'yatsa',
      order: 9,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        tense: 'participle',
        stem: 'qal',
        type: 'verb',
      },
    },
    {
      hebrew: 'בְּת֥וֹךְ',
      transliteration: 'beTokh',
      englishLiteral: 'in-midst',
      englishNatural: 'in the midst of',
      root: 'tokh',
      prefixes: ['be'],
      order: 10,
      morphology: {
        type: 'noun',
      },
    },
    {
      hebrew: 'מִצְרָֽיִם׃',
      transliteration: 'Mitzrayim',
      englishLiteral: 'Double_Narrows (Egypt)',
      englishNatural: 'Double-Narrows (Egypt)',
      root: 'mitzrayim',
      order: 11,
      morphology: {
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
      'וַיֹּ֣אמֶר מֹשֶׁ֔ה כֹּ֖ה אָמַ֣ר יְהוָ֑ה כַּחֲצֹ֣ת הַלַּ֔יְלָה אֲנִ֥י יוֹצֵ֖א בְּת֥וֹךְ מִצְרָֽיִם׃',
    transliteration:
      'vaYomer Moshe koh amar YHWH kaChatzot haLaylah ani yotse beTokh Mitzrayim',
    englishLiteral:
      'And-said Drawn_Out (Moses), thus said He_Who_Is (YHWH), as-halving the-night I bringing_out in-midst Double_Narrows (Egypt)."',
    englishNatural:
      'And Drawn-Out (Moses) said, "Thus has said He-Who-Is (YHWH), as the halving of the night I will bring-out in the midst of Double-Narrows (Egypt)."',
    kjv: 'And Moses said, Thus saith the LORD, About midnight will I go out into the midst of Egypt:',
    lastReviewed: { name: 'Matt Gross', date: '2026-01-18' },
},
};
