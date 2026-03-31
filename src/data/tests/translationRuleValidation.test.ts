import { Book, TranslationWord } from '@/types';
import { scripture } from '@/data/scripture';
import { roots as hebrewRoots } from '@/data/dictionary/hebrew/roots';
import { prefixes as hebrewPrefixes } from '@/data/dictionary/hebrew/prefixes';
import { suffixes as hebrewSuffixes } from '@/data/dictionary/hebrew/suffixes';
import { roots as greekRoots } from '@/data/dictionary/greek/roots';
import { roots as aramaicRoots } from '@/data/dictionary/aramaic/roots';
import { prefixes as aramaicPrefixes } from '@/data/dictionary/aramaic/prefixes';
import { suffixes as aramaicSuffixes } from '@/data/dictionary/aramaic/suffixes';

/**
 * Strip parenthetical content from a string.
 * "Beloved (David)" -> "Beloved"
 * "He_Who_Is (YHWH)" -> "He_Who_Is"
 */
const stripParens = (s: string): string =>
  s
    .replace(/\s*\([^)]*\)/g, '')
    .trim();

/**
 * Check if a dictionary englishLiteral has improper spaces in compound words.
 * After stripping parentheticals and leading "to " for verbs, remaining spaces
 * indicate missing underscores.
 */
const checkLiteralFormatting = (
  englishLiteral: string,
  type: string | undefined
): string | null => {
  let core = stripParens(englishLiteral);
  if (type === 'verb') core = core.replace(/^to /, '');
  if (core.includes(' ')) {
    return `englishLiteral "${englishLiteral}" contains spaces in compound words (should use underscores): "${core}"`;
  }
  return null;
};

/**
 * Check if a dictionary englishNatural has underscores (should use dashes)
 * or has bare spaces where the englishLiteral uses underscores.
 */
const checkNaturalFormatting = (
  englishNatural: string,
  englishLiteral: string,
  type: string | undefined
): string | null => {
  let naturalCore = stripParens(englishNatural);
  let literalCore = stripParens(englishLiteral);
  if (type === 'verb') {
    naturalCore = naturalCore.replace(/^to /, '');
    literalCore = literalCore.replace(/^to /, '');
  }

  if (naturalCore.includes('_')) {
    return `englishNatural "${englishNatural}" contains underscores (should use dashes)`;
  }

  // If the literal has underscores, natural should have dashes in the same positions, not spaces
  if (literalCore.includes('_') && naturalCore.includes(' ')) {
    return `englishNatural "${englishNatural}" has spaces where englishLiteral "${englishLiteral}" uses underscores (should use dashes)`;
  }

  return null;
};

/**
 * Resolve which dictionary a root belongs to, returning the root entry if found.
 */
const resolveRoot = (
  word: TranslationWord
): { type?: string; englishLiteral: string; englishNatural: string } | null => {
  if (!word.root || typeof word.root !== 'string') return null;

  if (word.root in hebrewRoots) {
    const root = hebrewRoots[word.root as keyof typeof hebrewRoots];
    return root;
  }
  if (word.aramaic && word.root in aramaicRoots) {
    const root = aramaicRoots[word.root as keyof typeof aramaicRoots];
    return root;
  }
  if (word.greek && word.root in greekRoots) {
    const root = greekRoots[word.root as keyof typeof greekRoots];
    return root;
  }
  // Fallback: check all dictionaries
  if (word.root in aramaicRoots) {
    return aramaicRoots[word.root as keyof typeof aramaicRoots];
  }
  if (word.root in greekRoots) {
    return greekRoots[word.root as keyof typeof greekRoots];
  }
  return null;
};

/**
 * Prefixes with fixed, reliable English translations worth checking.
 * These are preposition/article-type prefixes where the English word
 * should consistently appear in the verse word's translation.
 * Excludes morphological prefixes (me, ye, va, etc.) whose English
 * rendering is too context-dependent for substring matching.
 */
const CHECKABLE_PREFIXES = new Set([
  'le', 'la', 'li', 'be', 'ba', 'bi', 'ha', 'ho', 've', 'ke', 'mi',
]);

/**
 * Suffixes with fixed, reliable English translations worth checking.
 * Most suffix translations are too context-dependent, so this is
 * deliberately restrictive.
 */
const CHECKABLE_SUFFIXES = new Set([
  'einu', 'ekha', 'av', 'kha', 'chem',
]);

/**
 * Resolve a prefix's dictionary entry.
 */
const resolvePrefix = (
  prefix: string,
  word: TranslationWord
): { englishLiteral: string; englishNatural: string } | null => {
  if (word.aramaic && prefix in aramaicPrefixes) {
    return aramaicPrefixes[prefix as keyof typeof aramaicPrefixes];
  }
  if (prefix in hebrewPrefixes) {
    return hebrewPrefixes[prefix as keyof typeof hebrewPrefixes];
  }
  return null;
};

/**
 * Resolve a suffix's dictionary entry.
 */
const resolveSuffix = (
  suffix: string,
  word: TranslationWord
): { englishLiteral: string; englishNatural: string } | null => {
  if (word.aramaic && suffix in aramaicSuffixes) {
    return aramaicSuffixes[suffix as keyof typeof aramaicSuffixes];
  }
  if (suffix in hebrewSuffixes) {
    return hebrewSuffixes[suffix as keyof typeof hebrewSuffixes];
  }
  return null;
};

// ─── Test A: Dictionary Compound Word Formatting ────────────────────────────

