import { Link } from 'react-router-dom';

import { useTheme } from '@app/providers/ThemeProvider';
import { AppRouter } from '@app/providers/AppRouter';
import { classNames } from '@shared/lib/classNames';
import '@app/styles/index.scss';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>
      <button onClick={toggleTheme}>Toggle theme</button>
      <AppRouter />
    </div>
  );
};

export default App;
