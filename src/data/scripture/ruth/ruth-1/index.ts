import { Chapter } from '@/types';
import { ruth_1_1 } from './ruth-1-1';
import { ruth_1_2 } from './ruth-1-2';
import { ruth_1_3 } from './ruth-1-3';
import { ruth_1_4 } from './ruth-1-4';
import { ruth_1_5 } from './ruth-1-5';

const chapter: Chapter = {
  meta: {
    book: 'Ruth',
    chapter: 1,
  },
  verses: [ruth_1_1, ruth_1_2, ruth_1_3, ruth_1_4, ruth_1_5],
};

export default chapter;
