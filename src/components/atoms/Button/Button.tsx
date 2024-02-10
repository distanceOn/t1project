import S from './Button.module.scss';

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
};

export const Button = ({ children, href }: ButtonProps) => {
  return (
    <button className={S.button}>
      {href ? <a href={href}>{children}</a> : children}
    </button>
  );
};
