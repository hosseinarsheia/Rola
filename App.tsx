import React from 'react';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import { ThemeProvider } from './src/theme/ThemeProvider';
import RolaNavigation from './src/navigation';

const App = () => {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <RolaNavigation />
      </SafeAreaProvider>
    </ThemeProvider>
  );
};

export default App;
