import { Verse } from '@/types';

export const ruth_1_18: Verse = {
  meta: {
    book: 'Ruth',
    chapter: 1,
    verse: 18,
  },
  words: [
    {
      hebrew: 'וַתֵּ֕רֶא',
      transliteration: 'vatTere',
      englishLiteral: 'And-saw',
      englishNatural: 'And she saw',
      root: 'raah',
      prefixes: ['va'],
      order: 1,
      morphology: {
        type: 'verb',
        tense: 'imperfect',
        person: '3rd',
        gender: 'feminine',
        number: 'singular',
        stem: 'qal',
      },
      lineBreaksBefore: {
        hebrew: 1,
      },
    },
    {
      hebrew: 'כִּֽי־',
      transliteration: 'ki-',
      englishLiteral: 'that-',
      englishNatural: 'that',
      root: 'ki',
      order: 2,
      morphology: {
        type: 'conjunction',
      },
    },
    {
      hebrew: 'מִתְאַמֶּ֥צֶת',
      transliteration: 'mitAmetset',
      englishLiteral: 'being-strong',
      englishNatural: 'was steadfast',
      root: 'amats',
      order: {
        hebrew: 3,
        english: 5,
      },
      morphology: {
        type: 'verb',
        tense: 'participle',
        gender: 'feminine',
        number: 'singular',
        stem: 'hithpael',
      },
    },
    {
      hebrew: 'הִ֖יא',
      transliteration: 'hi',
      englishLiteral: 'she',
      englishNatural: 'she',
      root: 'hi',
      order: {
        hebrew: 4,
        english: 4,
      },
      morphology: {
        type: 'pronoun',
      },
    },
    {
      hebrew: 'לָלֶ֣כֶת',
      transliteration: 'laLekhet',
      englishLiteral: 'to-go',
      englishNatural: 'to go',
      root: 'halakh',
      prefixes: ['la'],
      order: 6,
      morphology: {
        type: 'verb',
        tense: 'infinitive_construct',
        stem: 'qal',
      },
    },
    {
      hebrew: 'אִתָּ֑הּ',
      transliteration: 'itah',
      englishLiteral: 'with-her',
      englishNatural: 'with her',
      root: 'et_with',
      suffixes: ['ha_feminine'],
      order: 7,
      morphology: {
        type: 'preposition',
      },
      grammarSuffix: {
        englishLiteral: ';',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'וַתֶּחְדַּ֖ל',
      transliteration: 'vatTechdal',
      englishLiteral: 'and-ceased',
      englishNatural: 'and she ceased',
      root: 'chadal',
      prefixes: ['va'],
      order: 8,
      morphology: {
        type: 'verb',
        tense: 'imperfect',
        person: '3rd',
        gender: 'feminine',
        number: 'singular',
        stem: 'qal',
      },
    },
    {
      hebrew: 'לְדַבֵּ֥ר',
      transliteration: 'leDaber',
      englishLiteral: 'to-speak',
      englishNatural: 'to speak',
      root: 'dabar',
      prefixes: ['le'],
      order: 9,
      morphology: {
        type: 'verb',
        tense: 'infinitive_construct',
        stem: 'piel',
      },
    },
    {
      hebrew: 'אֵלֶֽיהָ',
      transliteration: 'eleha',
      englishLiteral: 'to-her',
      englishNatural: 'to her',
      root: 'el',
      suffixes: ['ha_feminine'],
      order: 10,
      morphology: {
        type: 'preposition',
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
      'וַתֵּ֕רֶא כִּֽי־מִתְאַמֶּ֥צֶת הִ֖יא לָלֶ֣כֶת אִתָּ֑הּ וַתֶּחְדַּ֖ל לְדַבֵּ֥ר אֵלֶֽיהָ׃',
    transliteration:
      'vatTere ki-mitAmetset hi laLekhet itah vatTechdal leDaber eleha',
    englishLiteral:
      'And-saw that- being-strong she to-go with-her; and-ceased to-speak to-her.',
    englishNatural:
      'And she saw that she was steadfast to go with her, and she ceased to speak to her.',
    kjv: 'When she saw that she was stedfastly minded to go with her, then she left off speaking unto her.',
  },
};
