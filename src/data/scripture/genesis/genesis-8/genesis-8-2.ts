import { Verse } from '@/types';

export const genesis_8_2: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 8,
    verse: 2,
  },
  words: [
    {
      hebrew: 'וַיִּסָּכְרוּ',
      transliteration: 'vaYissakru',
      englishLiteral: 'And-they-will-be-shut_up',
      englishNatural: 'were shut-up',
      root: 'sakar_stop',
      prefixes: ['va', 'yi'],
      suffixes: ['plural_verb_u'],
      order: {
        hebrew: 1,
        english: 7,
      },
      morphology: {
        number: 'plural',
        person: '3rd',
        tense: 'imperfect',
        stem: 'niphal',
        type: 'verb',
      },
      lineBreaksBefore: {
        hebrew: 1,
      },
      grammarSuffix: {
        englishNatural: ';',
      },
    },
    {
      hebrew: 'מַעְיְנֹת',
      transliteration: 'mayanot',
      englishLiteral: 'fountains-of',
      englishNatural: 'And the fountains of',
      root: 'mayan',
      order: 2,
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
      hebrew: 'תְּהוֹם',
      transliteration: 'tehom',
      englishLiteral: 'abyss',
      englishNatural: 'abyss',
      root: 'tehom',
      order: 3,
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      hebrew: 'וַאֲרֻבֹּת',
      transliteration: 'vaArubot',
      englishLiteral: 'and-conduits-of',
      englishNatural: 'and the conduits of',
      root: 'arubbah',
      prefixes: ['va'],
      order: 4,
      morphology: {
        gender: 'feminine',
        number: 'plural',
        state: 'construct',
        type: 'noun',
      },
    },
    {
      hebrew: 'הַשָּׁמַיִם',
      transliteration: 'haShamayim',
      englishLiteral: 'the-skies',
      englishNatural: 'the skies',
      root: 'shamayim',
      prefixes: ['ha'],
      order: 5,
      morphology: {
        gender: 'masculine',
        number: 'dual',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ';',
      },
      lineBreaksAfter: 1,
    },
    {
      hebrew: 'וַיִּכָּלֵא',
      transliteration: 'vaYikale',
      englishLiteral: 'And-he-will-be-restrained',
      englishNatural: 'was restrained',
      root: 'kala',
      prefixes: ['va', 'yi'],
      order: {
        hebrew: 6,
        english: 9,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'imperfect',
        stem: 'niphal',
        type: 'verb',
      },
      lineBreaksBefore: {
        hebrew: 1,
      },
    },
    {
      hebrew: 'הַגֶּשֶׁם',
      transliteration: 'haGeshem',
      englishLiteral: 'the-rain',
      englishNatural: 'and the rain',
      root: 'geshem',
      prefixes: ['ha'],
      order: {
        hebrew: 7,
        english: 8,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      hebrew: 'מִן־',
      transliteration: 'min-',
      englishLiteral: 'from-',
      englishNatural: 'from',
      root: 'min_from',
      order: {
        hebrew: 8,
        english: 10,
      },
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'הַשָּׁמַיִם',
      transliteration: 'haShamayim',
      englishLiteral: 'the-skies',
      englishNatural: 'the skies',
      root: 'shamayim',
      prefixes: ['ha'],
      order: {
        hebrew: 9,
        english: 11,
      },
      morphology: {
        gender: 'masculine',
        number: 'dual',
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
    hebrew:
      'וַיִּסָּכְרוּ מַעְיְנֹת תְּהוֹם וַאֲרֻבֹּת הַשָּׁמַיִם וַיִּכָּלֵא הַגֶּשֶׁם מִן־הַשָּׁמַיִם',
    transliteration:
      'vaYissakru mayanot tehom vaArubot haShamayim vaYikale haGeshem min-haShamayim',
    englishLiteral:
      'And-they-will-be-shut_up fountains-of abyss and-conduits-of the-skies; And-he-will-be-restrained the-rain from- the-skies.',
    englishNatural:
      'And the fountains of abyss and the conduits of the skies were shut-up; and the rain was restrained from the skies.',
    kjv: 'The fountains also of the deep and the windows of heaven were stopped, and the rain from heaven was restrained.',
    lastReviewed: { name: 'Matt Gross', date: '2026-07-13' },
},
};
