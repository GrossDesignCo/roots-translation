import { Verse } from '@/types';

export const psalms_8_6: Verse = {
  meta: {
    book: 'Psalms',
    chapter: 8,
    verse: 6,
  },
  words: [
    {
      hebrew: 'תַּ֭מְשִׁילֵהוּ',
      transliteration: 'taMshilehu',
      englishLiteral: 'you-will-cause-him-to-rule',
      englishNatural: 'You will cause him to rule',
      root: 'mashal',
      prefixes: ['ta'],
      suffixes: ['ehu'],
      order: 1,
      morphology: {
        type: 'verb',
        stem: 'hiphil',
        tense: 'imperfect',
        gender: 'masculine',
        number: 'singular',
        person: '2nd',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'בְּמַעֲשֵׂ֣י',
      transliteration: 'beMaasei',
      englishLiteral: 'in-works-of',
      englishNatural: 'in the works of',
      root: 'maaseh',
      prefixes: ['be'],
      suffixes: ['ei'],
      order: 2,
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'plural',
        state: 'construct',
      },
    },
    {
      hebrew: 'יָדֶ֑יךָ',
      transliteration: 'yadekha',
      englishLiteral: 'your-hands',
      englishNatural: 'your hands',
      root: 'yad',
      suffixes: ['ekha'],
      order: 3,
      morphology: {
        type: 'noun',
        gender: 'feminine',
        number: 'dual',
        state: 'construct',
      },
      grammarSuffix: {
        englishLiteral: ';',
        englishNatural: ';',
      },
      lineBreaksAfter: 1,
    },
    {
      hebrew: 'כֹּ֝ל',
      transliteration: 'kol',
      englishLiteral: 'all',
      englishNatural: 'all',
      root: 'kol',
      order: 4,
      morphology: {
        type: 'adjective',
      },
    },
    {
      hebrew: 'שַׁ֣תָּה',
      transliteration: 'shatah',
      englishLiteral: 'you-have-appointed',
      englishNatural: 'you have appointed',
      root: 'shit',
      suffixes: ['ta'],
      order: 5,
      morphology: {
        type: 'verb',
        stem: 'qal',
        tense: 'perfect',
        gender: 'masculine',
        number: 'singular',
        person: '2nd',
      },
    },
    {
      hebrew: 'תַחַת־',
      transliteration: 'tachat-',
      englishLiteral: 'under-',
      englishNatural: 'under',
      root: 'tachat',
      order: 6,
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'רַגְלָֽיו',
      transliteration: 'raglav',
      englishLiteral: 'his-feet',
      englishNatural: 'his feet',
      root: 'regel',
      suffixes: ['av'],
      order: 7,
      morphology: {
        type: 'noun',
        gender: 'feminine',
        number: 'dual',
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
      'תַּ֭מְשִׁילֵהוּ בְּמַעֲשֵׂ֣י יָדֶ֑יךָ כֹּ֝ל שַׁ֣תָּה תַחַת־רַגְלָֽיו',
    transliteration:
      'taMshilehu beMaasei yadekha kol shatah tachat-raglav',
    englishLiteral:
      'you-will-cause-him-to-rule in-works-of your-hands; all you-have-appointed under- his-feet.',
    englishNatural:
      'You will cause him to rule in the works of your hands; all you have appointed under his feet.',
    kjv: 'Thou madest him to have dominion over the works of thy hands; thou hast put all things under his feet:',
    lastReviewed: { name: 'Matt Gross', date: '2026-03-31' },
},
};
