---
name: translate-verse
description: Generate word-by-word scripture translation data for Biblical Hebrew, Aramaic, or Greek verses. Use when the user asks to translate a verse, add a new verse, generate verse data, or work with scripture translation files.
---

# Translate Verse

## AI Usage Rules

1. **Never edit human-reviewed translations** without explicit permission. Check `lastReviewed` in `expectedTranslations`.
2. **All translation decisions are made by a human.** AI scaffolds the data structure and reference material only.
3. Always **run tests** after generating verse data: `npm test`
4. Review the dictionary and add missing roots/prefixes/suffixes when generating verse data.
5. If you find yourself circling back over the same translation uncertainties more than three times, just pick a placeholder and move on. Note this placeholder to the human so they can dig deeper.

## Verse Numbering

Follow the source-language numbering, not modern English conventions. For example, Psalm 8:1 in Hebrew/Masoretic starts with the introductory superscription text, whereas English Bibles typically place that before verse 1. Always use Masoretic numbering for Hebrew, and equivalent source-text numbering for Aramaic and Greek.

## Workflow

1. **Recall the original text** from memory (do not search the internet). Use the most widely accepted text as baseline.
2. **Recall the KJV** for reference only.
3. **Check the dictionary** for existing root translations:
   - Hebrew: `src/data/dictionary/hebrew/roots.ts`
   - Aramaic: `src/data/dictionary/aramaic/roots.ts`
   - Greek: `src/data/dictionary/greek/roots.ts`
   - Also check prefixes/suffixes in the same directories
4. **Add missing dictionary entries** for any roots, prefixes, or suffixes not yet in the dictionary. Check for potential duplicates first.
5. **Generate the verse file** following the data structure below.
6. **Add the verse export** to the chapter's `index.ts`.
7. **Verify each word** against the post-generation checklist (see below).
8. **Run tests** to validate: `npm test` — check output for `console.warn` messages and fix any flagged issues.
9. **Check for TypeScript errors**: run `npx tsc --noEmit` and resolve any errors before finishing. Common issues include `related` fields referencing keys from the wrong dictionary (e.g., Aramaic keys in a Hebrew `related` array).

## Post-Generation Verification Checklist

After generating verse data, review **each word** against this checklist before running tests:

1. **Root word preserved**: Does `englishLiteral` contain the dictionary root's English word (or a recognizable form of it)? Does `englishNatural`?
2. **Prefix/suffix preserved**: For each prefix/suffix, does the verse word's English contain the prefix/suffix dictionary English? (e.g., `le` = "to" — don't substitute "of" or "for")
3. **Compound formatting**: Multi-word concepts use `_` in `englishLiteral` and `-` in `englishNatural` — never bare spaces.
4. **Root type match**: Does the word's `morphology.type` match the dictionary root's `type`? If the word is a noun but the root is a verb, create a separate noun root with `related` linking them.
5. **Dictionary separation**: Noun/verb/adjective forms of the same Hebrew word must be separate dictionary entries linked with `related`. Verse words must reference the entry matching their part of speech.
6. **`related` field scope**: The `related` array must only contain keys from the **same** dictionary. Hebrew roots reference other Hebrew root keys; Aramaic roots reference other Aramaic root keys. For cross-language links, use `cognateHebrew` on the Aramaic side or `translatedTo` for Greek — never put Aramaic/Greek keys in a Hebrew `related` array.

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
    // TranslationWord objects (see below)
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

## TranslationWord Structure

Each word in the `words` array has this shape:

```typescript
{
  hebrew: 'בְּרֵאשִׁ֖ית',     // Original script (use hebrew, aramaic, OR greek)
  transliteration: 'beReshit', // camelCase for prefixed words
  englishLiteral: 'In-heading', // Hyper-literal, source word order
  englishNatural: 'In the heading', // Natural English
  root: 'rosh',               // Dictionary key (must exist in roots.ts)
  prefixes: ['be'],           // Array of dictionary prefix keys
  suffixes: ['it'],           // Array of dictionary suffix keys
  order: 1,                   // Simple number if same across languages
  // OR split order:
  order: {
    hebrew: 2,     // Position in original text
    english: 3,    // Position in English rendering
  },
  morphology: {
    type: 'noun',
    gender: 'feminine',
    number: 'singular',
    state: 'absolute',       // For nouns: absolute, construct, emphatic (Aramaic)
    // For verbs, also include:
    tense: 'perfect',
    person: '3rd',
    stem: 'qal',             // Hebrew: qal, niphal, piel, etc.
                              // Aramaic: peal, peil, pael, haphel, etc.
  },
  grammarSuffix: {           // Punctuation (can differ by language)
    englishLiteral: ',',
    englishNatural: ';',
  },
  lineBreaksBefore: 1,       // Or { english: 1, aramaic: 1 } per-language
  lineBreaksAfter: 1,        // Same
}
```

