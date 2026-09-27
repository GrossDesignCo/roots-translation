import { Verse } from '@/types';

export const genesis_10_6: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 10,
    verse: 6,
  },
  words: [
    {
      hebrew: 'וּבְנֵי',
      transliteration: 'uBeney',
      englishLiteral: 'And-sons-of',
      englishNatural: 'And the sons of',
      root: 'ben',
      prefixes: ['u'],
      suffixes: ['ei'],
      order: 1,
      morphology: {
        gender: 'masculine',
        number: 'plural',
        state: 'construct',
        type: 'noun',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'חָם',
      transliteration: 'Cham',
      englishLiteral: 'Hot (Ham)',
      englishNatural: 'Hot (Ham)',
      root: 'cham',
      order: 2,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ':',
        englishNatural: ':',
      },
      lineBreaksAfter: 1,
    },
    {
      hebrew: 'כּוּשׁ',
      transliteration: 'Khush',
      englishLiteral: 'Black (Kush)',
      englishNatural: 'Black (Kush)',
      root: 'kush',
      order: 3,
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
      hebrew: 'וּמִצְרַיִם',
      transliteration: 'uMitzrayim',
      englishLiteral: 'and-Double_Narrows (Egypt)',
      englishNatural: 'and Double-Narrows (Egypt)',
      root: 'mitzrayim',
      prefixes: ['u'],
      order: 4,
      morphology: {
        gender: 'masculine',
        number: 'dual',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'וּפוּט',
      transliteration: 'uPut',
      englishLiteral: 'and-Bow (Put)',
      englishNatural: 'and Bow (Put)',
      root: 'put',
      prefixes: ['u'],
      order: 5,
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
      hebrew: 'וּכְנָעַן',
      transliteration: 'uKenaan',
      englishLiteral: 'and-Low (Canaan)',
      englishNatural: 'and Low (Canaan)',
      root: 'kenaan',
      prefixes: ['u'],
      order: 6,
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
    hebrew: 'וּבְנֵי חָם כּוּשׁ וּמִצְרַיִם וּפוּט וּכְנָעַן',
    transliteration: 'uBeney Cham Khush uMitzrayim uPut uKenaan',
    englishLiteral:
      'And-sons-of Hot (Ham): Black (Kush), and-Double_Narrows (Egypt), and-Bow (Put), and-Low (Canaan).',
    englishNatural:
      'And the sons of Hot (Ham): Black (Kush), and Double-Narrows (Egypt), and Bow (Put), and Low (Canaan).',
    kjv: 'And the sons of Ham; Cush, and Mizraim, and Phut, and Canaan.',
  },
};
