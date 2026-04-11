/**
 * Generates concordance JSON files for each unique word (by transliteration)
 * and for each root.
 *
 * Outputs:
 *   public/concordance/{language}/{transliteration}.json  -- per-word occurrences
 *   public/concordance/{language}/by-root/{root}.json     -- per-root occurrences
 *
 * Run with:
 *
 * ```bash
 * npm run build:data-concordance
 * ```
 */
import { mkdir, writeFile } from 'fs/promises';
import fs from 'fs';
import path from 'path';
import { Verse, TranslationWord } from '@/types';
import {
  SCRIPTURE_BOOK_NAMES,
  SCRIPTURE_BOOK_ORDER,
} from '@/data/constants';
import { BuildLogger, createBuildLogger } from './buildLogger';

type Language = 'hebrew' | 'greek' | 'aramaic';

interface ConcordanceRow {
  location: {
    book: string;
    chapter: number;
    verse: number;
  };
  wordIndex: number;
  word: {
    originalScript: string;
    transliteration: string;
    englishLiteral: string;
    englishNatural?: string;
    root?: string;
    morphology?: {
      type?: string;
      tense?: string;
      stem?: string;
    };
  };
  context: {
    hebrew: string;
    transliteration: string;
    englishLiteral: string;
    englishNatural: string;
  };
}

interface WordConcordance {
  key: string;
  language: Language;
  root?: string;
  occurrences: ConcordanceRow[];
}

interface RootConcordance {
  root: string;
  language: Language;
  occurrences: ConcordanceRow[];
}

const CONTEXT_WINDOW = 2;

async function ensureDirectoryExists(dirPath: string): Promise<void> {
  await mkdir(dirPath, { recursive: true });
}

function getOriginalScript(word: TranslationWord): string {
  return word.hebrew || word.greek || word.aramaic || '';
}

function detectLanguage(word: TranslationWord): Language | null {
  if (word.hebrew) return 'hebrew';
  if (word.greek) return 'greek';
  if (word.aramaic) return 'aramaic';
  return null;
}

function getBookDisplayName(bookSlug: string): string {
  const upperKey = Object.keys(SCRIPTURE_BOOK_NAMES).find(
    (k) =>
      SCRIPTURE_BOOK_NAMES[k as keyof typeof SCRIPTURE_BOOK_NAMES].name.toLowerCase() ===
      bookSlug.toLowerCase()
  );
  if (upperKey) {
    return SCRIPTURE_BOOK_NAMES[upperKey as keyof typeof SCRIPTURE_BOOK_NAMES].name;
  }
  return bookSlug.charAt(0).toUpperCase() + bookSlug.slice(1);
}

function getBookSortIndex(bookName: string): number {
  const idx = SCRIPTURE_BOOK_ORDER.findIndex((k) => {
    const entry = SCRIPTURE_BOOK_NAMES[k as keyof typeof SCRIPTURE_BOOK_NAMES];
    return entry.name.toLowerCase() === bookName.toLowerCase();
  });
  return idx === -1 ? 999 : idx;
}

function buildContextSnippet(
  words: TranslationWord[],
  targetIndex: number,
  extractor: (w: TranslationWord) => string
): string {
  const start = Math.max(0, targetIndex - CONTEXT_WINDOW);
  const end = Math.min(words.length - 1, targetIndex + CONTEXT_WINDOW);

  const parts: string[] = [];
  for (let i = start; i <= end; i++) {
    const text = extractor(words[i]);
    if (i === targetIndex) {
      parts.push(`**${text}**`);
    } else {
      parts.push(text);
    }
  }
  return parts.join(' ');
}

function buildRow(
  verse: Verse,
  wordIndex: number,
  bookSlug: string
): ConcordanceRow {
  const word = verse.words[wordIndex];
  const words = verse.words;

  return {
    location: {
      book: getBookDisplayName(bookSlug),
      chapter: verse.meta.chapter,
      verse: verse.meta.verse,
    },
    wordIndex,
    word: {
      originalScript: getOriginalScript(word),
      transliteration: word.transliteration,
      englishLiteral: word.englishLiteral,
      englishNatural: word.englishNatural,
      root: word.root,
      morphology: word.morphology
        ? {
            type: (word.morphology as { type?: string }).type,
            tense: (word.morphology as { tense?: string }).tense,
            stem: (word.morphology as { stem?: string }).stem,
          }
        : undefined,
    },
    context: {
      hebrew: buildContextSnippet(words, wordIndex, (w) => getOriginalScript(w) || w.transliteration),
      transliteration: buildContextSnippet(words, wordIndex, (w) => w.transliteration),
      englishLiteral: buildContextSnippet(words, wordIndex, (w) => w.englishLiteral),
      englishNatural: buildContextSnippet(words, wordIndex, (w) => w.englishNatural || w.englishLiteral),
    },
  };
}

