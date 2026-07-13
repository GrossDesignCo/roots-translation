import { Verse } from '@/types';

export const genesis_8_5: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 8,
    verse: 5,
  },
  words: [
    {
      hebrew: 'וְהַמַּיִם',
      transliteration: 'veHaMayim',
      englishLiteral: 'And-the-waters',
      englishNatural: 'And the waters',
      root: 'mayim',
      prefixes: ['ve', 'ha'],
      order: 1,
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun',
      },
      lineBreaksBefore: {
        hebrew: 1,
        english: 1,
      },
    },
    {
      hebrew: 'הָיוּ',
      transliteration: 'hayu',
      englishLiteral: 'they-were',
      englishNatural: 'were',
      root: 'hayah',
      order: 2,
      morphology: {
        number: 'plural',
        person: '3rd',
        tense: 'perfect',
        stem: 'qal',
        type: 'verb',
      },
    },
    {
      hebrew: 'הָלוֹךְ',
      transliteration: 'halokh',
      englishLiteral: 'going',
      englishNatural: 'going',
      root: 'halakh',
      order: 3,
      morphology: {
        tense: 'infinitive_absolute',
        type: 'verb',
      },
    },
    {
      hebrew: 'וְחָסוֹר',
      transliteration: 'veChasor',
      englishLiteral: 'and-lacking',
      englishNatural: 'and lacking',
      root: 'chaser',
      prefixes: ['ve'],
      order: 4,
      morphology: {
        tense: 'infinitive_absolute',
        type: 'verb',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'עַד',
      transliteration: 'ad',
      englishLiteral: 'until',
      englishNatural: 'until',
      root: 'ad',
      order: 5,
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'הַחֹדֶשׁ',
      transliteration: 'haChodesh',
      englishLiteral: 'the-month',
      englishNatural: 'the month',
      root: 'chodesh',
      prefixes: ['ha'],
      order: 6,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      hebrew: 'הָעֲשִׂירִי',
      transliteration: 'haAsiri',
      englishLiteral: 'the-tenth',
      englishNatural: 'the tenth',
      root: 'asiri',
      prefixes: ['ha'],
      order: 7,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'numeral',
      },
      grammarSuffix: {
        englishLiteral: ';',
        englishNatural: ';',
      },
      lineBreaksAfter: 1,
    },
    {
      hebrew: 'בָּעֲשִׂירִי',
      transliteration: 'baAsiri',
      englishLiteral: 'in-the-tenth',
      englishNatural: 'in the tenth',
      root: 'asiri',
      prefixes: ['be'],
      order: 8,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'numeral',
      },
      lineBreaksBefore: {
        hebrew: 1,
      },
    },
    {
      hebrew: 'בְּאֶחָד',
      transliteration: 'beEchad',
      englishLiteral: 'in-one',
      englishNatural: 'on the first',
      root: 'echad',
      prefixes: ['be'],
      order: 9,
      morphology: {
        type: 'numeral',
      },
    },
    {
      hebrew: 'לַחֹדֶשׁ',
      transliteration: 'laChodesh',
      englishLiteral: 'to-the-month',
      englishNatural: 'to the month',
      root: 'chodesh',
      prefixes: ['la'],
      order: 10,
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
      hebrew: 'נִרְאוּ',
      transliteration: 'niru',
      englishLiteral: 'they-were-seen',
      englishNatural: 'were seen',
      root: 'raah',
      order: {
        hebrew: 11,
        english: 14,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        person: '3rd',
        tense: 'perfect',
        stem: 'niphal',
        type: 'verb',
      },
      grammarSuffix: {
        englishNatural: '.',
      },
      lineBreaksAfter: {
        english: 1,
      },
    },
    {
      hebrew: 'רָאשֵׁי',
      transliteration: 'rashei',
      englishLiteral: 'heads-of',
      englishNatural: 'the heads of',
      root: 'rosh',
      order: {
        hebrew: 12,
        english: 11,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        state: 'construct',
        type: 'noun',
      },
      lineBreaksBefore: {
        english: 1,
      }
    },
    {
      hebrew: 'הֶהָרִים',
      transliteration: 'heHarim',
      englishLiteral: 'the-mountains',
      englishNatural: 'the mountains',
      root: 'har',
      prefixes: ['ha'],
      suffixes: ['im'],
      order: {
        hebrew: 13,
        english: 12,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: '.',
      },
      lineBreaksAfter: {
        hebrew: 1,
      },
    },
  ],
  expectedTranslations: {
    hebrew:
      'וְהַמַּיִם הָיוּ הָלוֹךְ וְחָסוֹר עַד הַחֹדֶשׁ הָעֲשִׂירִי בָּעֲשִׂירִי בְּאֶחָד לַחֹדֶשׁ נִרְאוּ רָאשֵׁי הֶהָרִים',
    transliteration:
      'veHaMayim hayu halokh veChasor ad haChodesh haAsiri baAsiri beEchad laChodesh niru rashei heHarim',
    englishLiteral:
      'And-the-waters they-were going and-lacking, until the-month the-tenth; in-the-tenth in-one to-the-month, they-were-seen heads-of the-mountains.',
    englishNatural:
      'And the waters were going and lacking, until the month the tenth; in the tenth on the first to the month, the heads of the mountains were seen.',
    kjv: 'And the waters decreased continually until the tenth month: in the tenth month, on the first day of the month, were the tops of the mountains seen.',
    lastReviewed: { name: 'Matt Gross', date: '2026-07-13' },
},
};
