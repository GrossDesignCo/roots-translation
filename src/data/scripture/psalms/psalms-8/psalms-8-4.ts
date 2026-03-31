import { Verse } from '@/types';

export const psalms_8_4: Verse = {
  meta: {
    book: 'Psalms',
    chapter: 8,
    verse: 4,
  },
  words: [
    {
      hebrew: 'מָה־',
      transliteration: 'mah-',
      englishLiteral: 'what-',
      englishNatural: 'What',
      root: 'mah',
      order: 1,
      morphology: {
        type: 'pronoun',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'אֱנ֥וֹשׁ',
      transliteration: 'enosh',
      englishLiteral: 'Mortal_Man (Enosh)',
      englishNatural: 'Mortal-Man (Enosh)',
      root: 'enosh',
      order: 2,
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'singular',
      },
    },
    {
      hebrew: 'כִּי־',
      transliteration: 'ki-',
      englishLiteral: 'that-',
      englishNatural: 'that',
      root: 'ki',
      order: 3,
      morphology: {
        type: 'conjunction',
      },
    },
    {
      hebrew: 'תִזְכְּרֶ֑נּוּ',
      transliteration: 'tiZkrennu',
      englishLiteral: 'you-will-remember-him',
      englishNatural: 'you will remember him',
      root: 'zakhar_remember',
      prefixes: ['ti'],
      suffixes: ['enu'],
      order: 4,
      morphology: {
        type: 'verb',
        stem: 'qal',
        tense: 'imperfect',
        gender: 'masculine',
        number: 'singular',
        person: '2nd',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
      lineBreaksAfter: 1,
    },
    {
      hebrew: 'וּבֶן־',
      transliteration: 'uVen-',
      englishLiteral: 'and-son-of-',
      englishNatural: 'and the son of',
      root: 'ben',
      prefixes: ['u'],
      order: 5,
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'singular',
        state: 'construct',
      },
    },
    {
      hebrew: 'אָ֝דָ֗ם',
      transliteration: 'Adam',
      englishLiteral: 'Earthling (Adam)',
      englishNatural: 'Earthling (Adam)',
      root: 'adam',
      order: 6,
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'singular',
      },
    },
    {
      hebrew: 'כִּ֣י',
      transliteration: 'ki',
      englishLiteral: 'that',
      englishNatural: 'that',
      root: 'ki',
      order: 7,
      morphology: {
        type: 'conjunction',
      },
    },
    {
      hebrew: 'תִפְקְדֶֽנּוּ',
      transliteration: 'tiFqedennu',
      englishLiteral: 'you-will-visit-him',
      englishNatural: 'you will visit him',
      root: 'paqad',
      prefixes: ['ti'],
      suffixes: ['enu'],
      order: 8,
      morphology: {
        type: 'verb',
        stem: 'qal',
        tense: 'imperfect',
        gender: 'masculine',
        number: 'singular',
        person: '2nd',
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
      'מָה־אֱנ֥וֹשׁ כִּי־תִזְכְּרֶ֑נּוּ וּבֶן־אָ֝דָ֗ם כִּ֣י תִפְקְדֶֽנּוּ',
    transliteration:
      'mah-enosh ki-tiZkrennu uVen-Adam ki tiFqedennu',
    englishLiteral:
      'what- Mortal_Man (Enosh) that- you-will-remember-him, and-son-of- Earthling (Adam) that you-will-visit-him.',
    englishNatural:
      'What Mortal-Man (Enosh) that you will remember him, and the son of Earthling (Adam) that you will visit him.',
    kjv: 'What is man, that thou art mindful of him? and the son of man, that thou visitest him?',
    lastReviewed: { name: 'Matt Gross', date: '2026-03-31' },
},
};
