import { getTextClassName } from './utils';

type TextProps = {
  children: React.ReactNode;
  type: 'hero' | 'price' | 'select';
};

export const Text = ({ children, type }: TextProps) => {
  const className = getTextClassName(type);

  return <p className={className}>{children}</p>;
};
