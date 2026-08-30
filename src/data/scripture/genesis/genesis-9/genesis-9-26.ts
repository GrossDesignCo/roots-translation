import { Verse } from '@/types';

export const genesis_9_26: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 9,
    verse: 26,
  },
  words: [
    {
      hebrew: 'וַיֹּאמֶר',
      transliteration: 'vayYomer',
      englishLiteral: 'and-said',
      englishNatural: 'And he said',
      root: 'amar',
      prefixes: ['va'],
      order: 1,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'imperfect',
        stem: 'qal',
        type: 'verb',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'בָּרוּךְ',
      transliteration: 'barukh',
      englishLiteral: 'blessed',
      englishNatural: 'Blessed',
      root: 'barukh',
      order: 2,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        tense: 'participle',
        stem: 'qal',
        type: 'adjective',
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
      hebrew: 'אֱלֹהֵי',
      transliteration: 'elohei',
      englishLiteral: 'Gods-of',
      englishNatural: 'the God of',
      root: 'eloah',
      suffixes: ['ei'],
      order: 4,
      morphology: {
        gender: 'masculine',
        number: 'plural',
        state: 'construct',
        type: 'noun',
      },
    },
    {
      hebrew: 'שֵׁם',
      transliteration: 'Shem',
      englishLiteral: 'Name (Shem)',
      englishNatural: 'Name (Shem)',
      root: 'shem',
      order: 5,
      morphology: {
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ';',
        englishNatural: ';',
      },
      lineBreaksAfter: 1,
    },
    {
      hebrew: 'וִיהִי',
      transliteration: 'vihi',
      englishLiteral: 'and-let-be',
      englishNatural: 'and let it be',
      root: 'hayah',
      prefixes: ['ve'],
      order: 6,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'jussive',
        stem: 'qal',
        type: 'verb',
      },
      grammarSuffix: {
        englishNatural: ',',
      },
    },
    {
      hebrew: 'כְנַעַן',
      transliteration: 'Kenaan',
      englishLiteral: 'Low (Canaan)',
      englishNatural: 'Low (Canaan)',
      root: 'kenaan',
      order: 7,
      morphology: {
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'עֶבֶד',
      transliteration: 'eved',
      englishLiteral: 'servant',
      englishNatural: 'servant',
      root: 'eved',
      order: 8,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      hebrew: 'לָמוֹ',
      transliteration: 'lamo',
      englishLiteral: 'to-them',
      englishNatural: 'to them',
      root: 'lamed',
      suffixes: ['mo'],
      order: 9,
      morphology: {
        gender: 'masculine',
        number: 'plural',
        person: '3rd',
        type: 'preposition',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
  ],
  expectedTranslations: {
    hebrew:
      'וַיֹּאמֶר בָּרוּךְ יְהוָה אֱלֹהֵי שֵׁם וִיהִי כְנַעַן עֶבֶד לָמוֹ',
    transliteration:
      'vayYomer barukh YHWH elohei Shem vihi Kenaan eved lamo',
    englishLiteral:
      'and-said, "blessed He_Who_Is (YHWH) Gods-of Name (Shem); and-let-be Low (Canaan), servant to-them,',
    englishNatural:
      'And he said, "Blessed, He-Who-Is (YHWH) the God of Name (Shem); and let it be, Low (Canaan), servant to them,',
    kjv: 'And he said: Blessed be the LORD, the God of Shem; and let Canaan be their servant.',
    lastReviewed: { name: 'Matt Gross', date: '2026-07-18' },
},
};
