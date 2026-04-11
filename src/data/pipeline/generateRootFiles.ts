/**
 * Generates individual JSON files for each root word in the dictionary
 *
 * Creates `public/roots/hebrew/[rootKey].json`, `public/roots/greek/[rootKey].json`,
 * and `public/roots/aramaic/[rootKey].json`
 *
 * Run with:
 *
 * ```bash
 * npm run build:data-root-files
 * ```
 *
 */
import { mkdir, writeFile } from 'fs/promises';
import fs from 'fs';
import path from 'path';
import { roots as hebrewRoots } from '@/data/dictionary/hebrew/roots';
import { roots as greekRoots } from '@/data/dictionary/greek/roots';
import { roots as aramaicRoots } from '@/data/dictionary/aramaic/roots';
import { Verse } from '@/types';
import { BuildLogger, createBuildLogger } from './buildLogger';

async function ensureDirectoryExists(dirPath: string): Promise<void> {
  try {
    await mkdir(dirPath, { recursive: true });
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code !== 'EEXIST') {
      throw error;
    }
  }
}

async function collectWordIndexesByRoot(): Promise<
  Record<string, Record<string, Record<number, Record<number, number[]>>>>
> {
  const wordIndexesByRoot: Record<
    string,
    Record<string, Record<number, Record<number, number[]>>>
  > = {};

  const scriptureDir = path.join(process.cwd(), 'src/data/scripture');
  const books = fs
    .readdirSync(scriptureDir)
    .filter(
      (file) =>
        fs.statSync(path.join(scriptureDir, file)).isDirectory() &&
        file !== 'index.ts'
    );

  for (const book of books) {
    const bookDir = path.join(scriptureDir, book);
    const chapters = fs
      .readdirSync(bookDir)
      .filter(
        (file) =>
          fs.statSync(path.join(bookDir, file)).isDirectory() &&
          file !== 'index.ts'
      );

    for (const chapterDir of chapters) {
      const chapterPath = path.join(bookDir, chapterDir);
      const chapterNumber = parseInt(chapterDir.split('-')[1]);

      const verseFiles = fs
        .readdirSync(chapterPath)
        .filter((file) => file.endsWith('.ts') && file !== 'index.ts');

      for (const verseFile of verseFiles) {
        const versePath = path.join(chapterPath, verseFile);
        const verseModule = await import(versePath);
        const verse: Verse = verseModule[Object.keys(verseModule)[0]];

        verse.words.forEach((word, wordIndex) => {
          if (word.root) {
            if (!wordIndexesByRoot[word.root]) {
              wordIndexesByRoot[word.root] = {};
            }
            if (!wordIndexesByRoot[word.root][book]) {
              wordIndexesByRoot[word.root][book] = {};
            }
            if (!wordIndexesByRoot[word.root][book][chapterNumber]) {
              wordIndexesByRoot[word.root][book][chapterNumber] = {};
            }
            if (
              !wordIndexesByRoot[word.root][book][chapterNumber][
                verse.meta.verse
              ]
            ) {
              wordIndexesByRoot[word.root][book][chapterNumber][
                verse.meta.verse
              ] = [];
            }

            wordIndexesByRoot[word.root][book][chapterNumber][
              verse.meta.verse
            ].push(wordIndex);
          }
        });
      }
    }
  }

  return wordIndexesByRoot;
}

async function generateRootFilesForLanguage(
  language: 'hebrew' | 'greek' | 'aramaic',
  wordIndexesByRoot: Record<
    string,
    Record<string, Record<number, Record<number, number[]>>>
  >,
): Promise<number> {
  const roots =
    language === 'hebrew'
      ? hebrewRoots
      : language === 'greek'
      ? greekRoots
      : aramaicRoots;

  const outputDir = path.join(process.cwd(), `public/roots/${language}`);
  await ensureDirectoryExists(outputDir);

  let fileCount = 0;
  for (const [rootKey, rootData] of Object.entries(roots)) {
    const wordIndexes = wordIndexesByRoot[rootKey] || {};

    const rootFileContent = {
      key: rootKey,
      ...rootData,
      wordIndexes: wordIndexes,
      usage: {},
      translationConnections:
        rootData.translatedFrom || rootData.translatedTo || [],
    };

    const outputPath = path.join(outputDir, `${rootKey}.json`);
    await writeFile(outputPath, JSON.stringify(rootFileContent, null, 2));
    fileCount++;
  }

  return fileCount;
}

export async function generateAllRootFiles(logger: BuildLogger): Promise<void> {
  const rootsDir = path.join(process.cwd(), 'public/roots');
  await ensureDirectoryExists(rootsDir);

  const wordIndexesByRoot = await collectWordIndexesByRoot();
  logger.item(`Found word indexes for ${Object.keys(wordIndexesByRoot).length} roots`);

  const counts: string[] = [];
  for (const language of ['hebrew', 'greek', 'aramaic'] as const) {
    const count = await generateRootFilesForLanguage(language, wordIndexesByRoot);
    counts.push(`${language}: ${count} files`);
  }

  logger.summary(counts.join(', '));
}

if (process.argv[1] && import.meta.url.endsWith(process.argv[1])) {
  const logger = createBuildLogger();
  generateAllRootFiles(logger).catch((err) => {
    logger.error('Failed to generate root files', err);
    process.exit(1);
  });
}
