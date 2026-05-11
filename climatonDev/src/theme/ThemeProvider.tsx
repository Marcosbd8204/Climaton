import React, { createContext, useContext, useState } from 'react';
import { lightTheme, darkTheme } from './theme';
import { ThemeType } from './types';

type ThemeContextData = {
  theme: ThemeType;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextData>(
  {} as ThemeContextData
);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeType>(lightTheme as ThemeType);

  function toggleTheme() {
    setTheme((prev) =>
      prev.mode === 'light'
        ? (darkTheme as ThemeType)
        : (lightTheme as ThemeType)
    );
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}