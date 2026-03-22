import { classNames } from '@shared/lib/classNames';
import { SidebarProps } from '@widgets/Sidebar/model/props';
import { useState } from 'react';
import cls from './Sidebar.module.scss';
import { ThemeSwitcher } from '@shared/ui/ThemeSwitcher';
import { LangSwitcher } from '@shared/ui/LangSwitcher';

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <button onClick={onToggle}>toggle</button>
      <div className={cls.Switchers}>
        <LangSwitcher />
        <ThemeSwitcher />
      </div>
    </div>
  );
};
