import { HeaderFooterLink } from '../../atoms/HeaderFooterLink/HeaderFooterLink';
import S from './HeaderFooterMenu.module.scss';
export const HeaderFooterMenu = () => {
  const items = [
    'Catalog',
    'About us',
    'Product selection',
    'Our team',
    'Shipping and payment',
    'Contacts',
  ];
  return (
    <nav className={S.nav}>
      <ul className={S.menu}>
        {items.map((item, index) => (
          <li key={index}>
            <HeaderFooterLink href='#'>{item}</HeaderFooterLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
