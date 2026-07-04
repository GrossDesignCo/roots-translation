import { Chapter } from '@/types';
import { psalms_46_0 } from './psalms-46-0';
import { psalms_46_1 } from './psalms-46-1';
import { psalms_46_2 } from './psalms-46-2';
import { psalms_46_3 } from './psalms-46-3';

const chapter: Chapter = {
  meta: {
    book: 'Psalms',
    chapter: 46,
  },
  verses: [psalms_46_0, psalms_46_1, psalms_46_2, psalms_46_3],
};

export default chapter;
