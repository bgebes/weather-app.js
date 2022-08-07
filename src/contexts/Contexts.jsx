import ThemeContextProvider from './ThemeContext';
import LocationContextProvider from './LocationContext';
import WeatherContextProvider from './WeatherContext';
import { useMemo } from 'react';

function Contexts({ children }) {
  return useMemo(() => {
    return (
      <ThemeContextProvider>
        <LocationContextProvider>
          <WeatherContextProvider>{children}</WeatherContextProvider>
        </LocationContextProvider>
      </ThemeContextProvider>
    );
  }, [children]);
}

export default Contexts;
