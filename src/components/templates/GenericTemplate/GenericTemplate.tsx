import { getTotalClass } from './utils';
import { GenericTemplateProps } from './types';

export const GenericTemplate = ({
  children,
  color,
  padding,
  id,
  noSection,
}: GenericTemplateProps) => {
  const styles = { color, padding };
  const totalClass = getTotalClass(styles);

  if (noSection) {
    return <div className={totalClass}>{children}</div>;
  }

  return (
    <section id={id} className={totalClass}>
      {children}
    </section>
  );
};
