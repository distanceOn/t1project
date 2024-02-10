import { Logo } from '../../atoms/Logo/Logo';
import { HeaderMenu } from '../../molecules/HeaderMenu/HeaderMenu';
import S from './Header.module.scss';

export const Header = () => {
  return (
    <header className={S.header}>
      <Logo type='default' />
      <HeaderMenu />
    </header>
  );
};
