import { classNames } from '@shared/lib/classNames';
import styles from './Header.module.scss';
import { HeaderProps } from '../model/props';
import { AppLink } from '@shared/ui/AppLink';
import { useTranslation } from 'react-i18next';

export const Header = ({ className }: HeaderProps) => {
  const {t, i18n} = useTranslation();

  return (
    <header className={classNames(styles.header, {}, [className])}>
      <AppLink to={'/'}>{t('Homepage')}</AppLink>
      <AppLink to={'/about'}>{t('About')}</AppLink>
    </header>
  );
};
