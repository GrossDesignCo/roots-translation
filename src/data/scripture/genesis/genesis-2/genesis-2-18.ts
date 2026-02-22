import { Verse } from '@/types';

export const genesis_2_18: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 2,
    verse: 18,
  },
  words: [
    {
      hebrew: 'וַיֹּאמֶר',
      transliteration: 'vaYomer',
      englishLiteral: 'And-said',
      englishNatural: 'said',
      root: 'amar',
      prefixes: ['va'],
      order: {
        hebrew: 1,
        english: 3,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'imperfect',
        stem: 'qal',
        type: 'verb',
      },
      grammarSuffix: {
        englishNatural: ',',
      },
      lineBreaksBefore: {
        hebrew: 1,
      },
    },
    {
      hebrew: 'יְהוָה',
      transliteration: 'YHWH',
      englishLiteral: 'He_Who_Is (YHWH)',
      englishNatural: 'And He-Who-Is (YHWH)',
      root: 'yhwh',
      order: {
        hebrew: 2,
        english: 1,
      },
      morphology: {
        type: 'noun',
      },
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      hebrew: 'אֱלֹהִים',
      transliteration: 'Elohim',
      englishLiteral: 'Gods',
      englishNatural: 'God',
      root: 'eloah',
      suffixes: ['im'],
      order: {
        hebrew: 3,
        english: 2,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
      },
    },
    {
      hebrew: 'לֹא־',
      transliteration: 'lo-',
      englishLiteral: 'No-',
      englishNatural: 'No',
      root: 'lo',
      order: 4,
      morphology: {
        type: 'adverb',
      },
      grammarPrefix: {
        englishLiteral: '"',
        englishNatural: '"',
      },
    },
    {
      hebrew: 'טוֹב',
      transliteration: 'tov',
      englishLiteral: 'good',
      englishNatural: 'good',
      root: 'tov',
      order: 5,
      morphology: {
        type: 'adjective',
      },
    },
    {
      hebrew: 'הֱיוֹת',
      transliteration: 'heyot',
      englishLiteral: 'to-be',
      englishNatural: 'to be',
      root: 'hayah',
      order: {
        hebrew: 6,
        english: 7,
      },
      morphology: {
        type: 'verb',
        stem: 'qal',
        tense: 'infinitive_construct',
      },
    },
    {
      hebrew: 'הָאָדָם',
      transliteration: 'haAdam',
      englishLiteral: 'the-Earthling (Adam)',
      englishNatural: 'for the Earthling (Adam)',
      root: 'adam',
      prefixes: ['ha'],
      order: {
        hebrew: 7,
        english: 6,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      hebrew: 'לְבַדּוֹ',
      transliteration: 'leVaddo',
      englishLiteral: 'to-alone-him',
      englishNatural: 'to himself alone',
      root: 'badad',
      prefixes: ['le'],
      suffixes: ['o'],
      order: 8,
      morphology: {
        type: 'adverb',
      },
      grammarSuffix: {
        englishLiteral: ';',
        englishNatural: ';',
      },
    },
    {
      hebrew: 'אֶעֱשֶׂה־',
      transliteration: 'eese-',
      englishLiteral: 'I-will-make-',
      englishNatural: 'I will make',
      root: 'asah',
      order: 9,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '1st',
        tense: 'imperfect',
        stem: 'qal',
        type: 'verb',
      },
    },
    {
      hebrew: 'לוֹ',
      transliteration: 'lo',
      englishLiteral: 'to-him',
      englishNatural: 'to him',
      root: 'lo',
      suffixes: ['o'],
      order: 10,
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'עֵזֶר',
      transliteration: 'ezer',
      englishLiteral: 'help',
      englishNatural: 'a help',
      root: 'ezer',
      order: 11,
      morphology: {
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'כְּנֶגְדּוֹ׃',
      transliteration: 'keNegdo',
      englishLiteral: 'as-his_opposite',
      englishNatural: 'as his opposite',
      root: 'neged',
      prefixes: ['ke'],
      suffixes: ['o'],
      order: 12,
      morphology: {
        type: 'preposition',
      },
      grammarSuffix: {
        englishLiteral: '."',
        englishNatural: '."',
      },
      lineBreaksAfter: 1,
    },
  ],
  expectedTranslations: {
    hebrew:
      'וַיֹּאמֶר יְהוָה אֱלֹהִים לֹא־טוֹב הֱיוֹת הָאָדָם לְבַדּוֹ אֶעֱשֶׂה־לוֹ עֵזֶר כְּנֶגְדּוֹ׃',
    transliteration:
      'vaYomer YHWH Elohim lo-tov heyot haAdam leVaddo eese-lo ezer keNegdo',
    englishLiteral:
      'And-said He_Who_Is (YHWH) Gods, "No- good to-be the-Earthling (Adam) to-alone-him; I-will-make- to-him help, as-his_opposite."',
    englishNatural:
      'And He-Who-Is (YHWH) God said, "No good for the Earthling (Adam) to be to himself alone; I will make to him a help, as his opposite."',
    kjv: 'And the LORD God said, It is not good that the man should be alone; I will make him an help meet for him.',
    lastReviewed: { name: 'Matt Gross', date: '2026-02-22' },
  },
};
