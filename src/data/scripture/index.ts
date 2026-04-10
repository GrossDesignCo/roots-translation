import { genesis } from './genesis';
import { exodus } from './exodus';
import { proverbs } from './proverbs';
import { psalms } from './psalms';
import { john } from './john';
import { numbers } from './numbers';
import { isaiah } from './isaiah';
import { ezekiel } from './ezekiel';
import { jonah } from './jonah';
import { revelation } from './revelation';
import { matthew } from './matthew';
import { daniel } from './daniel';
import { ruth } from './ruth';
import { ecclesiastes } from './ecclesiastes';
import { job } from './job';
import {
  SCRIPTURE_BOOK_NAMES,
  SCRIPTURE_BOOK_ORDER,
  type ScriptureBookNameKey,
} from '../constants';
import type { Book } from '@/types';

const nameToKey = new Map(
  (Object.entries(SCRIPTURE_BOOK_NAMES) as [ScriptureBookNameKey, { name: string }][]).map(
    ([key, { name }]) => [name, key]
  )
);

function getBookIndex(book: Book): number {
  const key = nameToKey.get(book.meta.name);
  if (!key) return Infinity;
  const idx = SCRIPTURE_BOOK_ORDER.indexOf(key);
  return idx === -1 ? Infinity : idx;
}

const allBooks: Book[] = [
  genesis,
  exodus,
  numbers,
  ruth,
  job,
  psalms,
  proverbs,
  ecclesiastes,
  isaiah,
  ezekiel,
  daniel,
  jonah,
  matthew,
  john,
  revelation,
];

export const scripture = {
  books: [...allBooks].sort((a, b) => getBookIndex(a) - getBookIndex(b)),
};
