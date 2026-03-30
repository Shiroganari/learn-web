import { RouteObject } from 'react-router-dom';

export enum AppRoutes {
  HOME = 'home',
  ABOUT = 'about',
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.NOT_FOUND]: '*',
};

const withDelay = <T,>(fn: () => Promise<T>, delay: number): Promise<T> =>
  new Promise(resolve => setTimeout(() => resolve(fn()), delay));

export const routerConfig: RouteObject[] = [
  {
    path: RoutePath[AppRoutes.HOME],
    lazy: () => withDelay(
      () => import('@pages/HomePage/ui/HomePage').then(m => ({ Component: m.default })),
      1500,
    ),
  },
  {
    path: RoutePath[AppRoutes.ABOUT],
    lazy: () => withDelay(
      () => import('@pages/AboutPage/ui/AboutPage').then(m => ({ Component: m.default })),
      1500,
    ),
  },
  {
    path: RoutePath[AppRoutes.NOT_FOUND],
    lazy: () => withDelay(
      () => import('@pages/NotFoundPage/ui/NotFoundPage').then(m => ({ Component: m.default })),
      1500,
    ),
  },
];
