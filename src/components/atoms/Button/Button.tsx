import { getBtnClassName } from './utils';

type ButtonProps = {
  type: 'category' | 'apply' | 'default' | 'reset' | 'catalog' | 'steps';
  children: React.ReactNode;
  href?: string;
};

export const Button = ({ type, children, href }: ButtonProps) => {
  const className = getBtnClassName(type);

  if (href) {
    return (
      <button className={className}>
        <a href={href}>{children}</a>
      </button>
    );
  }

  return <button className={className}>{children}</button>;
};
