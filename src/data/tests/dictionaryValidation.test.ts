import { roots as hebrewRoots } from '@/data/dictionary/hebrew/roots';
import { prefixes as hebrewPrefixes } from '@/data/dictionary/hebrew/prefixes';
import { suffixes as hebrewSuffixes } from '@/data/dictionary/hebrew/suffixes';

describe('Dictionary Validation Tests: Ensure no duplicate entries exist', () => {
  const findDuplicates = (dictionary: Record<string, unknown>): string[] => {
    const seen = new Set<string>();
    const duplicates = new Set<string>();

    Object.keys(dictionary).forEach((key) => {
      if (seen.has(key)) {
        duplicates.add(key);
      } else {
        seen.add(key);
      }
    });

    return Array.from(duplicates);
  };

  test('Hebrew roots dictionary has no duplicate entries', () => {
    const duplicates = findDuplicates(hebrewRoots);
    expect(duplicates).toHaveLength(0);
    if (duplicates.length > 0) {
      console.info('Duplicate Hebrew roots found:', duplicates);
    }
  });

  test('Hebrew prefixes dictionary has no duplicate entries', () => {
    const duplicates = findDuplicates(hebrewPrefixes);
    expect(duplicates).toHaveLength(0);
    if (duplicates.length > 0) {
      console.info('Duplicate Hebrew prefixes found:', duplicates);
    }
  });

  test('Hebrew suffixes dictionary has no duplicate entries', () => {
    const duplicates = findDuplicates(hebrewSuffixes);
    expect(duplicates).toHaveLength(0);
    if (duplicates.length > 0) {
      console.info('Duplicate Hebrew suffixes found:', duplicates);
    }
  });
});

