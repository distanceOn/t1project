import { HeaderFooterLink } from '../../atoms/HeaderFooterLink/HeaderFooterLink';
import S from './HeaderFooterMenu.module.scss';
import useIsStaffPage from '../../../hooks/useIsStaffPage';
import { useCallback } from 'react';
import { toAnchor } from './utils';
import { HeaderFooterType } from '../../../utils/types';
import { footerItems, headerItems } from './constants';

export const HeaderFooterMenu = ({ type }: HeaderFooterType) => {
  const items = type === 'header' ? headerItems : footerItems;

  const isStaffPage = useIsStaffPage();

  const handleLinkClick = useCallback(toAnchor, []);

  const baseContent = items.map(({ name, link }, index) => {
    const isAnchor = link.includes('#');
    return (
      <li key={index}>
        <HeaderFooterLink
          href={link}
          onClick={isAnchor ? handleLinkClick : undefined}
        >
          {name}
        </HeaderFooterLink>
      </li>
    );
  });

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
