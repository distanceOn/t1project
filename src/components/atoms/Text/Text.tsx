import { TextProps } from './types';
import { getTotalTextClassName } from './utils';

export const Text = ({ color, size, children }: TextProps) => {
  const totalClassName = getTotalTextClassName({ color, size });

  return <p className={totalClassName}>{children}</p>;
};
