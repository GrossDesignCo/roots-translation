import { Verse } from '@/types';

export const exodus_20_2: Verse = {
  meta: {
    book: 'Exodus',
    chapter: 20,
    verse: 2,
  },
  words: [
    {
      hebrew: 'אָנֹכִ֖י',
      transliteration: 'anokhi',
      englishLiteral: 'I',
      englishNatural: 'I',
      root: 'anokhi',
      order: 1,
      morphology: {
        type: 'pronoun',
        person: '1st',
        number: 'singular',
      },
      grammarSuffix: {
        englishNatural: ',',
      }
    },
    {
      hebrew: 'יְהוָ֣ה',
      transliteration: 'YHWH',
      englishLiteral: 'He_Who_Is (YHWH)',
      englishNatural: 'He-Who-Is (YHWH)',
      root: 'yhwh',
      order: 2,
      morphology: {
        type: 'noun',
      },
    },
    {
      hebrew: 'אֱלֹהֶ֑יךָ',
      transliteration: 'Elohekha',
      englishLiteral: 'Gods-your',
      englishNatural: 'your God',
      root: 'eloah',
      suffixes: ['ekha'],
      order: 3,
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'plural',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'אֲשֶׁ֧ר',
      transliteration: 'asher',
      englishLiteral: 'which',
      englishNatural: 'which',
      root: 'asher',
      order: 4,
      morphology: {
        type: 'relative',
      },
    },
    {
      hebrew: 'הוֹצֵאתִ֛יךָ',
      transliteration: 'hotsetikha',
      englishLiteral: 'I-have-brought_out-you',
      englishNatural: 'I have brought-out you',
      root: 'yatsa',
      suffixes: ['ekha'],
      order: 5,
      morphology: {
        type: 'verb',
        gender: 'masculine',
        number: 'singular',
        person: '1st',
        tense: 'perfect',
        stem: 'hiphil',
      },
    },
    {
      hebrew: 'מֵאֶ֥רֶץ',
      transliteration: 'meEretz',
      englishLiteral: 'from-land-of',
      englishNatural: 'from the land of',
      root: 'eretz',
      prefixes: ['me'],
      order: 6,
      morphology: {
        type: 'noun',
        gender: 'feminine',
        number: 'singular',
        state: 'construct',
      },
    },
    {
      hebrew: 'מִצְרַ֖יִם',
      transliteration: 'Mitsrayim',
      englishLiteral: 'Double_Narrows (Egypt)',
      englishNatural: 'Double-Narrows (Egypt)',
      root: 'mitzrayim',
      order: 7,
      morphology: {
        type: 'noun',
        number: 'plural',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'מִבֵּ֥ית',
      transliteration: 'miBeit',
      englishLiteral: 'from-house-of',
      englishNatural: 'from the house of',
      root: 'bayit',
      prefixes: ['mi'],
      order: 8,
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'singular',
        state: 'construct',
      },
    },
    {
      hebrew: 'עֲבָדִֽים׃',
      transliteration: 'avadim',
      englishLiteral: 'servants',
      englishNatural: 'servants',
      root: 'eved',
      suffixes: ['im'],
      order: 9,
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'plural',
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
      'אָנֹכִ֖י יְהוָ֣ה אֱלֹהֶ֑יךָ אֲשֶׁ֧ר הוֹצֵאתִ֛יךָ מֵאֶ֥רֶץ מִצְרַ֖יִם מִבֵּ֥ית עֲבָדִֽים׃',
    transliteration:
      'anokhi YHWH Elohekha asher hotsetikha meEretz Mitsrayim miBeit avadim',
    englishLiteral:
      'I He_Who_Is (YHWH) Gods-your, which I-have-brought_out-you from-land-of Double_Narrows (Egypt), from-house-of servants.',
    englishNatural:
      'I, He-Who-Is (YHWH) your God, which I have brought-out you from the land of Double-Narrows (Egypt), from the house of servants.',
    kjv: 'I am the LORD thy God, which have brought thee out of the land of Egypt, out of the house of bondage.',
    lastReviewed: { name: 'Matt Gross', date: '2026-07-04' },
},
};
