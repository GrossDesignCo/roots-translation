import { Verse } from '@/types';

export const micah_2_6: Verse = {
  meta: {
    book: 'Micah',
    chapter: 2,
    verse: 6,
  },
  words: [
    {
      hebrew: 'אַל־',
      transliteration: 'al-',
      englishLiteral: 'not-',
      englishNatural: 'not',
      root: 'al_not',
      order: {
        hebrew: 1,
        english: 2,
      },
      morphology: {
        type: 'adverb',
      },
      grammarSuffix: {
        englishNatural: ';',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'תַּטִּפוּ',
      transliteration: 'taTtifu',
      englishLiteral: 'you-will-drip',
      englishNatural: 'You will drip',
      root: 'nataf',
      prefixes: ['ta'],
      suffixes: ['u'],
      order: {
        hebrew: 2,
        english: 1,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        person: '2nd',
        tense: 'imperfect',
        stem: 'hiphil',
        type: 'verb',
      },
      grammarSuffix: {
        englishLiteral: ';',
      },
    },
    {
      hebrew: 'יַטִּיפוּן',
      transliteration: 'yaTtifun',
      englishLiteral: 'they-will-drip',
      englishNatural: 'they will drip',
      root: 'nataf',
      prefixes: ['ya'],
      suffixes: ['un'],
      order: 3,
      morphology: {
        gender: 'masculine',
        number: 'plural',
        person: '3rd',
        tense: 'imperfect',
        stem: 'hiphil',
        type: 'verb',
      },
      grammarSuffix: {
        englishLiteral: ';',
        englishNatural: ';',
      },
      lineBreaksAfter: {
        english: 1,
      },
    },
    {
      hebrew: 'לֹא־',
      transliteration: 'lo-',
      englishLiteral: 'not-',
      englishNatural: 'not',
      root: 'lo',
      order: {
        hebrew: 4,
        english: 5,
      },
      morphology: {
        type: 'adverb',
      },
    },
    {
      hebrew: 'יַטִּפוּ',
      transliteration: 'yaTtifu',
      englishLiteral: 'they-will-drip',
      englishNatural: 'they will drip',
      root: 'nataf',
      prefixes: ['ya'],
      suffixes: ['u'],
      order: {
        hebrew: 5,
        english: 4,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        person: '3rd',
        tense: 'imperfect',
        stem: 'hiphil',
        type: 'verb',
      },
    },
    {
      hebrew: 'לָאֵלֶּה',
      transliteration: 'leEleh',
      englishLiteral: 'to-these',
      englishNatural: 'to these',
      root: 'eleh',
      prefixes: ['le'],
      order: 6,
      morphology: {
        gender: 'common',
        number: 'plural',
        type: 'pronoun',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ';',
      },
      lineBreaksAfter: {
        english: 1,
      },
    },
    {
      hebrew: 'לֹא',
      transliteration: 'lo',
      englishLiteral: 'not',
      englishNatural: 'not',
      root: 'lo',
      order: {
        hebrew: 7,
        english: 9,
      },
      morphology: {
        type: 'adverb',
      },
      grammarSuffix: {
        englishNatural: '.',
      },
      lineBreaksAfter: {
        english: 1,
      },
    },
    {
      // Niphal imperfect of סוּג (pointing יִסַּג); some tag Hiphil נסג
      hebrew: 'יִסַּג',
      transliteration: 'yiSsag',
      englishLiteral: 'he-will-be-turned_back',
      englishNatural: 'will be turned-back',
      root: 'sug',
      prefixes: ['yi'],
      order: 8,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'imperfect',
        stem: 'niphal',
        type: 'verb',
      },
    },
    {
      hebrew: 'כְּלִמּוֹת',
      transliteration: 'kelimot',
      englishLiteral: 'disgraces',
      englishNatural: 'disgraces',
      root: 'kelimah',
      suffixes: ['ot'],
      order: {
        hebrew: 9,
        english: 7,
      },
      morphology: {
        gender: 'feminine',
        number: 'plural',
        type: 'noun',
      },
      grammarSuffix: {
        hebrew: '׃',
        englishLiteral: '.',
      },
      lineBreaksAfter: {
        hebrew: 1,
      },
    },
  ],
  expectedTranslations: {
    hebrew:
      'אַל־תַּטִּפוּ יַטִּיפוּן לֹא־יַטִּפוּ לָאֵלֶּה לֹא יִסַּג כְּלִמּוֹת׃',
    transliteration:
      'al-taTtifu yaTtifun lo-yaTtifu leEleh lo yiSsag kelimot',
    englishLiteral:
      'not- you-will-drip; they-will-drip; not- they-will-drip to-these, not he-will-be-turned_back disgraces.',
    englishNatural:
      'You will drip not; they will drip; they will drip not to these; disgraces will be turned-back not.',
    kjv: 'Prophesy ye not, say they to them that prophesy: they shall not prophesy to them, that they shall not take shame.',
  },
};
