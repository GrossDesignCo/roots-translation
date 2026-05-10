import { Verse } from '@/types';

export const psalms_3_8: Verse = {
  meta: {
    book: 'Psalms',
    chapter: 3,
    verse: 8,
  },
  words: [
    {
      hebrew: 'לַיהוָ֥ה',
      transliteration: 'laYHWH',
      englishLiteral: 'to-He_Who_Is (YHWH)',
      englishNatural: 'To He-Who-Is (YHWH)',
      root: 'yhwh',
      prefixes: ['la'],
      order: 1,
      morphology: {
        type: 'noun',
      },
    },
    {
      hebrew: 'הַיְשׁוּעָ֑ה',
      transliteration: 'haYeshuah',
      englishLiteral: 'the-salvation',
      englishNatural: 'the salvation',
      root: 'yeshuah',
      prefixes: ['ha'],
      order: 2,
      morphology: {
        type: 'noun',
        gender: 'feminine',
        number: 'singular',
        state: 'absolute',
      },
      grammarSuffix: {
        englishLiteral: ';',
        englishNatural: ';',
      },
    },
    {
      hebrew: 'עַֽל־',
      transliteration: 'al-',
      englishLiteral: 'over-',
      englishNatural: 'over',
      root: 'al',
      order: 3,
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'עַמְּךָ֖',
      transliteration: 'ammekha',
      englishLiteral: 'people-your',
      englishNatural: 'your people',
      root: 'am',
      suffixes: ['kha'],
      order: 4,
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'singular',
        state: 'absolute',
      },
      grammarSuffix: {
        englishNatural: ',',
      },
    },
    {
      hebrew: 'בִרְכָתֶ֣ךָ',
      transliteration: 'birkhatekha',
      englishLiteral: 'blessing-your',
      englishNatural: 'your blessing',
      root: 'berakah',
      suffixes: ['kha'],
      order: 5,
      morphology: {
        type: 'noun',
        gender: 'feminine',
        number: 'singular',
        state: 'construct',
      },
      grammarSuffix: {
        englishLiteral: '.',
        englishNatural: '.',
      },
    },
    {
      hebrew: 'סֶּֽלָה׃',
      transliteration: 'selah',
      englishLiteral: 'Selah',
      englishNatural: 'Selah',
      root: 'selah',
      order: 6,
      morphology: {
        type: 'interjection',
      },
      grammarSuffix: {
        englishLiteral: '.',
        englishNatural: '.',
      },
    },
  ],
  expectedTranslations: {
    hebrew: 'לַיהוָ֥ה הַיְשׁוּעָ֑ה עַֽל־עַמְּךָ֖ בִרְכָתֶ֣ךָ סֶּֽלָה׃',
    transliteration: 'laYHWH haYeshuah al-ammekha birkhatekha selah',
    englishLiteral:
      'to-He_Who_Is (YHWH) the-salvation; over- people-your blessing-your. Selah.',
    englishNatural:
      'To He-Who-Is (YHWH) the salvation; over your people, your blessing. Selah.',
    kjv: 'Salvation belongeth unto the LORD: thy blessing is upon thy people. Selah.',
    lastReviewed: { name: 'Matt Gross', date: '2026-05-10' },
},
};
