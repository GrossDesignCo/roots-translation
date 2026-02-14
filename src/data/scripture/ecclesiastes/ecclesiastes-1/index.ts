import { Chapter } from '@/types';
import { ecclesiastes_1_1 } from './ecclesiastes-1-1';
import { ecclesiastes_1_2 } from './ecclesiastes-1-2';

const chapter: Chapter = {
  meta: {
    book: 'Ecclesiastes',
    chapter: 1,
  },
  verses: [ecclesiastes_1_1, ecclesiastes_1_2],
};

export default chapter;
