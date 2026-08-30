import { Verse } from '@/types';

export const micah_1_14: Verse = {
  meta: {
    book: 'Micah',
    chapter: 1,
    verse: 14,
  },
  words: [
    {
      hebrew: 'לָכֵן',
      transliteration: 'lakhen',
      englishLiteral: 'therefore',
      englishNatural: 'Therefore',
      root: 'lakhen',
      order: 1,
      morphology: {
        type: 'adverb',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'תִּתְּנִי',
      transliteration: 'titteni',
      englishLiteral: 'you-will-give',
      englishNatural: 'you will give',
      root: 'natan',
      prefixes: ['ti'],
      order: 2,
      morphology: {
        gender: 'feminine',
        number: 'singular',
        person: '2nd',
        tense: 'imperfect',
        stem: 'qal',
        type: 'verb',
      },
    },
    {
      hebrew: 'שִׁלּוּחִים',
      transliteration: 'shilluchim',
      englishLiteral: 'send_offs',
      englishNatural: 'send-offs',
      root: 'shilluch',
      suffixes: ['im'],
      order: 3,
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'עַל',
      transliteration: 'al',
      englishLiteral: 'over',
      englishNatural: 'over',
      root: 'al',
      order: 4,
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'מוֹרֶשֶׁת',
      transliteration: 'Moreshet',
      englishLiteral: 'Possession (Moresheth)',
      englishNatural: 'Possession (Moresheth)',
      root: 'moreshet',
      order: 5,
      morphology: {
        gender: 'feminine',
        number: 'singular',
        state: 'construct',
        type: 'noun',
      },
    },
    {
      hebrew: 'גַּת',
      transliteration: 'Gat',
      englishLiteral: 'Winepress (Gath)',
      englishNatural: 'Winepress (Gath)',
      root: 'gat',
      order: 6,
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ';',
        englishNatural: ';',
      },
    },
    {
      hebrew: 'בָּתֵּי',
      transliteration: 'batei',
      englishLiteral: 'houses-of',
      englishNatural: 'the houses of',
      root: 'bayit',
      suffixes: ['ey'],
      order: 7,
      morphology: {
        gender: 'masculine',
        number: 'plural',
        state: 'construct',
        type: 'noun',
      },
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      hebrew: 'אַכְזִיב',
      transliteration: 'Akhziv',
      englishLiteral: 'Lie (Achzib)',
      englishNatural: 'Lie (Achzib)',
      root: 'achziv',
      order: 8,
      morphology: {
        type: 'noun',
      },
    },
    {
      hebrew: 'לְאַכְזָב',
      transliteration: 'leAkhzav',
      englishLiteral: 'to-lie',
      englishNatural: 'to a lie',
      root: 'achzav',
      prefixes: ['le'],
      order: 9,
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
      hebrew: 'לְמַלְכֵי',
      transliteration: 'leMalkhey',
      englishLiteral: 'to-kings-of',
      englishNatural: 'to the kings of',
      root: 'melekh',
      prefixes: ['le'],
      suffixes: ['ey'],
      order: 10,
      morphology: {
        gender: 'masculine',
        number: 'plural',
        state: 'construct',
        type: 'noun',
      },
    },
    {
      hebrew: 'יִשְׂרָאֵל',
      transliteration: 'Yisrael',
      englishLiteral: 'Struggles_with_God (Israel)',
      englishNatural: 'Struggles-with-God (Israel)',
      root: 'yisrael',
      order: 11,
      morphology: {
        type: 'noun',
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
      'לָכֵן תִּתְּנִי שִׁלּוּחִים עַל מוֹרֶשֶׁת גַּת בָּתֵּי אַכְזִיב לְאַכְזָב לְמַלְכֵי יִשְׂרָאֵל׃',
    transliteration:
      'lakhen titteni shilluchim al Moreshet Gat batei Akhziv leAkhzav leMalkhey Yisrael',
    englishLiteral:
      'therefore you-will-give send_offs, over Possession (Moresheth) Winepress (Gath); houses-of Lie (Achzib) to-lie, to-kings-of Struggles_with_God (Israel).',
    englishNatural:
      'Therefore you will give send-offs, over Possession (Moresheth) Winepress (Gath); the houses of Lie (Achzib) to a lie, to the kings of Struggles-with-God (Israel).',
    kjv: 'Therefore shalt thou give presents to Moreshethgath: the houses of Achzib shall be a lie to the kings of Israel.',
  },
};
