# Dictionaries

Dictionaries are organized as typescript objects containing distinct and related roots.

## Hebrew reference (non-TypeScript)

- **[hebrew/hebrew-idioms.md](./hebrew/hebrew-idioms.md)** — Multi-word formulas and approved `englishLiteral` / `englishNatural` discourse options (phrasebook for verse work). Linked from `.cursor/skills/translate-verse/SKILL.md` and [translation-principles.md](../translation-principles.md).

## Grouping/Relationships between roots

Noun/Verb/Adjective/etc forms of words should be distinct entries, flagged with a `related` key linking them together.

Eg. Hebrew "raqia" (hammering-out), a noun, and "raqa" (to hammer-out), a verb are distinct entries.

Conjugations/states/tenses should be consolidated under the same root.

Eg. "he-hammered-it-out" and "it-will-be-hammered-out" and "to hammer-out" in verses should all reference the same root, `raqa`.