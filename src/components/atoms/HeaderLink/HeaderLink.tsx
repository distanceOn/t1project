import S from './HeaderLink.module.scss';

type HeaderLinkProps = {
  href: string;
  children: React.ReactNode;
};

export const HeaderLink = ({ href, children }: HeaderLinkProps) => {
  return (
    <a className={S.link} href={href}>
      {children}
    </a>
  );
};
