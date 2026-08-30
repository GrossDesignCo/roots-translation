import { Verse } from '@/types';

export const daniel_2_32: Verse = {
  meta: {
    book: 'Daniel',
    chapter: 2,
    verse: 32,
  },
  words: [
    {
      aramaic: 'הוּא',
      transliteration: 'hu',
      englishLiteral: 'he',
      englishNatural: 'He',
      root: 'hu',
      order: 1,
      morphology: {
        person: '3rd',
        number: 'singular',
        type: 'pronoun',
      },
      grammarSuffix: {
        englishNatural: ',',
      },
      lineBreaksBefore: 1,
    },
    {
      aramaic: 'צַלְמָא',
      transliteration: 'tsalma',
      englishLiteral: 'image-the',
      englishNatural: 'the image',
      root: 'tselem',
      suffixes: ['a'],
      order: 2,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
        state: 'emphatic',
      },
      grammarSuffix: {
        englishNatural: ',',
      },
    },
    {
      aramaic: 'רֵאשֵׁהּ',
      transliteration: 'resheh',
      englishLiteral: 'head-its',
      englishNatural: 'its head',
      root: 'resh',
      suffixes: ['eh'],
      order: 3,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      aramaic: 'דִּי',
      transliteration: 'di',
      englishLiteral: 'which',
      englishNatural: 'of',
      root: 'di',
      order: 4,
      morphology: {
        type: 'particle',
      },
    },
    {
      aramaic: 'דְהַב',
      transliteration: 'dehav',
      englishLiteral: 'gold',
      englishNatural: 'gold',
      root: 'dehav',
      order: {
        aramaic: 5,
        english: 6,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishNatural: ',',
      },
    },
    {
      aramaic: 'טָב',
      transliteration: 'tav',
      englishLiteral: 'good',
      englishNatural: 'good',
      root: 'tav',
      order: {
        aramaic: 6,
        english: 5,
      },
      morphology: {
        type: 'adjective',
      },
      grammarSuffix: {
        englishLiteral: ',',
      },
    },
    {
      aramaic: 'חֲדוֹהִי',
      transliteration: 'chadohi',
      englishLiteral: 'breast-its',
      englishNatural: 'its breast',
      root: 'chad_chest',
      suffixes: ['ohi'],
      order: 7,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      aramaic: 'וּדְרָעוֹהִי',
      transliteration: 'uDeraohi',
      englishLiteral: 'and-arms-its',
      englishNatural: 'and its arms',
      root: 'dera',
      prefixes: ['u'],
      suffixes: ['ohi'],
      order: 8,
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun',
      },
    },
    {
      aramaic: 'דִּי',
      transliteration: 'di',
      englishLiteral: 'which',
      englishNatural: 'of',
      root: 'di',
      order: 9,
      morphology: {
        type: 'particle',
      },
    },
    {
      aramaic: 'כְסַף',
      transliteration: 'kesaf',
      englishLiteral: 'silver',
      englishNatural: 'silver',
      root: 'kesaf',
      order: 10,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      aramaic: 'מְעוֹהִי',
      transliteration: 'meohi',
      englishLiteral: 'belly-its',
      englishNatural: 'its belly',
      root: 'meah_hundred',
      suffixes: ['ohi'],
      order: 11,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      aramaic: 'וְיַרְכָתֵהּ',
      transliteration: 'veYarkhateh',
      englishLiteral: 'and-thighs-its',
      englishNatural: 'and its thighs',
      root: 'yarkah',
      prefixes: ['ve'],
      suffixes: ['teh'],
      order: 12,
      morphology: {
        gender: 'feminine',
        number: 'plural',
        type: 'noun',
      },
    },
    {
      aramaic: 'דִּי',
      transliteration: 'di',
      englishLiteral: 'which',
      englishNatural: 'of',
      root: 'di',
      order: 13,
      morphology: {
        type: 'particle',
      },
    },
    {
      aramaic: 'נְחָשׁ',
      transliteration: 'nechash',
      englishLiteral: 'bronze',
      englishNatural: 'bronze',
      root: 'nechash',
      order: 14,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishNatural: ',',
      },
    },
  ],
  expectedTranslations: {
    aramaic:
      'הוּא צַלְמָא רֵאשֵׁהּ דִּי דְהַב טָב חֲדוֹהִי וּדְרָעוֹהִי דִּי כְסַף מְעוֹהִי וְיַרְכָתֵהּ דִּי נְחָשׁ',
    transliteration:
      'hu tsalma resheh di dehav tav chadohi uDeraohi di kesaf meohi veYarkhateh di nechash',
    englishLiteral:
      'he image-the head-its which gold good, breast-its and-arms-its which silver, belly-its and-thighs-its which bronze',
    englishNatural:
      'He, the image, its head of good gold, its breast and its arms of silver, its belly and its thighs of bronze,',
    kjv: "This image's head was of fine gold, his breast and his arms of silver, his belly and his thighs of brass,",
    lastReviewed: { name: 'Matt Gross', date: '2025-12-21' },
},
};
