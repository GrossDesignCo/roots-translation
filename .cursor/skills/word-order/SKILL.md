---
name: word-order
description: Determine word order assignments for verse translation data. Use when assigning order values or resolving word sequence issues.
---

# Word Order

## How Order Works

`order` on each `TranslationWord` controls rendered position:
- **Hebrew/transliteration/englishLiteral columns** → sorted by source-language key (`hebrew`)
- **englishNatural column** → sorted by `english` key

## Two Forms

**Condensed** `order: N` — word is Nth in BOTH Hebrew and English natural. Preferred default.

**Split** `order: { hebrew: N, english: M }` — positions differ. Use ONLY when needed:
- Subject-verb inversion (Hebrew verb-subject → English subject-verb)
- Direct object marker repositioning
- Interrogative reordering

Always collapse `{ hebrew: N, english: N }` to just `N`.

## Common Patterns

**Subject-verb inversion**: verb gets `{ hebrew: 1, english: 2 }`, subject gets `{ hebrew: 2, english: 1 }`. Conjunction "And" moves to subject in `englishNatural`.

**Direct object marker (את)**: `englishLiteral: '↳'`, `englishNatural: ''`. Gets a unique `english` slot (never `english: 0`).

**Negation**: Literal preserves Hebrew order (לֹא before verb). Natural uses "verb not" pattern ("I will fear not").

## Rules

- `englishLiteral` ALWAYS follows Hebrew order
- Every `hebrew` value must be unique and contiguous (1..N)
- Every `english` value must be unique and contiguous (1..N)
- No `english: 0` on any word

## Acceptance Criteria

- [ ] All order values present, unique, and contiguous in both columns
- [ ] Condensed form used wherever hebrew == english
- [ ] Split form only where they genuinely differ
- [ ] Subject-verb inversions handle conjunction placement correctly
- [ ] `npm test` passes (expectedTranslations match rendered output)

## Reference Examples

- Subject-verb swap: `src/data/scripture/job/job-1/job-1-8.ts`
- Simple: `src/data/scripture/genesis/genesis-1/genesis-1-1.ts`
