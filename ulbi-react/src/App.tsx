import { Route, Routes, Link } from 'react-router-dom';
import { Suspense } from 'react';
import AboutPageAsync from './pages/AboutPage/AboutPage.async';
import HomePageAsync from './pages/HomePage/HomePage.async';
import { useTheme } from './theme/useTheme';
import './styles/index.scss';

const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={`app ${theme}`}>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <button onClick={toggleTheme}>Toggle theme</button>

            <Suspense fallback={'...Loading'}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageAsync />} />
                    <Route path={'/'} element={<HomePageAsync />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
