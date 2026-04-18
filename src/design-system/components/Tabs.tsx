'use client';

import { createContext, useContext, useMemo, type ReactNode } from 'react';
import cx from 'classnames';
import styles from './Tabs.module.css';

interface TabsContextValue {
  value: string;
  onValueChange: (id: string) => void;
}

const TabsContext = createContext<TabsContextValue | null>(null);

function useTabsContext(component: string): TabsContextValue {
  const ctx = useContext(TabsContext);
  if (!ctx) {
    throw new Error(`${component} must be used within <Tabs>`);
  }
  return ctx;
}

export interface TabsProps {
  /** Selected tab id (must match a {@link TabListItem} id and a {@link TabPanel} value). */
  value: string;
  onValueChange: (id: string) => void;
  children: ReactNode;
}

/**
 * Controlled tabs shell. Compose with {@link TabList} and one {@link TabPanel} per tab.
 * Each {@link TabPanel} **mounts only when selected** so only one panel exists in the DOM at a time.
 */
export function Tabs({ value, onValueChange, children }: TabsProps) {
  const ctx = useMemo(() => ({ value, onValueChange }), [value, onValueChange]);

  return <TabsContext.Provider value={ctx}>{children}</TabsContext.Provider>;
}

export interface TabListItem {
  id: string;
  label: string;
}

export interface TabListProps {
  tabs: TabListItem[];
  /** Accessible name for the tab strip (`aria-label` on `role="tablist"`). */
  ariaLabel: string;
  className?: string;
}

/** Tab buttons; selection comes from {@link Tabs}. Tab ids are `tab-{id}` for `aria-labelledby` on {@link TabPanel}. */
export function TabList({ tabs, ariaLabel, className }: TabListProps) {
  const { value, onValueChange } = useTabsContext('TabList');

  return (
    <div
      role="tablist"
      aria-label={ariaLabel}
      className={cx(styles.tabList, className)}
    >
      {tabs.map((tab) => {
        const selected = value === tab.id;
        const tabId = `tab-${tab.id}`;

        return (
          <button
            key={tab.id}
            type="button"
            role="tab"
            id={tabId}
            aria-selected={selected}
            tabIndex={selected ? 0 : -1}
            className={cx(styles.tab, selected && styles.tabSelected)}
            onClick={() => onValueChange(tab.id)}
            onKeyDown={(e) => {
              if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
              e.preventDefault();
              const i = tabs.findIndex((t) => t.id === tab.id);
              const next =
                e.key === 'ArrowRight'
                  ? tabs[(i + 1) % tabs.length]
                  : tabs[(i - 1 + tabs.length) % tabs.length];
              onValueChange(next.id);
              document.getElementById(`tab-${next.id}`)?.focus();
            }}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}

export interface TabPanelProps {
  /** Must match a tab id from {@link TabList}. */
  value: string;
  children: ReactNode;
  className?: string;
  /** `id` on the tabpanel element (default `tabpanel-{value}`). */
  id?: string;
}

/**
 * Renders `role="tabpanel"` **only for the active tab**; other panels return `null` (unmounted).
 */
export function TabPanel({
  value: panelValue,
  children,
  className,
  id,
}: TabPanelProps) {
  const { value } = useTabsContext('TabPanel');

  if (value !== panelValue) return null;

  const panelId = id ?? `tabpanel-${panelValue}`;

  return (
    <div
      role="tabpanel"
      id={panelId}
      aria-labelledby={`tab-${panelValue}`}
      className={className}
    >
      {children}
    </div>
  );
}
