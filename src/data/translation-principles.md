# Translation Principles

The goal is to create as close to a 1:1 Hebrew:English mapping as possible, even when treating words/concepts in seemingly strange ways to a typical English reader. This mapping serves as both a useful tool for students of scripture and helps bring familiarity with the biblical mind/conceptualization to English speakers.

## AI Usage

1. Translations may be initially AI-generated, then later human-reviewed/edited.
2. AIs should never edit translations or entries that have been human-edited without explicit permission.
3. Human-reviewed translations will be clearly marked with the name of the reviewer and date of last review.
4. AIs should always run tests after generating new translation/entry data.
5. AIs should review the dictionary as needed and add data to it as appropriate when generating verse data.

### Initial Generation Workflow

Usually this works best if the ai-model:
1. Does not search the internet, but generates from memory/training data
2. Recalls first the standard hebrew for the verse, which will serve as our baseline
3. Recalls the KJV (just for reference)
4. Creates a shortlist of hebrew root words in the verse to check against the dictionary for translation choices
5. Adds roots, suffixes, or prefixes that don't exist in the dictionary yet
6. Generate the verse data following the same structure as the example verses
7. Doublechecks for any potential duplicate dictionary entries

**All translation decisions should be made by a human. AI-Models should only be used for scaffolding the initial data structure and referece material**

## Original Hebrew, Aramaic & Greek Principles

1. Generally use the most widely accepted text.
1. Verse numbering should follow the generally accepted text most closely associated with the original language.
  
  - For example, Psalm 8:1 in hebrew starts with the introductory text, where in english that is usually provided before verse 1. In this case we follow msoretic numbering instead of modern.

## Transliteration Principles

1. Compound words should use camelCase to indicate prefixes.

   - "בְּרֵאשִׁ֖ית" -> "beReshit"
   - "וְאֵ֥ת הָאָֽרֶץ" -> "veEt haAretz"

1. Like Hebrew and Greek, transliterations should not include any additional grammar/punctuation marks unless explicitly present in the original language.

1. Transliterations should not use special characters, as these are frequently used as both keys in data/files as well as words.

   - "ἐγὼ" -> ego
   - "ἀποστέλλω" -> apostello

## English-Literal Translation Principles

1. Handle traditionally transliterated words in favor of direct translations (for both traditionally transliterated words and names).

   - "angel" (from the Hebrew "malech" and Greek "angelos") should be consistently translated "messenger"
   - "seraphim" (from the hebrew "seraphim") should be consistently translated "burning_ones"

1. Preserve word distinctions between synonyms.

   - When translating multiple related Hebrew words with different roots, always use different English roots
   - For example, If Hebrew "leviathan" -> "sea_dragon", then Hebrew "tannin" -> "sea_serpent" (different english root, but clearly connected), and Hebrew "nachash" -> "snake" (completely different english root, but clearly related conceptually)

1. Remove filler words and preserve Hebrew word-order.

   - Typical translation of Gen 1:3: "then God said 'Let there be light', and there was light"
   - Transliterated Hebrew: "vaiYomer elohim yehi owr wayHi owr"
   - English-Literal Translation: "And-said, Gods, 'Let_be, light.' And-was, light."
   - Restricts additional english words
   - Preserves the word-order of the Hebrew, even though it reads strangely in English

1. Preserve the direct root in the English.

   - Allow context and usage to reshape the meaning of the specific English words over successive readings
   - Use a 1:1 Hebrew-to-English mapping whenever possible
   - Hebrew transliterated "ruach" should always use "wind" (not "spirit" or "breath") in some form
   - Hebrew transliterated "arum" should always use "shrewd" (not "crafty" or "prudent") in some form
   - If a given root is translated a given way in english, the verse translation of that word should always include the same root, eg. "arum/shrewd" should always include "shrewd" in some form, be it "shrewdness", "was made to be shrewd", etc.

1. Expressly render Hebrew את / et (direct object marker).

   - Use ↳ to mark every direct object that Hebrew marks with את
   - Don't add interpretive markers
   - Let the "strangeness" of some constructions help readers recognize Hebrew's distinct way of expressing relationships

1. Use underscores for single Hebrew words and names translated as English phrases.
   - "Hesed" = "steadfast_love"
   - "Eleazer" = "God_My_Help"
     - "will-inherit, God_My_Help, my-house"
   - "Israel" = "Struggles_With_God"
   - Noah = Rest
     - "God rested Man in the garden"
     - "And he called his name Rest, saying 'At last this one will give us rest'"

1. Preserve spaces after hyphens when words are split across multiple word objects.

   When a Hebrew word with a prefix is represented as two separate word objects with a maqaf separator (e.g., `כִּי־` and `גֵר`), the hyphen at the end of the prefix indicates continuation to the next word. A space should appear after this hyphen in the rendered text to maintain word separation.
   
   Example from Genesis 15:13:
   - Word 1: `כִּי־` → `englishLiteral: 'that-'`
   - Word 2: `גֵר` → `englishLiteral: 'sojourner'`
   - Rendered: `"that- sojourner"` (space after hyphen)

1. Transliterate unknown words

