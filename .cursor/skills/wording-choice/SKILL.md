---
name: wording-choice
description: Craft englishLiteral and englishNatural strings for verse translation words. Use when rendering Hebrew/Aramaic/Greek words into English.
---

# Wording Choice

## The Two Columns

### `englishLiteral` — Hyper-literal, Hebrew word order

- Hyphenated prefixes: `and-said`, `in-heading`, `the-land`
- Underscores for compounds: `steadfast_love`
- No filler words — only what the source says
- Must include dictionary root gloss in recognizable form
- `↳` for direct object marker (את)

### `englishNatural` — Readable, Hebrew-tilted English

- English word order
- Dashes for compounds: `steadfast-love`
- Preserve Hebrew connective glosses: `al`→"over", `ki`→"that", `asher`→"which" (no synonym substitution)
- Same root word as literal in natural form
- May add minimal words for readability (articles)

## Verb Rendering

| Tense | Literal | Natural |
|---|---|---|
| Perfect | `have/has + pp` | `have/has + pp` |
| Imperfect | `will + verb` | `will + verb` (poetry: present OK) |
| Waw-consecutive imperfect (vayyiqtol) | Either `and-he-will-...` (morphology) OR `and-he-[past]` (context) — vary by context | past tense ("and he said") |
| Waw-consecutive perfect (weqatal) | `and-he-has-...` (morphology) | future ("and he will...") |
| Imperative | bare form | bare form |

Never use "shall" — always "will".

## Prefix/Suffix Rendering

**Literal**: hyphenate prefixes (`in-heading`), append suffixes (`root-my`, `root-his`)
**Natural**: weave into phrasing (`in the heading`, `my root`, `his root`)

## Grammar Fields

`grammarPrefix`/`grammarSuffix` contain ONLY typographic marks (`.` `,` `;` `:` `"` `'` `!` `?`). Never English words.

Quoted speech: opening `"` on `grammarPrefix`, closing `"` on `grammarSuffix`. Set both `englishLiteral` and `englishNatural` keys.

## Key Conventions

- **Construct state**: literal `noun-of` or just `noun` when complement follows; natural "the [noun] of [complement]"
- **Implied copula**: literal preserves absence; natural signals with comma via `grammarSuffix`
- **Negation**: literal keeps Hebrew order (`not I-will-fear`); natural uses verb-not (`I will fear not`). In longer clauses, "not" stays immediately after the verb rather than drifting to the end of the sentence — e.g. "You will answer not as a witness of falsehood" (not "You will answer as a witness of falsehood not").
- **Cantillation guides punctuation**: atnach→semicolon/comma, silluq→period

## Acceptance Criteria

- [ ] Every `englishLiteral` includes the dictionary root's English word
- [ ] Every `englishNatural` includes the same root word in natural form
- [ ] Verb tense matches morphology
- [ ] Connective glosses preserved in natural (no smoothing)
- [ ] Grammar fields contain only marks
- [ ] `npm test` passes (expectedTranslations match)

## Difficult Wording Choices

See `/src/app/about/difficult-words/page.mdx` for full discussion. Key rule: adjective קָדוֹשׁ uses `root: 'qadosh'` ("holy"); verb קדשׁ uses `root: 'qadash'` ("to sanctify").

## Reference

- Translation style detail: `.cursor/skills/translate-verse/translation-style.md`
- Hebrew grammar: `.cursor/rules/hebrew-grammar.mdc`
