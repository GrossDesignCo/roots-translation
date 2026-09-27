import { Verse } from '@/types';

export const genesis_10_18: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 10,
    verse: 18,
  },
  words: [
    {
      hebrew: 'וְאֶת־',
      transliteration: 'veEt-',
      englishLiteral: 'and-↳',
      englishNatural: 'and',
      root: 'et',
      prefixes: ['ve'],
      order: 1,
      morphology: {
        type: 'particle',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'הָאַרְוָדִי',
      transliteration: 'haArvadi',
      englishLiteral: 'the-Arvadite',
      englishNatural: 'the Arvadite',
      root: 'arvadi',
      prefixes: ['ha'],
      order: 2,
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
      hebrew: 'וְאֶת־',
      transliteration: 'veEt-',
      englishLiteral: 'and-↳',
      englishNatural: 'and',
      root: 'et',
      prefixes: ['ve'],
      order: 3,
      morphology: {
        type: 'particle',
      },
    },
    {
      hebrew: 'הַצְּמָרִי',
      transliteration: 'haTsemari',
      englishLiteral: 'the-Zemarite',
      englishNatural: 'the Zemarite',
      root: 'tsemari',
      prefixes: ['ha'],
      order: 4,
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
      hebrew: 'וְאֶת־',
      transliteration: 'veEt-',
      englishLiteral: 'and-↳',
      englishNatural: 'and',
      root: 'et',
      prefixes: ['ve'],
      order: 5,
      morphology: {
        type: 'particle',
      },
    },
    {
      hebrew: 'הַחֲמָתִי',
      transliteration: 'haChamathi',
      englishLiteral: 'the-Hamathite',
      englishNatural: 'the Hamathite',
      root: 'chamathi',
      prefixes: ['ha'],
      order: 6,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ';',
        englishNatural: ';',
      },
      lineBreaksAfter: 1,
    },
    {
      hebrew: 'וְאַחַר',
      transliteration: 'veAchar',
      englishLiteral: 'and-after',
      englishNatural: 'and after',
      root: 'achar',
      prefixes: ['ve'],
      order: 7,
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'נָפֹצוּ',
      transliteration: 'nafotsu',
      englishLiteral: 'they-have-been-spread_out',
      englishNatural: 'have been spread-out',
      root: 'nafats',
      suffixes: ['u'],
      order: 8,
      morphology: {
        gender: 'masculine',
        number: 'plural',
        person: '3rd',
        tense: 'perfect',
        stem: 'niphal',
        type: 'verb',
      },
    },
    {
      hebrew: 'מִשְׁפְּחוֹת',
      transliteration: 'mishpechot',
      englishLiteral: 'families-of',
      englishNatural: 'the families of',
      root: 'mishpachah',
      suffixes: ['ot'],
      order: 9,
      morphology: {
        gender: 'feminine',
        number: 'plural',
        state: 'construct',
        type: 'noun',
      },
    },
    {
      hebrew: 'הַכְּנַעֲנִי',
      transliteration: 'haKenaani',
      englishLiteral: 'the-Canaanite',
      englishNatural: 'the Canaanite',
      root: 'kenaani',
      prefixes: ['ha'],
      order: 10,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
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
      'וְאֶת־הָאַרְוָדִי וְאֶת־הַצְּמָרִי וְאֶת־הַחֲמָתִי וְאַחַר נָפֹצוּ מִשְׁפְּחוֹת הַכְּנַעֲנִי',
    transliteration:
      'veEt-haArvadi veEt-haTsemari veEt-haChamathi veAchar nafotsu mishpechot haKenaani',
    englishLiteral:
      'and-↳ the-Arvadite, and-↳ the-Zemarite, and-↳ the-Hamathite; and-after they-have-been-spread_out families-of the-Canaanite.',
    englishNatural:
      'and the Arvadite, and the Zemarite, and the Hamathite; and after have been spread-out the families of the Canaanite.',
    kjv: 'And the Arvadite, and the Zemarite, and the Hamathite: and afterward were the families of the Canaanites spread abroad.',
  },
};
