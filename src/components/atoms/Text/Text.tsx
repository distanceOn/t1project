import S from './Text.module.scss';

type TextProps = {
  children: React.ReactNode;
  type: 'hero';
};

export const Text = ({ children }: TextProps) => {
  return <p className={S.text}>{children}</p>;
};
