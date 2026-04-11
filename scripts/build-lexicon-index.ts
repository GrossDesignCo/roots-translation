#!/usr/bin/env node

import { generateAllLexiconIndices } from '../src/data/pipeline/generateLexiconIndex';
import { createBuildLogger } from '../src/data/pipeline/buildLogger';

const logger = createBuildLogger();

generateAllLexiconIndices(logger)
  .then(() => {
    process.exit(0);
  })
  .catch((error) => {
    logger.error('Failed to generate lexicon indices', error);
    process.exit(1);
  });
