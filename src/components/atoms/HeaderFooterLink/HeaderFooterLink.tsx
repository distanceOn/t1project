import { Link } from 'react-router-dom';
import S from './HeaderFooterLink.module.scss';

type HeaderLinkProps = {
  href: string;
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  target?: string;
  disabled?: boolean;
};

export const HeaderFooterLink = ({
  href,
  children,
  onClick,
  target,
  disabled,
}: HeaderLinkProps) => {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (disabled) {
      event.preventDefault();
      return;
    }

    if (onClick) {
      onClick(event);
    }
  };
  return (
    <Link target={target} className={S.link} to={href} onClick={handleClick}>
      {children}
    </Link>
  );
};
