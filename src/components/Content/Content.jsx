import { useMemo } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import InputChoose from '../InputChoose/InputChoose';
import ShortDescription from '../ShortDescription/ShortDescription';
import ThemeButton from '../ThemeButton/ThemeButton';
import DayCardList from '../DayCardList/DayCardList';
import './Content.scss';

function Content() {
  const [theme] = useTheme();

  return useMemo(() => {
    return (
      <div className="content">
        <div className={`contentBox ${theme}`}>
          <div className="contentBoxHeader">
            <InputChoose />
            <ShortDescription />
            <ThemeButton />
          </div>
          <DayCardList />
        </div>
      </div>
    );
  }, [theme]);
}

export default Content;
