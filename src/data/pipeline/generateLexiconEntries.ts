/**
 * Generates static lexicon entry JSON files and a full index.
 *
 * For each .mdx in src/data/lexicon/{language}/, produces:
 *   public/lexicon/{language}/{key}.json   — entry content + root/related metadata
 *   public/lexicon/{language}/index.json   — browsable index of all entries
 *
 * Run with:
 *
 * ```bash
 * npm run build:data-lexicon-entries
 * ```
 */
import { readdir, readFile, writeFile, mkdir } from 'fs/promises';
import path from 'path';
import { roots as hebrewRoots, HebrewRootElement } from '@/data/dictionary/hebrew/roots';
import { roots as greekRoots, GreekRootElement } from '@/data/dictionary/greek/roots';
import { roots as aramaicRoots, AramaicRootElement } from '@/data/dictionary/aramaic/roots';

type Language = 'hebrew' | 'greek' | 'aramaic';

type AnyRootElement = HebrewRootElement | GreekRootElement | AramaicRootElement;

interface RootInfo {
  key: string;
  originalScript: string;
  transliteration: string;
  englishLiteral: string;
  type?: string;
  description?: string;
}

interface RelatedEntry extends RootInfo {
  hasLexiconEntry: boolean;
}

interface LexiconEntryJson {
  key: string;
  language: Language;
  content: string;
  root?: RootInfo;
  relatedEntries: RelatedEntry[];
  translatedTo?: RelatedEntry[];
}

interface LexiconIndexEntry {
  key: string;
  language: Language;
  originalScript?: string;
  transliteration?: string;
  englishLiteral?: string;
  type?: string;
}

async function ensureDirectoryExists(dirPath: string): Promise<void> {
  await mkdir(dirPath, { recursive: true });
}

function getOriginalScript(rootData: AnyRootElement): string {
  if ('hebrew' in rootData) return (rootData as HebrewRootElement).hebrew;
  if ('greek' in rootData) return (rootData as GreekRootElement).greek;
  if ('aramaic' in rootData) return (rootData as AramaicRootElement).aramaic;
  return '';
}

function findRoot(key: string): { rootData: AnyRootElement; language: Language } | null {
  const lowerKey = key.toLowerCase();
  for (const [k, v] of Object.entries(hebrewRoots)) {
    if (k.toLowerCase() === lowerKey) return { rootData: v, language: 'hebrew' };
  }
  for (const [k, v] of Object.entries(greekRoots)) {
    if (k.toLowerCase() === lowerKey) return { rootData: v, language: 'greek' };
  }
  for (const [k, v] of Object.entries(aramaicRoots)) {
    if (k.toLowerCase() === lowerKey) return { rootData: v, language: 'aramaic' };
  }
  return null;
}

function findRootExact(key: string, lang: Language): AnyRootElement | null {
  const roots = lang === 'hebrew' ? hebrewRoots : lang === 'greek' ? greekRoots : aramaicRoots;
  return (roots as Record<string, AnyRootElement>)[key] ?? null;
}

function rootToInfo(key: string, rootData: AnyRootElement): RootInfo {
  return {
    key,
    originalScript: getOriginalScript(rootData),
    transliteration: rootData.transliteration,
    englishLiteral: rootData.englishLiteral,
    type: (rootData as { type?: string }).type,
    description: (rootData as { description?: string }).description,
  };
}

async function generateLexiconEntries(): Promise<void> {
  console.log('Starting lexicon entry generation...');

  // Collect all existing MDX filenames across languages for cross-ref
  const allEntryKeys: Record<Language, Set<string>> = {
    hebrew: new Set(),
    greek: new Set(),
    aramaic: new Set(),
  };

  for (const lang of ['hebrew', 'greek', 'aramaic'] as Language[]) {
    const lexiconDir = path.join(process.cwd(), `src/data/lexicon/${lang}`);
    try {
      const files = await readdir(lexiconDir);
      for (const f of files) {
        if (f.endsWith('.mdx')) {
          allEntryKeys[lang].add(f.replace('.mdx', '').toLowerCase());
        }
      }
    } catch {
      // Directory may not exist for some languages
    }
  }

  for (const lang of ['hebrew', 'greek', 'aramaic'] as Language[]) {
    const lexiconDir = path.join(process.cwd(), `src/data/lexicon/${lang}`);
    const outputDir = path.join(process.cwd(), `public/lexicon/${lang}`);
    await ensureDirectoryExists(outputDir);

    let mdxFiles: string[];
    try {
      const files = await readdir(lexiconDir);
      mdxFiles = files.filter((f) => f.endsWith('.mdx') && !f.startsWith('.'));
    } catch {
      console.log(`  ${lang}: no lexicon directory found, skipping`);
      continue;
    }

    // Skip model-reference-entries subdirectory files
    const indexEntries: LexiconIndexEntry[] = [];

    for (const file of mdxFiles) {
      const key = file.replace('.mdx', '');
      const keyLower = key.toLowerCase();
      const content = await readFile(path.join(lexiconDir, file), 'utf-8');

      // Try to find a matching dictionary root
      const rootMatch = findRootExact(key, lang) || findRootExact(keyLower, lang);
      let rootInfo: RootInfo | undefined;
      let relatedEntries: RelatedEntry[] = [];
      let translatedTo: RelatedEntry[] | undefined;

      if (rootMatch) {
        rootInfo = rootToInfo(key, rootMatch);

        // Build related entries
        const relatedKeys = (rootMatch as { related?: readonly string[] }).related;
        if (relatedKeys) {
          relatedEntries = relatedKeys
            .map((rk) => {
              const rd = findRootExact(rk, lang);
              if (!rd) return null;
              return {
                ...rootToInfo(rk, rd),
                hasLexiconEntry: allEntryKeys[lang].has(rk.toLowerCase()),
              };
            })
            .filter(Boolean) as RelatedEntry[];
        }

        // Build translatedTo entries (Hebrew -> Greek)
        const translatedToKeys = (rootMatch as { translatedTo?: readonly string[] }).translatedTo;
        if (translatedToKeys) {
          translatedTo = translatedToKeys
            .map((tk) => {
              const td = findRootExact(tk, 'greek');
              if (!td) return null;
              return {
                ...rootToInfo(tk, td),
                hasLexiconEntry: allEntryKeys.greek.has(tk.toLowerCase()),
              };
            })
            .filter(Boolean) as RelatedEntry[];
        }
      }

      const entry: LexiconEntryJson = {
        key,
        language: lang,
        content,
        root: rootInfo,
        relatedEntries,
        translatedTo: translatedTo?.length ? translatedTo : undefined,
      };

      await writeFile(
        path.join(outputDir, `${key}.json`),
        JSON.stringify(entry, null, 2)
      );

      indexEntries.push({
        key,
        language: lang,
        originalScript: rootInfo ? rootInfo.originalScript : undefined,
        transliteration: rootInfo ? rootInfo.transliteration : key,
        englishLiteral: rootInfo?.englishLiteral,
        type: rootInfo?.type,
      });
    }

    // Write the index
    await writeFile(
      path.join(outputDir, 'index.json'),
      JSON.stringify(indexEntries, null, 2)
    );

    console.log(`  ${lang}: wrote ${mdxFiles.length} entry files + index.json`);
  }

  console.log('Lexicon entry generation complete.');
}

generateLexiconEntries().catch(console.error);
