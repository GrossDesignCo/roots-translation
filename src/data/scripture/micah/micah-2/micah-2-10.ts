import { Verse } from '@/types';

export const micah_2_10: Verse = {
  meta: {
    book: 'Micah',
    chapter: 2,
    verse: 10,
  },
  words: [
    {
      hebrew: 'קוּמוּ',
      transliteration: 'qumu',
      englishLiteral: 'Stand_up',
      englishNatural: 'Stand-up',
      root: 'qum',
      order: 1,
      morphology: {
        gender: 'masculine',
        number: 'plural',
        person: '2nd',
        tense: 'imperative',
        stem: 'qal',
        type: 'verb',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'וּלְכוּ',
      transliteration: 'uLekhu',
      englishLiteral: 'and-go',
      englishNatural: 'and go',
      root: 'lekhu',
      prefixes: ['u'],
      order: 2,
      morphology: {
        gender: 'masculine',
        number: 'plural',
        person: '2nd',
        tense: 'imperative',
        stem: 'qal',
        type: 'verb',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'כִּי',
      transliteration: 'ki',
      englishLiteral: 'that',
      englishNatural: 'that',
      root: 'ki',
      order: 3,
      morphology: {
        type: 'conjunction',
      },
    },
    {
      hebrew: 'לֹא־',
      transliteration: 'lo-',
      englishLiteral: 'not-',
      englishNatural: 'is not',
      root: 'lo',
      order: {
        hebrew: 4,
        english: 5,
      },
      morphology: {
        type: 'adverb',
      },
    },
    {
      hebrew: 'זֹאת',
      transliteration: 'zot',
      englishLiteral: 'this',
      englishNatural: 'this',
      root: 'zot',
      order: {
        hebrew: 5,
        english: 4,
      },
      morphology: {
        type: 'pronoun',
      },
    },
    {
      hebrew: 'הַמְּנוּחָה',
      transliteration: 'haMenuchah',
      englishLiteral: 'the-resting_place',
      englishNatural: 'the resting-place',
      root: 'manoach',
      prefixes: ['ha'],
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
      lineBreaksAfter: {
        english: 1,
      },
    },
    {
      hebrew: 'בַּעֲבוּר',
      transliteration: 'baavur',
      englishLiteral: 'for_sake_of',
      englishNatural: 'for the sake of',
      root: 'baavur',
      order: 7,
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'טָמְאָה',
      transliteration: 'tameah',
      englishLiteral: 'unclean',
      englishNatural: 'unclean',
      root: 'teme',
      order: 8,
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'adjective',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'תְּחַבֵּל',
      transliteration: 'teChabel',
      englishLiteral: 'she-will-destroy',
      englishNatural: 'she will destroy',
      root: 'chabal',
      prefixes: ['te'],
      order: 9,
      morphology: {
        gender: 'feminine',
        number: 'singular',
        person: '3rd',
        tense: 'imperfect',
        stem: 'piel',
        type: 'verb',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'וְחֶבֶל',
      transliteration: 'veChevel',
      englishLiteral: 'and-destruction',
      englishNatural: 'destruction',
      root: 'chevel_destruction',
      prefixes: ['ve'],
      order: {
        hebrew: 10,
        english: 11,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishNatural: '.',
      },
      lineBreaksAfter: {
        english: 1,
      },
    },
    {
      hebrew: 'נִמְרָץ',
      transliteration: 'nimrats',
      englishLiteral: 'grievous',
      englishNatural: 'and a grievous',
      root: 'nimrats',
      order: {
        hebrew: 11,
        english: 10,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'adjective',
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
      'קוּמוּ וּלְכוּ כִּי לֹא־זֹאת הַמְּנוּחָה בַּעֲבוּר טָמְאָה תְּחַבֵּל וְחֶבֶל נִמְרָץ׃',
    transliteration:
      'qumu uLekhu ki lo-zot haMenuchah baavur tameah teChabel veChevel nimrats',
    englishLiteral:
      'Stand_up and-go, that not- this the-resting_place; for_sake_of unclean, she-will-destroy, and-destruction grievous.',
    englishNatural:
      'Stand-up and go, that this is not the resting-place; for the sake of unclean, she will destroy, and a grievous destruction.',
    kjv: 'Arise ye, and depart; for this is not your rest: because it is polluted, it shall destroy you, even with a sore destruction.',
  },
};
