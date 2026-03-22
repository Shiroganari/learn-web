import { useTranslation } from "react-i18next";

const HomePage = () => {
  const {t, i18n} = useTranslation('homepage');

  return <div>{t('Homepage title')}</div>;
};

export default HomePage;
