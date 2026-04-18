import cx from 'classnames';
import styles from './TranslationProgressMeter.module.css';
import type {
  TranslationProgressData,
  ScriptureMetadata,
} from '@/data/pipeline/getTranslationProgress';
import { ScriptureHeatMap } from '@/design-system/components/ScriptureHeatMap';

export async function TranslationProgressMeter({
  progress,
  metadata,
}: {
  progress: TranslationProgressData;
  metadata: ScriptureMetadata;
}) {
  if (!progress) {
    return null;
  }

  return (
    <div className={styles.translationProgress}>
      <h3 className={cx(styles.overallProgress, 'highlight-soft')}>
        Overall{' '}
        <span className="highlight-strong">
          {progress.totalProgress.toFixed(2)}%
        </span>
      </h3>

      <div className={styles.metrics}>
        <span className={cx(styles.metric, 'highlight-soft')}>
          <strong>{metadata.translated.books}</strong> / {metadata.total.books}{' '}
          Books
        </span>
        <span className={cx(styles.metric, 'highlight-soft')}>
          <strong>{metadata.translated.chapters.toLocaleString()}</strong> /{' '}
          {metadata.total.chapters.toLocaleString()} Chapters
        </span>
        <span className={cx(styles.metric, 'highlight-soft')}>
          <strong>{metadata.translated.verses.toLocaleString()}</strong> /{' '}
          {metadata.total.verses.toLocaleString()} Verses
        </span>
      </div>

      <ScriptureHeatMap
        // @ts-expect-error - TODO: Scripture types are similar but need cleanup
        scripture={{ books: progress.books }}
        mode="full-page"
      />
    </div>
  );
}
