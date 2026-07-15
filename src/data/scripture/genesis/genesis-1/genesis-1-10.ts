import { Verse } from '@/types';

export const genesis_1_10: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 1,
    verse: 10,
  },
  words: [
    {
      hebrew: 'וַיִּקְרָ֨א',
      transliteration: 'vaYiqra',
      englishLiteral: 'And-called_out',
      englishNatural: 'called-out',
      root: 'qara',
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
      lineBreaksBefore: {
        hebrew: 1,
      },
    },
    {
      hebrew: 'אֱלֹהִ֤ים ׀',
      transliteration: 'Elohim',
      englishLiteral: 'Gods',
      englishNatural: 'And God',
      root: 'eloah',
      suffixes: ['im'],
      order: {
        hebrew: 2,
        english: 1,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun',
      },
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      hebrew: 'לַיַּבָּשָׁה֙',
      transliteration: 'laYabashah',
      englishLiteral: 'to-dry-ground',
      englishNatural: 'to the dry-ground',
      root: 'yabashah',
      prefixes: ['la'],
      order: 3,
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishNatural: ',',
      },
    },
    {
      hebrew: 'אֶ֔רֶץ',
      transliteration: 'eretz',
      englishLiteral: 'Land',
      englishNatural: 'Land',
      root: 'eretz',
      order: 4,
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'noun',
      },
      grammarPrefix: {
        englishLiteral: '"',
        englishNatural: '"',
      },
      grammarSuffix: {
        englishLiteral: ',"',
        englishNatural: ',"',
      },
      lineBreaksAfter: {
        hebrew: 1,
        english: 1,
      },
    },
    {
      hebrew: 'וּלְמִקְוֵ֥ה',
      transliteration: 'uLeMiQveh',
      englishLiteral: 'and-to-gathering',
      englishNatural: 'and to the gathering of',
      root: 'qavah_gather',
      prefixes: ['u', 'le', 'mi'],
      order: 5,
      morphology: {
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
      },
    },
    {
      hebrew: 'הַמַּ֖יִם',
      transliteration: 'haMayim',
      englishLiteral: 'the-waters',
      englishNatural: 'the waters',
      root: 'mayim',
      prefixes: ['ha'],
      order: 6,
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
      },
    },
    {
      hebrew: 'קָרָ֣א',
      transliteration: 'qara',
      englishLiteral: 'called_out',
      englishNatural: 'he called-out',
      root: 'qara',
      order: 7,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'perfect',
        stem: 'qal',
        type: 'verb',
      },
      grammarSuffix: {
        englishNatural: ',',
      },
    },
    {
      hebrew: 'יַמִּ֑ים',
      transliteration: 'yamim',
      englishLiteral: 'Seas',
      englishNatural: 'Seas',
      root: 'yam',
      suffixes: ['im'],
      order: 8,
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun',
      },
      grammarPrefix: {
        englishLiteral: '"',
        englishNatural: '"',
      },
      grammarSuffix: {
        englishLiteral: '."',
        englishNatural: '."',
      },
      lineBreaksAfter: {
        hebrew: 1,
        english: 1,
      },
    },
    {
      hebrew: 'וַיַּ֥רְא',
      transliteration: 'vaYar',
      englishLiteral: 'And-saw',
      englishNatural: 'saw',
      root: 'raah',
      prefixes: ['va'],
      order: {
        hebrew: 9,
        english: 10,
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
    },
    {
      hebrew: 'אֱלֹהִ֖ים',
      transliteration: 'Elohim',
      englishLiteral: 'Gods',
      englishNatural: 'And God',
      root: 'eloah',
      suffixes: ['im'],
      order: {
        hebrew: 10,
        english: 9,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
      },
    },
    {
      hebrew: 'כִּי־',
      transliteration: 'ki-',
      englishLiteral: 'that-',
      englishNatural: 'that it was',
      root: 'ki',
      order: 11,
      morphology: {
        type: 'conjunction',
      },
    },
    {
      hebrew: 'טֽוֹב׃',
      transliteration: 'tov',
      englishLiteral: 'good',
      englishNatural: 'good',
      root: 'tov',
      order: 12,
      morphology: {
        type: 'adjective',
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
      'וַיִּקְרָ֨א אֱלֹהִ֤ים ׀ לַיַּבָּשָׁה֙ אֶ֔רֶץ וּלְמִקְוֵ֥ה הַמַּ֖יִם קָרָ֣א יַמִּ֑ים וַיַּ֥רְא אֱלֹהִ֖ים כִּי־טֽוֹב׃',
    transliteration:
      'vaYiqra Elohim laYabashah eretz uLeMiQveh haMayim qara yamim vaYar Elohim ki-tov',
    englishLiteral:
      'And-called_out Gods to-dry-ground "Land," and-to-gathering, the-waters, called_out "Seas." And-saw Gods, that- good.',
    englishNatural:
      'And God called-out to the dry-ground, "Land," and to the gathering of the waters he called-out, "Seas." And God saw, that it was good.',
    kjv: 'And God called the dry land Earth; and the gathering together of the waters called he Seas: and God saw that it was good.',
    lastReviewed: { name: 'Matt Gross', date: '2026-07-15' },
  },
};
