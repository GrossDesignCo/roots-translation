import { Book } from '@/types';
import exodus_2 from './exodus-2';
import exodus_3 from './exodus-3';
import exodus_4 from './exodus-4';
import exodus_5 from './exodus-5';
import exodus_6 from './exodus-6';
import exodus_7 from './exodus-7';
import exodus_10 from './exodus-10';
import exodus_11 from './exodus-11';
import exodus_12 from './exodus-12';
import exodus_34 from './exodus-34';

export const exodus: Book = {
  meta: {
    name: 'Exodus',
    translationChain:
      'שְׁמוֹת (Shemot/Names) → Ἔξοδος (Exodus/Going-Out) → Exodus',
  },
  chapters: [
    exodus_2,
    exodus_3,
    exodus_4,
    exodus_5,
    exodus_6,
    exodus_7,
    exodus_10,
    exodus_11,
    exodus_12,
    exodus_34,
  ],
};
