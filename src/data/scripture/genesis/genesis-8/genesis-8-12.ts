import { Verse } from '@/types';

export const genesis_8_12: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 8,
    verse: 12,
  },
  words: [
    {
      hebrew: 'וַיִּיָּחֶל',
      transliteration: 'vaYiyachel',
      englishLiteral: 'And-he-will-wait_patiently',
      englishNatural: 'And he waited-patiently',
      root: 'yachal',
      prefixes: ['va', 'yi'],
      order: 1,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'imperfect',
        stem: 'piel',
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
      hebrew: 'וַיְשַׁלַּח',
      transliteration: 'vaYeshalach',
      englishLiteral: 'And-he-will-send_out-again',
      englishNatural: 'And he again sent-out',
      root: 'shalach',
      prefixes: ['va'],
      order: 6,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'imperfect',
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
      order: 7,
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
      order: 8,
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
      hebrew: 'וְלֹא־',
      transliteration: 'veLo-',
      englishLiteral: 'and-not-',
      englishNatural: 'not',
      root: 'lo',
      prefixes: ['ve'],
      order: {
        hebrew: 9,
        english: 10,
      },
      morphology: {
        type: 'adverb',
      },
    },
    {
      hebrew: 'יָסְפָה',
      transliteration: 'yasfah',
      englishLiteral: 'she-will-add',
      englishNatural: 'and she added',
      root: 'yasaf',
      order: {
        hebrew: 10,
        english: 9,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
        person: '3rd',
        tense: 'imperfect',
        stem: 'qal',
        type: 'verb',
      },
      lineBreaksBefore: {
        english: 1,
      }
    },
    {
      hebrew: 'שׁוּב־',
      transliteration: 'shuv-',
      englishLiteral: 'returning',
      englishNatural: 'returning',
      root: 'shuv',
      order: 11,
      morphology: {
        tense: 'infinitive_absolute',
        stem: 'qal',
        type: 'verb',
      },
    },
    {
      hebrew: 'אֵלָיו',
      transliteration: 'elav',
      englishLiteral: 'to-him',
      englishNatural: 'to him',
      root: 'elav',
      order: 12,
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'עוֹד',
      transliteration: 'od',
      englishLiteral: 'again',
      englishNatural: 'again',
      root: 'od',
      order: 13,
      morphology: {
        type: 'adverb',
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
      'וַיִּיָּחֶל עוֹד שִׁבְעַת יָמִים אֲחֵרִים וַיְשַׁלַּח אֶת־הַיּוֹנָה וְלֹא־יָסְפָה שׁוּב־אֵלָיו עוֹד',
    transliteration:
      'vaYiyachel od shivat yamim acherim vaYeshalach et-haYonah veLo-yasfah shuv-elav od',
    englishLiteral:
      'And-he-will-wait_patiently again, seven-of days others; And-he-will-send_out-again ↳ the-dove, and-not- she-will-add returning to-him again.',
    englishNatural:
      'And he waited-patiently again another seven days; And he again sent-out the dove, and she added not returning to him again.',
    kjv: 'And he stayed yet other seven days; and sent forth the dove; and she returned not again unto him any more.',
    lastReviewed: { name: 'Matt Gross', date: '2026-07-15' },
},
};
