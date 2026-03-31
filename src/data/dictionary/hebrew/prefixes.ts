/**
 * Dictionary of Hebrew prefix elements
 */

const PREFIXES = {
  be: {
    hebrew: 'בְּ',
    transliteration: 'be',
    englishLiteral: 'in',
    englishNatural: 'in the',
    description: 'in, among, like "in the" flock',
  },
  ve: {
    hebrew: 'וְ',
    transliteration: 've',
    englishLiteral: 'and',
    englishNatural: 'and',
  },
  va: {
    hebrew: 'וַ',
    transliteration: 'va',
    englishLiteral: 'and',
    englishNatural: 'and',
  },
  u: {
    hebrew: 'וּ',
    transliteration: 'u',
    englishLiteral: 'but',
    englishNatural: 'but',
  },
  ha: {
    hebrew: 'הַ',
    transliteration: 'ha',
    englishLiteral: 'the',
    englishNatural: 'the',
  },
  al: {
    hebrew: 'עַל',
    transliteration: 'al',
    englishLiteral: 'on',
    englishNatural: 'over',
  },
  me: {
    hebrew: 'מְ',
    transliteration: 'me',
    englishLiteral: 'was',
    englishNatural: 'was',
  },
  ye: {
    hebrew: 'יְ',
    transliteration: 'ye',
    englishLiteral: '',
    englishNatural: 'let there',
  },
  ne: {
    hebrew: 'נ',
    transliteration: 'ne',
    englishLiteral: 'are',
    englishNatural: 'are',
  },
  ni: {
    hebrew: 'נ',
    transliteration: 'ni',
    englishLiteral: 'himself',
    englishNatural: 'himself',
  },
  mi: {
    hebrew: 'מ',
    transliteration: 'mi',
    englishLiteral: 'from',
    englishNatural: 'from',
  },
  tav: {
    hebrew: 'ת',
    transliteration: 'tav',
    englishLiteral: 'you-will',
    englishNatural: 'you will',
  },
  pen: {
    hebrew: 'פֶּן',
    transliteration: 'pen',
    englishLiteral: 'or-else',
    englishNatural: 'or else',
  },
  // Numbers 21:6-9 prefixes
  ba: {
    hebrew: 'בַּ',
    transliteration: 'ba',
    englishLiteral: 'in',
    englishNatural: 'in the',
  },
  yit: {
    hebrew: 'יִתְ',
    transliteration: 'yit',
    englishLiteral: 'he-will-himself',
    englishNatural: '',
  },
  yi: {
    hebrew: 'יִ',
    transliteration: 'yi',
    englishLiteral: 'he-will',
    englishNatural: 'he will',
    function: '3rd person masculine singular imperfect prefix',
  },
  hi: {
    hebrew: 'הִ',
    transliteration: 'hi',
    englishLiteral: 'cause-to',
    englishNatural: '',
  },
  le: {
    hebrew: 'ל',
    transliteration: 'le',
    englishLiteral: 'to',
    englishNatural: 'to',
  },
  hit: {
    hebrew: 'הִתְ',
    transliteration: 'hit',
    englishLiteral: 'self',
    englishNatural: '',
  },
  bi: {
    hebrew: 'ב',
    transliteration: 'bi',
    englishLiteral: 'with',
    englishNatural: 'with',
  },
  ti: {
    hebrew: 'ת',
    transliteration: 'ti',
    englishLiteral: 'you-will',
    englishNatural: 'you will',
  },
  la: {
    hebrew: 'לַ',
    transliteration: 'la',
    englishLiteral: 'to',
    englishNatural: 'to',
  },
  ta: {
    hebrew: 'תַּ',
    transliteration: 'ta',
    englishLiteral: 'let',
    englishNatural: 'let',
  },
  ma: {
    hebrew: 'מַ',
    transliteration: 'ma',
    englishLiteral: 'one-who',
    englishNatural: 'one who',
  },
  li: {
    hebrew: 'לִ',
    transliteration: 'li',
    englishLiteral: 'to',
    englishNatural: 'to',
  },
  // Isaiah prefixes
  // Add other common prefixes
  ka: {
    hebrew: 'כָּ',
    transliteration: 'ka',
    englishLiteral: 'like',
    englishNatural: 'like',
  },
  na: {
    hebrew: 'נַ',
    transliteration: 'na',
    englishLiteral: 'let-us',
    englishNatural: 'let us',
  },
  ki: {
    hebrew: 'כִּי',
    transliteration: 'ki',
    englishLiteral: 'that',
    englishNatural: 'that',
  },
  ke: {
    hebrew: 'כְּ',
    transliteration: 'ke',
    englishLiteral: 'as',
    englishNatural: 'as',
  },
  yo: {
    hebrew: 'יֹ',
    transliteration: 'yo',
    englishLiteral: 'he-will',
    englishNatural: 'he will',
  },
  te: {
    hebrew: 'תְּ',
    transliteration: 'te',
    englishLiteral: 'it-will',
    englishNatural: 'it will',
  },
  ya: {
    hebrew: 'יַ',
    transliteration: 'ya',
    englishLiteral: 'he-will',
    englishNatural: 'he will',
    function: '3rd person masculine singular imperfect prefix',
  },
  to: {
    hebrew: 'תֹּ',
    transliteration: 'to',
    englishLiteral: 'it-will',
    englishNatural: 'it will',
    function: '3rd person feminine singular imperfect prefix',
  },
  e: {
    hebrew: 'אֶ',
    transliteration: 'e',
    englishLiteral: 'I-will',
    englishNatural: 'I will',
    function: '1st person singular imperfect prefix',
  },
  // Genesis 5:4 addition
  ho: {
    hebrew: 'הוֹ',
    transliteration: 'ho',
    englishLiteral: 'the',
    englishNatural: 'the',
    function: 'definite article prefix',
  },
  // Jonah 4:10 addition
  she: {
    hebrew: 'שֶׁ',
    transliteration: 'she',
    englishLiteral: 'that',
    englishNatural: 'that',
    function: 'relative particle - that, which',
  },
} as const;

type PrefixKey = keyof typeof PREFIXES;

interface PrefixElement {
  hebrew: string;
  transliteration: string;
  englishLiteral: string;
  englishNatural: string;
  function?: string;
}

// Type-safe export for Hebrew Dictionary
export const prefixes: Record<PrefixKey, PrefixElement> = PREFIXES;
