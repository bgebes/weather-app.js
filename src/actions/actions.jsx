import axios from 'axios';
import { getCalendar } from '../utils/utils';

export async function getWeathers({ lat, lon, apiKey }) {
  const axiosHandler = await axios(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&units=metric&lang=tr&appid=${apiKey}`
  );

  const today = new Date().toLocaleString('tr-TR', { weekday: 'long' });
  const calendarHandler = getCalendar(today);

  return axiosHandler.data.daily.map((day, index) => {
    return {
      name: calendarHandler[`day${index}`],
      condition: {
        description: day.weather[0].description,
        image: `http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`,
      },
      temp: {
        min: `${Math.round(day.temp.min)}°`,
        max: `${Math.round(day.temp.max)}°`,
      },
    };
  });
}
