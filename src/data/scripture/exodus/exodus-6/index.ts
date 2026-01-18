import { Chapter } from '@/types';
import { exodus_6_1 } from './exodus-6-1';
import { exodus_6_2 } from './exodus-6-2';
import { exodus_6_3 } from './exodus-6-3';
import { exodus_6_6 } from './exodus-6-6';

const chapter: Chapter = {
  meta: {
    book: 'Exodus',
    chapter: 6,
  },
  verses: [exodus_6_1, exodus_6_2, exodus_6_3, exodus_6_6],
};

export default chapter;

