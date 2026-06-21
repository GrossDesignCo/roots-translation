import { Verse } from '@/types';

export const genesis_7_22: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 7,
    verse: 22,
  },
  words: [
    {
      hebrew: 'כֹּל',
      transliteration: 'kol',
      englishLiteral: 'all',
      englishNatural: 'All',
      root: 'kol',
      order: 1,
      morphology: {
        type: 'adjective',
      },
    },
    {
      hebrew: 'אֲשֶׁר',
      transliteration: 'asher',
      englishLiteral: 'which',
      englishNatural: 'which',
      root: 'asher',
      order: 2,
      morphology: {
        type: 'relative',
      },
    },
    {
      hebrew: 'נִשְׁמַת־',
      transliteration: 'nishmat-',
      englishLiteral: 'breath-of-',
      englishNatural: 'the breath of',
      root: 'neshamah',
      order: 3,
      morphology: {
        gender: 'feminine',
        number: 'singular',
        state: 'construct',
        type: 'noun',
      },
    },
    {
      hebrew: 'רוּחַ',
      transliteration: 'ruach',
      englishLiteral: 'Wind-of',
      englishNatural: 'Wind of',
      root: 'ruach',
      order: 4,
      morphology: {
        gender: 'feminine',
        number: 'singular',
        state: 'construct',
        type: 'noun',
      },
    },
    {
      hebrew: 'חַיִּים',
      transliteration: 'chayyim',
      englishLiteral: 'lives',
      englishNatural: 'lives',
      root: 'chayyim',
      order: 5,
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun',
      },
    },
    {
      hebrew: 'בְּאַפָּיו',
      transliteration: 'beAppav',
      englishLiteral: 'in-nose-his',
      englishNatural: 'in his nostrils',
      root: 'aph',
      prefixes: ['be'],
      suffixes: ['av'],
      order: 6,
      morphology: {
        gender: 'masculine',
        number: 'dual',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
      lineBreaksAfter: 1,
    },
    {
      hebrew: 'מִכֹּל',
      transliteration: 'mikKol',
      englishLiteral: 'from-all',
      englishNatural: 'from all',
      root: 'kol',
      prefixes: ['mi'],
      order: 7,
      morphology: {
        type: 'adjective',
      },
    },
    {
      hebrew: 'אֲשֶׁר',
      transliteration: 'asher',
      englishLiteral: 'which',
      englishNatural: 'which',
      root: 'asher',
      order: 8,
      morphology: {
        type: 'relative',
      },
    },
    {
      hebrew: 'בֶּחָרָבָה',
      transliteration: 'beCharavah',
      englishLiteral: 'in-dry_land',
      englishNatural: 'in the dry-land',
      root: 'charavah',
      prefixes: ['be'],
      order: 9,
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
      hebrew: 'מֵתוּ',
      transliteration: 'metu',
      englishLiteral: 'have-died',
      englishNatural: 'died',
      root: 'mut',
      suffixes: ['plural_verb_u'],
      order: 10,
      morphology: {
        number: 'plural',
        person: '3rd',
        tense: 'perfect',
        stem: 'qal',
        type: 'verb',
      },
      grammarSuffix: {
        englishLiteral: '.',
        englishNatural: '.',
      },
    },
  ],
  expectedTranslations: {
    hebrew:
      'כֹּל אֲשֶׁר נִשְׁמַת־רוּחַ חַיִּים בְּאַפָּיו מִכֹּל אֲשֶׁר בֶּחָרָבָה מֵתוּ',
    transliteration:
      'kol asher nishmat-ruach chayyim beAppav mikKol asher beCharavah metu',
    englishLiteral:
      'all which breath-of- Wind-of lives in-nose-his, from-all which in-dry_land, have-died.',
    englishNatural:
      'All which the breath of Wind of lives in his nostrils, from all which in the dry-land, died.',
    kjv: 'All in whose nostrils was the breath of life, of all that was in the dry land, died.',
    lastReviewed: { name: 'Matt Gross', date: '2026-06-21' },
},
};
