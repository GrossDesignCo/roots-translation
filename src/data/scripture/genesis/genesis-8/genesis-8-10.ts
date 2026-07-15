import { Verse } from '@/types';

export const genesis_8_10: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 8,
    verse: 10,
  },
  words: [
    {
      hebrew: 'וַיָּחֶל',
      transliteration: 'vaYachel',
      englishLiteral: 'And-he-will-wait_patiently',
      englishNatural: 'And he waited-patiently',
      root: 'yachal',
      prefixes: ['va'],
      order: 1,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'imperfect',
        stem: 'qal',
        type: 'verb',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'עוֹד',
      transliteration: 'od',
      englishLiteral: 'again',
      englishNatural: 'again',
      root: 'od',
      order: 2,
      morphology: {
        type: 'adverb',
      },
      grammarSuffix: {
        englishLiteral: ',',
      },
    },
    {
      hebrew: 'שִׁבְעַת',
      transliteration: 'shivat',
      englishLiteral: 'seven-of',
      englishNatural: 'seven',
      root: 'sheva',
      order: {
        hebrew: 3,
        english: 4,
      },
      morphology: {
        type: 'numeral',
        state: 'construct',
      },
    },
    {
      hebrew: 'יָמִים',
      transliteration: 'yamim',
      englishLiteral: 'days',
      englishNatural: 'days',
      root: 'yom',
      suffixes: ['im'],
      order: {
        hebrew: 4,
        english: 5,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun',
      },
      grammarSuffix: {
        englishNatural: ';',
      },
      lineBreaksAfter: {
        english: 1,
      },
    },
    {
      hebrew: 'אֲחֵרִים',
      transliteration: 'acherim',
      englishLiteral: 'others',
      englishNatural: 'another',
      root: 'acher',
      suffixes: ['im'],
      order: {
        hebrew: 5,
        english: 3,
      },
      morphology: {
        type: 'adjective',
        gender: 'masculine',
        number: 'plural',
      },
      grammarSuffix: {
        englishLiteral: ';',
      },
      lineBreaksAfter: {
        hebrew: 1,
      },
    },
    {
      hebrew: 'וַיֹּסֶף',
      transliteration: 'vaYosef',
      englishLiteral: 'And-he-will-add',
      englishNatural: 'And he added',
      root: 'yasaf',
      prefixes: ['va'],
      order: 6,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'imperfect',
        stem: 'hiphil',
        type: 'verb',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'שַׁלַּח',
      transliteration: 'shalach',
      englishLiteral: 'sending_out-again',
      englishNatural: 'sending-out again',
      root: 'shalach',
      order: 7,
      morphology: {
        tense: 'infinitive_construct',
        stem: 'piel',
        type: 'verb',
      },
    },
    {
      hebrew: 'אֶת־',
      transliteration: 'et-',
      englishLiteral: '↳',
      englishNatural: '',
      root: 'et',
      order: 8,
      morphology: {
        type: 'particle',
      },
    },
    {
      hebrew: 'הַיּוֹנָה',
      transliteration: 'haYonah',
      englishLiteral: 'the-dove',
      englishNatural: 'the dove',
      root: 'yonah_dove',
      prefixes: ['ha'],
      order: 9,
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
      hebrew: 'מִן־',
      transliteration: 'min-',
      englishLiteral: 'from-',
      englishNatural: 'from',
      root: 'min',
      order: 10,
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'הַתֵּבָה',
      transliteration: 'haTevah',
      englishLiteral: 'the-ark',
      englishNatural: 'the ark',
      root: 'tevah',
      prefixes: ['ha'],
      order: 11,
      morphology: {
        gender: 'feminine',
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
    hebrew:
      'וַיָּחֶל עוֹד שִׁבְעַת יָמִים אֲחֵרִים וַיֹּסֶף שַׁלַּח אֶת־הַיּוֹנָה מִן־הַתֵּבָה',
    transliteration:
      'vaYachel od shivat yamim acherim vaYosef shalach et-haYonah min-haTevah',
    englishLiteral:
      'And-he-will-wait_patiently again, seven-of days others; And-he-will-add, sending_out-again ↳ the-dove, from- the-ark.',
    englishNatural:
      'And he waited-patiently again another seven days; And he added, sending-out again the dove, from the ark.',
    kjv: 'And he stayed yet other seven days; and again he sent forth the dove out of the ark.',
    lastReviewed: { name: 'Matt Gross', date: '2026-07-15' },
},
};
