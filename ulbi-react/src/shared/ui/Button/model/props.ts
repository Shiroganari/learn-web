import { ButtonHTMLAttributes } from "react";

export enum ThemeButton {
  CLEAR = 'clear'
}

export type ButtonProps = {
  className?: string;
  theme?: ThemeButton;
} & ButtonHTMLAttributes<HTMLButtonElement>;