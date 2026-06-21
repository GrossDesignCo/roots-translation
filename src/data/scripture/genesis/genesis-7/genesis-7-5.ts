import { Verse } from '@/types';

export const genesis_7_5: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 7,
    verse: 5,
  },
  words: [
    {
      hebrew: 'וַיַּעַשׂ',
      transliteration: 'vaYaas',
      englishLiteral: 'And-he-made',
      englishNatural: 'did',
      root: 'asah',
      prefixes: ['va'],
      order: {
        hebrew: 1,
        english: 2,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'imperfect',
        stem: 'qal',
        type: 'verb',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'נֹחַ',
      transliteration: 'Noach',
      englishLiteral: 'Rest (Noah)',
      englishNatural: 'And Rest (Noah)',
      root: 'noach',
      order: {
        hebrew: 2,
        english: 1,
      },
      morphology: {
        type: 'noun',
      },
    },
    {
      hebrew: 'כְּכֹל',
      transliteration: 'keKol',
      englishLiteral: 'as-all',
      englishNatural: 'as all',
      root: 'kol',
      prefixes: ['ke'],
      order: 3,
      morphology: {
        type: 'adjective',
      },
    },
    {
      hebrew: 'אֲשֶׁר',
      transliteration: 'asher',
      englishLiteral: 'which',
      englishNatural: 'which',
      root: 'asher',
      order: 4,
      morphology: {
        type: 'particle',
      },
    },
    {
      hebrew: 'צִוָּהוּ',
      transliteration: 'tzivvahu',
      englishLiteral: 'he-has-commanded-him',
      englishNatural: 'commanded him',
      root: 'tzavah',
      suffixes: ['ehu'],
      order: {
        hebrew: 5,
        english: 6,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'perfect',
        stem: 'piel',
        type: 'verb',
      },
      grammarSuffix: {
        englishNatural: '.',
      },
      lineBreaksAfter: 1,
    },
    {
      hebrew: 'יְהוָה',
      transliteration: 'YHWH',
      englishLiteral: 'He_Who_Is (YHWH)',
      englishNatural: 'He-Who-Is (YHWH)',
      root: 'yhwh',
      order: {
        hebrew: 6,
        english: 5,
      },
      morphology: {
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: '.',
      },
    },
  ],
  expectedTranslations: {
    hebrew: 'וַיַּעַשׂ נֹחַ כְּכֹל אֲשֶׁר צִוָּהוּ יְהוָה',
    transliteration: 'vaYaas Noach keKol asher tzivvahu YHWH',
    englishLiteral:
      'And-he-made Rest (Noah) as-all which he-has-commanded-him He_Who_Is (YHWH).',
    englishNatural:
      'And Rest (Noah) did as all which He-Who-Is (YHWH) commanded him.',
    kjv: 'And Noah did according unto all that the LORD commanded him.',
    lastReviewed: { name: 'Matt Gross', date: '2026-06-21' },
},
};
