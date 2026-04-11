'use client';
import { useSettings } from '@/context/SettingsContext';
import { useTheme } from 'next-themes';
import { ToggleGroup } from '@/design-system';
import styles from './Settings.module.css';
import { FontKey, LanguageKey } from '@/types';

const Settings = () => {
  const { languages, setLanguages, font, setFont } = useSettings();

  const { theme, setTheme, systemTheme } = useTheme();

  return (
    <div className={styles.settings}>
      <ToggleGroup
        label="Languages"
        options={[
          {
            value: 'original',
            label: 'Original',
            preview: (
              <>
                <div className={styles.originalLanguage}>
                  <span lang="he">יְהוָה</span>
                  <span lang="el">ἐγὼ</span>
                </div>
              </>
            ),
          },
          {
            value: 'transliteration',
            label: 'Translit.',
            preview: (
              <>
                <div className={styles.transliteration}>
                  <span>YHWH</span>
                </div>
              </>
            ),
          },
          {
            value: 'englishLiteral',
            label: 'English-Lit.',
            preview: (
              <>
                <div className={styles.englishLiteral}>
                  <span>I_AM</span>
                </div>
              </>
            ),
          },
          {
            value: 'englishNatural',
            label: 'English-Nat.',
            preview: (
              <>
                <div className={styles.englishNatural}>
                  <span>I-AM</span>
                </div>
              </>
            ),
          },
        ]}
        value={languages}
        onChange={(langs) => setLanguages(langs as LanguageKey[])}
        name="languages"
      />

      <ToggleGroup
        label="Font"
        options={[
          {
            value: 'sans',
            label: 'Sans Serif',
            preview: (
              <>
                <div className="sans">
                  <span>Aa</span>
                </div>
              </>
            ),
          },
          {
            value: 'serif',
            label: 'Serif',
            preview: (
              <>
                <div className="serif">
                  <span>Aa</span>
                </div>
              </>
            ),
          },
        ]}
        value={font}
        onChange={(font) => setFont(font as FontKey)}
        name="font"
      />

      <ToggleGroup
        label="Theme"
        options={[
          {
            value: 'light',
            label: 'Light',
            // @ts-expect-error - using custom prop to pass data-attr
            ['data-theme']: 'light',
            preview: (
              <>
                <div className={styles.light}>
                  <span>Aa</span>
                </div>
              </>
            ),
          },
          {
            value: 'dark',
            label: 'Dark',
            // @ts-expect-error - using custom prop to pass data-attr
            ['data-theme']: 'dark',
            preview: (
              <>
                <div className={styles.dark}>
                  <span>Aa</span>
                </div>
              </>
            ),
          },
          {
            value: 'system',
            label: 'System',
            // @ts-expect-error - using custom prop to pass data-attr
            ['data-theme']: systemTheme,
            preview: (
              <>
                <div className="system">
                  <span>Aa</span>
                </div>
              </>
            ),
          },
        ]}
        value={theme}
        onChange={(theme) => setTheme(theme as string)}
        name="theme"
      />
    </div>
  );
};

export default Settings;
