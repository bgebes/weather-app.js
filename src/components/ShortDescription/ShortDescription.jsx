import { useMemo } from 'react';
import { useLocation } from '../../contexts/LocationContext';
import { useTheme } from '../../contexts/ThemeContext';
import { useWeather } from '../../contexts/WeatherContext';
import './ShortDescription.scss';

function ShortDescription() {
  const [theme] = useTheme();
  const [location] = useLocation();
  const [weather] = useWeather();
  const today = weather[0];

  const desc = today?.condition.description
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(' ');

  return useMemo(() => {
    return (
      <div className="shortDescription">
        {`Bugün ${location} için hava en az ${today?.temp.min} derece, en fazla ${today?.temp.max} derece olacak. 
        Havanın bugünkü durumu: ${desc}`}
      </div>
    );
  }, [theme, weather, today]);
}

export default ShortDescription;
