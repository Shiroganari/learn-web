import { PageLoader } from '@widgets/PageLoader';
import { Outlet, useNavigation } from 'react-router-dom';

export const AppRouter = () => {
  const { state } = useNavigation();

  if (state === 'loading') {
    return <PageLoader />;
  }

  return (
    <div className="page-wrapper">
      <Outlet />
    </div>
  );
};
