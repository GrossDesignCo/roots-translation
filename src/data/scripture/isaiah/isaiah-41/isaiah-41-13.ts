import { Verse } from '@/types';

export const isaiah_41_13: Verse = {
  meta: {
    book: 'Isaiah',
    chapter: 41,
    verse: 13,
  },
  words: [
    {
      hebrew: 'כִּי',
      transliteration: 'ki',
      englishLiteral: 'that',
      englishNatural: 'that',
      root: 'ki',
      order: 1,
      morphology: {
        type: 'relative',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'אֲנִי',
      transliteration: 'ani',
      englishLiteral: 'I',
      englishNatural: 'I am',
      root: 'ani',
      order: 2,
      morphology: {
        type: 'pronoun',
      },
    },
    {
      hebrew: 'יְהוָה',
      transliteration: 'YHWH',
      englishLiteral: 'He_Who_Is (YHWH)',
      englishNatural: 'He-Who-Is (YHWH)',
      root: 'yhwh',
      order: 3,
      morphology: {
        type: 'noun',
      },
    },
    {
      hebrew: 'אֱלֹהֶיךָ',
      transliteration: 'Eloheykha',
      englishLiteral: 'God-your',
      englishNatural: 'your God',
      root: 'eloah',
      suffixes: ['ekha'],
      order: 4,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
      lineBreaksAfter: 1,
    },
    {
      hebrew: 'מַחֲזִיק',
      transliteration: 'machaziq',
      englishLiteral: 'holding',
      englishNatural: 'holding',
      root: 'chazaq',
      order: 5,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        tense: 'participle',
        stem: 'hiphil',
        type: 'verb',
      },
    },
    {
      hebrew: 'יְמִינֶךָ',
      transliteration: 'yaminekha',
      englishLiteral: 'right_hand-your',
      englishNatural: 'your right-hand',
      root: 'yamin',
      suffixes: ['ekha'],
      order: 6,
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ';',
        englishNatural: ';',
      },
      lineBreaksAfter: {
        english: 1,
      }
    },
    {
      hebrew: 'הָאֹמֵר',
      transliteration: 'haOmer',
      englishLiteral: 'the-saying',
      englishNatural: 'the one saying',
      root: 'amar',
      prefixes: ['ha'],
      order: 7,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        tense: 'participle',
        stem: 'qal',
        type: 'verb',
      },
    },
    {
      hebrew: 'לְךָ',
      transliteration: 'lekha',
      englishLiteral: 'to-you',
      englishNatural: 'to you',
      root: 'lamed',
      suffixes: ['ekha'],
      order: 8,
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'אַל־',
      transliteration: 'al-',
      englishLiteral: 'not-',
      englishNatural: 'not',
      root: 'al_not',
      order: {
        hebrew: 9,
        english: 10,
      },
      morphology: {
        type: 'adverb',
      },
      grammarPrefix: {
        englishLiteral: '"',
      },
      grammarSuffix: {
        englishNatural: ',',
      },
      lineBreaksBefore: {
        hebrew: 1,
      }
    },
    {
      hebrew: 'תִּירָא',
      transliteration: 'tira',
      englishLiteral: 'you-will-fear',
      englishNatural: 'You will fear',
      root: 'yare',
      prefixes: ['ti'],
      order: {
        hebrew: 10,
        english: 9,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '2nd',
        tense: 'imperfect',
        stem: 'qal',
        type: 'verb',
      },
      grammarPrefix: {
        englishNatural: '"',
      },
      grammarSuffix: {
        englishLiteral: ',',
      },
      lineBreaksBefore: {
        english: 1,
      }
    },
    {
      hebrew: 'אֲנִי',
      transliteration: 'ani',
      englishLiteral: 'I',
      englishNatural: 'I',
      root: 'ani',
      order: 11,
      morphology: {
        type: 'pronoun',
      },
      grammarSuffix: {
        englishNatural: ','
      }
    },
    {
      hebrew: 'עֲזַרְתִּיךָ',
      transliteration: 'azartikha',
      englishLiteral: 'I-have-helped-you',
      englishNatural: 'I have helped you',
      root: 'azar',
      suffixes: ['ti', 'kha'],
      order: 12,
      morphology: {
        gender: 'common',
        number: 'singular',
        person: '1st',
        tense: 'perfect',
        stem: 'qal',
        type: 'verb',
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
      'כִּי אֲנִי יְהוָה אֱלֹהֶיךָ מַחֲזִיק יְמִינֶךָ הָאֹמֵר לְךָ אַל־תִּירָא אֲנִי עֲזַרְתִּיךָ',
    transliteration:
      'ki ani YHWH Eloheykha machaziq yaminekha haOmer lekha al-tira ani azartikha',
    englishLiteral:
      'that, I He_Who_Is (YHWH) God-your holding right_hand-your; the-saying to-you "not- you-will-fear, I I-have-helped-you."',
    englishNatural:
      'that, I am He-Who-Is (YHWH) your God holding your right-hand; the one saying to you "You will fear not, I I have helped you."',
    kjv: 'For I the LORD thy God hold thy right hand, who say unto thee: Fear not, I help thee.',
    lastReviewed: { name: 'Matt Gross', date: '2026-07-14' },
},
};
