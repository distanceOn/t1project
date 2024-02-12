import { ButtonProps } from './types';
import { getTotalBtnClassName } from './utils';

export const Button = ({ color, type, children, href }: ButtonProps) => {
  const className = getTotalBtnClassName({ color, type });

  if (href) {
    return (
      <button className={className}>
        <a href={href}>{children}</a>
      </button>
    );
  }

  return <button className={className}>{children}</button>;
};
