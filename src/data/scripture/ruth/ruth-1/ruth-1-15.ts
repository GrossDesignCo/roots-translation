import { Verse } from '@/types';

export const ruth_1_15: Verse = {
  meta: {
    book: 'Ruth',
    chapter: 1,
    verse: 15,
  },
  words: [
    {
      hebrew: 'וַתֹּ֗אמֶר',
      transliteration: 'vatTomer',
      englishLiteral: 'And-said',
      englishNatural: 'And she said',
      root: 'amar',
      prefixes: ['va'],
      order: 1,
      morphology: {
        type: 'verb',
        tense: 'imperfect',
        person: '3rd',
        gender: 'feminine',
        number: 'singular',
        stem: 'qal',
      },
      lineBreaksBefore: {
        hebrew: 1,
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'הִנֵּה֙',
      transliteration: 'hineh',
      englishLiteral: 'Behold',
      englishNatural: 'Behold',
      root: 'hineh',
      order: 2,
      morphology: {
        type: 'interjection',
      },
      grammarPrefix: {
        englishLiteral: '"',
        englishNatural: '"',
      },
      grammarSuffix: {
        englishNatural: ',',
      },
    },
    {
      hebrew: 'שָׁ֣בָה',
      transliteration: 'shavah',
      englishLiteral: 'she-has-returned',
      englishNatural: 'has returned',
      root: 'shuv',
      order: {
        hebrew: 3,
        english: 4,
      },
      morphology: {
        type: 'verb',
        tense: 'perfect',
        person: '3rd',
        gender: 'feminine',
        number: 'singular',
        stem: 'qal',
      },
    },
    {
      hebrew: 'יְבִמְתֵּ֔ךְ',
      transliteration: 'yevimtekh',
      englishLiteral: 'sister_in_law-your',
      englishNatural: 'your sister-in-law',
      root: 'yevimt',
      suffixes: ['kh'],
      order: {
        hebrew: 4,
        english: 3,
      },
      morphology: {
        type: 'noun',
        gender: 'feminine',
        number: 'singular',
      },
      grammarSuffix: {
        englishLiteral: ',',
      },
    },
    {
      hebrew: 'אֶל־',
      transliteration: 'el-',
      englishLiteral: 'to-',
      englishNatural: 'to',
      root: 'el',
      order: 5,
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'עַמָּ֖הּ',
      transliteration: 'ammah',
      englishLiteral: 'people-her',
      englishNatural: 'her people',
      root: 'am',
      suffixes: ['ha_feminine'],
      order: 6,
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'singular',
      },
    },
    {
      hebrew: 'וְאֶל־',
      transliteration: 'veEl-',
      englishLiteral: 'and-to-',
      englishNatural: 'and to',
      root: 'el',
      prefixes: ['ve'],
      order: 7,
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'אֱלֹהֶ֑יהָ',
      transliteration: 'elohiha',
      englishLiteral: 'Gods-her',
      englishNatural: 'her gods',
      root: 'eloah',
      suffixes: ['eha'],
      order: 8,
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'plural',
      },
      grammarSuffix: {
        englishLiteral: ';',
        englishNatural: ';',
      },
    },
    {
      hebrew: 'שׁ֖וּבִי',
      transliteration: 'shuvi',
      englishLiteral: 'return',
      englishNatural: 'Return',
      root: 'shuv',
      order: 9,
      morphology: {
        type: 'verb',
        tense: 'imperative',
        person: '2nd',
        gender: 'feminine',
        number: 'singular',
        stem: 'qal',
      },
    },
    {
      hebrew: 'אַחֲרֵ֥י',
      transliteration: 'acharei',
      englishLiteral: 'after',
      englishNatural: 'after',
      root: 'achar',
      order: 10,
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'יְבִמְתֵּֽךְ',
      transliteration: 'yevimtekh',
      englishLiteral: 'sister_in_law-your',
      englishNatural: 'your sister-in-law',
      root: 'yevimt',
      suffixes: ['kh'],
      order: 11,
      morphology: {
        type: 'noun',
        gender: 'feminine',
        number: 'singular',
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
      'וַתֹּ֗אמֶר הִנֵּה֙ שָׁ֣בָה יְבִמְתֵּ֔ךְ אֶל־עַמָּ֖הּ וְאֶל־אֱלֹהֶ֑יהָ שׁ֖וּבִי אַחֲרֵ֥י יְבִמְתֵּֽךְ׃',
    transliteration:
      'vatTomer hineh shavah yevimtekh el-ammah veEl-elohiha shuvi acharei yevimtekh',
    englishLiteral:
      'And-said, "Behold she-has-returned sister_in_law-your, to- people-her and-to- Gods-her; return after sister_in_law-your."',
    englishNatural:
      'And she said, "Behold, your sister-in-law has returned to her people and to her gods; Return after your sister-in-law."',
    kjv: 'And she said, Behold, thy sister in law is gone back unto her people, and unto her gods: return thou after thy sister in law.',
  },
};
