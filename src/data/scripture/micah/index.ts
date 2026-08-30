import { Book } from '@/types';
import micah_1 from './micah-1';
import micah_2 from './micah-2';

export const micah: Book = {
  meta: {
    name: 'Micah',
    translationChain:
      'מיכה (Mikhah/Who_Is_Like_He) → Μιχαίας (Michaias) → Micah',
  },
  chapters: [micah_1, micah_2],
};
