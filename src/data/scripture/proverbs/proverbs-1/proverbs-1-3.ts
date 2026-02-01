import { Verse } from '@/types';

export const proverbs_1_3: Verse = {
  meta: {
    book: 'Proverbs',
    chapter: 1,
    verse: 3,
  },
  words: [
    {
      hebrew: 'לָקַחַת',
      transliteration: 'laqachat',
      englishLiteral: 'To-receive',
      englishNatural: 'To receive',
      root: 'laqach',
      prefixes: ['la'],
      order: 1,
      morphology: {
        tense: 'infinitive_construct',
        type: 'verb',
      },
    },
    {
      hebrew: 'מוּסַר',
      transliteration: 'musar',
      englishLiteral: 'discipline',
      englishNatural: 'discipline',
      root: 'musar',
      order: 2,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'הַשְׂכֵּל',
      transliteration: 'haskel',
      englishLiteral: 'wise_conduct',
      englishNatural: 'wise-conduct',
      root: 'haskel',
      prefixes: ['ha'],
      order: 3,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ';',
        englishNatural: ';',
      },
    },
    {
      hebrew: 'צֶדֶק',
      transliteration: 'tzedeq',
      englishLiteral: 'righteousness',  
      englishNatural: 'righteousness',
      root: 'tzedeq',
      order: 4,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'וּמִשְׁפָּט',
      transliteration: 'umishpat',
      englishLiteral: 'and-justice',
      englishNatural: 'and justice',
      root: 'mishpat',
      prefixes: ['u'],
      order: 5,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'וּמֵישָׁרִים',
      transliteration: 'umesharim',
      englishLiteral: 'and-uprightness',
      englishNatural: 'and uprightness',
      root: 'mesharim',
      prefixes: ['u'],
      order: 6,
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: '.',
        englishNatural: '.',
      },
      lineBreaksAfter: 1,
    },
  ],
  expectedTranslations: {
    hebrew: 'לָקַחַת מוּסַר הַשְׂכֵּל צֶדֶק וּמִשְׁפָּט וּמֵישָׁרִים',
    transliteration: 'laqachat musar haskel tzedeq umishpat umesharim',
    englishLiteral: 'To-receive discipline, wise_conduct; righteousness, and-justice, and-uprightness.',
    englishNatural: 'To receive discipline, wise-conduct; righteousness, and justice, and uprightness.',
    kjv: 'To receive the instruction of wisdom, in justice, and judgment, and equity',
    lastReviewed: { name: 'Matt Gross', date: '2026-02-01' },
  },
}; 