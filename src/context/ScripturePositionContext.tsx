import React, {
  createContext,
  useContext,
  useRef,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { useLocalStorage } from '@/hooks/useLocalStorage';

const INFLATION_MARGIN = '500%';

interface ScripturePositionContextType {
  observe: (element: Element) => void;
  unobserve: (element: Element) => void;
  observeForInflation: (element: Element) => void;
  unobserveForInflation: (element: Element) => void;
  visibleChapterIds: string[];
  middleChapterId: string;
  inflatedChapterIds: Set<string>;
  scrollToChapter: (chapterId: string) => void;
}

const ScripturePositionContext =
  createContext<ScripturePositionContextType | null>(null);

function findScrollParent(el: HTMLElement): HTMLElement | Window {
  let node: HTMLElement | null = el.parentElement;
  while (node) {
    const { overflow, overflowY } = getComputedStyle(node);
    if (/(auto|scroll)/.test(overflow + overflowY)) return node;
    node = node.parentElement;
  }
  return window;
}

function getBookFromChapterId(chapterId: string): string {
  const lastDash = chapterId.lastIndexOf('-');
  return lastDash === -1 ? chapterId : chapterId.slice(0, lastDash);
}

export const ScripturePositionProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const hasRestoredScroll = useRef(false);

  // --- Visibility tracking (nav highlighting) ---
  const visibilityObserver = useRef<IntersectionObserver | null>(null);
  const [visibleChapterIds, setVisibleChapterIds, hydrated] = useLocalStorage<
    string[]
  >('visible-chapters', []);
  const middleChapterId =
    visibleChapterIds[Math.floor((visibleChapterIds.length - 1) / 2)];

  const handleVisibility = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        const chapterId = entry.target.getAttribute('data-chapter-id');
        if (!chapterId) return;

        if (entry.isIntersecting) {
          setVisibleChapterIds((prev) => {
            const newSet = new Set(prev);
            newSet.add(chapterId);
            return Array.from(newSet).sort();
          });
        } else {
          setVisibleChapterIds((prev) => {
            const newSet = new Set(prev);
            newSet.delete(chapterId);
            return Array.from(newSet).sort();
          });
        }
      });
    },
    [setVisibleChapterIds],
  );

  useEffect(() => {
    visibilityObserver.current = new IntersectionObserver(handleVisibility, {
      threshold: 0.1,
    });
    return () => visibilityObserver.current?.disconnect();
  }, [handleVisibility]);

  const observe = useCallback((element: Element) => {
    visibilityObserver.current?.observe(element);
  }, []);

  const unobserve = useCallback((element: Element) => {
    visibilityObserver.current?.unobserve(element);
  }, []);

  // --- Inflation tracking (conditional verse rendering) ---
  const [inflatedChapterIds, setInflatedChapterIds] = useState<Set<string>>(
    () => new Set(),
  );
  const inflationObserver = useRef<IntersectionObserver | null>(null);
  const inflationElements = useRef<Set<Element>>(new Set());

  const handleInflation = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const toInflate: string[] = [];

      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const chapterId = entry.target.getAttribute('data-chapter-id');
        if (chapterId) toInflate.push(chapterId);
      });

      if (toInflate.length === 0) return;

      setInflatedChapterIds((prev) => {
        const next = new Set(prev);
        let changed = false;
        for (const id of toInflate) {
          if (!next.has(id)) {
            next.add(id);
            changed = true;
          }
        }
        return changed ? next : prev;
      });
    },
    [],
  );

  useEffect(() => {
    inflationObserver.current = new IntersectionObserver(handleInflation, {
      rootMargin: INFLATION_MARGIN,
    });

    // Observe any elements that registered before the observer was created
    for (const el of inflationElements.current) {
      inflationObserver.current.observe(el);
    }

    return () => inflationObserver.current?.disconnect();
  }, [handleInflation]);

  const observeForInflation = useCallback((element: Element) => {
    inflationElements.current.add(element);
    inflationObserver.current?.observe(element);
  }, []);

  const unobserveForInflation = useCallback((element: Element) => {
    inflationElements.current.delete(element);
    inflationObserver.current?.unobserve(element);
  }, []);

  // --- Scroll helpers ---

  /**
   * Scrolls to an element by ID with a small top margin so the target
   * isn't flush against the viewport edge. Works regardless of whether
   * the scroll container is the window or a panel with overflow: auto.
   */
  const scrollToElement = useCallback(
    (elementId: string, { margin = true } = {}) => {
      const el = document.getElementById(elementId);
      if (!el) return;
      el.scrollIntoView({ block: 'start', behavior: 'instant' });

      if (margin) {
        const offset = parseFloat(getComputedStyle(el).fontSize) * 3;
        findScrollParent(el).scrollBy({ top: -offset, behavior: 'instant' });
      }
    },
    [],
  );

  /**
   * Resolves the scroll target for a chapter: if it's chapter 1,
   * scroll to the book heading instead so the reader sees the title.
   */
  const getScrollTarget = useCallback(
    (chapterId: string): { id: string; isBook: boolean } => {
      const chapterNum = chapterId.slice(chapterId.lastIndexOf('-') + 1);
      if (chapterNum === '1')
        return { id: getBookFromChapterId(chapterId), isBook: true };
      return { id: chapterId, isBook: false };
    },
    [],
  );

  // --- Scroll-to-chapter: inflate first, then instant jump ---
  const scrollToChapter = useCallback(
    (chapterId: string) => {
      setInflatedChapterIds((prev) => {
        if (prev.has(chapterId)) return prev;
        const next = new Set(prev);
        next.add(chapterId);
        return next;
      });

      const target = getScrollTarget(chapterId);

      // Wait for React to render the inflated content, then jump.
      // Instant behavior avoids intermediate chapters inflating
      // mid-animation and shifting the target.
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          scrollToElement(target.id, { margin: !target.isBook });
        });
      });
    },
    [getScrollTarget, scrollToElement],
  );

  // Restore scroll position on page load
  useEffect(() => {
    if (!hydrated || hasRestoredScroll.current) return;
    hasRestoredScroll.current = true;

    if (visibleChapterIds.length === 0) return;

    const targetChapterId =
      visibleChapterIds[Math.floor(visibleChapterIds.length / 2)];

    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time scroll restore requires inflating before scrolling
    setInflatedChapterIds((prev) => {
      const next = new Set(prev);
      next.add(targetChapterId);
      return next;
    });

    const target = getScrollTarget(targetChapterId);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        scrollToElement(target.id, { margin: !target.isBook });
      });
    });
  }, [hydrated]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!hydrated) return null;

  return (
    <ScripturePositionContext.Provider
      value={{
        observe,
        unobserve,
        observeForInflation,
        unobserveForInflation,
        visibleChapterIds,
        middleChapterId,
        inflatedChapterIds,
        scrollToChapter,
      }}
    >
      {children}
    </ScripturePositionContext.Provider>
  );
};

export const useScripturePosition = () => {
  const context = useContext(ScripturePositionContext);
  if (!context) {
    throw new Error(
      'useScripturePosition must be used within an ScripturePositionProvider',
    );
  }
  return context;
};

export { getBookFromChapterId };

export const useInflation = () => {
  const { inflatedChapterIds } = useScripturePosition();
  return {
    isChapterInflated: useCallback(
      (chapterId: string) => inflatedChapterIds.has(chapterId),
      [inflatedChapterIds],
    ),
    isBookInflated: useCallback(
      (bookKey: string) => {
        for (const id of inflatedChapterIds) {
          if (getBookFromChapterId(id) === bookKey) return true;
        }
        return false;
      },
      [inflatedChapterIds],
    ),
  };
};
