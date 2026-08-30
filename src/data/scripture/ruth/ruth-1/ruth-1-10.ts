import { Verse } from '@/types';

export const ruth_1_10: Verse = {
  meta: {
    book: 'Ruth',
    chapter: 1,
    verse: 10,
  },
  words: [
    {
      hebrew: 'וַתֹּאמַ֖רְנָה־',
      transliteration: 'vatTomarnah-',
      englishLiteral: 'And-said',
      englishNatural: 'And they said',
      root: 'amar',
      prefixes: ['va'],
      order: 1,
      morphology: {
        type: 'verb',
        tense: 'imperfect',
        person: '3rd',
        gender: 'feminine',
        number: 'plural',
        stem: 'qal',
      },
      lineBreaksBefore: {
        hebrew: 1,
      },
    },
    {
      hebrew: 'לָּ֑הּ',
      transliteration: 'lah',
      englishLiteral: 'to-her',
      englishNatural: 'to her',
      root: 'lamed',
      suffixes: ['ah'],
      order: 2,
      morphology: {
        type: 'preposition',
      },
      grammarSuffix: {
        englishLiteral: ';',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'כִּֽי־',
      transliteration: 'ki-',
      englishLiteral: 'that-',
      englishNatural: 'That',
      root: 'ki',
      order: 3,
      morphology: {
        type: 'conjunction',
      },
      grammarPrefix: {
        englishLiteral: '"',
        englishNatural: '"',
      },
    },
    {
      hebrew: 'אִתָּ֥ךְ',
      transliteration: 'itakh',
      englishLiteral: 'with-you',
      englishNatural: 'with you',
      root: 'et_with',
      suffixes: ['kha'],
      order: 4,
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'נָשׁ֖וּב',
      transliteration: 'naShuv',
      englishLiteral: 'we-will-return',
      englishNatural: 'we will return',
      root: 'shuv',
      prefixes: ['na'],
      order: 5,
      morphology: {
        type: 'verb',
        tense: 'imperfect',
        person: '1st',
        gender: 'common',
        number: 'plural',
        stem: 'qal',
      },
    },
    {
      hebrew: 'לְעַמֵּֽךְ',
      transliteration: 'leAmmeKh',
      englishLiteral: 'to-people-your',
      englishNatural: 'to your people',
      root: 'am',
      prefixes: ['le'],
      suffixes: ['kh'],
      order: 6,
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'singular',
        state: 'construct',
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
      'וַתֹּאמַ֖רְנָה־לָּ֑הּ כִּֽי־אִתָּ֥ךְ נָשׁ֖וּב לְעַמֵּֽךְ׃',
    transliteration: 'vatTomarnah-lah ki-itakh naShuv leAmmeKh',
    englishLiteral:
      'And-said to-her; "that- with-you we-will-return to-people-your."',
    englishNatural:
      'And they said to her, "That with you we will return to your people."',
    kjv: 'And they said unto her, Surely we will return with thee unto thy people.',
  },
};
