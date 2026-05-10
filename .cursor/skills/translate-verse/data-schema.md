# Data Schema Reference

Detailed reference for `TranslationWord` shape, word order, grammar fields, and `expectedTranslations` assembly. Read by the agent during verse generation — not needed for planning or review.

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
  order: 1,                   // Prefer this when source index === English natural index
  // OR split order (when Hebrew vs English indices differ):
  order: {
    hebrew: 2,     // Position in original text (used for original, transliteration, englishLiteral)
    english: 3,    // Position in English natural rendering only
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

## Word Order

Rendering uses `sortWords()` (see `src/utils/sortWords.ts`): a plain **`order` number applies to every word-order key** — the same integer sorts **original / transliteration / `englishLiteral`** (via `hebrew` / `aramaic` / `greek`) **and** **`englishNatural`** (via `english`). So:

- **`order: N` (single number)** — Use when this token's **source sequence index** and its **English natural sequence index are equal**. This is the preferred default: one field, no duplicated integers. Example: most words in `src/data/scripture/job/job-1/job-1-8.ts` after the opening verb/subject swap.
- **`order: { hebrew?: …, english?: …, … }`** — Use when indices **differ** (e.g. `וַיֹּאמֶר` / `יְהוָה` → natural "And YHWH said"), or for Aramaic/Greek splits (`aramaic` / `greek` keys as in `TranslationWord` in `src/types.ts`).
  - **`englishLiteral`** is still built in **source** word order (`hebrew` / `aramaic` / `greek` slot).
  - **`englishNatural`** follows the **`english`** slot.

**Workflow:** After the first pass, scan for `order` objects where `hebrew === english` (and no other keys differ) and **collapse** to `order: N`. Keep the object only where reordering is required.

**Interrogative הֲלֹא־ + אַתָּה ("Have you not …"):** Hebrew runs **particle + pronoun** (`הֲלֹא־`, then `אַתָּה`), but idiomatic English wants **auxiliary + pronoun + "not"**. Use **split `order`** on the **`english`** slot so **`englishNatural`** sorts as **Have you → not → verb** (e.g. **`אַתָּה`** earlier with **`englishNatural`** **`Have you`**, **`הֲלֹא־`** with **`not`**); **`englishLiteral`** stays in **Hebrew/source order** (see `resolveWordOrderKey`: **`englishLiteral`** uses the **`hebrew`** order key, not **`english`**). See `src/data/scripture/job/job-1/job-1-10.ts`.

**Direct object marker (אֶת־):** **`englishLiteral: '↳'`**, **`englishNatural: ''`** (skipped in `buildVerseText`). Assign **`english`** **uniquely** across the verse; **`אֶת`** is the slot **immediately before** the object in natural order (**usually `objectEnglish - 1`**), so it still sorts directly ahead of its object. Prefer **`order: N`** when **`hebrew === english`**, else **`order: { hebrew, english }`**. Do **not** use **`english: 0`** — see `.cursor/rules/translation-data.mdc`. A plain **`order: 0`** still hides the word from **all** render paths (`TranslationWord.order` in `src/types.ts`).

## grammarSuffix / grammarPrefix

- **Marks only** — punctuation, quotes, and similar typographic/script characters. Do **not** put English words or phrases here; use `englishLiteral` / `englishNatural` (and `order.english` when needed) for lexical material. See `.cursor/rules/hebrew-grammar.mdc` (Grammar Prefix and Suffix: Marks Only).
- Language-specific punctuation: `{ englishLiteral: ',', englishNatural: ';' }`
- Aramaic sof pasuq: `{ aramaic: '׃', englishLiteral: '.' }`
- Quotation marks used as punctuation (dialogue, etc.) are allowed — same marks-only rule as commas and periods.
- Only on the `TranslationWord`, never embedded in the word text itself.
- **Quoted speech:** Opening `"` typically goes on `grammarPrefix` of the first quoted Hebrew word; closing `"` (often with period or comma: `.'"`, `,"`) on `grammarSuffix` of the last word inside the quote. **`buildVerseText` emits quotes per language key** — if you set only `grammarPrefix: { englishLiteral: '"' }` and omit `englishNatural`, quotes disappear from the natural column. Default is to duplicate the same typographic marks on both keys unless you deliberately style literal vs natural differently.
- After edits, verify both columns with `buildVerseText(..., 'englishLiteral' | 'englishNatural', …)` or run `npm run test` (`verseValidation` compares `expectedTranslations` to generated strings).

## lineBreaks

- `lineBreaksBefore: 1` or `lineBreaksAfter: 1` — applies to all languages.
- Per-language: `lineBreaksBefore: { english: 1 }` — only breaks in English rendering.
- Typically used for verse structure, poetic formatting, or clause separation.

## Prefixes and Suffixes

- Values are **dictionary keys** (e.g., `'ve'`, `'ha'`, `'be'`, `'im'`, `'it'`, `'a'`, `'ohi'`).
- The English rendering of these morphemes is baked into `englishLiteral`/`englishNatural`.
- Transliterations use **camelCase** to show prefix boundaries: `beReshit`, `veEt`, `haShamayim`.

## Aramaic-Specific

- Use `aramaic` field instead of `hebrew`.
- Emphatic state (definiteness via `-א` suffix) → `state: 'emphatic'`, `suffixes: ['a']`.
- Aramaic stems: `peal`, `peil`, `pael`, `haphel`, `aphel`, etc. (not Hebrew `qal`/`piel`).
- `englishLiteral` for emphatic nouns: postfix `the` as `noun-the` (e.g., `skies-the`).
- `englishNatural` for emphatic nouns: prefix `the` naturally (e.g., `the skies`).

## expectedTranslations

This is a **doublecheck** — the built string from `buildVerseText()` must match exactly.

- `hebrew`/`aramaic`/`greek`: Full original text, source word order, words joined with spaces (no space after maqaf `־` or hyphen in transliteration).
- `transliteration`: Source word order, no grammar/punctuation.
- `englishLiteral`: Source word order, with grammar suffixes/prefixes, hyphens preserved.
- `englishNatural`: English word order, natural punctuation.
- `kjv`: KJV rendering for reference.

**Assembly procedure** — do not shortcut:
1. Sort words by the relevant order key (source-language key for hebrew/transliteration/englishLiteral; `english` key for englishNatural)
2. For each word in sorted order, emit: `grammarPrefix` text + word text + `grammarSuffix` text + space (no space after maqaf `־` or hyphen-joined transliteration)
3. After assembling, **re-read every `grammarPrefix` and `grammarSuffix` in the word list** and confirm each mark appears in the output at the correct position
4. Trim trailing space; the result is the expected string
