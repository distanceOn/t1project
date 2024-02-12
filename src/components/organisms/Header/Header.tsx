import { Logo } from '../../atoms/Logo/Logo';
import { HeaderCart } from '../../molecules/HeaderCart/HeaderCart';
import { HeaderMenu } from '../../molecules/HeaderMenu/HeaderMenu';
import S from './Header.module.scss';

export const Header = () => {
  return (
    <header className={S.header}>
      <Logo color='white' size='default' link />
      <div className={S.container}>
        <HeaderMenu />
        <HeaderCart />
      </div>
    </header>
  );
};
