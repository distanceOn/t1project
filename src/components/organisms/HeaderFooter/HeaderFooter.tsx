import useIsStaffPage from '../../../hooks/useIsStaffPage';
import { HeaderFooterType } from '../../../utils/types';
import { Logo } from '../../atoms/Logo/Logo';
import { HeaderFooterMenu } from '../../molecules/HeaderFooterMenu/HeaderFooterMenu';
import S from './HeaderFooter.module.scss';

export const HeaderFooter = ({ type }: HeaderFooterType) => {
  const isStaffPage = useIsStaffPage();

  const staffStyle = `${S.header} ${S.header_staff}`;
  const headerStyle = isStaffPage ? staffStyle : S.header;

  const content = (
    <>
      <Logo color='white' size='default' link />
      <div className={S.container}>
        <HeaderFooterMenu type={type} />
        {/* здесь могла бы быть корзина :( */}
        {/* {type === 'header' && <HeaderCart />} */}
      </div>
    </>
  );

  return type === 'header' ? (
    <header className={headerStyle}>{content}</header>
  ) : (
    <footer className={S.footer}>{content}</footer>
  );
};