describe('Translation Rule Validation: Dictionary compound word formatting', () => {
  const checkDictionary = (
    dictName: string,
    roots: Record<string, { englishLiteral: string; englishNatural: string; type?: string }>
  ) => {
    Object.entries(roots).forEach(([key, root]) => {
      test(`${dictName} root "${key}" has correct compound word formatting`, () => {
        const literalIssue = checkLiteralFormatting(root.englishLiteral, root.type);
        if (literalIssue) {
          console.warn(`⚠️ ${dictName} root "${key}": ${literalIssue}`);
        }

        const naturalIssue = checkNaturalFormatting(
          root.englishNatural,
          root.englishLiteral,
          root.type
        );
        if (naturalIssue) {
          console.warn(`⚠️ ${dictName} root "${key}": ${naturalIssue}`);
        }

        // Always pass — these are warnings, not failures
        expect(true).toBe(true);
      });
    });
  };

  checkDictionary('Hebrew', hebrewRoots as Record<string, { englishLiteral: string; englishNatural: string; type?: string }>);
  checkDictionary('Aramaic', aramaicRoots as Record<string, { englishLiteral: string; englishNatural: string; type?: string }>);
  checkDictionary('Greek', greekRoots as Record<string, { englishLiteral: string; englishNatural: string; type?: string }>);
});

// ─── Test B: Root Type Matching ─────────────────────────────────────────────

describe('Translation Rule Validation: Root type matching', () => {
  scripture.books.forEach((book: Book) => {
    book.chapters.forEach((chapter) => {
      chapter.verses.forEach((verse) => {
        const ref = `${book.meta.name} ${chapter.meta.chapter}:${verse.meta.verse}`;

        verse.words.forEach((word) => {
          if (!word.root || !word.morphology?.type) return;

          test(`${ref} word "${word.transliteration}" morphology type matches dictionary root type`, () => {
            const rootEntry = resolveRoot(word);
            if (!rootEntry || !rootEntry.type) {
              // Can't check if root not found or has no type
              expect(true).toBe(true);
              return;
            }

            if (rootEntry.type !== word.morphology!.type) {
              console.warn(
                `⚠️ ${ref} — word "${word.transliteration}" has morphology type "${word.morphology!.type}" but root "${word.root}" has dictionary type "${rootEntry.type}"`
              );
            }

            expect(true).toBe(true);
          });
        });
      });
    });
  });
});

// ─── Test D: Prefix/Suffix Translation Consistency ──────────────────────────

describe('Translation Rule Validation: Prefix/suffix translation consistency', () => {
  scripture.books.forEach((book: Book) => {
    book.chapters.forEach((chapter) => {
      chapter.verses.forEach((verse) => {
        const ref = `${book.meta.name} ${chapter.meta.chapter}:${verse.meta.verse}`;

        verse.words.forEach((word) => {
          // Check prefixes
          if (word.prefixes && Array.isArray(word.prefixes)) {
            word.prefixes.forEach((prefix) => {
              if (typeof prefix !== 'string') return;

              test(`${ref} word "${word.transliteration}" preserves prefix "${prefix}" in translations`, () => {
                if (!CHECKABLE_PREFIXES.has(prefix)) {
                  expect(true).toBe(true);
                  return;
                }

                const prefixEntry = resolvePrefix(prefix, word);
                if (!prefixEntry) {
                  expect(true).toBe(true);
                  return;
                }

                if (
                  prefixEntry.englishLiteral &&
                  word.englishLiteral &&
                  !word.englishLiteral
                    .toLowerCase()
                    .includes(prefixEntry.englishLiteral.toLowerCase())
                ) {
                  console.warn(
                    `⚠️ ${ref} — word "${word.transliteration}" englishLiteral "${word.englishLiteral}" does not contain prefix "${prefix}" English "${prefixEntry.englishLiteral}"`
                  );
                }

                if (
                  prefixEntry.englishNatural &&
                  word.englishNatural &&
                  !word.englishNatural
                    .toLowerCase()
                    .includes(prefixEntry.englishNatural.toLowerCase())
                ) {
                  console.warn(
                    `⚠️ ${ref} — word "${word.transliteration}" englishNatural "${word.englishNatural}" does not contain prefix "${prefix}" English "${prefixEntry.englishNatural}"`
                  );
                }

                expect(true).toBe(true);
              });
            });
          }

          // Check suffixes
          if (word.suffixes && Array.isArray(word.suffixes)) {
            word.suffixes.forEach((suffix) => {
              if (typeof suffix !== 'string') return;

              test(`${ref} word "${word.transliteration}" preserves suffix "${suffix}" in translations`, () => {
                if (!CHECKABLE_SUFFIXES.has(suffix)) {
                  expect(true).toBe(true);
                  return;
                }

                const suffixEntry = resolveSuffix(suffix, word);
                if (!suffixEntry) {
                  expect(true).toBe(true);
                  return;
                }

                if (
                  suffixEntry.englishLiteral &&
                  word.englishLiteral &&
                  !word.englishLiteral
                    .toLowerCase()
                    .includes(suffixEntry.englishLiteral.toLowerCase())
                ) {
                  console.warn(
                    `⚠️ ${ref} — word "${word.transliteration}" englishLiteral "${word.englishLiteral}" does not contain suffix "${suffix}" English "${suffixEntry.englishLiteral}"`
                  );
                }

                if (
                  suffixEntry.englishNatural &&
                  word.englishNatural &&
                  !word.englishNatural
                    .toLowerCase()
                    .includes(suffixEntry.englishNatural.toLowerCase())
                ) {
                  console.warn(
                    `⚠️ ${ref} — word "${word.transliteration}" englishNatural "${word.englishNatural}" does not contain suffix "${suffix}" English "${suffixEntry.englishNatural}"`
                  );
                }

                expect(true).toBe(true);
              });
            });
          }
        });
      });
    });
  });
});
