import { getTotalClass } from './utils';
import { GenericTemplateProps } from './types';

export const GenericTemplate = ({
  children,
  color,
  padding,
}: GenericTemplateProps) => {
  const styles = { color, padding };
  const totalClass = getTotalClass(styles);

  return <section className={totalClass}>{children}</section>;
};
