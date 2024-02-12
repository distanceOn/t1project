import { EllipseDecoration } from '../../molecules/EllipseDecoration/EllipseDecoration';
import S from './TeamTemplate.module.scss';
type TeamTemplateProps = {
  children: React.ReactNode;
};
export const TeamTemplate = ({ children }: TeamTemplateProps) => {
  return (
    <section className={S.container}>
      <EllipseDecoration
        size='large'
        ellipse='large'
        className={S.decoration}
      />
      {children}
    </section>
  );
};
