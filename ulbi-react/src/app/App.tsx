import { Route, Routes, Link } from 'react-router-dom';
import { Suspense } from 'react';

import { AboutPage } from '@pages/AboutPage';
import { HomePage } from '@pages/HomePage';
import { useTheme } from '@app/providers/ThemeProvider';
import { classNames } from '@shared/lib/classNames';
import '@app/styles/index.scss';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme, 'cls1'])}>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>
      <button onClick={toggleTheme}>Toggle theme</button>

      <Suspense fallback={'...Loading'}>
        <Routes>
          <Route path={'/about'} element={<AboutPage />} />
          <Route path={'/'} element={<HomePage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
