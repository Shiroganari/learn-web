import { createRoot } from 'react-dom/client';
import { Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from '@app/App';
import { ThemeProvider } from '@app/providers/ThemeProvider';
import { routerConfig } from '@shared/config/routeConfig/routeConfig';
import { PageLoader } from '@widgets/PageLoader';

import '@shared/config/i18n/i18n';
import { ErrorBoundary } from '@app/providers/ErrorBoundary';

const router = createBrowserRouter([
  {
    element: (
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    ),
    children: routerConfig,
  },
]);

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Suspense fallback={<PageLoader />}>
    <RouterProvider router={router} />
  </Suspense>
);
