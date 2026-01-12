import { classNames } from '@shared/lib/classNames';
import { Link } from 'react-router-dom';
import { AppLinkProps } from '../model/props';
import styles from './AppLink.module.scss';

export const AppLink = ({
  to,
  children,
  className,
  theme = 'primary',
  ...otherProps
}: AppLinkProps) => {
  return (
    <Link
      to={to}
      className={classNames(styles.AppLink, {}, [className, styles[theme]])}
      {...otherProps}
    >
      {children}
    </Link>
  );
};
