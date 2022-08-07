import { useMemo } from 'react';
import { useWeather } from '../../contexts/WeatherContext';
import DayCard from '../DayCard/DayCard';
import './DayCardList.scss';

function DayCardList() {
  const [weather] = useWeather();

  return useMemo(() => {
    return (
      <div className="dayCardList">
        {weather.map((day, index) => (
          <DayCard
            key={index}
            dayData={day}
            active={day.name == 'Bugün' ? true : false}
          />
        ))}
      </div>
    );
  }, [weather]);
}

export default DayCardList;
