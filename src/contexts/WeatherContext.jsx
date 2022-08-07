import { createContext, useContext, useEffect, useState, useMemo } from 'react';
import { getWeathers } from '../actions/actions';
import { getStateGeo } from '../utils/utils';
import { useLocation } from './LocationContext';
import { auth } from '../../auth';

export const WeatherContext = createContext();

export default function WeatherContextProvider({ children }) {
  const [weather, setWeather] = useState([]);
  const [location] = useLocation();
  const { lat, lon } = getStateGeo(location);
  const apiKey = auth.apiKey;

  useEffect(() => {
    (async function () {
      const newWeathers = await getWeathers({ lat, lon, apiKey });
      setWeather(newWeathers);
    })();
  }, [lat, lon]);

  return useMemo(() => {
    return (
      <WeatherContext.Provider value={[weather, setWeather]}>
        {children}
      </WeatherContext.Provider>
    );
  }, [weather, setWeather]);
}

export const useWeather = () => {
  return useContext(WeatherContext);
};
