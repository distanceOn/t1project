import { HeaderLink } from '../../atoms/HeaderLink/HeaderLink';
import S from './HeaderMenu.module.scss';
export const HeaderMenu = () => {
  return (
    <nav className={S.nav}>
      <ul className={S.menu}>
        <li>
          <HeaderLink href='/'>Catalog</HeaderLink>
        </li>
        <li>
          <HeaderLink href='#'>About us</HeaderLink>
        </li>
        <li>
          <HeaderLink href='#'>Product selection</HeaderLink>
        </li>
        <li>
          <HeaderLink href='#'>Our team</HeaderLink>
        </li>
        <li>
          <HeaderLink href='#'>Shipping and payment</HeaderLink>
        </li>
        <li>
          <HeaderLink href='#'>Contacts</HeaderLink>
        </li>
      </ul>
    </nav>
  );
};
