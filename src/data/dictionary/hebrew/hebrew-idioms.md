# Hebrew idiom phrasebook (multi-word formulas)

Some Hebrew **sequences** are fixed discourse units: each part has a stable dictionary gloss, but English normally expresses the **whole** with one connective (“therefore,” “that is why”). This file registers **approved** ways to render those units so translators and tools stay aligned.

Part of the **Hebrew dictionary** material alongside `roots.ts`, `prefixes.ts`, and `suffixes.ts` (this file is human-readable reference, not imported by the app).

## How to use this with verse data

1. **`englishLiteral`** — Keep **morpheme-by-morpheme** glosses from the dictionary (`al` → `over-`, `ken` → `so`, etc.), in Hebrew order, unless a verse uses a deliberate exception documented elsewhere.

2. **`englishNatural`** — For idioms **listed below**, you may use the **phrase-level** English in the “Natural options” column. That often means:
   - reordering with `order.english`, and/or
   - splitting the English idiom across the same two `TranslationWord` entries (e.g. first word `So`, second `moreover`),

   even when a single English word does not map 1:1 to each Hebrew morpheme. **Do not** invent ad hoc synonyms for connectives outside this list without updating the dictionary or this table.

3. **Connective preservation** (`.cursor/rules/hebrew-grammar.mdc`) still applies to **non-idiomatic** uses of `al`, `ki`, etc. This phrasebook marks **exceptions** only for the listed collocations.

4. **Grow the list** — Add a row when you commit to a standard rendering for another formula. Prefer one primary natural gloss per idiom per book or per corpus for consistency.

---

## Table (registered formulas)

| Hebrew | Typical glosses (literal pieces) | Natural options (discourse) | Notes |
|--------|----------------------------------|----------------------------|--------|
| **עַל־כֵּן** / **עַל כֵּן** | `over-` + `so` (`al-`, `ken`) | **Therefore**; **So moreover**; **That is why**; **For this reason** | “Therefore” chain. *Corpus:* Gen 2:24, 10:9, 11:9; Ps 1:5; Jon 4:2. |
| **כִּי אִם** / **כִּי־אִם** | `that` + `if` (two words) | **but rather**; **only**; **except**; (keep **that if** if Hebrew-tilted) | Exclusion / “nothing but.” *Corpus:* Ps 1:2, 1:4; Gen 15:4. Project may gloss word-by-word (`That` + `if`) in natural — still register phrase sense here. |
| **אַף כִּי** | `Indeed` / `even` + `that-` (morphemes depend on `af` gloss) | **Indeed that**; **Is it so that** (rhetorical); **Even though** (if context fits) | *Corpus:* Gen 3:1 (serpent’s opening). Sense is emphatic / challenging, not causal *ki*. |
| **גַּם כִּי־** | `Also` + `that-` | **Even though**; **Yea, though**; **Also that** (Hebrew-tilted, see Ps 23:4 data) | Concessive “even if / although.” *Corpus:* Ps 23:4. |
| **לְמַעַן** | `to-sake-of` (+ following clause) | **for the sake of**; **in order that**; **so that** | Purpose / result; often spans multiple words. *Corpus:* Ps 8:2, Ps 23:3; Ex 4:5. |
| **מֵעַתָּה וְעַד־עוֹלָם** | `from-now` + `and-until-forever` | **from now forever**; **from this time forward forever** | *Corpus:* Ps 131:3. |
| **עַל־פְּנֵי** / **מֵעַל פְּנֵי** | `over-face-of` / `from-over face-of` | **on the surface of**; **upon the face of**; **across the face of**; **from upon the face of** | Fixed spatial idiom. *Corpus:* Gen 6:1, 6:7, 11:4, 11:8–9; Prov 8:27; Gen 4:14. |
| **לִפְנֵי** (esp. **לִפְנֵי יְהוָה**) | `to-face-of` | **before**; **in the presence of** | *Corpus:* Gen 10:9–11; Gen 6:11; Ex 4:21, 7:10; Prov 8:25. |
| **בַּיּוֹם הַהוּא** | `in-day` + `the-that` | **on that day**; **in that day** | *Corpus:* Gen 15:18. |
| **וְעַתָּה** | `and-now` | **And now**; **But now** | Discourse pivot (consequence / new move). *Corpus:* Gen 3:22, 4:11, 11:6; Jon 4:2. |
| **הִנֵּה** | `behold` (dictionary `hineh`) | **Behold**; **Look**; **Here** | Presentative; often starts clause. *Corpus:* widespread (e.g. Gen 1:29, 15:4–17, Ex 3:7, Isa 6:7, Ezek 1:4). |
| **אָנָּא** | `please` / `I-beg` (per `anna` root) | **Please**; **I beg** | *Corpus:* Jon 1:14 (with **אַל־נָא**). |
| **אַל־נָא** | `not-` + `please` | **please not**; **do not please** | Polite negative entreaty. *Corpus:* Jon 1:14. |
| **…־נָא** on imperative | imperative + `please` | **please** (English often fronted: “Please, look”) | *Corpus:* Gen 15:5 הַבֶּט־נָא; Jon 4:3 קַח־נָא. |
| **הֲלוֹא** / **וַהֲלוֹא** | `is_it_not` / `and-is_it_not` | **Is not**; **Is it not** | Rhetorical question. *Corpus:* Jon 4:2; Gen 4:7. |
| **מָה־** … (exclamation + adjective) | `what-` + adjective | **what** + adjective (e.g. “what majestic”) | Exclamatory *mah*; avoid substituting **how** in natural if aligning with literal *what-* (Ps 8:1 / 8:9). |
| **מֵעוֹלָם** | `from-forever` / `from-ever` | **of old**; **from of old**; **long ago** | *Corpus:* Gen 6:4; Prov 8:23. |
| **מִקֶּדֶם** | `from-east` / `from-prior` | **from the east**; **eastward**; **in the east** (context: Gen 11:2 journey); **from of old** only if context is temporal | **Polyseous:** spatial “east” vs archaic “aforetime” — decide per clause. *Corpus:* Gen 11:2, 3:24; Jon 4:5. |

