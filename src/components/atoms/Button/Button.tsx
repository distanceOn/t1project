import { getBtnClassName } from './utils';

type ButtonProps = {
  type: 'category' | 'default';
  children: React.ReactNode;
  href?: string;
};

export const Button = ({ type, children, href }: ButtonProps) => {
  const className = getBtnClassName(type);

  if (type === 'category') {
    return <button className={className}>{children}</button>;
  }

  if (href && type === 'default') {
    return (
      <button className={className}>
        <a href={href}>{children}</a>
      </button>
    );
  }

  return <button className={className}>{children}</button>;
};
