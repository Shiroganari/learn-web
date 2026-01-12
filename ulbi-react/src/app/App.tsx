import { useTheme } from '@app/providers/ThemeProvider';
import { AppRouter } from '@app/providers/AppRouter';
import { classNames } from '@shared/lib/classNames';
import '@app/styles/index.scss';
import { Header } from '@widgets/Header';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Header />
      <button onClick={toggleTheme}>Toggle theme</button>
      <AppRouter />
    </div>
  );
};

export default App;
