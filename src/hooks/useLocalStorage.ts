import { useState, useEffect } from 'react';
import { FontKey, LanguageKey } from '@/types';

/**
 * A generic hook to sync state data to local storage.
 * @param key - The key to use in localStorage
 * @param initialValue - The initial value to use if no data is found in localStorage
 * @returns [value, setValue, hydrated] - The current value, a function to update it, and a boolean indicating if hydration is complete
 */
export function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(initialValue);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(key);
    if (stored) {
      try {
        // eslint-disable-next-line react-hooks/set-state-in-effect -- hydrating from localStorage on mount
        setValue(JSON.parse(stored));
      } catch {
        // ignore parse error, keep default
      }
    }
    setHydrated(true);
  }, [key]);

  useEffect(() => {
    if (hydrated) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [value, hydrated, key]);

  return [value, setValue, hydrated] as const;
}

// Settings-specific wrapper hook
type Settings = {
  languages: LanguageKey[];
  theme: string;
  font: FontKey;
};

const defaultSettings: Settings = {
  languages: ['englishNatural'],
  theme: 'system',
  font: 'sans',
};

export const useSettingsFromLocalStorage = () => {
  return useLocalStorage<Settings>('concordance-settings', defaultSettings);
}; 