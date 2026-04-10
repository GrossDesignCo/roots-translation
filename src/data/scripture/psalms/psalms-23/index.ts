import { Chapter } from '@/types';
import { psalms_23_0 } from './psalms-23-0';
import { psalms_23_1 } from './psalms-23-1';
import { psalms_23_2 } from './psalms-23-2';
import { psalms_23_3 } from './psalms-23-3';
import { psalms_23_4 } from './psalms-23-4';
import { psalms_23_5 } from './psalms-23-5';
import { psalms_23_6 } from './psalms-23-6';

const chapter: Chapter = {
  meta: {
    book: 'Psalms',
    chapter: 23,
  },
  verses: [psalms_23_0, psalms_23_1, psalms_23_2, psalms_23_3, psalms_23_4, psalms_23_5, psalms_23_6],
};

export default chapter; 