import React from 'react';
import {useColorScheme} from 'react-native';
import {lightColors, darkColors} from './colors';

type ThemeScheme = 'light' | 'dark';

interface ThemeContextInterface {
  isDark: boolean;
  colors: typeof lightColors | typeof darkColors;
  setScheme: (value: ThemeScheme) => void;
}

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeContext = React.createContext<ThemeContextInterface>({
  isDark: false,
  colors: lightColors,
  setScheme: () => {},
});

export const ThemeProvider = ({children}: ThemeProviderProps) => {
  const colorScheme = useColorScheme();

  const [isDark, setIsDark] = React.useState(colorScheme === 'dark');

  // Listening to changes of device appearance while in run-time
  React.useEffect(() => {
    setIsDark(colorScheme === 'dark');
  }, [colorScheme]);

  const defaultTheme = {
    isDark,
    colors: isDark ? darkColors : lightColors,
    setScheme: (scheme: ThemeScheme) => setIsDark(scheme === 'dark'),
  };

  return (
    <ThemeContext.Provider value={defaultTheme}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to get the theme object returns {isDark, colors, setScheme}
export const useTheme = () => React.useContext(ThemeContext);
