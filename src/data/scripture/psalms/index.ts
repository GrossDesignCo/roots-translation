import { Book } from '@/types';
import psalms_1 from './psalms-1';
import psalms_3 from './psalms-3';
import psalms_8 from './psalms-8';
import psalms_23 from './psalms-23';
import psalms_46 from './psalms-46';
import psalms_117 from './psalms-117';
import psalms_131 from './psalms-131';

export const psalms: Book = {
  meta: {
    name: 'Psalms',
    translationChain:
      'תְּהִלִּים (tehillim/Praises/Songs of Praise) → Ψαλμοί (Psalmoi/Psalms/Songs with Harps) → Psalmi (Psalms/Hymns) → Psalms',
  },
  chapters: [psalms_1, psalms_3, psalms_8, psalms_23, psalms_46, psalms_117, psalms_131],
}; 