import { Theme, useTheme } from '@app/providers/ThemeProvider';
import { classNames } from '@shared/lib/classNames';
import { ThemeSwitcherProps } from '../model/props';
import styles from './ThemeSwitcher.module.scss';
import DarkIcon from '@shared/assets/icons/dark-theme.svg';
import LightIcon from '@shared/assets/icons/light-theme.svg';
import { Button, ThemeButton } from '@shared/ui/Button';

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      onClick={toggleTheme}
      className={classNames(styles.ThemeSwitcher, {}, [className])}
      theme={ThemeButton.CLEAR}
    >
      {theme === Theme.DARK ? (
        <LightIcon width={24} height={24} fill="#000" />
      ) : (
        <DarkIcon width={24} height={24} fill="#fff" />
      )}
    </Button>
  );
};
