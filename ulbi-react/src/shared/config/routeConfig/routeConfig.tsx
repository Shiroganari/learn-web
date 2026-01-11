import { AboutPage } from '@pages/AboutPage';
import { HomePage } from '@pages/HomePage';
import { RouteProps } from 'react-router-dom';

export enum Routes {
  HOME = 'home',
  ABOUT = 'about',
}

export const RoutePath: Record<Routes, string> = {
  [Routes.HOME]: '/',
  [Routes.ABOUT]: '/about',
};

export const RouteConfig: Record<Routes, RouteProps> = {
  [Routes.HOME]: {
    path: RoutePath.home,
    element: <HomePage />,
  },
  [Routes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />,
  },
};
