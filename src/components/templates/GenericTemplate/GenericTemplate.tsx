import { getTotalClass } from './utils';
import { GenericTemplateProps } from './types';

export const GenericTemplate = ({
  children,
  color,
  padding,
  id,
}: GenericTemplateProps) => {
  const styles = { color, padding };
  const totalClass = getTotalClass(styles);

  return (
    <section id={id} className={totalClass}>
      {children}
    </section>
  );
};
