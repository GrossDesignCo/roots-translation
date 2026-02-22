import { type Verse } from '@/types';

export const genesis_5_5: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 5,
    verse: 5,
  },
  words: [
    {
      hebrew: 'וַיִּהְיוּ',
      transliteration: 'vaYihyu',
      englishLiteral: 'and-were',
      englishNatural: 'were',
      root: 'hayah',
      prefixes: ['va'],
      order: {
        hebrew: 1,
        english: 6,
      },
      morphology: {
        type: 'verb',
        person: '3rd',
        gender: 'masculine',
        number: 'plural',
        stem: 'qal',
        tense: 'imperfect',
      },
      lineBreaksBefore: {
        hebrew: 1,
      },
    },
    {
      hebrew: 'כָּל־',
      transliteration: 'kol-',
      englishLiteral: 'all-',
      englishNatural: 'And all',
      root: 'kol',
      order: {
        hebrew: 2,
        english: 1,
      },
      morphology: {
        type: 'adjective',
      },
    },
    {
      hebrew: 'יְמֵי',
      transliteration: 'yemey',
      englishLiteral: 'days-of',
      englishNatural: 'the days of',
      root: 'yom',
      suffixes: ['ey'],
      order: {
        hebrew: 3,
        english: 2,
      },
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'plural',
        state: 'construct',
      },
    },
    {
      hebrew: 'אָדָם',
      transliteration: 'Adam',
      englishLiteral: 'Earthling (Adam)',
      englishNatural: 'Earthling (Adam)',
      root: 'adam',
      order: {
        hebrew: 4,
        english: 3,
      },
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'singular',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'אֲשֶׁר',
      transliteration: 'asher',
      englishLiteral: 'which',
      englishNatural: 'which',
      root: 'asher',
      order: {
        hebrew: 5,
        english: 4,
      },
      morphology: {
        type: 'relative',
      },
    },
    {
      hebrew: 'חַי',
      transliteration: 'chai',
      englishLiteral: 'he-lived',
      englishNatural: 'he lived',
      root: 'chayah',
      order: {
        hebrew: 6,
        english: 5,
      },
      morphology: {
        type: 'verb',
        person: '3rd',
        gender: 'masculine',
        number: 'singular',
        stem: 'qal',
        tense: 'perfect',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
      lineBreaksAfter: 1,
    },
    {
      hebrew: 'תְּשַׁע',
      transliteration: 'tesha',
      englishLiteral: 'nine',
      englishNatural: 'nine',
      root: 'tesha',
      order: 7,
      morphology: {
        type: 'numeral',
        gender: 'feminine',
        number: 'singular',
      },
    },
    {
      hebrew: 'מֵאוֹת',
      transliteration: 'meot',
      englishLiteral: 'hundreds',
      englishNatural: 'hundred',
      root: 'meah',
      prefixes: ['me'],
      order: 8,
      morphology: {
        type: 'numeral',
        gender: 'feminine',
        number: 'plural',
        state: 'construct',
      },
    },
    {
      hebrew: 'שָׁנָה',
      transliteration: 'shanah',
      englishLiteral: 'year',
      englishNatural: 'years',
      root: 'shanah',
      order: 9,
      morphology: {
        type: 'noun',
        gender: 'feminine',
        number: 'singular',
      },
    },
    {
      hebrew: 'וּשְׁלֹשִׁים',
      transliteration: 'uShloshim',
      englishLiteral: 'and-thirty',
      englishNatural: 'and thirty',
      root: 'shloshim',
      prefixes: ['u'],
      order: 10,
      morphology: {
        type: 'numeral',
        gender: 'masculine',
        number: 'plural',
      },
    },
    {
      hebrew: 'שָׁנָה',
      transliteration: 'shanah',
      englishLiteral: 'year',
      englishNatural: 'years',
      root: 'shanah',
      order: 11,
      morphology: {
        type: 'noun',
        gender: 'feminine',
        number: 'singular',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'וַיָּמֹת',
      transliteration: 'vaYamot',
      englishLiteral: 'and-he-died',
      englishNatural: 'and he died',
      root: 'mut',
      prefixes: ['va'],
      order: {
        hebrew: 12,
        english: 11,
      },
      morphology: {
        type: 'verb',
        person: '3rd',
        gender: 'masculine',
        number: 'singular',
        stem: 'qal',
        tense: 'imperfect',
      },
      lineBreaksBefore: 1,
      grammarSuffix: {
        englishLiteral: '.',
        englishNatural: '.',
      },
      lineBreaksAfter: 1,
    },
  ],
  expectedTranslations: {
    hebrew:
      'וַיִּהְיוּ כָּל־יְמֵי אָדָם אֲשֶׁר חַי תְּשַׁע מֵאוֹת שָׁנָה וּשְׁלֹשִׁים שָׁנָה וַיָּמֹת',
    transliteration:
      'vaYihyu kol-yemey Adam asher chai tesha meot shanah uShloshim shanah vaYamot',
    englishLiteral:
      'and-were all- days-of Earthling (Adam), which he-lived, nine hundreds year and-thirty year, and-he-died.',
    englishNatural:
      'And all the days of Earthling (Adam), which he lived, were nine hundred years and thirty years, and he died.',
    kjv: 'And all the days that Adam lived were nine hundred and thirty years: and he died.',
    lastReviewed: { name: 'Matt Gross', date: '2026-02-22' },
  },
};