## Key Translation Patterns

For complete rules, read [translation-principles.md](../../src/data/translation-principles.md).
For Hebrew grammar conventions (implied copula, cantillation punctuation, connective word preservation), see `.cursor/rules/hebrew-grammar.mdc`.

### englishLiteral

- **Source word order** (Hebrew/Aramaic/Greek). The `order` field's source-language value determines position.
- **Hyphenated prefixes**: `and-said`, `in-heading`, `the-land`
- **Underscores** for multi-word concepts from single roots: `steadfast_love`, `Mortal_Man`. Never use bare spaces in compound translations — both in verse words AND dictionary entries.
- **↳ marker** for Hebrew direct object marker (את/et): `englishLiteral: '↳'`
- **No filler words**. Restrict to what the source text says.
- **Root consistency**: if a root is mapped to an English word, every translation of that root must include that same English root in some form (e.g., `arum` → always includes "shrewd": "shrewdness", "was-shrewd", etc.).
- **Preserve definite article** as `the-` prefix when Hebrew ה or Aramaic emphatic state is present.
- Aramaic emphatic state (`-א` ending): render as `noun-the` (e.g., `night-the`, `Days-the`).

### englishNatural

- **English word order**. Use `order.english` to reposition words naturally.
- **Dashes** replace underscores: `steadfast-love`, `Mortal-Man`. Never use underscores or bare spaces — both in verse words AND dictionary entries.
- **Natural punctuation**: commas, semicolons, periods for clause breaks.
- Definite articles follow English norms but respect source when present.
- May add minimal words for readability (e.g., "he was" instead of just "was").
- **Reverse subject-verb** when needed: literal `And-said Gods` → natural `And God said`.

### Word Order

- `order: number` — same position in all languages.
- `order: { hebrew: N, english: M }` — different positions per language.
  - `englishLiteral` follows the source language order (hebrew/aramaic/greek key).
  - `englishNatural` follows the `english` key.
- `order: 0` (or omitting a language key) hides the word from that rendering.

### grammarSuffix / grammarPrefix

- Language-specific punctuation: `{ englishLiteral: ',', englishNatural: ';' }`
- Aramaic sof pasuq: `{ aramaic: '׃', englishLiteral: '.' }`
- Can include quotes: `{ englishNatural: "'" }`
- Only on the `TranslationWord`, never embedded in the word text itself.

### lineBreaks

- `lineBreaksBefore: 1` or `lineBreaksAfter: 1` — applies to all languages.
- Per-language: `lineBreaksBefore: { english: 1 }` — only breaks in English rendering.
- Typically used for verse structure, poetic formatting, or clause separation.

### Prefixes and Suffixes

- Values are **dictionary keys** (e.g., `'ve'`, `'ha'`, `'be'`, `'im'`, `'it'`, `'a'`, `'ohi'`).
- The English rendering of these morphemes is baked into `englishLiteral`/`englishNatural`.
- Transliterations use **camelCase** to show prefix boundaries: `beReshit`, `veEt`, `haShamayim`.

### Aramaic-Specific

- Use `aramaic` field instead of `hebrew`.
- Emphatic state (definiteness via `-א` suffix) → `state: 'emphatic'`, `suffixes: ['a']`.
- Aramaic stems: `peal`, `peil`, `pael`, `haphel`, `aphel`, etc. (not Hebrew `qal`/`piel`).
- `englishLiteral` for emphatic nouns: postfix `the` as `noun-the` (e.g., `skies-the`).
- `englishNatural` for emphatic nouns: prefix `the` naturally (e.g., `the skies`).

### expectedTranslations

This is a **doublecheck** — the built string from `buildVerseText()` must match exactly.

- `hebrew`/`aramaic`/`greek`: Full original text, source word order, words joined with spaces (no space after maqaf `־` or hyphen in transliteration).
- `transliteration`: Source word order, no grammar/punctuation.
- `englishLiteral`: Source word order, with grammar suffixes/prefixes, hyphens preserved.
- `englishNatural`: English word order, natural punctuation.
- `kjv`: KJV rendering for reference.

Carefully construct these by mentally walking through the word list in the appropriate order and joining all parts (grammarPrefix + word + grammarSuffix + spacing).

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
- Aramaic: `src/data/scripture/daniel/daniel-7/daniel-7-13.ts`
- Full translation rules: `src/data/translation-principles.md`
- Dictionary README: `src/data/dictionary/README.md`
- Full type definitions: `src/types.ts`
