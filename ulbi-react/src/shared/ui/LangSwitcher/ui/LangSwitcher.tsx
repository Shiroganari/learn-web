import { Button } from '@shared/ui/Button';
import { useTranslation } from 'react-i18next';

export const LangSwitcher = () => {
  const { t, i18n } = useTranslation();

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return <Button onClick={toggleLang}>{t('Language')}</Button>;
};
