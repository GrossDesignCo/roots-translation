# Translation Style Reference

Conventions for `englishLiteral` and `englishNatural` rendering. Read by the agent when making translation decisions — not needed for structural/schema questions.

For complete rules, read [translation-principles.md](../../src/data/translation-principles.md).
For Hebrew grammar conventions (implied copula, cantillation punctuation, connective word preservation), see `.cursor/rules/hebrew-grammar.mdc`.
For **fixed Hebrew phrases** whose English discourse equivalent is conventional (e.g. עַל־כֵּן), see **[hebrew-idioms.md](../../src/data/dictionary/hebrew/hebrew-idioms.md)** in the Hebrew dictionary folder.

## englishLiteral

- **Source word order** (Hebrew/Aramaic/Greek). The `order` field's source-language value determines position.
- **Hyphenated prefixes**: `and-said`, `in-heading`, `the-land`
- **Underscores** for multi-word concepts from single roots: `steadfast_love`, `Mortal_Man`. Never use bare spaces in compound translations — both in verse words AND dictionary entries.
- **↳ marker** for Hebrew direct object marker (את/et): `englishLiteral: '↳'`
- **No filler words**. Restrict to what the source text says.
- **Root consistency**: if a root is mapped to an English word, every translation of that root must include that same English root in some form (e.g., `arum` → always includes "shrewd": "shrewdness", "was-shrewd", etc.).
- **Preserve definite article** as `the-` prefix when Hebrew ה or Aramaic emphatic state is present.
- Aramaic emphatic state (`-א` ending): render as `noun-the` (e.g., `night-the`, `Days-the`).

## englishNatural

- **English word order**. Use `order.english` to reposition words naturally.
- **Dashes** replace underscores: `steadfast-love`, `Mortal-Man`. Never use underscores or bare spaces — both in verse words AND dictionary entries.
- **Natural punctuation**: commas, semicolons, periods for clause breaks.
- Definite articles follow English norms but respect source when present.
- May add minimal words for readability (e.g., "he was" instead of just "was").
- **Reverse subject-verb** when needed: literal `And-said Gods` → natural `And God said`.

### Readable, but Hebrew-tilted (especially poetry / Psalms)

`englishNatural` is **not** the same as idiomatic contemporary English. Aim for a **middle path**:

1. **Keep Hebrew connectives stable** — Follow `.cursor/rules/hebrew-grammar.mdc` (**Connective Word Preservation**). In natural as in literal, keep the same gloss for `al`/`over`, `ki`/`that`, `asher`/`which`, `be`/`in`, `le`/`to`, etc. Do **not** swap them for smoother but different English (e.g. `al` → "upon", `ki` → "for" / "because") just to sound more colloquial. That training is for readers learning Hebrew conceptual wiring.

2. **Clause-level reordering is allowed** — Inside those constraints, use `order.english` so phrases read as **English clauses** (subject-verb, sensible phrase breaks, cantillation-informed pauses). You are avoiding **raw Hebrew linear copy** in natural, not avoiding **Hebrew vocabulary** for small words.

3. **Literary / older English word order when it tracks Hebrew better** — When fully idiomatic English would scramble the Hebrew **sequence** of predication, negation, or modality, prefer **intelligible but slightly archaic or formal** order if it flows better to the reviewer than either (a) pure Hebrew mirror or (b) full modern smoothing. Examples (illustrative, not mandatory): placing negation or a trailing "not" closer to Hebrew stress than "I will not ...", or clause orders that sound Jacobean but remain clear. **Human reviewers** choose; AI should scaffold consistent glosses and flag tradeoffs rather than "fixing" toward newspaper English.

   **Negation placement rule:** In `englishNatural`, "not" follows **immediately after the verb** (or verb phrase), never at the distant end of the clause. Short: "You will murder not." Longer: "You will answer not as a witness of falsehood against your friend." This keeps the negation semantically bound to the verb it modifies.

4. **Imperfect in `englishLiteral`** — Always `I-will-...` / `you-will-...` (preserves the imperfect's aspect vagueness). In `englishNatural` (poetry/psalms): present tense ("I see") allowed when it flows better; waw-consecutive imperfect (`va` + imperfect): natural renders as past ("and I slept"); default to **will** in prose. See `.cursor/rules/hebrew-grammar.mdc` (Imperfect Tense, Waw-Consecutive).

5. **Registered idioms** — For multi-word Hebrew formulas (e.g. עַל־כֵּן), see **[hebrew-idioms.md](../../src/data/dictionary/hebrew/hebrew-idioms.md)** (`src/data/dictionary/hebrew/`): morpheme-accurate **literal**, phrase-level **natural** options approved for the project.

When in doubt: **preserve connector glosses**; **adjust order and punctuation** for breath and clarity; **do not** silently replace Hebrew function words with English near-synonyms in `englishNatural` **except** where [hebrew-idioms.md](../../src/data/dictionary/hebrew/hebrew-idioms.md) explicitly registers a whole-phrase natural equivalent.
