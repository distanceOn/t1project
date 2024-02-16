import { HeaderFooterLink } from '../../atoms/HeaderFooterLink/HeaderFooterLink';
import S from './HeaderFooterMenu.module.scss';
import useIsStaffPage from '../../../hooks/useIsStaffPage';

const items = [
  {
    name: 'Catalog',
    link: '#',
  },
  {
    name: 'About us',
    link: '#',
  },
  {
    name: 'Product selection',
    link: '#',
  },
  {
    name: 'Our team',
    link: '#',
  },
  {
    name: 'FAQ',
    link: '#',
  },
  {
    name: 'For staff',
    link: '/staff',
  },
];

export const HeaderFooterMenu = () => {
  const isStaffPage = useIsStaffPage();

  const baseContent = items.map(({ name, link }, index) => (
    <li key={index}>
      <HeaderFooterLink href={link}>{name}</HeaderFooterLink>
    </li>
  ));

  const staffContent = (
    <HeaderFooterLink href='/'>Back to site</HeaderFooterLink>
  );

  const content = <>{isStaffPage ? staffContent : baseContent}</>;

  return (
    <nav className={S.nav}>
      <ul className={S.menu}>{content}</ul>
    </nav>
  );
};
