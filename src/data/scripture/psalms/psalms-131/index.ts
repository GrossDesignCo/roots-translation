import { Chapter } from '@/types';
import { psalms_131_0 } from './psalms-131-0';
import { psalms_131_1 } from './psalms-131-1';
import { psalms_131_2 } from './psalms-131-2';
import { psalms_131_3 } from './psalms-131-3';

const chapter: Chapter = {
  meta: {
    book: 'Psalms',
    chapter: 131,
  },
  verses: [psalms_131_0, psalms_131_1, psalms_131_2, psalms_131_3],
};

export default chapter; 