import { Verse } from '@/types';

export const micah_1_10: Verse = {
  meta: {
    book: 'Micah',
    chapter: 1,
    verse: 10,
  },
  words: [
    {
      hebrew: 'בְּגַת',
      transliteration: 'beGat',
      englishLiteral: 'in-Winepress (Gath)',
      englishNatural: 'In Winepress (Gath)',
      root: 'gat',
      prefixes: ['be'],
      order: 1,
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'אַל־',
      transliteration: 'al-',
      englishLiteral: 'not-',
      englishNatural: 'not',
      root: 'al_not',
      order: {
        hebrew: 2,
        english: 3,
      },
      morphology: {
        type: 'adverb',
      },
      grammarSuffix: {
        englishNatural: ';',
      },
    },
    {
      hebrew: 'תַּגִּידוּ',
      transliteration: 'taGgidu',
      englishLiteral: 'you-will-declare',
      englishNatural: 'you will declare',
      root: 'nagad',
      prefixes: ['ta'],
      suffixes: ['u'],
      order: {
        hebrew: 3,
        english: 2,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        person: '2nd',
        tense: 'imperfect',
        stem: 'hiphil',
        type: 'verb',
      },
      grammarSuffix: {
        englishLiteral: ';',
      },
    },
    {
      hebrew: 'בָּכוֹ',
      transliteration: 'bakho',
      englishLiteral: 'weeping',
      englishNatural: 'weeping',
      root: 'bakah',
      order: 4,
      morphology: {
        tense: 'infinitive_absolute',
        stem: 'qal',
        type: 'verb',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      hebrew: 'אַל־',
      transliteration: 'al-',
      englishLiteral: 'not-',
      englishNatural: 'not',
      root: 'al_not',
      order: {
        hebrew: 5,
        english: 6,
      },
      morphology: {
        type: 'adverb',
      },
      grammarSuffix: {
        englishNatural: ';',
      },
    },
    {
      hebrew: 'תִּבְכּוּ',
      transliteration: 'tiVkhu',
      englishLiteral: 'you-will-weep',
      englishNatural: 'you will weep',
      root: 'bakah',
      prefixes: ['ti'],
      suffixes: ['u'],
      order: {
        hebrew: 6,
        english: 5,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        person: '2nd',
        tense: 'imperfect',
        stem: 'qal',
        type: 'verb',
      },
      grammarSuffix: {
        englishLiteral: ';',
      },
    },
    {
      hebrew: 'בְּבֵית',
      transliteration: 'beBeit',
      englishLiteral: 'in-house-of',
      englishNatural: 'in the house',
      root: 'bayit',
      prefixes: ['be'],
      order: 7,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        state: 'construct',
        type: 'noun',
      },
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      hebrew: 'לְעַפְרָה',
      transliteration: 'leAphrah',
      englishLiteral: 'to-Dust (Aphrah)',
      englishNatural: 'to Dust (Aphrah)',
      root: 'aphrah',
      prefixes: ['le'],
      order: 8,
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
      hebrew: 'עָפָר',
      transliteration: 'afar',
      englishLiteral: 'dust',
      englishNatural: 'dust',
      root: 'afar',
      order: 9,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishNatural: ',',
      },
    },
    {
      // qere (ketiv: התפלשתי / הִתְפַּלָּשְׁתִּי)
      hebrew: 'הִתְפַּלָּשִׁי',
      transliteration: 'hitPalashi',
      englishLiteral: 'wallow-yourself',
      englishNatural: 'wallow yourself',
      root: 'palash',
      prefixes: ['hit'],
      order: 10,
      morphology: {
        gender: 'feminine',
        number: 'singular',
        person: '2nd',
        tense: 'imperative',
        stem: 'hithpael',
        type: 'verb',
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
      'בְּגַת אַל־תַּגִּידוּ בָּכוֹ אַל־תִּבְכּוּ בְּבֵית לְעַפְרָה עָפָר הִתְפַּלָּשִׁי׃',
    transliteration:
      'beGat al-taGgidu bakho al-tiVkhu beBeit leAphrah afar hitPalashi',
    englishLiteral:
      'in-Winepress (Gath), not- you-will-declare; weeping, not- you-will-weep; in-house-of to-Dust (Aphrah), dust wallow-yourself.',
    englishNatural:
      'In Winepress (Gath) you will declare not; weeping, you will weep not; in the house to Dust (Aphrah), dust, wallow yourself.',
    kjv: 'Declare ye it not at Gath, weep ye not at all: in the house of Aphrah roll thyself in the dust.',
  },
};
