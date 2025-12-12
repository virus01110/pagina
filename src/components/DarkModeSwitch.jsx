import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { ThemeContext } from '../contexts/ThemeContext';

function DarkModeSwitch() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Button variant="secondary" onClick={toggleTheme}>
      {theme === 'light' ? 'Modo Oscuro' : 'Modo Claro'}
    </Button>
  );
}

export default DarkModeSwitch;
