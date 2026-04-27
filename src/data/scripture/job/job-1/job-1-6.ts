import { Verse } from '@/types';

export const job_1_6: Verse = {
  meta: {
    book: 'Job',
    chapter: 1,
    verse: 6,
  },
  words: [
    {
      hebrew: 'וַיְהִי',
      transliteration: 'vayHi',
      englishLiteral: 'And-was',
      englishNatural: 'And it came to be',
      root: 'hayah',
      prefixes: ['va'],
      order: {
        hebrew: 1,
        english: 1,
      },
      morphology: {
        type: 'verb',
        tense: 'imperfect',
        person: '3rd',
        gender: 'masculine',
        number: 'singular',
        stem: 'qal',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'הַיּוֹם',
      transliteration: 'haYom',
      englishLiteral: 'the-day',
      englishNatural: 'the day',
      root: 'yom',
      prefixes: ['ha'],
      order: {
        hebrew: 2,
        english: 2,
      },
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'singular',
        state: 'absolute',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'וַיָּבֹאוּ',
      transliteration: 'vayYavou',
      englishLiteral: 'and-they-came',
      englishNatural: 'came',
      root: 'bo',
      prefixes: ['va'],
      order: {
        hebrew: 3,
        english: 5,
      },
      morphology: {
        type: 'verb',
        stem: 'qal',
        tense: 'imperfect',
        person: '3rd',
        gender: 'masculine',
        number: 'plural',
      },
    },
    {
      hebrew: 'בְנֵי',
      transliteration: 'beney',
      englishLiteral: 'sons-of',
      englishNatural: 'and the sons of',
      root: 'ben',
      order: {
        hebrew: 4,
        english: 3,
      },
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'plural',
        state: 'construct',
      },
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      hebrew: 'הָאֱלֹהִים',
      transliteration: 'haElohim',
      englishLiteral: 'the-Gods',
      englishNatural: 'God',
      root: 'eloah',
      prefixes: ['ha'],
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
    },
    {
      hebrew: 'לְהִתְיַצֵּב',
      transliteration: 'leHityatzev',
      englishLiteral: 'to-self-position',
      englishNatural: 'to position themselves',
      root: 'yatzav',
      prefixes: ['le', 'hit'],
      order: {
        hebrew: 6,
        english: 6,
      },
      morphology: {
        type: 'verb',
        stem: 'hithpael',
        tense: 'infinitive_construct',
      },
    },
    {
      hebrew: 'עַל־',
      transliteration: 'al-',
      englishLiteral: 'over-',
      englishNatural: 'over',
      root: 'al',
      order: {
        hebrew: 7,
        english: 7,
      },
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'יְהוָה',
      transliteration: 'YHWH',
      englishLiteral: 'He_Who_Is (YHWH)',
      englishNatural: 'He-Who-Is (YHWH)',
      root: 'yhwh',
      order: {
        hebrew: 8,
        english: 8,
      },
      morphology: {
        type: 'noun',
      },
      grammarSuffix: {
        hebrew: '׃',
        englishLiteral: '.',
        englishNatural: '.',
      },
      lineBreaksAfter: 1,
    },
  ],
  expectedTranslations: {
    hebrew:
      'וַיְהִי הַיּוֹם וַיָּבֹאוּ בְנֵי הָאֱלֹהִים לְהִתְיַצֵּב עַל־יְהוָה׃',
    transliteration:
      'vayHi haYom vayYavou beney haElohim leHityatzev al-YHWH',
    englishLiteral:
      'And-was the-day, and-they-came sons-of the-Gods to-self-position over- He_Who_Is (YHWH).',
    englishNatural:
      'And it came to be the day, and the sons of God came to position themselves over He-Who-Is (YHWH).',
    kjv: 'Now there was a day when the sons of God came to present themselves before the LORD.',
    lastReviewed: { name: 'Matt Gross', date: '2026-04-27' },
},
};
