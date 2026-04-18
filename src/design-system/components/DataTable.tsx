import cx from 'classnames';
import type {
  ComponentProps,
  ReactNode,
  ThHTMLAttributes,
  TdHTMLAttributes,
} from 'react';
import styles from './DataTable.module.css';

export interface DataTableRootProps {
  children: ReactNode;
  className?: string;
}

/** Optional outer wrapper (optional title + scroll region live inside). */
export function DataTableRoot({ children, className }: DataTableRootProps) {
  return <div className={cx(styles.root, className)}>{children}</div>;
}

export interface DataTableTitleProps {
  children: ReactNode;
  className?: string;
}

/** Section heading above the scroll region (e.g. concordance count title). */
export function DataTableTitle({ children, className }: DataTableTitleProps) {
  return <h3 className={cx(styles.title, className)}>{children}</h3>;
}

export interface DataTableScrollProps {
  children: ReactNode;
  className?: string;
}

/** Horizontal scroll container; pairs with {@link DataTableTable}. */
export function DataTableScroll({ children, className }: DataTableScrollProps) {
  return (
    <div className={cx(styles.scrollContainer, className)}>{children}</div>
  );
}

export type DataTableTableProps = ComponentProps<'table'>;

/** Native `<table>` with design-system row/cell chrome. Compose with `<thead>` / `<tbody>`. */
export function DataTableTable({ className, ...props }: DataTableTableProps) {
  return <table className={cx(styles.table, className)} {...props} />;
}

export type DataTableThVariant = 'sticky' | 'wide' | 'default';

export type DataTableThProps = Omit<
  ThHTMLAttributes<HTMLTableCellElement>,
  'align'
> & {
  variant?: DataTableThVariant;
  /** Right-align header (avoids conflicting with legacy HTML `align`). */
  textAlignEdge?: 'start' | 'end';
};

export function DataTableTh({
  variant = 'default',
  textAlignEdge = 'start',
  className,
  ...props
}: DataTableThProps) {
  return (
    <th
      className={cx(
        variant === 'sticky' && styles.thSticky,
        variant === 'wide' && styles.thWide,
        textAlignEdge === 'end' && styles.thAlignEnd,
        className,
      )}
      {...props}
    />
  );
}

export type DataTableTdVariant =
  | 'default'
  | 'sticky'
  | 'script'
  | 'stickyScript';

export type DataTableTdProps = Omit<
  TdHTMLAttributes<HTMLTableCellElement>,
  'align'
> & {
  variant?: DataTableTdVariant;
  textAlignEdge?: 'start' | 'end';
  /** Overrides default nowrap for long prose cells */
  wrap?: boolean;
};

export function DataTableTd({
  variant = 'default',
  textAlignEdge = 'start',
  wrap = false,
  className,
  ...props
}: DataTableTdProps) {
  return (
    <td
      className={cx(
        variant === 'sticky' && styles.tdSticky,
        variant === 'script' && styles.tdScript,
        variant === 'stickyScript' && styles.tdStickyScript,
        variant === 'default' && styles.tdCell,
        textAlignEdge === 'end' && styles.tdAlignEnd,
        wrap && styles.cellWrap,
        className,
      )}
      {...props}
    />
  );
}

/**
 * Presentational building blocks for tabular data. Typical layout:
 *
 * ```tsx
 * <DataTableRoot className="full-page-bleed">
 *   <DataTableTitle>Optional title</DataTableTitle>
 *   <DataTableScroll>
 *     <DataTableTable>
 *       <thead><tr><DataTableTh scope="col">…</DataTableTh></tr></thead>
 *       <tbody><tr><DataTableTd>…</DataTableTd></tr></tbody>
 *     </DataTableTable>
 *   </DataTableScroll>
 * </DataTableRoot>
 * ```
 */
export const DataTable = {
  Root: DataTableRoot,
  Title: DataTableTitle,
  Scroll: DataTableScroll,
  Table: DataTableTable,
  Th: DataTableTh,
  Td: DataTableTd,
};
