import S from './HeroTemplate.module.scss';

type HeroTemplateProps = {
  children: React.ReactNode;
};
export const HeroTemplate = ({ children }: HeroTemplateProps) => {
  return <div className={S.container}>{children}</div>;
};
