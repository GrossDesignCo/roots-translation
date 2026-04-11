/**
 * Indexes lexicon entries by each unique word in scripture
 *
 * Generates `public/lexicon/[language]/index-by-word.json`
 *
 * Run with:
 *
 * ```bash
 * npm run build:data-lexicon-index-by-word
 * ```
 *
 */
import { readdir, writeFile, mkdir } from 'fs/promises';
import path from 'path';
import { scripture } from '../scripture';
import { BuildLogger, createBuildLogger } from './buildLogger';

interface LexiconIndex {
  [key: string]: boolean;
}

async function getAllWordsFromScripture(
  language: string
): Promise<Set<string>> {
  const words = new Set<string>();

  for (const book of scripture.books) {
    for (const chapter of book.chapters) {
      for (const verse of chapter.verses) {
        verse.words.forEach((word) => {
          const isGreek = language === 'greek' && word.greek;
          const isHebrew = language === 'hebrew' && word.hebrew;
          const isAramaic = language === 'aramaic' && word.aramaic;

          if ((isGreek || isHebrew || isAramaic) && word.transliteration) {
            words.add(word.transliteration.toLowerCase());
          }
        });
      }
    }
  }

  return words;
}

async function getExistingLexiconEntries(
  language: string,
  logger: BuildLogger
): Promise<Set<string>> {
  const lexiconDir = path.join(process.cwd(), `src/data/lexicon/${language}`);
  try {
    const files = await readdir(lexiconDir);
    return new Set(
      files
        .filter((file) => file.endsWith('.mdx'))
        .map((file) => file.replace('.mdx', '').toLowerCase())
    );
  } catch {
    logger.warn(`No lexicon directory found for ${language}, using empty index`);
    return new Set();
  }
}

async function ensureDirectoryExists(dirPath: string): Promise<void> {
  try {
    await mkdir(dirPath, { recursive: true });
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code !== 'EEXIST') {
      throw error;
    }
  }
}

export async function generateLexiconIndex(language: string, logger: BuildLogger): Promise<void> {
  const allWords = await getAllWordsFromScripture(language);
  const existingEntries = await getExistingLexiconEntries(language, logger);

  const index: LexiconIndex = {};
  allWords.forEach((word) => {
    index[word] = existingEntries.has(word);
  });

  const outputDir = path.join(process.cwd(), `public/lexicon/${language}`);
  await ensureDirectoryExists(outputDir);

  const outputPath = path.join(outputDir, 'index-by-word.json');
  await writeFile(outputPath, JSON.stringify(index, null, 2));

  logger.summary(`${language}: ${allWords.size} words (${existingEntries.size} with entries)`);
}

export async function generateAllLexiconIndices(logger: BuildLogger): Promise<void> {
  for (const language of ['hebrew', 'greek', 'aramaic']) {
    await generateLexiconIndex(language, logger);
  }
}

if (process.argv[1] && import.meta.url.endsWith(process.argv[1])) {
  const logger = createBuildLogger();
  generateAllLexiconIndices(logger)
    .then(() => process.exit(0))
    .catch((error) => {
      logger.error('Failed to generate lexicon indices', error);
      process.exit(1);
    });
}
