/** Tab ids for lexicon entry pages (`?tab=` query). Default view omits the param. */
export type LexiconEntryTab = 'entry' | 'concordance';

export function parseLexiconTabSearchParam(
  raw: string | null | undefined,
  hasConcordance: boolean,
): LexiconEntryTab {
  if (hasConcordance && raw?.trim().toLowerCase() === 'concordance') {
    return 'concordance';
  }
  return 'entry';
}
