import { Verse } from '@/types';

export const genesis_8_6: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 8,
    verse: 6,
  },
  words: [
    {
      hebrew: 'וַיְהִי',
      transliteration: 'vaYehi',
      englishLiteral: 'And-it-was',
      englishNatural: 'And it was',
      root: 'hayah',
      prefixes: ['va'],
      order: 1,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'perfect',
        stem: 'qal',
        type: 'verb',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'מִקֵּץ',
      transliteration: 'miQetz',
      englishLiteral: 'from-end-of',
      englishNatural: 'from the end of',
      root: 'qetz',
      prefixes: ['mi'],
      order: 2,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      hebrew: 'אַרְבָּעִים',
      transliteration: 'arbaim',
      englishLiteral: 'forty',
      englishNatural: 'forty',
      root: 'arbaim',
      order: 3,
      morphology: {
        type: 'numeral',
      },
    },
    {
      hebrew: 'יוֹם',
      transliteration: 'yom',
      englishLiteral: 'day',
      englishNatural: 'days',
      root: 'yom',
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
      hebrew: 'וַיִּפְתַּח',
      transliteration: 'vaYiftach',
      englishLiteral: 'And-he-opened',
      englishNatural: 'opened',
      root: 'patach',
      prefixes: ['va'],
      order: {
        hebrew: 5,
        english: 6,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'imperfect',
        stem: 'qal',
        type: 'verb',
      },
    },
    {
      hebrew: 'נֹחַ',
      transliteration: 'Noach',
      englishLiteral: 'Rest (Noah)',
      englishNatural: 'And Rest (Noah)',
      root: 'noach',
      order: {
        hebrew: 6,
        english: 5,
      },
      morphology: {
        type: 'noun',
      },
    },
    {
      hebrew: 'אֶת־',
      transliteration: 'et-',
      englishLiteral: '↳',
      englishNatural: '',
      root: 'et',
      order: 7,
      morphology: {
        type: 'particle',
      },
    },
    {
      hebrew: 'חַלּוֹן',
      transliteration: 'challon',
      englishLiteral: 'window',
      englishNatural: 'the window of',
      root: 'challon',
      order: {
        hebrew: 8,
        english: 7,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      hebrew: 'הַתֵּבָה',
      transliteration: 'haTevah',
      englishLiteral: 'the-ark',
      englishNatural: 'the ark',
      root: 'tevah',
      prefixes: ['ha'],
      order: {
        hebrew: 9,
        english: 8,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      hebrew: 'אֲשֶׁר',
      transliteration: 'asher',
      englishLiteral: 'which',
      englishNatural: 'which',
      root: 'asher',
      order: {
        hebrew: 10,
        english: 9,
      },
      morphology: {
        type: 'relative',
      },
    },
    {
      hebrew: 'עָשָׂה',
      transliteration: 'asah',
      englishLiteral: 'made',
      englishNatural: 'he made',
      root: 'asah',
      order: {
        hebrew: 11,
        english: 10,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'perfect',
        stem: 'qal',
        type: 'verb',
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
      'וַיְהִי מִקֵּץ אַרְבָּעִים יוֹם וַיִּפְתַּח נֹחַ אֶת־חַלּוֹן הַתֵּבָה אֲשֶׁר עָשָׂה',
    transliteration:
      'vaYehi miQetz arbaim yom vaYiftach Noach et-challon haTevah asher asah',
    englishLiteral:
      'And-it-was from-end-of forty day; And-he-opened Rest (Noah) ↳ window the-ark which made.',
    englishNatural:
      'And it was from the end of forty days; And Rest (Noah) opened the window of the ark which he made.',
    kjv: 'And it came to pass at the end of forty days, that Noah opened the window of the ark which he had made.',
    lastReviewed: { name: 'Matt Gross', date: '2026-07-13' },
},
};
