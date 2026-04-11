/**
 * Generates markdown for each chapter of the scripture
 * 
 * Generates `public/scripture/[language]/[book]-[chapter].md`
 * 
 * Run with:
 * 
 * ```bash
 * npm run build:data-chapters-as-markdown
 * ```
 */
import fs from 'fs';
import path from 'path';
import { buildChapterText } from '../utils/buildChapterText';
import { Chapter, LANGUAGE_KEYS } from '@/types';
import { BuildLogger, createBuildLogger } from './buildLogger';

const SCRIPTURE_DIR = path.join(process.cwd(), 'src/data/scripture');
const PUBLIC_SCRIPTURE_DIR = path.join(process.cwd(), 'public/scripture');

export function writeChapterMarkdown(chapterPath: string, language: string, markdown: string): void {
  const relativePath = path.relative(SCRIPTURE_DIR, path.dirname(chapterPath));
  const [book, chapterDir] = relativePath.split(path.sep);
  const chapterNumber = chapterDir.split('-')[1];
  
  const targetDir = path.join(PUBLIC_SCRIPTURE_DIR, relativePath);
  
  fs.mkdirSync(targetDir, { recursive: true });
  
  const markdownPath = path.join(targetDir, `${book}-${chapterNumber}.${language}.md`);
  fs.writeFileSync(markdownPath, markdown);
}

async function processChapter(chapterDir: string, logger: BuildLogger): Promise<boolean> {
  const indexPath = path.join(chapterDir, 'index.ts');
  if (!fs.existsSync(indexPath)) return false;

  try {
    const chapterData = (await import(indexPath)).default as Chapter;

    LANGUAGE_KEYS.forEach(language => {
      const markdown = buildChapterText({ chapterData, language });
      writeChapterMarkdown(indexPath, language, markdown);
    });
    logger.item(`Built markdown for ${path.basename(chapterDir)}`);
    return true;
  } catch (error) {
    logger.error(`Error processing ${chapterDir}`, error);
    return false;
  }
}

async function processBook(bookDir: string, logger: BuildLogger): Promise<number> {
  const items = fs.readdirSync(bookDir);
  const chapterDirs = items
    .map(item => path.join(bookDir, item))
    .filter(itemPath => fs.statSync(itemPath).isDirectory());
  
  let count = 0;
  for (const dir of chapterDirs) {
    const built = await processChapter(dir, logger);
    if (built) count++;
  }
  return count;
}

export async function buildAllChapters(logger: BuildLogger): Promise<void> {
  const books = fs.readdirSync(SCRIPTURE_DIR);
  const bookDirs = books
    .map(book => path.join(SCRIPTURE_DIR, book))
    .filter(bookPath => fs.statSync(bookPath).isDirectory());
  
  let totalChapters = 0;
  for (const dir of bookDirs) {
    totalChapters += await processBook(dir, logger);
  }

  logger.summary(`Built markdown for ${totalChapters} chapters (${LANGUAGE_KEYS.length} languages each)`);
}

if (process.argv[1] && import.meta.url.endsWith(process.argv[1])) {
  const logger = createBuildLogger();
  buildAllChapters(logger);
}
