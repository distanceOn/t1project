import S from './Logo.module.scss';
type LogoProps = {
  type: 'small' | 'default';
};
export const Logo = ({ type }: LogoProps) => {
  const className = type === 'small' ? S.logo__small : S.logo;
  return (
    <h1 className={className}>
      <a href='/'>Goods4you</a>
    </h1>
  );
};
