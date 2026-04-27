import { Book } from '@/types';
import isaiah_6 from './isaiah-6';
import isaiah_14 from './isaiah-14';

export const isaiah: Book = {
  meta: {
    name: 'Isaiah',
    translationChain:
      'יִשְׂעִיאֵל (yiShaiyel/Isaiah/He-Saves) → Ἠσαΐας (Ēsaias/Isaiah) → Isaias (Isaiah) → Isaiah',
  },
  chapters: [isaiah_6, isaiah_14],
};
