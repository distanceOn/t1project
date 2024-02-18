import { HeaderFooterLink } from '../../atoms/HeaderFooterLink/HeaderFooterLink';
import S from './HeaderFooterMenu.module.scss';
import useIsStaffPage from '../../../hooks/useIsStaffPage';
import { useCallback } from 'react';

const items = [
  {
    name: 'Catalog',
    link: '#catalog',
  },
  {
    name: 'About us',
    link: '#about',
  },
  {
    name: 'Product selection',
    link: '#selection',
  },
  {
    name: 'Our team',
    link: '#team',
  },
  {
    name: 'FAQ',
    link: '#faq',
  },
  {
    name: 'For staff',
    link: '/staff',
  },
];

export const HeaderFooterMenu = () => {
  const isStaffPage = useIsStaffPage();

  const handleLinkClick = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      const href = event.currentTarget.getAttribute('href');
      const id = href?.substring(href.indexOf('#')) ?? '';

      if (id.startsWith('#') && id.length > 1) {
        const element = document.querySelector(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    },
    []
  );

  const baseContent = items.map(({ name, link }, index) => (
    <li key={index}>
      <HeaderFooterLink href={link} onClick={handleLinkClick}>
        {name}
      </HeaderFooterLink>
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
