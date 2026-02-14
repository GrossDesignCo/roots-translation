/**
 * Dictionary of Hebrew suffixes
 */

const SUFFIXES = {
  im: {
    hebrew: 'ים',
    transliteration: 'im',
    englishLiteral: 's',
    englishNatural: 's',
    function: 'masculine plural suffix',
  },
  it: {
    hebrew: 'ית',
    transliteration: 'it',
    englishLiteral: 'ing',
    englishNatural: 'ing',
    function: 'abstract noun formation',
  },
  et: {
    hebrew: 'ת',
    transliteration: 'et',
    englishLiteral: 'feminine singular',
    englishNatural: 'feminine singular',
    function: 'feminine singular participle',
  },
  ey: {
    hebrew: 'י',
    transliteration: 'ey',
    englishLiteral: 'construct plural',
    englishNatural: 'construct plural',
    function: 'construct state',
  },
  u: {
    hebrew: 'וּ',
    transliteration: 'u',
    englishLiteral: 'and',
    englishNatural: 'and',
    function: 'plural verb marker',
  },
  construct_t: {
    hebrew: 'ת',
    transliteration: '',
    englishLiteral: 'of',
    englishNatural: 'of',
    function: 'feminine construct marker',
  },
  construct_y: {
    hebrew: 'י',
    transliteration: 'y',
    englishLiteral: 'of',
    englishNatural: 'of',
    function: 'masculine construct marker',
  },
  plural_verb_u: {
    hebrew: 'ו',
    transliteration: '',
    englishLiteral: '',
    englishNatural: '',
    function: 'plural verb marker',
  },
  nu: {
    hebrew: 'נו',
    transliteration: 'nu',
    englishLiteral: 'we',
    englishNatural: 'we',
    function: '1st person plural verb/pronoun',
  },
  kha: {
    hebrew: 'ךָ',
    transliteration: 'kha',
    englishLiteral: 'you',
    englishNatural: 'you',
    function: '2nd person masculine singular',
  },
  einu: {
    hebrew: 'ֵינוּ',
    transliteration: 'einu',
    englishLiteral: 'our',
    englishNatural: 'us',
    function: '1st person plural possessive',
  },
  o: {
    hebrew: 'וֹ',
    transliteration: 'o',
    englishLiteral: 'him',
    englishNatural: 'it',
    function: '3rd person masculine singular object',
  },
  eha: {
    hebrew: 'יהָ',
    transliteration: 'eha',
    englishLiteral: 'her',
    englishNatural: 'its',
    function: '3rd person feminine singular possessive',
  },
  ato: {
    hebrew: 'תוֹ',
    transliteration: 'ato',
    englishLiteral: 'his',
    englishNatural: 'his',
    function: '3rd person masculine singular possessive on feminine noun',
  },
  to: {
    hebrew: 'תוֹ',
    transliteration: 'to',
    englishLiteral: 'it',
    englishNatural: 'it',
    function: '3rd person masculine singular object suffix',
  },
  khem: {
    hebrew: 'כֶם',
    transliteration: 'khem',
    englishLiteral: 'you',
    englishNatural: 'you',
    function: '2nd person masculine plural object suffix',
  },
  ehu: {
    hebrew: 'ֵהוּ',
    transliteration: 'ehu',
    englishLiteral: 'him',
    englishNatural: 'it',
    function: '3rd person masculine singular object',
  },
  enu: {
    hebrew: 'ֶנּוּ',
    transliteration: 'enu',
    englishLiteral: 'him',
    englishNatural: 'them',
    function: '3rd person masculine singular/plural object',
  },
  ennu: {
    hebrew: 'ֶנּוּ',
    transliteration: 'ennu',
    englishLiteral: 'it',
    englishNatural: 'it',
    function: '3rd person masculine singular object',
  },
  ayim: {
    hebrew: 'ים',
    transliteration: 'ayim',
    englishLiteral: 's',
    englishNatural: '',
    function: 'dual',
  },
  av: {
    hebrew: 'יו',
    transliteration: 'av',
    englishLiteral: 'his',
    englishNatural: 'his',
    function: '3rd person masculine singular possessive',
  },
  ai: {
    hebrew: 'י',
    transliteration: 'ai',
    englishLiteral: 'to me',
    englishNatural: 'to me',
    function: '1st person singular directional',
  },
  i: {
    hebrew: 'י',
    transliteration: 'i',
    englishLiteral: 'you',
    englishNatural: 'you',
    function: '2nd person feminine singular',
  },
  ekh: {
    hebrew: 'ךְ',
    transliteration: 'ekh',
    englishLiteral: 'you',
    englishNatural: 'you',
    function: '2nd person feminine singular',
  },
  un: {
    hebrew: 'וּן',
    transliteration: 'un',
    englishLiteral: 'you',
    englishNatural: 'you',
    function: '2nd person plural imperfect',
  },
  hu: {
    hebrew: 'וֹ',
    transliteration: 'hu',
    englishLiteral: 'its',
    englishNatural: 'its',
    function: '3rd person masculine singular possessive',
  },
  construct_i: {
    hebrew: 'י',
    transliteration: 'i',
    englishLiteral: 'of',
    englishNatural: 'of',
    function: 'construct state',
  },
  ot: {
    hebrew: 'ות',
    transliteration: 'ot',
    englishLiteral: 'plural',
    englishNatural: 'plural',
    function: 'feminine plural',
  },
  am: {
    hebrew: 'ם',
    transliteration: 'am',
    englishLiteral: 'them',
    englishNatural: 'them',
    function: '3rd person masculine plural object',
  },
  hem: {
    hebrew: 'ם',
    transliteration: 'hem',
    englishLiteral: 'their',
    englishNatural: 'their',
    function: '3rd person masculine plural possessive',
  },
  ah: {
    hebrew: 'ה',
    transliteration: 'ah',
    englishLiteral: 'feminine singular',
    englishNatural: 'feminine singular',
    function: 'feminine singular marker or abstract noun formation',
  },
  ti: {
    hebrew: 'תִּ',
    transliteration: 'ti',
    englishLiteral: 'you',
    englishNatural: 'you',
    function: '2nd person feminine singular',
  },
  ekha: {
    hebrew: 'ֶיךָ',
    transliteration: 'ekha',
    englishLiteral: 'your',
    englishNatural: 'your',
    function: '2nd person masculine singular possessive',
  },
  at: {
    hebrew: 'אַת',
    transliteration: 'at',
    englishLiteral: 'feminine marker',
    englishNatural: 'feminine marker',
    function: 'feminine noun formation',
  },
  chem: {
    hebrew: 'כֶם',
    transliteration: 'chem',
    englishLiteral: 'your',
    englishNatural: 'your',
    function: '2nd person masculine plural possessive',
  },
  tem: {
    hebrew: 'תֶם',
    transliteration: 'tem',
    englishLiteral: 'you',
    englishNatural: 'you',
    function: '2nd person masculine plural',
  },
  // Genesis 3:7 addition - feminine plural verb ending
  nah: {
    hebrew: 'נה',
    transliteration: 'nah',
    englishLiteral: '-',
    englishNatural: '',
    function: 'feminine plural verb ending',
  },
  // Added for Genesis 3:11
  ta: {
    hebrew: 'ת',
    transliteration: 'ta',
    englishLiteral: 'you',
    englishNatural: '',
    function: '2nd person masculine singular perfect verb ending',
  },
  // Added for Genesis 3:12
  adi: {
    hebrew: 'די',
    transliteration: 'adi',
    englishLiteral: 'me',
    englishNatural: 'me',
    function: '1st person singular with preposition',
  },
  li: {
    hebrew: 'י',
    transliteration: 'i',
    englishLiteral: 'me',
    englishNatural: 'me',
    function: '1st person singular object',
  },
  // Added for Genesis 3:13
  ani: {
    hebrew: 'ני',
    transliteration: 'ani',
    englishLiteral: 'me',
    englishNatural: 'me',
    function: '1st person singular object suffix',
  },
  it_verb: {
    hebrew: 'ית',
    transliteration: 'it',
    englishLiteral: 'you',
    englishNatural: 'you',
    function: '2nd person feminine singular perfect verb ending',
  },
  // Added for Genesis 3:15
  nu_object: {
    hebrew: 'נו',
    transliteration: 'nu',
    englishLiteral: 'him',
    englishNatural: 'him',
    function: '3rd person masculine singular object',
  },
  enah: {
    hebrew: 'נה',
    transliteration: 'enah',
    englishLiteral: 'her',
    englishNatural: 'it',
    function: '3rd person feminine singular object with preposition',
  },
  ei: {
    hebrew: 'ֵי',
    transliteration: 'ei',
    englishLiteral: 's-of',
    englishNatural: 's of',
    function: 'masculine plural construct suffix',
  },
  ni: {
    hebrew: 'נִי',
    transliteration: 'ni',
    englishLiteral: 'me',
    englishNatural: 'me',
    function: '1st person singular object suffix',
  },
  ay: {
    hebrew: 'ַי',
    transliteration: 'ay',
    englishLiteral: 'me',
    englishNatural: 'me',
    function: '1st person singular object suffix with preposition',
  },
  hen: {
    hebrew: 'הֶן',
    transliteration: 'hen',
    englishLiteral: 'of-them',
    englishNatural: 'their',
    function: '3rd person feminine plural possessive',
  },
  an: {
    hebrew: 'ן',
    transliteration: 'an',
    englishLiteral: 'their',
    englishNatural: 'their',
    function: '3rd person feminine plural possessive (alternate form)',
  },
  kh: {
    hebrew: 'ךְ',
    transliteration: 'kh',
    englishLiteral: 'you',
    englishNatural: 'your',
    function: '2nd person masculine singular possessive',
  },
  // Added for Jonah 1:5
  eihem: {
    hebrew: 'עליהם',
    transliteration: 'eihem',
    englishLiteral: 'upon-them',
    englishNatural: 'upon them',
    function: '3rd person masculine plural object with preposition',
  },
  // Added for Jonah 1:8
  tekha: {
    hebrew: 'תך',
    transliteration: 'tekha',
    englishLiteral: 'your',
    englishNatural: 'your',
    function: '2nd person masculine singular possessive',
  },
  // Exodus 3:15 additions
  i_possessive: {
    hebrew: 'י',
    transliteration: 'i',
    englishLiteral: 'my',
    englishNatural: 'my',
    function: '1st person singular possessive',
  },
  // Jonah 3:2 additions
  ha_feminine: {
    hebrew: 'הָ',
    transliteration: 'ha',
    englishLiteral: 'her',
    englishNatural: 'her',
    function: '3rd person feminine singular object',
  },
  // Ezekiel 1:8 additions
  tam: {
    hebrew: 'תָּם',
    transliteration: 'tam',
    englishLiteral: 'them',
    englishNatural: 'them',
    function: '3rd person masculine plural suffix with numerals',
  },
  henah: {
    hebrew: 'הֵנָּה',
    transliteration: 'henah',
    englishLiteral: 'them',
    englishNatural: 'them',
    function: '3rd person feminine plural suffix',
  },
  // Ezekiel 1:9 additions
  tan: {
    hebrew: 'תָּן',
    transliteration: 'tan',
    englishLiteral: 'their',
    englishNatural: 'their',
    function: '3rd person feminine plural possessive with infinitive construct',
  },
} as const;

type SuffixKey = keyof typeof SUFFIXES;

interface SuffixElement {
  hebrew: string;
  transliteration: string;
  englishLiteral: string;
  englishNatural: string;
  function?: string;
}

// Type-safe export for Hebrew Dictionary
export const suffixes: Record<SuffixKey, SuffixElement> = SUFFIXES;
