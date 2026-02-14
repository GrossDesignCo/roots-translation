import { Verse } from '@/types';

export const ruth_1_4: Verse = {
  meta: {
    book: 'Ruth',
    chapter: 1,
    verse: 4,
  },
  words: [
    {
      hebrew: 'וַיִּשְׂא֡וּ',
      transliteration: 'vaYisu',
      englishLiteral: 'And-they-lifted',
      englishNatural: 'And they lifted',
      root: 'nasa',
      prefixes: ['va'],
      order: 1,
      morphology: {
        type: 'verb',
        tense: 'imperfect',
        person: '3rd',
        gender: 'masculine',
        number: 'plural',
        stem: 'qal',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'לָהֶ֣ם',
      transliteration: 'lahem',
      englishLiteral: 'to-them',
      englishNatural: 'to them',
      root: 'le',
      suffixes: ['hem'],
      order: 2,
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'נָשִׁים֩',
      transliteration: 'nashim',
      englishLiteral: 'women',
      englishNatural: 'women',
      root: 'ishah',
      order: 3,
      morphology: {
        type: 'noun',
        gender: 'feminine',
        number: 'plural',
      },
    },
    {
      hebrew: 'מֹֽאֲבִיּ֨וֹת',
      transliteration: 'Moaviyot',
      englishLiteral: 'Moabite_Women',
      englishNatural: 'Moabite-Women',
      root: 'moaviyot',
      order: 4,
      morphology: {
        type: 'noun',
        gender: 'feminine',
        number: 'plural',
      },
      grammarSuffix: {
        englishNatural: ',',
      },
    },
    {
      hebrew: 'שֵׁ֤ם',
      transliteration: 'shem',
      englishLiteral: 'name-of',
      englishNatural: 'the name of',
      root: 'shem',
      order: 5,
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'singular',
        state: 'construct',
      },
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      hebrew: 'הָֽאַחַת֙',
      transliteration: 'haAchat',
      englishLiteral: 'the-one',
      englishNatural: 'the one',
      root: 'echad',
      prefixes: ['ha'],
      order: 6,
      morphology: {
        type: 'numeral',
        gender: 'feminine',
      },
    },
    {
      hebrew: 'עָרְפָּ֔ה',
      transliteration: 'Orpah',
      englishLiteral: 'Neck (Orpah)',
      englishNatural: 'Neck (Orpah)',
      root: 'orpah',
      order: 7,
      morphology: {
        type: 'noun',
      },
    },
    {
      hebrew: 'וְשֵׁ֥ם',
      transliteration: 'veShem',
      englishLiteral: 'and-name-of',
      englishNatural: 'and the name of',
      root: 'shem',
      prefixes: ['ve'],
      order: 8,
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'singular',
        state: 'construct',
      },
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      hebrew: 'הַשֵּׁנִ֖ית',
      transliteration: 'haShenit',
      englishLiteral: 'the-second',
      englishNatural: 'the second',
      root: 'sheni',
      prefixes: ['ha'],
      order: 9,
      morphology: {
        type: 'numeral',
        gender: 'feminine',
      },
    },
    {
      hebrew: 'ר֑וּת',
      transliteration: 'Rut',
      englishLiteral: 'Friend (Ruth)',
      englishNatural: 'Friend (Ruth)',
      root: 'rut',
      order: 10,
      morphology: {
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ';',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'וַיֵּ֥שְׁבוּ',
      transliteration: 'vaYeshvu',
      englishLiteral: 'and-they-sat',
      englishNatural: 'and they sat',
      root: 'yashav',
      prefixes: ['va'],
      order: 11,
      morphology: {
        type: 'verb',
        tense: 'imperfect',
        person: '3rd',
        gender: 'masculine',
        number: 'plural',
        stem: 'qal',
      },
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      hebrew: 'שָׁ֖ם',
      transliteration: 'sham',
      englishLiteral: 'there',
      englishNatural: 'there',
      root: 'sham',
      order: 12,
      morphology: {
        type: 'adverb',
      },
      grammarSuffix: {
        englishLiteral: ';',
      },
    },
    {
      hebrew: 'כְּעֶ֥שֶׂר',
      transliteration: 'keEser',
      englishLiteral: 'like-ten',
      englishNatural: 'like ten',
      root: 'eser',
      prefixes: ['ke'],
      order: 13,
      morphology: {
        type: 'numeral',
      },
    },
    {
      hebrew: 'שָׁנִֽים׃',
      transliteration: 'shanim',
      englishLiteral: 'years',
      englishNatural: 'years',
      root: 'shanah',
      order: 14,
      morphology: {
        type: 'noun',
        gender: 'feminine',
        number: 'plural',
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
      'וַיִּשְׂא֡וּ לָהֶ֣ם נָשִׁים֩ מֹֽאֲבִיּ֨וֹת שֵׁ֤ם הָֽאַחַת֙ עָרְפָּ֔ה וְשֵׁ֥ם הַשֵּׁנִ֖ית ר֑וּת וַיֵּ֥שְׁבוּ שָׁ֖ם כְּעֶ֥שֶׂר שָׁנִֽים׃',
    transliteration:
      'vaYisu lahem nashim Moaviyot shem haAchat Orpah veShem haShenit Rut vaYeshvu sham keEser shanim',
    englishLiteral:
      'And-they-lifted to-them women Moabite_Women name-of the-one Neck (Orpah) and-name-of the-second Friend (Ruth); and-they-sat there; like-ten years.',
    englishNatural:
      'And they lifted to them women Moabite-Women, the name of the one Neck (Orpah) and the name of the second Friend (Ruth), and they sat there like ten years.',
    kjv: 'And they took them wives of the women of Moab; the name of the one was Orpah, and the name of the other Ruth: and they dwelled there about ten years.',
    lastReviewed: { name: 'Matt Gross', date: '2026-02-14' },
},
};
