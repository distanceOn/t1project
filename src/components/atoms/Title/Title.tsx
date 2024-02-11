import { getTitleClassName } from './utils';

type TitleProps = {
  children: React.ReactNode;
  type: 'hero' | 'filter' | 'min' | 'default' | 'about';
};

export const Title = ({ children, type }: TitleProps) => {
  const className = getTitleClassName(type);

  if (type === 'hero') {
    return <h1 className={className}>{children}</h1>;
  }

  if (type === 'filter' || type === 'about') {
    return <h3 className={className}>{children}</h3>;
  }

  if (type === 'min') {
    return <h4 className={className}>{children}</h4>;
  }

  return <h2 className={className}>{children}</h2>;
};
