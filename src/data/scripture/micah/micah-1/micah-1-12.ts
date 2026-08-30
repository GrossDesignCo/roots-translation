import { Verse } from '@/types';

export const micah_1_12: Verse = {
  meta: {
    book: 'Micah',
    chapter: 1,
    verse: 12,
  },
  words: [
    {
      hebrew: 'כִּי־',
      transliteration: 'ki-',
      englishLiteral: 'that-',
      englishNatural: 'that',
      root: 'ki',
      order: 1,
      morphology: {
        type: 'conjunction',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'חָלָה',
      transliteration: 'chalah',
      englishLiteral: 'she-has-been-sick',
      englishNatural: 'has been sick',
      root: 'chalah',
      order: {
        hebrew: 2,
        english: 4,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
        person: '3rd',
        tense: 'perfect',
        stem: 'qal',
        type: 'verb',
      },
    },
    {
      hebrew: 'לְטוֹב',
      transliteration: 'leTov',
      englishLiteral: 'to-good',
      englishNatural: 'to good',
      root: 'tov',
      prefixes: ['le'],
      order: {
        hebrew: 3,
        english: 5,
      },
      morphology: {
        type: 'adjective',
      },
      grammarSuffix: {
        englishNatural: ';',
      },
      lineBreaksAfter: {
        english: 1,
      },
    },
    {
      hebrew: 'יוֹשֶׁבֶת',
      transliteration: 'yoshevet',
      englishLiteral: 'sitting-of',
      englishNatural: 'the sitting of',
      root: 'yashav',
      order: {
        hebrew: 4,
        english: 2,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
        state: 'construct',
        tense: 'participle',
        stem: 'qal',
        type: 'verb',
      },
    },
    {
      hebrew: 'מָרוֹת',
      transliteration: 'Marot',
      englishLiteral: 'Bitternesses (Maroth)',
      englishNatural: 'Bitternesses (Maroth)',
      root: 'marot',
      order: {
        hebrew: 5,
        english: 3,
      },
      morphology: {
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ';',
      },
    },
    {
      hebrew: 'כִּי־',
      transliteration: 'ki-',
      englishLiteral: 'that-',
      englishNatural: 'that',
      root: 'ki',
      order: 6,
      morphology: {
        type: 'conjunction',
      },
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      hebrew: 'יָרַד',
      transliteration: 'yarad',
      englishLiteral: 'he-has-gone_down',
      englishNatural: 'has gone-down',
      root: 'yarad',
      order: {
        hebrew: 7,
        english: 8,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'perfect',
        stem: 'qal',
        type: 'verb',
      },
    },
    {
      hebrew: 'רָע',
      transliteration: 'ra',
      englishLiteral: 'bad',
      englishNatural: 'bad',
      root: 'ra',
      order: {
        hebrew: 8,
        english: 7,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'adjective',
      },
    },
    {
      hebrew: 'מֵאֵת',
      transliteration: 'meEt',
      englishLiteral: 'from-with',
      englishNatural: 'from with',
      root: 'et_with',
      prefixes: ['mi'],
      order: 9,
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'יְהוָה',
      transliteration: 'YHWH',
      englishLiteral: 'He_Who_Is (YHWH)',
      englishNatural: 'He-Who-Is (YHWH)',
      root: 'yhwh',
      order: 10,
      morphology: {
        type: 'noun',
      },
    },
    {
      hebrew: 'לְשַׁעַר',
      transliteration: 'leShaar',
      englishLiteral: 'to-gate-of',
      englishNatural: 'to the gate of',
      root: 'shaar',
      prefixes: ['le'],
      order: 11,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        state: 'construct',
        type: 'noun',
      },
    },
    {
      hebrew: 'יְרוּשָׁלִָם',
      transliteration: 'Yerushalayim',
      englishLiteral: 'Foundation_of_Peace (Jerusalem)',
      englishNatural: 'Foundation-of-Peace (Jerusalem)',
      root: 'yerushalayim',
      order: 12,
      morphology: {
        type: 'noun',
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
      'כִּי־חָלָה לְטוֹב יוֹשֶׁבֶת מָרוֹת כִּי־יָרַד רָע מֵאֵת יְהוָה לְשַׁעַר יְרוּשָׁלִָם׃',
    transliteration:
      'ki-chalah leTov yoshevet Marot ki-yarad ra meEt YHWH leShaar Yerushalayim',
    englishLiteral:
      'that- she-has-been-sick to-good sitting-of Bitternesses (Maroth); that- he-has-gone_down bad from-with He_Who_Is (YHWH) to-gate-of Foundation_of_Peace (Jerusalem).',
    englishNatural:
      'that the sitting of Bitternesses (Maroth) has been sick to good; that bad has gone-down from with He-Who-Is (YHWH) to the gate of Foundation-of-Peace (Jerusalem).',
    kjv: 'For the inhabitant of Maroth waited carefully for good: but evil came down from the LORD unto the gate of Jerusalem.',
  },
};
