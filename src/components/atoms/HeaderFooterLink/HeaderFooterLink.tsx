import { Link } from 'react-router-dom';
import S from './HeaderFooterLink.module.scss';

type HeaderLinkProps = {
  href: string;
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
};

export const HeaderFooterLink = ({
  href,
  children,
  onClick,
}: HeaderLinkProps) => {
  return (
    <Link className={S.link} to={href} onClick={onClick}>
      {children}
    </Link>
  );
};
