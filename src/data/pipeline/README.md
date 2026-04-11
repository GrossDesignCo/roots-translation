# Data Pipeline

This directory contains the build-time scripts that generate static JSON/markdown files from the source scripture data. They all run as part of `npm run build:all` via the unified runner at `scripts/build-all.ts`.

## Logging convention

All pipeline scripts use a shared `BuildLogger` instead of raw `console.log`. This keeps the build output clean and consistent.

```ts
import { BuildLogger } from './buildLogger';

export async function myPipelineStep(logger: BuildLogger): Promise<void> {
  // Per-item detail — only shown with --verbose
  logger.item(`Processing ${filename}`);

  // Summary — always shown, use for aggregate results
  logger.summary(`hebrew: 500 files, greek: 80 files`);

  // Warnings for expected/non-fatal conditions (no stack trace)
  logger.warn(`No lexicon directory found for aramaic, using empty index`);

  // Errors for actual failures
  logger.error(`Failed to write file`, err);
}
```

**Do not use `console.log`, `console.warn`, or `console.error` directly.** The logger handles verbosity, formatting, and consistent prefixes so the build output reads as a unified whole.

### `item()` vs `summary()`

- Use `item()` for per-file or per-iteration output that would be noisy at scale. These lines are hidden by default and only appear when the user passes `--verbose`.
- Use `summary()` for the final counts or aggregated result of a step. These always print.

### Warnings vs errors

- Use `warn()` for known, non-fatal conditions (e.g. a language directory that doesn't exist yet). This prints a single line — no stack trace.
- Use `error()` for actual failures. Pass the error object as the second argument; it will be printed in verbose mode.

## Adding a new pipeline step

1. Create a new file in this directory (e.g. `generateFoo.ts`).
2. Export an async function that accepts a `BuildLogger`:
   ```ts
   export async function generateFoo(logger: BuildLogger): Promise<void> { ... }
   ```
3. Add a standalone entry guard so the script can still run individually:
   ```ts
   if (process.argv[1] && import.meta.url.endsWith(process.argv[1])) {
     const logger = createBuildLogger();
     generateFoo(logger);
   }
   ```
4. Register it in `scripts/build-all.ts` by adding an entry to the `dataSteps` array and incrementing `TOTAL_STEPS`.
5. Optionally add a standalone npm script in `package.json` for running it in isolation.

## Running builds

```bash
# Full build (data + meta + Next.js)
npm run build:all

# Full build with per-item detail
npm run build:all -- --verbose

# Individual steps (for debugging)
npm run build:data-concordance
npm run build:data-root-files
# etc.
```
