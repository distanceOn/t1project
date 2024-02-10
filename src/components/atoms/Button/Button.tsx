import S from './Button.module.scss';

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
};

export const Button = ({ children }: ButtonProps) => {
  return (
    <button className={S.button}>
      <a href={S.href}>{children}</a>
    </button>
  );
};