Specific names of certain places or materials may be unknown or not fit into any semantic range, such as "Bedolach" (Traditionally Bdellium in Genesis 2:12 and Numbers 11:7, which itself is a transliteration of a Greek transliteration of the Hebrew term). Rabbinic translation takes guesses at what this material could be, but it appears to be genuinely lost to the ages, adding to the exotic mystique.

In these cases, a simple transliteration of the original Hebrew seems the most appropriate, with an accompanying lexicon entry explaining the history.

1. Preserve the Hebrew definite article (ה / ha-) in `englishLiteral`.

The Hebrew definite article is a prefix that makes nouns definite. In `englishLiteral`, always include "the-" when the Hebrew has the definite article prefix:

   - Hebrew: `הָאָרֶץ` (haAretz) with definite article → `englishLiteral: 'the-land'`
   - Hebrew: `הַשָּׁמַיִם` (haShamayim) with definite article → `englishLiteral: 'the-skies'`
   - Hebrew: `אֱלֹהִים` (Elohim) without definite article → `englishLiteral: 'Gods'`
   - Hebrew: `הָאֱלֹהִים` (haElohim) with definite article → `englishLiteral: 'the-Gods'`

   Examples from Genesis:
   - Genesis 1:1: `englishLiteral: 'In-heading, created Gods ↳ the-skies and-↳ the-land'`
   - Genesis 1:18: `englishLiteral: 'And-to-rule in-day, and-in-night, and-to-separate between the-light, and-between the-darkness'`
   - Genesis 6:4: `englishLiteral: 'The-Fallen (Nephilim) were in-land in-days the-those'`

   This preserves the grammatical precision of the Hebrew text where the presence or absence of the definite article carries semantic weight.

## English-Natural Translation Principles

1. Maintain readability while preserving meaning.

   - Balance literal accuracy with natural English expression
   - Ensure the translation remains comprehensible while staying true to the original phrasing

1. Use English word-order.

   - English-Literal Translation: "And-said, Gods, 'Let_be, light.' And-was, light."
   - English-Natural Translation: "And God said, 'Let light be.' And light was."
   - In the data structures this usually means reversing subject-verb order, and moving prefixes like "va-"/"and-" to the subject word

1. Use more natural english punctuation.

  - Break up clauses in English with commas or semicolons while preserving meaning.
  - Use additional line-breaks where necessary, preferring the preservation of the vav- consecutive when possible.

1. Use dashes for underscored Hebrew words and names translated as English phrases.

   - "steadfast_love" -> "seadfast-love"
   - "God_My_Help" -> "God-My-Help"
     - "God-My-Help will inherit my house"
   - "Struggles_With_God" -> "Struggles-With-God"
   - Ideally this should reveal word-plays that involve names. eg. Noah = Rest
     - "God rested Man in the garden"
     - "And he called his name Rest, saying 'At last this one will give us rest.'"

1. Preserve the direct root in English when possible.

   - Like the English-Literal, the root word should be consistently translated, even in strange situations.
   - This is most important for verbs, nouns, and adjectives.
   - Smaller/connective/marker words are allowed more flexibility due to their variety of use and function, especially in the Hebrew.

1. Handle definite articles (Hebrew ה / ha) for readability.

   - When a Hebrew noun is anarthrous (without the definite article ה), `englishNatural` should generally NOT include "the" unless required for English readability.
   - When a Hebrew noun is articular (with the definite article ה), `englishNatural` SHOULD include "the".
   - However, `englishNatural` may adjust article usage for natural English flow while preserving the semantic intent.
   
   Examples from Genesis:
   - Genesis 1:1: `beReshit` (anarthrous) → `englishNatural: 'In the beginning'` (article added for English readability)
   - Genesis 1:1: `haAretz` (articular) → `englishNatural: 'the earth'` (article preserved)
   - Genesis 1:18: `haYom` (articular) → `englishNatural: 'the day'` (article preserved)
   - Genesis 6:4: `haNefilim` (articular) → `englishNatural: 'the Fallen (Nephilim)'` (article preserved)
   - Genesis 6:4: `baAretz` (anarthrous, with preposition) → `englishNatural: 'in the land'` (article added for English readability)

   The goal is to balance Hebrew grammatical precision with natural English expression.

1. Include genderization in cases where it stands out to Hebrew readers.

   - "the Garden, to serve her and to keep her" - Garden is grammatically masculine in Hebrew so this would raise eyebrows and is significant.
   - "My bow has been given in the clouds" - Bow is grammatically feminine, so this would be standard verb-noun agreement, including genderization in all these cases would likely mean even more clunky English
   - Ideally this should yield intuitive significance (or not) in the same/right places for native Hebrew and English readers

1. Adjust pluralization only when necessary and when it does not change the word meaning

  - `panim`/`faces` → `face` - is always grammatically plural in Hebrew, similar to "eyeglasses" or "pants" in english. Distinct from other hebrew words for Eyes/Noses/Mouth, "faces" always refers to someone's face.
  - `three hundreds year` → `three hundred years` - Hebrew grammatically pluralizes the number instead of the object, but meaning is unaffected.