---

## Corpus audit (`public/scripture`)

Hebrew **`.original.md`** files under `public/scripture/` are generated from verse data. A pass over those files surfaced the collocations in the table above (plus many single-word function words not listed). **Highest leverage** for the phrasebook were:

- **Discourse adverbs / pivots:** עַל־כֵּן, וְעַתָּה, הִנֵּה  
- **Conditional–exceptive chains:** כִּי אִם, אַף כִּי, גַּם כִּי־  
- **Spatial formulae:** עַל־פְּנֵי, מֵעַל פְּנֵי, לִפְנֵי (+ divine name)  
- **Purpose:** לְמַעַן  
- **Polite / rhetorical:** ־נָא, אָנָּא, אַל־נָא, הֲלוֹא  
- **Time:** בַּיּוֹם הַהוּא, מֵעַתָּה וְעַד־עוֹלָם, מֵעוֹלָם, מִקֶּדֶם (sense split)

**Not elevated to idiom rows** (yet): bare **כִּי** alone, **וַיְהִי**, **כָּל־** constructs — extremely frequent; handle with grammar rules and dictionary unless a **fixed** sub-phrase gets a stable English rendering project-wide.

---

## Imperfect verbs (related, not a fixed phrase)

Hebrew **imperfect** is still tagged `imperfect` in morphology. **`englishLiteral`:** always `I-will-…` / `you-will-…`. **`englishNatural`:** default **will**; in **poetry / psalms**, **present** (“I see”) is allowed when it flows better — see `.cursor/rules/hebrew-grammar.mdc` (Imperfect Tense). Example: Psalm 8:3.

---

## See also

- [translation-principles.md](../../translation-principles.md) — English-natural goals  
- `.cursor/rules/hebrew-grammar.mdc` — Connectives, cantillation, imperfect  
- `.cursor/skills/translate-verse/SKILL.md` — Workflow and data shape  
