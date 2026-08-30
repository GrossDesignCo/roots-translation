import { Verse } from '@/types';

export const micah_1_15: Verse = {
  meta: {
    book: 'Micah',
    chapter: 1,
    verse: 15,
  },
  words: [
    {
      hebrew: 'עוֹד',
      transliteration: 'od',
      englishLiteral: 'again',
      englishNatural: 'Again',
      root: 'od',
      order: 1,
      morphology: {
        type: 'adverb',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'הַיּוֹרֵשׁ',
      transliteration: 'haYoresh',
      englishLiteral: 'the-inheriting',
      englishNatural: 'the one inheriting',
      root: 'yarash',
      prefixes: ['ha'],
      order: {
        hebrew: 2,
        english: 3,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        tense: 'participle',
        stem: 'qal',
        type: 'verb',
      },
    },
    {
      // Defective hiphil imperfect of בוא (אָבִיא); traditionally "I will bring", not "my father"
      hebrew: 'אָבִי',
      transliteration: 'avi',
      englishLiteral: 'I-will-bring',
      englishNatural: 'I will bring',
      root: 'bo',
      order: {
        hebrew: 3,
        english: 2,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '1st',
        tense: 'imperfect',
        stem: 'hiphil',
        type: 'verb',
      },
    },
    {
      hebrew: 'לָךְ',
      transliteration: 'lakh',
      englishLiteral: 'to-you',
      englishNatural: 'to you',
      root: 'le',
      suffixes: ['kh'],
      order: 4,
      morphology: {
        type: 'preposition',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'יוֹשֶׁבֶת',
      transliteration: 'yoshevet',
      englishLiteral: 'sitting-of',
      englishNatural: 'sitting one of',
      root: 'yashav',
      order: 5,
      morphology: {
        gender: 'feminine',
        number: 'singular',
        tense: 'participle',
        stem: 'qal',
        type: 'verb',
      },
    },
    {
      hebrew: 'מָרֵשָׁה',
      transliteration: 'Mareshah',
      englishLiteral: 'Inheritance (Mareshah)',
      englishNatural: 'Inheritance (Mareshah)',
      root: 'mareshah',
      order: 6,
      morphology: {
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ';',
        englishNatural: ';',
      },
      lineBreaksAfter: {
        english: 1,
      },
    },
    {
      hebrew: 'עַד־',
      transliteration: 'ad-',
      englishLiteral: 'until-',
      englishNatural: 'until',
      root: 'ad',
      order: 7,
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'עֲדֻלָּם',
      transliteration: 'Adullam',
      englishLiteral: 'Refuge (Adullam)',
      englishNatural: 'Refuge (Adullam)',
      root: 'adullam',
      order: 8,
      morphology: {
        type: 'noun',
      },
    },
    {
      hebrew: 'יָבוֹא',
      transliteration: 'yavo',
      englishLiteral: 'he-will-come',
      englishNatural: 'will come',
      root: 'bo',
      order: {
        hebrew: 9,
        english: 11,
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
        englishLiteral: ',',
        englishNatural: '.',
      },
      lineBreaksAfter: {
        english: 1,
      },
    },
    {
      hebrew: 'כְּבוֹד',
      transliteration: 'kevod',
      englishLiteral: 'glory-of',
      englishNatural: 'the glory of',
      root: 'kavod',
      order: {
        hebrew: 10,
        english: 9,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
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
      order: {
        hebrew: 11,
        english: 10,
      },
      morphology: {
        type: 'noun',
      },
      grammarSuffix: {
        hebrew: '׃',
        englishLiteral: '.',
      },
      lineBreaksAfter: {
        hebrew: 1,
      },
    },
  ],
  expectedTranslations: {
    hebrew:
      'עוֹד הַיּוֹרֵשׁ אָבִי לָךְ יוֹשֶׁבֶת מָרֵשָׁה עַד־עֲדֻלָּם יָבוֹא כְּבוֹד יִשְׂרָאֵל׃',
    transliteration:
      'od haYoresh avi lakh yoshevet Mareshah ad-Adullam yavo kevod Yisrael',
    englishLiteral:
      'again the-inheriting I-will-bring to-you, sitting-of Inheritance (Mareshah); until- Refuge (Adullam) he-will-come, glory-of Struggles_with_God (Israel).',
    englishNatural:
      'Again I will bring the one inheriting to you, sitting one of Inheritance (Mareshah); until Refuge (Adullam) the glory of Struggles-with-God (Israel) will come.',
    kjv: 'Yet will I bring an heir unto thee, O inhabitant of Mareshah: he shall come unto Adullam the glory of Israel.',
  },
};
