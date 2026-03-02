import { classNames } from '@shared/lib/classNames';
import styles from './Header.module.scss';
import { HeaderProps } from '../model/props';
import { AppLink } from '@shared/ui/AppLink';
import { ThemeSwitcher } from '@shared/ui/ThemeSwitcher';

export const Header = ({ className }: HeaderProps) => {
  return (
    <header className={classNames(styles.header, {}, [className])}>
      <AppLink to={'/'}>Главная</AppLink>
      <AppLink to={'/about'}>О сайте</AppLink>
      <ThemeSwitcher />
    </header>
  );
};
