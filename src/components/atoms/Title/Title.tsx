import S from './Title.module.scss';

type TitleProps = {
  children: React.ReactNode;
  type: 'hero';
};

export const Title = ({ children, type }: TitleProps) => {
  return type === 'hero' ? <h1 className={S.hero}>{children}</h1> : null;
};
