import { LogoProps } from './types';
import { getTotalLogoClassName } from './utils';

export const Logo = ({ color, size, link }: LogoProps) => {
  const totalClassName = getTotalLogoClassName({ color, size });

  if (link) {
    return (
      <h4 className={totalClassName}>
        <a href='/'>Goods4you</a>
      </h4>
    );
  }

  return <h4 className={totalClassName}>Goods4you</h4>;
};
