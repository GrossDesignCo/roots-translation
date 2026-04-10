import React, {
  createContext,
  useContext,
  useRef,
  useCallback,
  useEffect,
} from 'react';
import { useLocalStorage } from '@/hooks/useLocalStorage';

interface ScripturePositionContextType {
  observe: (element: Element) => void;
  unobserve: (element: Element) => void;
  visibleChapterIds: string[];
  middleChapterId: string;
}

const ScripturePositionContext =
  createContext<ScripturePositionContextType | null>(null);

export const ScripturePositionProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const observer = useRef<IntersectionObserver | null>(null);
  const hasRestoredScroll = useRef(false);
  const [visibleChapterIds, setVisibleChapterIds, hydrated] = useLocalStorage<
    string[]
  >('visible-chapters', []);
  const middleChapterId =
    visibleChapterIds[Math.floor((visibleChapterIds.length - 1) / 2)];

  // Restore scroll position after hydration
  useEffect(() => {
    if (!hydrated || hasRestoredScroll.current) return;
    hasRestoredScroll.current = true;

    if (visibleChapterIds.length === 0) return;

    const targetId =
      visibleChapterIds[Math.floor(visibleChapterIds.length / 2)];

    // The chapter heading element may not be in the DOM yet if its book
    // hasn't inflated. Poll briefly to give IntersectionObservers time to
    // fire and mount the chapter shell.
    let attempts = 0;
    const tryScroll = () => {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ block: 'start' });
        return;
      }
      if (++attempts < 20) {
        requestAnimationFrame(tryScroll);
      }
    };
    requestAnimationFrame(tryScroll);
  }, [hydrated]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        const chapterId = entry.target.getAttribute('data-chapter-id');

        if (chapterId) {
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
        }
      });
    },
    [setVisibleChapterIds]
  );

  useEffect(() => {
    observer.current = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
    });

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [handleIntersection]);

  const observe = useCallback((element: Element) => {
    if (observer.current) {
      observer.current.observe(element);
    }
  }, []);

  const unobserve = useCallback((element: Element) => {
    if (observer.current) {
      observer.current.unobserve(element);
    }
  }, []);

  if (!hydrated) return null;

  return (
    <ScripturePositionContext.Provider
      value={{ observe, unobserve, visibleChapterIds, middleChapterId }}
    >
      {children}
    </ScripturePositionContext.Provider>
  );
};

export const useScripturePosition = () => {
  const context = useContext(ScripturePositionContext);
  if (!context) {
    throw new Error(
      'useScripturePosition must be used within an ScripturePositionProvider'
    );
  }
  return context;
};
