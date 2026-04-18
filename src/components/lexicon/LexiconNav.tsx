'use client';

import { Link } from '@/design-system';
import navStyles from '@/components/NavLinks.module.css';
import styles from './LexiconNav.module.css';
import { usePathname } from 'next/navigation';
import cx from 'classnames';
import {
  LEXICON_LANGUAGE_LABELS,
  parseLexiconEntryPath,
} from '@/utils/lexiconRoutes';

export function LexiconNav() {
  const pathname = usePathname();
  const entryTrail = parseLexiconEntryPath(pathname);

  return (
    <div className={navStyles.NavLinks}>
      <Link
        href="/"
        className={cx(navStyles.NavLink, {
          [navStyles.active]: pathname === '/',
        })}
      >
        Back
      </Link>

      <div className={styles.lexiconTrail}>
        <Link
          href="/lexicon"
          className={cx(navStyles.NavLink, {
            [navStyles.active]: pathname === '/lexicon',
          })}
        >
          Lexicon
        </Link>
        {entryTrail != null && (
          <>
            <span className={styles.trailSep} aria-hidden="true">
              /
            </span>
            <span className={styles.trailLang}>
              {LEXICON_LANGUAGE_LABELS[entryTrail.lang]}
            </span>
            <span className={styles.trailSep} aria-hidden="true">
              /
            </span>
            <span className={styles.trailCurrent}>{entryTrail.key}</span>
          </>
        )}
      </div>
    </div>
  );
}
