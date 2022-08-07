import { useMemo } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import './ThemeButton.scss';

function ThemeButton() {
  const [theme, setTheme] = useTheme();
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return useMemo(() => {
    return (
      <div className={`themeButton ${theme}`}>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
    );
  }, [theme]);
}

export default ThemeButton;
