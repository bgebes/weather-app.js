import { useMemo } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import './DayCard.scss';

function DayCard({ dayData, active }) {
  const [theme] = useTheme();

  const { name, condition, temp } = dayData;

  const { description, image } = condition;
  const { min, max } = temp;

  return useMemo(() => {
    return (
      <div className={`dayCard ${theme} ${active == true ? 'active' : null}`}>
        <div className="dayCard__name">{name}</div>
        <div className={`dayCard__image ${theme}`}>
          <img src={image} alt={description} />
        </div>
        <div className="dayCard__temp">
          <span>{min}</span>
          <span>{max}</span>
        </div>
      </div>
    );
  }, [theme, dayData]);
}

export default DayCard;
