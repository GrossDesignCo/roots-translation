import { Verse } from '@/types';

export const genesis_10_30: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 10,
    verse: 30,
  },
  words: [
    {
      hebrew: 'וַיְהִי',
      transliteration: 'vaYehi',
      englishLiteral: 'And-was',
      englishNatural: 'was',
      root: 'hayah',
      prefixes: ['va'],
      order: {
        hebrew: 1,
        english: 3,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'imperfect',
        stem: 'qal',
        type: 'verb',
      },
      grammarSuffix: {
        englishNatural: ',',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'מוֹשָׁבָם',
      transliteration: 'moshavam',
      englishLiteral: 'seat-their',
      englishNatural: 'And their seat',
      root: 'moshav',
      suffixes: ['am'],
      order: {
        hebrew: 2,
        english: 1,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      hebrew: 'מִמֵּשָׁא',
      transliteration: 'miMesha',
      englishLiteral: 'from-Freedom (Mesha)',
      englishNatural: 'from Freedom (Mesha)',
      root: 'mesha',
      prefixes: ['mi'],
      order: {
        hebrew: 3,
        english: 2,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
      },
    },
    {
      hebrew: 'בֹּאֲכָה',
      transliteration: 'boakhah',
      englishLiteral: 'coming-you',
      englishNatural: 'as you come',
      root: 'bo',
      suffixes: ['kha'],
      order: 4,
      morphology: {
        tense: 'infinitive_construct',
        stem: 'qal',
        type: 'verb',
      },
    },
    {
      hebrew: 'סְפָרָה',
      transliteration: 'Sefarah',
      englishLiteral: 'toward-Counting (Sephar)',
      englishNatural: 'toward Counting (Sephar)',
      root: 'sefar',
      order: 5,
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'הַר',
      transliteration: 'har',
      englishLiteral: 'mountain-of',
      englishNatural: 'the mountain of',
      root: 'har',
      order: 6,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        state: 'construct',
        type: 'noun',
      },
    },
    {
      hebrew: 'הַקֶּדֶם',
      transliteration: 'haQedem',
      englishLiteral: 'the-east',
      englishNatural: 'the east',
      root: 'qedem',
      prefixes: ['ha'],
      order: 7,
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
    hebrew: 'וַיְהִי מוֹשָׁבָם מִמֵּשָׁא בֹּאֲכָה סְפָרָה הַר הַקֶּדֶם',
    transliteration: 'vaYehi moshavam miMesha boakhah Sefarah har haQedem',
    englishLiteral:
      'And-was seat-their from-Freedom (Mesha), coming-you toward-Counting (Sephar), mountain-of the-east.',
    englishNatural:
      'And their seat from Freedom (Mesha) was, as you come toward Counting (Sephar), the mountain of the east.',
    kjv: 'And their dwelling was from Mesha, as thou goest unto Sephar a mount of the east.',
  },
};
