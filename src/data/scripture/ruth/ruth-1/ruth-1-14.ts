import { Verse } from '@/types';

export const ruth_1_14: Verse = {
  meta: {
    book: 'Ruth',
    chapter: 1,
    verse: 14,
  },
  words: [
    {
      hebrew: 'וַתִּשֶּׂ֣נָה',
      transliteration: 'vatTissenah',
      englishLiteral: 'and-lifted',
      englishNatural: 'And they lifted',
      root: 'nasa',
      prefixes: ['va'],
      order: 1,
      morphology: {
        type: 'verb',
        tense: 'imperfect',
        person: '3rd',
        gender: 'feminine',
        number: 'plural',
        stem: 'qal',
      },
      lineBreaksBefore: {
        hebrew: 1,
      },
    },
    {
      hebrew: 'קוֹלָ֔ן',
      transliteration: 'qolan',
      englishLiteral: 'voice-their',
      englishNatural: 'their voice',
      root: 'qol',
      suffixes: ['an'],
      order: 2,
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'singular',
        state: 'construct',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'וַתִּבְכֶּ֖ינָה',
      transliteration: 'vatTivkeynah',
      englishLiteral: 'and-wept',
      englishNatural: 'and wept',
      root: 'bakah',
      prefixes: ['va'],
      order: 3,
      morphology: {
        type: 'verb',
        tense: 'imperfect',
        person: '3rd',
        gender: 'feminine',
        number: 'plural',
        stem: 'qal',
      },
    },
    {
      hebrew: 'ע֑וֹד',
      transliteration: 'od',
      englishLiteral: 'again',
      englishNatural: 'again',
      root: 'od',
      order: 4,
      morphology: {
        type: 'adverb',
      },
      grammarSuffix: {
        englishLiteral: ';',
        englishNatural: ':',
      },
    },
    {
      hebrew: 'וַתִּשַּׁ֤ק',
      transliteration: 'vatTishaq',
      englishLiteral: 'and-kissed',
      englishNatural: 'kissed',
      root: 'nashaq',
      prefixes: ['va'],
      order: {
        hebrew: 5,
        english: 6,
      },
      morphology: {
        type: 'verb',
        tense: 'imperfect',
        person: '3rd',
        gender: 'feminine',
        number: 'singular',
        stem: 'qal',
      },
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      hebrew: 'עָרְפָּה֙',
      transliteration: 'Orpah',
      englishLiteral: 'Neck (Orpah)',
      englishNatural: 'And Neck (Orpah)',
      root: 'orpah',
      order: {
        hebrew: 6,
        english: 5,
      },
      morphology: {
        type: 'noun',
      },
    },
    {
      hebrew: 'לַחֲמוֹתָ֔הּ',
      transliteration: 'laChamotah',
      englishLiteral: 'to-mother-in-law-her',
      englishNatural: 'to her mother-in-law',
      root: 'chamot',
      prefixes: ['le'],
      suffixes: ['ha_feminine'],
      order: 7,
      morphology: {
        type: 'noun',
        gender: 'feminine',
        number: 'singular',
        state: 'construct',
      },
      grammarSuffix: {
        englishLiteral: ';',
        englishNatural: ';',
      },
    },
    {
      hebrew: 'וְר֖וּת',
      transliteration: 'veRut',
      englishLiteral: 'and-Friend (Ruth)',
      englishNatural: 'but Friend (Ruth)',
      root: 'rut',
      prefixes: ['ve'],
      order: 8,
      morphology: {
        type: 'noun',
      },
    },
    {
      hebrew: 'דָּ֥בְקָה',
      transliteration: 'davqah',
      englishLiteral: 'she-has-clung',
      englishNatural: 'clung',
      root: 'davaq',
      suffixes: ['ah'],
      order: 9,
      morphology: {
        type: 'verb',
        tense: 'perfect',
        person: '3rd',
        gender: 'feminine',
        number: 'singular',
        stem: 'qal',
      },
    },
    {
      hebrew: 'בָּֽהּ',
      transliteration: 'bah',
      englishLiteral: 'in-her',
      englishNatural: 'in her',
      root: 'be',
      suffixes: ['ah'],
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
      'וַתִּשֶּׂ֣נָה קוֹלָ֔ן וַתִּבְכֶּ֖ינָה ע֑וֹד וַתִּשַּׁ֤ק עָרְפָּה֙ לַחֲמוֹתָ֔הּ וְר֖וּת דָּ֥בְקָה בָּֽהּ׃',
    transliteration:
      'vatTissenah qolan vatTivkeynah od vatTishaq Orpah laChamotah veRut davqah bah',
    englishLiteral:
      'and-lifted voice-their, and-wept again; and-kissed Neck (Orpah) to-mother-in-law-her; and-Friend (Ruth) she-has-clung in-her.',
    englishNatural:
      'And they lifted their voice, and wept again: And Neck (Orpah) kissed to her mother-in-law; but Friend (Ruth) clung in her.',
    kjv: 'And they lifted up their voice, and wept again: and Orpah kissed her mother in law; but Ruth clave unto her.',
  },
};
