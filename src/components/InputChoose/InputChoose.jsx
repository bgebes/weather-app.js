import { useMemo } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { useLocation } from '../../contexts/LocationContext';
import { stateList } from '../../helpers/stateList';
import './InputChoose.scss';

function InputChoose() {
  const [theme] = useTheme();
  const [_, setLocation] = useLocation();
  const changeLocation = (e) => setLocation(e.target.value);

  return useMemo(() => {
    return (
      <div className={`inputChoose ${theme}`}>
        <select className="comboBox" onChange={changeLocation}>
          {stateList.map((country, index) => {
            return (
              <option key={index} value={country}>
                {country}
              </option>
            );
          })}
        </select>
      </div>
    );
  }, [theme, stateList]);
}

export default InputChoose;
