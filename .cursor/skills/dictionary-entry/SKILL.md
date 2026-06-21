---
name: dictionary-entry
description: Create or update Hebrew/Aramaic/Greek dictionary entries in roots.ts. Use when adding a new root, checking for duplicates, or maintaining dictionary integrity.
---

# Dictionary Entry

## Prerequisites

The English gloss must already be chosen and approved (see `.cursor/skills/root-word-mapping/SKILL.md`).

## Entry Structure

```typescript
root_key: {
  hebrew: 'רֹאשׁ',              // Original script
  transliteration: 'rosh',      // ASCII romanization
  englishLiteral: 'head',       // underscores for compounds
  englishNatural: 'head',       // dashes for compounds
  type: 'noun',                 // noun, verb, adjective, adverb, preposition, conjunction...
  description: '...',           // Optional — etymology, usage notes
  related: ['other_key'],       // Same-language links only
  translatedTo: ['greek_key'],  // Hebrew→Greek cross-reference (optional)
}
```

Aramaic uses `cognateHebrew: ['hebrew_key']` instead of `translatedTo`.

## Critical Rules

1. **No duplication** — Search for same Hebrew characters, alternate romanizations, and same English gloss before adding
2. **Noun/verb/adjective = separate entries** linked with `related` (e.g., `zamar` verb + `mizmor` noun)
3. **Conjugations consolidate** — All tenses of the same part-of-speech share one entry
4. **Singular form** for the key — plurals use suffix in verse data (exception: inherently-plural words like `shamayim`)
5. **`related` is same-dictionary only** — Never put Aramaic keys in Hebrew `related`
6. **Compounds**: underscores in `englishLiteral`, dashes in `englishNatural`

## File Locations

- Hebrew: `src/data/dictionary/hebrew/roots.ts`
- Aramaic: `src/data/dictionary/aramaic/roots.ts`
- Greek: `src/data/dictionary/greek/roots.ts`
- Prefixes/suffixes: parallel files in same directories

## Workflow

1. Search target `roots.ts` for duplicates (characters, transliteration variants, English gloss)
2. Determine part of speech — plan separate entries if multiple
3. Find related entries and plan bidirectional `related` links
4. Write the entry with all required fields
5. Update existing entries that should cross-reference this one
6. Run `npx tsc --noEmit` and `npm test`

## Acceptance Criteria

A dictionary entry is NOT complete until:

- [ ] Searched for and confirmed no duplicate exists (Hebrew chars, transliteration, English gloss)
- [ ] Related roots identified and linked bidirectionally
- [ ] User has reviewed and approved the entry (especially for new roots)
- [ ] `npx tsc --noEmit` passes
- [ ] `npm test` passes
