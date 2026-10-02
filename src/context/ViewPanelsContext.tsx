import {
  addTransitionType,
  createContext,
  startTransition,
  useContext,
  useRef,
  useState,
  ReactNode,
} from 'react';

/** Toolbar order; view switches slide in the direction of travel along it. */
export const SECONDARY_PANELS = ['lexicon', 'scriptureNav', 'settings'] as const;

export type SecondaryPanelKey = (typeof SECONDARY_PANELS)[number];
export type SecondaryPanel = null | SecondaryPanelKey;

interface ViewPanelsContextProps {
  secondaryPanel: SecondaryPanel;
  setSecondaryPanel: (value: SecondaryPanel) => void;
}

const ViewPanelsContext = createContext<ViewPanelsContextProps | undefined>(
  undefined
);

const getTransitionTypes = (
  prev: SecondaryPanel,
  next: SecondaryPanel
): string[] => {
  if (!prev) return ['panel-open'];
  if (!next) return ['panel-close'];

  const isForward =
    SECONDARY_PANELS.indexOf(next) > SECONDARY_PANELS.indexOf(prev);
  const types = ['panel-switch', isForward ? 'panel-forward' : 'panel-back'];

  // The lexicon is the one wide view (Main.module.css)
  if ((prev === 'lexicon') !== (next === 'lexicon')) {
    types.push(next === 'lexicon' ? 'panel-widen' : 'panel-narrow');
  }

  return types;
};

export const ViewPanelsProvider = ({ children }: { children: ReactNode }) => {
  const [secondaryPanel, setSecondaryPanel] = useState<SecondaryPanel>(null);
  // Commits wait for a running view transition, so rapid clicks compare
  // against the latest request rather than the last committed state
  const requestedPanel = useRef<SecondaryPanel>(null);

  // Only allow one panel to be open at a time,
  // if the user selects the same control again, de-activate it
  const handleSetSecondaryPanel = (panel: SecondaryPanel) => {
    const prev = requestedPanel.current;
    const next = panel === prev ? null : panel;
    if (next === prev) return;
    requestedPanel.current = next;

    startTransition(() => {
      getTransitionTypes(prev, next).forEach(addTransitionType);
      setSecondaryPanel(next);
    });
  };

  return (
    <ViewPanelsContext.Provider
      value={{
        secondaryPanel,
        setSecondaryPanel: handleSetSecondaryPanel,
      }}
    >
      {children}
    </ViewPanelsContext.Provider>
  );
};

export const useViewPanels = () => {
  const context = useContext(ViewPanelsContext);
  if (context === undefined) {
    throw new Error('useViewPanels must be used within a ViewPanelsProvider');
  }
  return context;
};
