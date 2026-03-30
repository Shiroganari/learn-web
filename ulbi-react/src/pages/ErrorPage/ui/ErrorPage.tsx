import { classNames } from '@shared/lib/classNames';
import { Button } from '@shared/ui/Button';
import { useTranslation } from 'react-i18next';
import cls from './ErrorPage.module.scss';

export const ErrorPage = () => {
  const { t } = useTranslation();

  const reloadPage = () => {
    location.reload();
  };

  return (
    <div className={classNames(cls.ErrorPage)}>
      <p>{t('Error page title')}</p>
      <Button onClick={reloadPage}>{t('Update page')}</Button>
    </div>
  );
};
