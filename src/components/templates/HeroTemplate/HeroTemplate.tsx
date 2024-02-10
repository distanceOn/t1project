import S from './HeroTemplate.module.scss';

type HeroTemplateProps = {
  children: React.ReactNode;
};
export const HeroTemplate = ({ children }: HeroTemplateProps) => {
  return <section className={S.container}>{children}</section>;
};
