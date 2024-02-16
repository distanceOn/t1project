import { Link } from 'react-router-dom';
import S from './HeaderFooterLink.module.scss';

type HeaderLinkProps = {
  href: string;
  children: React.ReactNode;
};

export const HeaderFooterLink = ({ href, children }: HeaderLinkProps) => {
  return (
    <Link className={S.link} to={href}>
      {children}
    </Link>
  );
};
