import { Verse } from '@/types';

export const genesis_10_29: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 10,
    verse: 29,
  },
  words: [
    {
      hebrew: 'וְאֶת־',
      transliteration: 'veEt-',
      englishLiteral: 'and-↳',
      englishNatural: 'and',
      root: 'et',
      prefixes: ['ve'],
      order: 1,
      morphology: {
        type: 'particle',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'אוֹפִר',
      transliteration: 'Ophir',
      englishLiteral: 'Ophir (Ophir)',
      englishNatural: 'Ophir (Ophir)',
      root: 'ophir',
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
      hebrew: 'וְאֶת־',
      transliteration: 'veEt-',
      englishLiteral: 'and-↳',
      englishNatural: 'and',
      root: 'et',
      prefixes: ['ve'],
      order: 3,
      morphology: {
        type: 'particle',
      },
    },
    {
      hebrew: 'חֲוִילָה',
      transliteration: 'Chavilah',
      englishLiteral: 'Strength (Havilah)',
      englishNatural: 'Strength (Havilah)',
      root: 'Chavilah',
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
    },
    {
      hebrew: 'וְאֶת־',
      transliteration: 'veEt-',
      englishLiteral: 'and-↳',
      englishNatural: 'and',
      root: 'et',
      prefixes: ['ve'],
      order: 5,
      morphology: {
        type: 'particle',
      },
    },
    {
      hebrew: 'יוֹבָב',
      transliteration: 'Yovav',
      englishLiteral: 'Howler (Jobab)',
      englishNatural: 'Howler (Jobab)',
      root: 'yovav',
      order: 6,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ';',
        englishNatural: ';',
      },
      lineBreaksAfter: 1,
    },
    {
      hebrew: 'כָּל־',
      transliteration: 'kol-',
      englishLiteral: 'all-',
      englishNatural: 'all',
      root: 'kol',
      order: 7,
      morphology: {
        type: 'adjective',
        state: 'construct',
      },
    },
    {
      hebrew: 'אֵלֶּה',
      transliteration: 'eleh',
      englishLiteral: 'these',
      englishNatural: 'these',
      root: 'eleh',
      order: 8,
      morphology: {
        type: 'pronoun',
      },
    },
    {
      hebrew: 'בְּנֵי',
      transliteration: 'benei',
      englishLiteral: 'sons-of',
      englishNatural: 'are the sons of',
      root: 'ben',
      suffixes: ['ei'],
      order: 9,
      morphology: {
        gender: 'masculine',
        number: 'plural',
        state: 'construct',
        type: 'noun',
      },
    },
    {
      hebrew: 'יָקְטָן',
      transliteration: 'Yoqtan',
      englishLiteral: 'Small (Joktan)',
      englishNatural: 'Small (Joktan)',
      root: 'yoqtan',
      order: 10,
      morphology: {
        gender: 'masculine',
        number: 'singular',
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
    hebrew:
      'וְאֶת־אוֹפִר וְאֶת־חֲוִילָה וְאֶת־יוֹבָב כָּל־אֵלֶּה בְּנֵי יָקְטָן',
    transliteration:
      'veEt-Ophir veEt-Chavilah veEt-Yovav kol-eleh benei Yoqtan',
    englishLiteral:
      'and-↳ Ophir (Ophir), and-↳ Strength (Havilah), and-↳ Howler (Jobab); all- these sons-of Small (Joktan).',
    englishNatural:
      'and Ophir (Ophir), and Strength (Havilah), and Howler (Jobab); all these are the sons of Small (Joktan).',
    kjv: 'And Ophir, and Havilah, and Jobab: all these were the sons of Joktan.',
  },
};
