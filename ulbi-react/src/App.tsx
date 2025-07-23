import { Route, Routes, Link } from 'react-router-dom';
import { Suspense } from 'react';
import AboutPageAsync from './pages/AboutPage/AboutPage.async';
import HomePageAsync from './pages/HomePage/HomePage.async';
import './index.scss';

const App = () => {
    return (
        <div className="app">
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>\

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
