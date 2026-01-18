import { Verse } from '@/types';

export const exodus_7_11: Verse = {
  meta: {
    book: 'Exodus',
    chapter: 7,
    verse: 11,
  },
  words: [
    {
      hebrew: 'וַיִּקְרָא',
      transliteration: 'vaYiqra',
      englishLiteral: 'And-called_out',
      englishNatural: 'called-out',
      root: 'qara',
      prefixes: ['ve'],
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
      hebrew: 'גַם־',
      transliteration: 'gam-',
      englishLiteral: 'also-',
      englishNatural: 'also',
      root: 'gam',
      order: {
        hebrew: 2,
        english: 3,
      },
      morphology: {
        type: 'adverb',
      },
      grammarSuffix: {
        englishNatural: ',',
      },
    },
    {
      hebrew: 'פַּרְעֹה',
      transliteration: 'Paroh',
      englishLiteral: 'Pharaoh',
      englishNatural: 'And Pharaoh',
      root: 'paroh',
      order: {
        hebrew: 3,
        english: 1,
      },
      morphology: {
        type: 'noun',
      },
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      hebrew: 'לַחֲכָמִים',
      transliteration: 'laChakhamim',
      englishLiteral: 'to-the-wise',
      englishNatural: 'to the wise',
      root: 'chakam',
      prefixes: ['la'],
      order: 4,
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun',
      },
    },
    {
      hebrew: 'וְלַמְכַשְּׁפִים',
      transliteration: 'veLaMkhashshefim',
      englishLiteral: 'and-to-the-sorcerers',
      englishNatural: 'and to the sorcerers',
      root: 'kashaph',
      prefixes: ['ve', 'la'],
      order: 5,
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ';',
        englishNatural: ';',
      },
    },
    {
      hebrew: 'וַיַּעֲשׂוּ',
      transliteration: 'vaYaasu',
      englishLiteral: 'and-made',
      englishNatural: 'made',
      root: 'asah',
      prefixes: ['ve'],
      order: {
        hebrew: 6,
        english: 10,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        person: '3rd',
        tense: 'imperfect',
        stem: 'qal',
        type: 'verb',
      },
    },
    {
      hebrew: 'גַם־',
      transliteration: 'gam-',
      englishLiteral: 'also-',
      englishNatural: 'also',
      root: 'gam',
      order: {
        hebrew: 7,
        english: 9,
      },
      morphology: {
        type: 'adverb',
      },
    },
    {
      hebrew: 'הֵם',
      transliteration: 'hem',
      englishLiteral: 'they',
      englishNatural: 'they',
      root: 'hem',
      order: 8,
      morphology: {
        person: '3rd',
        number: 'plural',
        type: 'pronoun',
      },
    },
    {
      hebrew: 'חַרְטֻמֵּי',
      transliteration: 'chartumei',
      englishLiteral: 'magicians-of',
      englishNatural: 'and the magicians of',
      root: 'chartom',
      suffixes: ['ei'],
      order: {
        hebrew: 9,
        english: 6,
      },
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
      hebrew: 'מִצְרַיִם',
      transliteration: 'Mitzrayim',
      englishLiteral: 'Double_Narrows (Egypt)',
      englishNatural: 'Double-Narrows (Egypt)',
      root: 'mitzrayim',
      order: {
        hebrew: 10,
        english: 7,
      },
      morphology: {
        type: 'noun',
      },
      grammarSuffix: {
        englishNatural: ',',
      },
    },
    {
      hebrew: 'בְּלַהֲטֵיהֶם',
      transliteration: 'beLahateihem',
      englishLiteral: 'in-bright_flashes-their',
      englishNatural: 'in their bright-flashes',
      root: 'lahat',
      prefixes: ['be'],
      suffixes: ['eihem'],
      order: {
        hebrew: 11,
        english: 12,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
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
      hebrew: 'כֵּן',
      transliteration: 'khen',
      englishLiteral: 'so',
      englishNatural: 'so',
      root: 'ken',
      order: {
        hebrew: 12,
        english: 11,
      },
      morphology: {
        type: 'adverb',
      },
      grammarSuffix: {
        englishLiteral: '.',
        englishNatural: ',',
      },
      lineBreaksAfter: {
        hebrew: 1,
      },
    },
  ],
  expectedTranslations: {
    hebrew:
      'וַיִּקְרָא גַם־פַּרְעֹה לַחֲכָמִים וְלַמְכַשְּׁפִים וַיַּעֲשׂוּ גַם־הֵם חַרְטֻמֵּי מִצְרַיִם בְּלַהֲטֵיהֶם כֵּן',
    transliteration:
      'vaYiqra gam-Paroh laChakhamim veLaMkhashshefim vaYaasu gam-hem chartumei Mitzrayim beLahateihem khen',
    englishLiteral:
      'And-called_out also- Pharaoh to-the-wise and-to-the-sorcerers; and-made also- they magicians-of Double_Narrows (Egypt) in-bright_flashes-their so.',
    englishNatural:
      'And Pharaoh called-out also, to the wise and to the sorcerers; and the magicians of Double-Narrows (Egypt), they also made so, in their bright-flashes.',
    kjv: 'Then Pharaoh also called the wise men and the sorcerers: now the magicians of Egypt, they also did in like manner with their enchantments.',
    lastReviewed: { name: 'Matt Gross', date: '2026-01-18' },
},
};
