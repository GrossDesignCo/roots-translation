import { Verse } from '@/types';

export const micah_1_3: Verse = {
  meta: {
    book: 'Micah',
    chapter: 1,
    verse: 3,
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
      hebrew: 'הִנֵּה',
      transliteration: 'hineh',
      englishLiteral: 'behold',
      englishNatural: 'behold',
      root: 'hineh',
      order: 2,
      morphology: {
        type: 'interjection',
      },
      grammarSuffix: {
        englishNatural: ',',
      },
    },
    {
      hebrew: 'יְהוָה',
      transliteration: 'YHWH',
      englishLiteral: 'He_Who_Is (YHWH)',
      englishNatural: 'He-Who-Is (YHWH)',
      root: 'yhwh',
      order: 3,
      morphology: {
        type: 'noun',
      },
    },
    {
      hebrew: 'יֹצֵא',
      transliteration: 'yotze',
      englishLiteral: 'going_out',
      englishNatural: 'is going-out',
      root: 'yatsa',
      order: 4,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        tense: 'participle',
        stem: 'qal',
        type: 'verb',
      },
    },
    {
      hebrew: 'מִמְּקוֹמוֹ',
      transliteration: 'miMeqomo',
      englishLiteral: 'from-place-his',
      englishNatural: 'from his place',
      root: 'maqom',
      prefixes: ['mi'],
      suffixes: ['o'],
      order: 5,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
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
      hebrew: 'וְיָרַד',
      transliteration: 'veYarad',
      englishLiteral: 'and-he-has-gone_down',
      englishNatural: 'and he will go-down',
      root: 'yarad',
      prefixes: ['ve'],
      order: 6,
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
      hebrew: 'וְדָרַךְ',
      transliteration: 'veDarakh',
      englishLiteral: 'and-he-has-trodden',
      englishNatural: 'and tread',
      root: 'darakh',
      prefixes: ['ve'],
      order: 7,
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
      hebrew: 'עַל־',
      transliteration: 'al-',
      englishLiteral: 'over-',
      englishNatural: 'over',
      root: 'al',
      order: 8,
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'בָּמֳתֵי',
      transliteration: 'bamotei',
      englishLiteral: 'high_places-of',
      englishNatural: 'the high-places of',
      root: 'bamah_high',
      suffixes: ['ey'],
      order: 9,
      morphology: {
        gender: 'feminine',
        number: 'plural',
        state: 'construct',
        type: 'noun',
      },
    },
    {
      hebrew: 'אָרֶץ',
      transliteration: 'aretz',
      englishLiteral: 'earth',
      englishNatural: 'earth',
      root: 'eretz',
      order: 10,
      morphology: {
        gender: 'feminine',
        number: 'singular',
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
      'כִּי־הִנֵּה יְהוָה יֹצֵא מִמְּקוֹמוֹ וְיָרַד וְדָרַךְ עַל־בָּמֳתֵי אָרֶץ׃',
    transliteration:
      'ki-hineh YHWH yotze miMeqomo veYarad veDarakh al-bamotei aretz',
    englishLiteral:
      'that- behold He_Who_Is (YHWH) going_out from-place-his; and-he-has-gone_down and-he-has-trodden over- high_places-of earth.',
    englishNatural:
      'that behold, He-Who-Is (YHWH) is going-out from his place; and he will go-down and tread over the high-places of earth.',
    kjv: 'For, behold, the LORD cometh forth out of his place, and will come down, and tread upon the high places of the earth.',
  },
};
