import { getClassName } from './utils';
type LogoProps = {
  type: 'small' | 'default' | 'bg';
  link?: boolean;
};
export const Logo = ({ type, link }: LogoProps) => {
  const className = getClassName(type);

  return (
    <h4 className={className}>
      {link ? <a href='/'>Goods4you</a> : 'Goods4you'}
    </h4>
  );
};
