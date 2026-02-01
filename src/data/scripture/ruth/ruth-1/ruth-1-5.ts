import { Verse } from '@/types';

export const ruth_1_5: Verse = {
  meta: {
    book: 'Ruth',
    chapter: 1,
    verse: 5,
  },
  words: [
    {
      hebrew: 'וַיָּמ֥וּתוּ',
      transliteration: 'vaYamutu',
      englishLiteral: 'And-they-died',
      englishNatural: 'died',
      root: 'mut',
      prefixes: ['va'],
      order: {
        hebrew: 1,
        english: 5,
      },
      morphology: {
        type: 'verb',
        tense: 'imperfect',
        person: '3rd',
        gender: 'masculine',
        number: 'plural',
        stem: 'qal',
      },
      lineBreaksBefore: {
        hebrew: 1,
      },
      grammarSuffix: {
        englishNatural: ';',
      },
    },
    {
      hebrew: 'גַם־',
      transliteration: 'gam-',
      englishLiteral: 'also-',
      englishNatural: 'And also',
      root: 'gam',
      order: {
        hebrew: 2,
        english: 1,
      },
      morphology: {
        type: 'adverb',
      },
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      hebrew: 'שְׁנֵיהֶ֖ם',
      transliteration: 'shneyhem',
      englishLiteral: 'two-of-them',
      englishNatural: 'the two of them',
      root: 'shenayim',
      suffixes: ['hem'],
      order: {
        hebrew: 3,
        english: 2,
      },
      morphology: {
        type: 'numeral',
        state: 'construct',
      },
    },
    {
      hebrew: 'מַחְל֣וֹן',
      transliteration: 'Machlon',
      englishLiteral: 'Sickness (Mahlon)',
      englishNatural: 'Sickness (Mahlon)',
      root: 'machlon',
      order: {
        hebrew: 4,
        english: 3,
      },
      morphology: {
        type: 'noun',
      },
    },
    {
      hebrew: 'וְכִלְי֑וֹן',
      transliteration: 'veKhilyon',
      englishLiteral: 'and-Wasting (Chilion)',
      englishNatural: 'and Wasting (Chilion)',
      root: 'khilyon',
      order: 4,
      morphology: {
        type: 'noun',
      },
    },
    {
      hebrew: 'וַתִּשָּׁאֵר֙',
      transliteration: 'vatTishare',
      englishLiteral: 'and-was-left',
      englishNatural: 'was left',
      root: 'shaar_remain',
      prefixes: ['va'],
      order: {
        hebrew: 6,
        english: 7,
      },
      morphology: {
        type: 'verb',
        tense: 'imperfect',
        person: '3rd',
        gender: 'feminine',
        number: 'singular',
        stem: 'niphal',
      },
      grammarSuffix: {
        englishNatural: ',',
      },
    },
    {
      hebrew: 'הָֽאִשָּׁ֔ה',
      transliteration: 'haIshah',
      englishLiteral: 'the-woman',
      englishNatural: 'and the woman',
      root: 'ishah',
      prefixes: ['ha'],
      order: {
        hebrew: 7,
        english: 6,
      },
      morphology: {
        type: 'noun',
        gender: 'feminine',
        number: 'singular',
      },
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      hebrew: 'מִשְּׁנֵ֥י',
      transliteration: 'miShney',
      englishLiteral: 'from-two-of',
      englishNatural: 'from the two of',
      root: 'shenayim',
      prefixes: ['mi'],
      order: 8,
      morphology: {
        type: 'numeral',
        state: 'construct',
      },
    },
    {
      hebrew: 'יְלָדֶ֖יהָ',
      transliteration: 'yeladeha',
      englishLiteral: 'children-her',
      englishNatural: 'her children',
      root: 'yeled',
      suffixes: ['ha_feminine'],
      order: 9,
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'plural',
        state: 'construct',
      },
    },
    {
      hebrew: 'וּמֵאִישָֽׁהּ׃',
      transliteration: 'uMeIshah',
      englishLiteral: 'and-from-man-her',
      englishNatural: 'and from her man',
      root: 'ish',
      prefixes: ['u', 'mi'],
      suffixes: ['ha_feminine'],
      order: 10,
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'singular',
        state: 'construct',
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
      'וַיָּמ֥וּתוּ גַם־שְׁנֵיהֶ֖ם מַחְל֣וֹן וְכִלְי֑וֹן וַתִּשָּׁאֵר֙ הָֽאִשָּׁ֔ה מִשְּׁנֵ֥י יְלָדֶ֖יהָ וּמֵאִישָֽׁהּ׃',
    transliteration:
      'vaYamutu gam-shneyhem Machlon veKhilyon vatTishare haIshah miShney yeladeha uMeIshah',
    englishLiteral:
      'And-they-died also- two-of-them Sickness (Mahlon) and-Wasting (Chilion) and-was-left the-woman from-two-of children-her and-from-man-her.',
    englishNatural:
      'And also the two of them Sickness (Mahlon) and Wasting (Chilion) died; and the woman was left, from the two of her children and from her man.',
    kjv: 'And Mahlon and Chilion died also both of them; and the woman was left of her two sons and her husband.',
    lastReviewed: { name: 'Matt Gross', date: '2026-02-02' },
},
};
