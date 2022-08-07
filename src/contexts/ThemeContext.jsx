import { createContext, useContext, useState, useMemo } from 'react';

export const ThemeContext = createContext();

export default function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState('light');

  return useMemo(() => {
    return (
      <ThemeContext.Provider value={[theme, setTheme]}>
        {children}
      </ThemeContext.Provider>
    );
  }, [theme, setTheme]);
}

export const useTheme = () => {
  return useContext(ThemeContext);
};
