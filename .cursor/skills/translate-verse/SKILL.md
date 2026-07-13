---
name: translate-verse
description: Generate word-by-word scripture translation data for Biblical Hebrew, Aramaic, or Greek verses. Use when the user asks to translate a verse, add a new verse, generate verse data, review or edit existing verse files, or work with scripture translation data.
---

# Translate Verse

## AI Usage Rules

1. **Always ask before editing human-reviewed translations**. Check `lastReviewed` in `expectedTranslations`.
2. **All translation decisions are made by a human.** AI scaffolds the data structure and reference material only.
3. Always **run tests** after generating verse data: `npm test`
4. Review the dictionary and add missing roots/prefixes/suffixes when generating verse data.
5. If you find yourself circling back over the same translation uncertainties more than three times, just pick a placeholder and move on. Note this placeholder to the human so they can dig deeper.
6. **Work deliberately.** Complete each workflow step fully before moving to the next. Do not skip ahead or combine steps. When building `expectedTranslations` strings, assemble each one word-by-word from the word list — do not write them from memory. After assembling, re-read every `grammarPrefix` and `grammarSuffix` in the word list and confirm each mark appears in the output at the correct position.

**Reviewing or revising** existing verses uses the same rules below (dictionary, `englishLiteral` / `englishNatural`, connective preservation, marks-only grammar fields). You do not need a separate skill — only respect `lastReviewed` and explicit human permission when changing reviewed text.

## Verse Numbering

Follow the source-language numbering, not modern English conventions. For example, Psalm 8:1 in Hebrew/Masoretic starts with the introductory superscription text, whereas English Bibles typically place that before verse 1. Always use Masoretic numbering for Hebrew, and equivalent source-text numbering for Aramaic and Greek.

**Psalm superscriptions** use **`verse: 0`** (file name `psalms-{N}-0.ts`). The Masoretic verse 1 of a psalm with a superscription is stored in the `verse: 0` file; subsequent verse numbers shift accordingly. See `src/data/scripture/psalms/psalms-8/psalms-8-0.ts` for an example.

## Received Text (Source Hebrew / Aramaic / Greek)

**Do not recall verse text from memory.** Always **look up and confirm** the source text before generating or revising word data.

### What “received text” means here

Work from the **standard received text** that mainline English Bibles translate today — the text a reader would encounter in ESV, NIV, NASB, NKJV, RSV, etc. For Hebrew Bible passages, that is the **Masoretic Text (MT)** as represented by the **Leningrad Codex** (BHS / BHS-derived editions).

**Include every word** in that received text. Do not omit material that mainline English Bibles include (e.g. explicit **`לֹא`**, **`לְכַף־רַגְלָהּ`**, doublets, or parallel clauses present in MT).

**Sidestep entirely:**
- Dead Sea Scrolls variants vs. MT
- Septuagint (LXX) vs. MT debates
- Apparatus “prefer other manuscript” notes
- Conjectural emendations
- “Original Hebrew probably said X” reconstructions from English tradition

If a word appears in the received MT, it belongs in our data — even when KJV wording obscures it.

### How to verify (before step 3)

