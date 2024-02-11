import S from './AboutTemplate.module.scss';
type AboutTemplateProps = {
  children: React.ReactNode;
};
export const AboutTemplate = ({ children }: AboutTemplateProps) => {
  return <section className={S.container}>{children}</section>;
};
