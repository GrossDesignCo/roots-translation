import { Verse } from '@/types';

export const job_1_9: Verse = {
  meta: {
    book: 'Job',
    chapter: 1,
    verse: 9,
  },
  words: [
    {
      hebrew: 'וַיַּעַן',
      transliteration: 'vaYaan',
      englishLiteral: 'And-answered',
      englishNatural: 'answered',
      root: 'anah',
      prefixes: ['va'],
      order: {
        hebrew: 1,
        english: 2,
      },
      morphology: {
        type: 'verb',
        stem: 'qal',
        tense: 'imperfect',
        person: '3rd',
        gender: 'masculine',
        number: 'singular',
      },
      lineBreaksBefore: {
        hebrew: 1,
      },
    },
    {
      hebrew: 'הַשָּׂטָן',
      transliteration: 'haShatan',
      englishLiteral: 'the-Adversary (Satan)',
      englishNatural: 'And the Adversary (Satan)',
      root: 'shatan',
      prefixes: ['ha'],
      order: {
        hebrew: 2,
        english: 1,
      },
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'singular',
      },
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      hebrew: 'אֶת־',
      transliteration: 'et-',
      englishLiteral: '↳',
      englishNatural: '',
      root: 'et',
      // english 3 before יְהוָה (4); empty englishNatural skipped in buildVerseText
      order: 3,
      morphology: {
        type: 'particle',
      },
    },
    {
      hebrew: 'יְהוָה',
      transliteration: 'YHWH',
      englishLiteral: 'He_Who_Is (YHWH)',
      englishNatural: 'He-Who-Is (YHWH)',
      root: 'yhwh',
      // english 4: immediately before הַשָּׂטָן (5); empty englishNatural skipped in buildVerseText
      order: 4,
      morphology: {
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'וַיֹּאמַר',
      transliteration: 'vaYomar',
      englishLiteral: 'and-he-said',
      englishNatural: 'and said',
      root: 'amar',
      prefixes: ['va'],
      order: 5,
      morphology: {
        type: 'verb',
        stem: 'qal',
        tense: 'imperfect',
        person: '3rd',
        gender: 'masculine',
        number: 'singular',
      },
      grammarSuffix: {
        englishNatural: ',',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'הַחִנָּם',
      transliteration: 'haChinnam',
      englishLiteral: 'the-for_nothing',
      englishNatural: 'for-nothing',
      root: 'chinam',
      prefixes: ['ha'],
      order: {
        hebrew: 6,
        english: 9,
      },
      morphology: {
        type: 'adverb',
      },
      grammarPrefix: {
        englishLiteral: '"',
      },
      grammarSuffix: {
        englishNatural: '?"',
      },
      lineBreaksAfter: {
        english: 1,
      },
    },
    {
      hebrew: 'יָרֵא',
      transliteration: 'yare',
      englishLiteral: 'has-feared',
      englishNatural: 'feared',
      root: 'yare',
      order: 7,
      morphology: {
        type: 'verb',
        stem: 'qal',
        tense: 'perfect',
        person: '3rd',
        gender: 'masculine',
        number: 'singular',
      },
    },
    {
      hebrew: 'אִיּוֹב',
      transliteration: 'Iyov',
      englishLiteral: 'Persecuted (Job)',
      englishNatural: 'Has Persecuted (Job)',
      root: 'iyov',
      order: {
        hebrew: 8,
        english: 6,
      },
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'singular',
      },
      grammarPrefix: {
        englishNatural: '"',
      },
    },
    {
      hebrew: 'אֱלֹהִים',
      transliteration: 'Elohim',
      englishLiteral: 'Gods',
      englishNatural: 'God',
      root: 'eloah',
      suffixes: ['im'],
      order: {
        hebrew: 9,
        english: 8,
      },
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'plural',
      },
      grammarSuffix: {
        hebrew: '׃',
        englishLiteral: '?"',
      },
      lineBreaksAfter: {
        hebrew: 1,
      },
    },
  ],
  expectedTranslations: {
    hebrew:
      'וַיַּעַן הַשָּׂטָן אֶת־יְהוָה וַיֹּאמַר הַחִנָּם יָרֵא אִיּוֹב אֱלֹהִים׃',
    transliteration:
      'vaYaan haShatan et-YHWH vaYomar haChinnam yare Iyov Elohim',
    englishLiteral:
      'And-answered the-Adversary (Satan) ↳ He_Who_Is (YHWH), and-he-said "the-for_nothing has-feared Persecuted (Job) Gods?"',
    englishNatural:
      'And the Adversary (Satan) answered He-Who-Is (YHWH), and said, "Has Persecuted (Job) feared God for-nothing?"',
    kjv: 'Then Satan answered the LORD, and said, Doth Job fear God for nought?',
    lastReviewed: { name: 'Matt Gross', date: '2026-04-27' },
},
};
