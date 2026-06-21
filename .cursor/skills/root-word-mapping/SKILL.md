---
name: root-word-mapping
description: Choose a 1:1 English gloss for a new Hebrew/Aramaic/Greek root word. Use when adding a new dictionary root or choosing an English translation for an unfamiliar root.
---

# Root Word Mapping

One Hebrew root → one English root word → used EVERYWHERE. The strangeness is the point: readers encounter Hebrew conceptual wiring through English.

## Decision Framework (priority order)

1. **Concrete/physical over abstract** — Hebrew thought is tangible
2. **Etymological core over theological tradition** — Start from what it originally meant, not how it's traditionally translated
3. **Translate, don't transliterate** — "angel" (`malakh`) → "messenger"; "seraphim" → "burning_ones"
4. **Preserve distinctions** — Each Hebrew root gets a unique English word. No two roots share a gloss.
5. **Names**: Translate where meaning is clear (Noah → "Rest", Israel → "Struggles_With_God")

## Compound Formatting

- `englishLiteral`: underscores (`steadfast_love`)
- `englishNatural`: dashes (`steadfast-love`)

## Workflow

1. Identify the root's etymological core (earliest/most concrete meaning)
2. **Search the dictionary** for conflicts:
   - Same `englishLiteral` already taken?
   - Similar/synonym glosses?
   - Collision with prefix/suffix glosses (`le`="to", `ha`="the", `be`="in")?
3. If a conflict exists → **STOP and ask the user**
4. Verify morphological viability: does the word work as "[word]-my", "[word]s", "in-[word]"?
5. **Present recommendation to user and WAIT for approval**

## Acceptance Criteria

A root mapping is NOT complete until:

- [ ] User has explicitly approved the chosen English gloss
- [ ] Dictionary has been searched for the exact `englishLiteral` — no other root uses it
- [ ] Related/similar roots have been identified and will be linked
- [ ] The word works in all morphological forms needed by the project

**Do NOT add a root to the dictionary without user confirmation.**

## Reference Files

- Hebrew roots: `src/data/dictionary/hebrew/roots.ts`
- Aramaic roots: `src/data/dictionary/aramaic/roots.ts`
- Greek roots: `src/data/dictionary/greek/roots.ts`
- Dictionary entry skill: `.cursor/skills/dictionary-entry/SKILL.md`
