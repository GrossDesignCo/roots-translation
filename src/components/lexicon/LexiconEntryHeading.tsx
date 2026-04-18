import styles from './LexiconEntryHeading.module.css';

/** Prominent title parsed from leading `# …` line in lexicon markdown (shown above tabs / prose). */
export function LexiconEntryHeading({ title }: { title: string }) {
  return <h1 className={styles.entryHeading}>{title}</h1>;
}
