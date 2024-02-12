import S from './HeaderFooterLink.module.scss';

type HeaderLinkProps = {
  href: string;
  children: React.ReactNode;
};

export const HeaderFooterLink = ({ href, children }: HeaderLinkProps) => {
  return (
    <a className={S.link} href={href}>
      {children}
    </a>
  );
};
