import { Verse } from '@/types';

export const genesis_9_19: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 9,
    verse: 19,
  },
  words: [
    {
      hebrew: 'שְׁלֹשָׁה',
      transliteration: 'shloshah',
      englishLiteral: 'three',
      englishNatural: 'three',
      root: 'shalosh',
      order: {
        hebrew: 1,
        english: 2,
      },
      morphology: {
        type: 'numeral',
      },
      grammarSuffix: {
        englishNatural: ',',
      },
      lineBreaksBefore: {
        hebrew: 1,
      },
    },
    {
      hebrew: 'אֵלֶּה',
      transliteration: 'eleh',
      englishLiteral: 'these',
      englishNatural: 'These',
      root: 'eleh',
      order: {
        hebrew: 2,
        english: 1,
      },
      morphology: {
        type: 'pronoun',
      },
      grammarSuffix: {
        englishLiteral: ',',
      },
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      hebrew: 'בְּנֵי־',
      transliteration: 'beney-',
      englishLiteral: 'sons-of-',
      englishNatural: 'sons of',
      root: 'ben',
      suffixes: ['ei'],
      order: 3,
      morphology: {
        gender: 'masculine',
        number: 'plural',
        state: 'construct',
        type: 'noun',
      },
    },
    {
      hebrew: 'נֹחַ',
      transliteration: 'Noach',
      englishLiteral: 'Rest (Noah)',
      englishNatural: 'Rest (Noah)',
      root: 'noach',
      order: 4,
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
      hebrew: 'וּמֵאֵלֶּה',
      transliteration: 'uMeEleh',
      englishLiteral: 'and-from-these',
      englishNatural: 'and from these',
      root: 'eleh',
      prefixes: ['u', 'me'],
      order: 5,
      morphology: {
        type: 'pronoun',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'נָפְצָה',
      transliteration: 'nafatsah',
      englishLiteral: 'has-been-spread_out',
      englishNatural: 'has been spread-out',
      root: 'nafats',
      order: {
        hebrew: 6,
        english: 8,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
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
      hebrew: 'כָּל־',
      transliteration: 'kol-',
      englishLiteral: 'all-',
      englishNatural: 'all',
      root: 'kol',
      order: {
        hebrew: 7,
        english: 6,
      },
      morphology: {
        type: 'adjective',
        state: 'construct',
      },
    },
    {
      hebrew: 'הָאָרֶץ',
      transliteration: 'haAretz',
      englishLiteral: 'the-land',
      englishNatural: 'the land',
      root: 'eretz',
      prefixes: ['ha'],
      order: {
        hebrew: 8,
        english: 7,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
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
      'שְׁלֹשָׁה אֵלֶּה בְּנֵי־נֹחַ וּמֵאֵלֶּה נָפְצָה כָּל־הָאָרֶץ',
    transliteration:
      'shloshah eleh beney-Noach uMeEleh nafatsah kol-haAretz',
    englishLiteral:
      'three these, sons-of- Rest (Noah); and-from-these, has-been-spread_out all- the-land.',
    englishNatural:
      'These three, sons of Rest (Noah); and from these, all the land has been spread-out.',
    kjv: 'These three were the sons of Noah, and of these was the whole earth overspread.',
    lastReviewed: { name: 'Matt Gross', date: '2026-07-18' },
},
};
