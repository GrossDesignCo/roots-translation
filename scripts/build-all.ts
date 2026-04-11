#!/usr/bin/env node

/**
 * Unified build runner for all data pipeline steps.
 *
 * Usage:
 *   tsx scripts/build-all.ts            # summary output
 *   tsx scripts/build-all.ts --verbose  # per-item detail
 */
import { execSync } from 'child_process';
import { createBuildLogger } from '../src/data/pipeline/buildLogger';
import { buildAllChapters } from '../src/data/pipeline/generateScriptureChaptersAsMarkdown';
import { generateAllLexiconIndices } from '../src/data/pipeline/generateLexiconIndex';
import { generateRootIndexes } from '../src/data/pipeline/generateRootIndexes';
import { generateAllRootFiles } from '../src/data/pipeline/generateRootFiles';
import { generateConcordance } from '../src/data/pipeline/generateConcordance';
import { generateLexiconEntries } from '../src/data/pipeline/generateLexiconEntries';
import { generateTranslationProgressFiles } from '../src/data/pipeline/generateTranslationProgress';

const TOTAL_STEPS = 8;
const logger = createBuildLogger();

interface Step {
  name: string;
  run: () => void | Promise<void>;
}

const dataSteps: Step[] = [
  { name: 'Scripture markdown', run: () => buildAllChapters(logger) },
  { name: 'Lexicon index-by-word', run: () => generateAllLexiconIndices(logger) },
  { name: 'Root indexes', run: () => generateRootIndexes(logger) },
  { name: 'Root files', run: () => generateAllRootFiles(logger) },
  { name: 'Concordance', run: () => generateConcordance(logger) },
  { name: 'Lexicon entries', run: () => generateLexiconEntries(logger) },
  { name: 'Translation progress', run: () => generateTranslationProgressFiles(logger) },
];

async function main() {
  const totalStart = Date.now();

  for (let i = 0; i < dataSteps.length; i++) {
    const step = dataSteps[i];
    logger.phase(i + 1, TOTAL_STEPS, step.name);
    try {
      await step.run();
    } catch (err) {
      logger.error(`Failed during "${step.name}"`, err);
      process.exit(1);
    }
  }

  logger.done(Date.now() - totalStart);

  logger.phase(TOTAL_STEPS, TOTAL_STEPS, 'Next.js build');
  try {
    execSync('npx next build', { stdio: 'inherit' });
  } catch {
    process.exit(1);
  }
}

main();
