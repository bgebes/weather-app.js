import { createContext, useContext, useState, useMemo } from 'react';

export const LocationContext = createContext();

export default function LocationContextProvider({ children }) {
  const [location, setLocation] = useState('Adana');

  return useMemo(() => {
    return (
      <LocationContext.Provider value={[location, setLocation]}>
        {children}
      </LocationContext.Provider>
    );
  }, [location, setLocation]);
}

export const useLocation = () => {
  return useContext(LocationContext);
};
