import { classNames } from '@shared/lib/classNames';
import { ButtonProps } from '../model/props';
import cls from './Button.module.scss';

export const Button = (props: ButtonProps) => {
  const { className, theme, children, ...otherProps } = props;

  return (
    <button
      className={classNames(cls.Button, { [cls[theme]]: true }, [className])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
