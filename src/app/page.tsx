'use client';
import { SettingsProvider } from '@/context/SettingsContext';
import { SelectionProvider } from '@/context/SelectionContext';
import { Main } from '@/components/Main';
import { LexiconProvider } from '@/context/LexiconContext';
import { ViewPanelsProvider } from '@/context/ViewPanelsContext';
import { ScripturePositionProvider } from '@/context/ScripturePositionContext';

const Home = () => {
  return (
    <ScripturePositionProvider>
      <SettingsProvider>
        <SelectionProvider>
          <LexiconProvider>
            <ViewPanelsProvider>
              <Main />
            </ViewPanelsProvider>
          </LexiconProvider>
        </SelectionProvider>
      </SettingsProvider>
    </ScripturePositionProvider>
  );
};

export default Home;