function sortRows(rows: ConcordanceRow[]): ConcordanceRow[] {
  return rows.sort((a, b) => {
    const bookDiff = getBookSortIndex(a.location.book) - getBookSortIndex(b.location.book);
    if (bookDiff !== 0) return bookDiff;
    const chapterDiff = a.location.chapter - b.location.chapter;
    if (chapterDiff !== 0) return chapterDiff;
    const verseDiff = a.location.verse - b.location.verse;
    if (verseDiff !== 0) return verseDiff;
    return a.wordIndex - b.wordIndex;
  });
}

export async function generateConcordance(logger: BuildLogger): Promise<void> {
  const scriptureDir = path.join(process.cwd(), 'src/data/scripture');
  const books = fs
    .readdirSync(scriptureDir)
    .filter(
      (file) =>
        fs.statSync(path.join(scriptureDir, file)).isDirectory() &&
        file !== 'index.ts'
    );

  const byWord: Record<Language, Record<string, ConcordanceRow[]>> = {
    hebrew: {},
    greek: {},
    aramaic: {},
  };
  const byRoot: Record<Language, Record<string, ConcordanceRow[]>> = {
    hebrew: {},
    greek: {},
    aramaic: {},
  };
  const wordRoots: Record<Language, Record<string, string>> = {
    hebrew: {},
    greek: {},
    aramaic: {},
  };

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
      const verseFiles = fs
        .readdirSync(chapterPath)
        .filter((file) => file.endsWith('.ts') && file !== 'index.ts');

      for (const verseFile of verseFiles) {
        const versePath = path.join(chapterPath, verseFile);
        const verseModule = await import(versePath);
        const verse: Verse = verseModule[Object.keys(verseModule)[0]];

        verse.words.forEach((word, wordIndex) => {
          const lang = detectLanguage(word);
          if (!lang || !word.transliteration) return;

          const row = buildRow(verse, wordIndex, book);
          const key = word.transliteration.toLowerCase();

          if (!byWord[lang][key]) byWord[lang][key] = [];
          byWord[lang][key].push(row);

          if (word.root) {
            wordRoots[lang][key] = word.root;

            if (!byRoot[lang][word.root]) byRoot[lang][word.root] = [];
            byRoot[lang][word.root].push(row);
          }
        });
      }
    }
  }

  for (const lang of ['hebrew', 'greek', 'aramaic'] as Language[]) {
    const outputDir = path.join(process.cwd(), `public/concordance/${lang}`);
    await ensureDirectoryExists(outputDir);

    const keys = Object.keys(byWord[lang]);
    for (const key of keys) {
      const concordance: WordConcordance = {
        key,
        language: lang,
        root: wordRoots[lang][key],
        occurrences: sortRows(byWord[lang][key]),
      };
      const outputPath = path.join(outputDir, `${key}.json`);
      await writeFile(outputPath, JSON.stringify(concordance, null, 2));
    }

    const rootDir = path.join(outputDir, 'by-root');
    await ensureDirectoryExists(rootDir);

    const roots = Object.keys(byRoot[lang]);
    for (const root of roots) {
      const concordance: RootConcordance = {
        root,
        language: lang,
        occurrences: sortRows(byRoot[lang][root]),
      };
      const outputPath = path.join(rootDir, `${root}.json`);
      await writeFile(outputPath, JSON.stringify(concordance, null, 2));
    }

    logger.summary(`${lang}: ${keys.length} word + ${roots.length} root files`);
  }
}

if (process.argv[1] && import.meta.url.endsWith(process.argv[1])) {
  const logger = createBuildLogger();
  generateConcordance(logger).catch((err) => {
    logger.error('Failed to generate concordance', err);
    process.exit(1);
  });
}
