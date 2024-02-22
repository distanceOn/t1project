import { Link } from 'react-router-dom';
import { ButtonProps } from './types';
import { getTotalBtnClassName } from './utils';

export const Button = ({
  color,
  type,
  children,
  href,
  onClick,
}: ButtonProps) => {
  const className = getTotalBtnClassName({ color, type });

  if (href) {
    return (
      <button className={className}>
        <Link to={href}>{children}</Link>
      </button>
    );
  }

  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};
