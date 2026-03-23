import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const { t } = useTranslation('homepage');

  return <div>{t('Homepage title')}</div>;
};

export default HomePage;
