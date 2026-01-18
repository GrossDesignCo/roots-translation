import { Chapter } from '@/types';
import { exodus_5_1 } from './exodus-5-1';
import { exodus_5_2 } from './exodus-5-2';
import { exodus_5_3 } from './exodus-5-3';
import { exodus_5_4 } from './exodus-5-4';
import { exodus_5_5 } from './exodus-5-5';

const chapter: Chapter = {
  meta: {
    book: 'Exodus',
    chapter: 5,
  },
  verses: [exodus_5_1, exodus_5_2, exodus_5_3, exodus_5_4, exodus_5_5],
};

export default chapter;