1. **Look up the verse** in a received-text source (do this **before** building the word list):
   - Hebrew MT: [Mechon Mamre](https://www.mechon-mamre.org/) — e.g. `https://www.mechon-mamre.org/p/pt/pt0108.htm` for Genesis 8
   - Or cross-check an adjacent verse already in this repo (`expectedTranslations.hebrew` in the same chapter)
2. **Copy the full pointed Hebrew** (or Greek/Aramaic for NT/Aramaic passages) into a scratch line and read it word-by-word.
3. **Cross-check KJV** (or another mainline English Bible) only for **verse boundaries, clause breaks, and meaning** — **not** as a substitute for the Hebrew source. KJV English can hide MT words (8:9 is a cautionary example: KJV “found no rest for the sole of her foot” maps to MT **`וְלֹא־מָצְאָה… לְכַף־רַגְלָהּ`**, not to a different Hebrew clause).
4. **After generating**, confirm `expectedTranslations.hebrew` matches the lookup **exactly** (every word, prefix, suffix, maqaf).

### When memory and lookup disagree

**Trust the lookup.** Fix the data; do not supply negation, objects, or phrases via `grammarPrefix` / `grammarSuffix` unless they correspond to real source-language words.

## Workflow

1. **Confirm the received source text** (see [Received Text](#received-text-source-hebrew--aramaic--greek) above). Write out or paste the full verse before proceeding.
2. **Recall or look up the KJV** for reference only (verse scope, clause sense, traditional wording).
3. **Check the dictionary** for existing root translations:
   - Hebrew: `src/data/dictionary/hebrew/roots.ts`
   - Aramaic: `src/data/dictionary/aramaic/roots.ts`
   - Greek: `src/data/dictionary/greek/roots.ts`
   - Also check prefixes/suffixes in the same directories
   - Hebrew multi-word idioms: `src/data/dictionary/hebrew/hebrew-idioms.md` (see workflow step 4)
4. **Check [hebrew-idioms.md](../../src/data/dictionary/hebrew/hebrew-idioms.md)** (Hebrew dictionary phrasebook) if the verse contains a known multi-word formula (e.g. עַל־כֵּן).
5. **Add missing dictionary entries** for any roots, prefixes, or suffixes not yet in the dictionary. Before adding a root, search `roots.ts` for the same lemma under another key (alternate romanization is a common source of duplicates).
6. **Generate the verse file** following the file structure and data schema below (see also [data-schema.md](data-schema.md) for field-level detail).
7. **Add the verse export** to the chapter's `index.ts`.
8. **Verify each word** against the post-generation checklist (see below). When assigning `order`, **condense** to a single number wherever Hebrew/source position and English-natural position match (see [data-schema.md](data-schema.md) Word Order).
9. **Run tests** to validate: `npm test` — check output for `console.warn` messages and fix any flagged issues.
10. **Check for TypeScript errors**: run `npx tsc --noEmit` and resolve any errors before finishing. Common issues include `related` fields referencing keys from the wrong dictionary (e.g., Aramaic keys in a Hebrew `related` array).

## Post-Generation Verification Checklist

After generating verse data, review **each word** against this checklist before running tests:

1. **Root word preserved**: Does `englishLiteral` contain the dictionary root's English word (or a recognizable form of it)? Does `englishNatural`?
2. **Prefix/suffix preserved**: For each prefix/suffix, does the verse word's English contain the prefix/suffix dictionary English? (e.g., `le` = "to" — don't substitute "of" or "for")
3. **Compound formatting**: Multi-word concepts use `_` in `englishLiteral` and `-` in `englishNatural` — never bare spaces.
4. **Root type match**: Does the word's `morphology.type` match the dictionary root's `type`? If the word is a noun but the root is a verb, create a separate noun root with `related` linking them.
5. **Dictionary separation**: Noun/verb/adjective forms of the same Hebrew word must be separate dictionary entries linked with `related`. Verse words must reference the entry matching their part of speech.
6. **`related` field scope**: The `related` array must only contain keys from the **same** dictionary. Hebrew roots reference other Hebrew root keys; Aramaic roots reference other Aramaic root keys. For cross-language links, use `cognateHebrew` on the Aramaic side or `translatedTo` for Greek — never put Aramaic/Greek keys in a Hebrew `related` array.
7. **`order` condensed when possible**: If a word's index in **source order** and its index in **English natural** order are the same, use **`order: N`** (one number), not `order: { hebrew: N, english: N }`. Use the **object form only** when those indices differ. For **אֶת־** (**`↳`**), never use **`english: 0`** — see [data-schema.md](data-schema.md) and `.cursor/rules/translation-data.mdc`.
8. **Finite Hebrew verbs**: set **`morphology.stem`** and **`morphology.tense`** on every finite verb (including imperatives; participles use **`tense: 'participle'`** plus stem).
9. **Inflected surfaces**: match `root` / `prefixes` / `suffixes` to comparable words already in the data; do not invent a second decomposition pattern for the same kind of form.
10. **Quoted speech marks**: If the verse contains dialogue or reported speech, verify that opening `"` (via `grammarPrefix`) and closing `"` (via `grammarSuffix`) appear in **both** `englishLiteral` and `englishNatural` expected strings. A missing quote in one column but not the other is the most common error.
11. **Received text match**: Does `expectedTranslations.hebrew` (or `greek` / `aramaic`) match the verified received source **word-for-word**?

## File Structure

Verses live at: `src/data/scripture/{book}/{book}-{chapter}/{book}-{chapter}-{verse}.ts`

```typescript
import { Verse } from '@/types';

export const genesis_1_1: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 1,
    verse: 1,
  },
  words: [
    // TranslationWord objects — see data-schema.md for field reference
  ],
  expectedTranslations: {
    hebrew: '...', // Full original text in source word order
    // OR aramaic: '...' for Aramaic passages, OR greek: '...' for Greek
    transliteration: '...', // Full transliteration in source word order
    englishLiteral: '...', // Hyper-literal in source word order
    englishNatural: '...', // Natural English in English word order
    kjv: '...', // KJV for reference
  },
};
```

## Translation Style

For `englishLiteral` / `englishNatural` conventions, poetry tilting, and connective preservation rules, see [translation-style.md](translation-style.md).

## Dictionary Entry Structure

### Noun/verb/adjective separation

Noun, verb, and adjective forms of the same Hebrew word must be **separate dictionary entries** linked with `related`. Verse words must reference the root matching their part of speech.

```typescript
zamar: {
  englishLiteral: 'to make_melody',
  type: 'verb',
  related: ['mizmor'],
},
mizmor: {
  englishLiteral: 'melody',
  type: 'noun',
  related: ['zamar'],
},
```

A verse word with `morphology.type: 'noun'` should reference `mizmor`, not `zamar`.

### Root entries (Hebrew)

```typescript
rosh: {
  hebrew: 'ראשׁ',
  transliteration: 'rosh',
  englishLiteral: 'head',
  englishNatural: 'head',
  type: 'noun',
  related: ['otherRoot'],           // Optional
  translatedTo: ['greekRootKey'],   // Optional
  description: '...',               // Optional
}
```

### Root entries (Aramaic)

```typescript
melekh: {
  aramaic: 'מלך',
  transliteration: 'melekh',
  englishLiteral: 'king',
  englishNatural: 'king',
  type: 'noun',
  description: '...',
  cognateHebrew: ['melekh'] as const, // Link to Hebrew cognate
}
```

## Reference Examples

Study these files for patterns before generating:
- Hebrew: `src/data/scripture/genesis/genesis-1/genesis-1-1.ts`
- Condensed vs split **`order`**: `src/data/scripture/job/job-1/job-1-8.ts` (object only where יהוה precedes "said" in English natural; otherwise `order: N`); interrogative **`הֲלֹא־` / `אַתָּה`**: `src/data/scripture/job/job-1/job-1-10.ts`
- Aramaic: `src/data/scripture/daniel/daniel-7/daniel-7-13.ts`
- Full translation rules: `src/data/translation-principles.md`
- Dictionary README: `src/data/dictionary/README.md`
- Hebrew idiom phrasebook: `src/data/dictionary/hebrew/hebrew-idioms.md`
- Full type definitions: `src/types.ts`

## Detailed References

- **Data schema** (TranslationWord fields, word order, grammar fields, expectedTranslations assembly): [data-schema.md](data-schema.md)
- **Translation style** (englishLiteral/Natural conventions, poetry, connective preservation): [translation-style.md](translation-style.md)
- **Translation data guardrails** (auto-attached rule): `.cursor/rules/translation-data.mdc`
- **Hebrew grammar conventions** (auto-attached rule): `.cursor/rules/hebrew-grammar.mdc`

## Sub-Skills (focused guidance for specific translation subtasks)

- **Root word mapping** (choosing 1:1 English for a new root): `.cursor/skills/root-word-mapping/SKILL.md`
- **Dictionary entry** (creating/updating roots.ts entries): `.cursor/skills/dictionary-entry/SKILL.md`
- **Word order** (assigning order values, condensed vs split): `.cursor/skills/word-order/SKILL.md`
- **Wording choice** (crafting englishLiteral/Natural per word): `.cursor/skills/wording-choice/SKILL.md`
