import { LinkProps } from 'react-router-dom';

type AppLinkThemes = 'primary' | 'secondary' ;

export type AppLinkProps = LinkProps & {
  className?: string;
  theme?: AppLinkThemes; 
  children?: React.ReactNode;
};
