import { useTheme } from '@app/providers/ThemeProvider';
import { AppRouter } from '@app/providers/AppRouter';
import { classNames } from '@shared/lib/classNames';
import '@app/styles/index.scss';
import { Header } from '@widgets/Header';
import { Sidebar } from '@widgets/Sidebar';
import { Suspense } from 'react';

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Header />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
