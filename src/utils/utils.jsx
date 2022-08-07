import { stateGeoList } from '../helpers/stateGeoList';
import { weekDays } from '../helpers/weekDays';

export function getStateGeo(state) {
  const stateGeo = stateGeoList.find((s) => s.name === state);

  return { lat: stateGeo.latitude, lon: stateGeo.longitude };
}

function checkAboveWeek(current, increment) {
  const nextIndex = current + increment;

  return nextIndex > 6 ? nextIndex % 7 : nextIndex;
}

export function getCalendar(today) {
  const todayIndex = weekDays.indexOf(today);

  return {
    day0: 'Bugün',
    day1: weekDays[checkAboveWeek(todayIndex, 1)],
    day2: weekDays[checkAboveWeek(todayIndex, 2)],
    day3: weekDays[checkAboveWeek(todayIndex, 3)],
    day4: weekDays[checkAboveWeek(todayIndex, 4)],
    day5: weekDays[checkAboveWeek(todayIndex, 5)],
    day6: weekDays[checkAboveWeek(todayIndex, 6)],
    day7: weekDays[checkAboveWeek(todayIndex, 7)],
  };
}
