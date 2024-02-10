import { getClassName } from './utils';
type LogoProps = {
  type: 'small' | 'default' | 'bg';
  link?: boolean;
};
export const Logo = ({ type, link }: LogoProps) => {
  const className = getClassName(type);

  if (link) {
    return (
      <h4 className={className}>
        <a href='/'>Goods4you</a>
      </h4>
    );
  }

  return <h4 className={className}>Goods4you</h4>;
};
