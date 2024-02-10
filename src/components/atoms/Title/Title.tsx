import { getClassName } from './utils';

type TitleProps = {
  children: React.ReactNode;
  type: 'hero' | 'filter' | 'default';
};

export const Title = ({ children, type }: TitleProps) => {
  const className = getClassName(type);

  if (type === 'hero') {
    return <h1 className={className}>{children}</h1>;
  }

  if (type === 'filter') {
    return <h3 className={className}>{children}</h3>;
  }

  return <h2 className={className}>{children}</h2>;
};
