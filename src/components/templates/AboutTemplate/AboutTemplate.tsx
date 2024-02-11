import { EllipseDecoration } from '../../molecules/EllipseDecoration/EllipseDecoration';
import S from './AboutTemplate.module.scss';
type AboutTemplateProps = {
  children: React.ReactNode;
};
export const AboutTemplate = ({ children }: AboutTemplateProps) => {
  return (
    <section className={S.container}>
      <EllipseDecoration size='small' className={S.decoration} />
      <EllipseDecoration size='large' className={S.decoration_large} />
      {children}
    </section>
  );
};
