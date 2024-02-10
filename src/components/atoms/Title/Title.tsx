import { getClassName } from './utils';

type TitleProps = {
  children: React.ReactNode;
  type: 'hero' | 'default';
};

export const Title = ({ children, type }: TitleProps) => {
  const className = getClassName(type);

  if (type === 'hero') {
    return <h1 className={className}>{children}</h1>;
  }

  return <h2 className={className}>{children}</h2>;
};
