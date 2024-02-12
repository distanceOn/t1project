import { Logo } from '../../atoms/Logo/Logo';
import { HeaderCart } from '../../molecules/HeaderCart/HeaderCart';
import { HeaderFooterMenu } from '../../molecules/HeaderFooterMenu/HeaderFooterMenu';
import S from './HeaderFooter.module.scss';

export const HeaderFooter = ({ type }: { type: 'header' | 'footer' }) => {
  const content = (
    <>
      <Logo color='white' size='default' link />
      <div className={S.container}>
        <HeaderFooterMenu />
        {type === 'header' && <HeaderCart />}
      </div>
    </>
  );

  return type === 'header' ? (
    <header className={S.header}>{content}</header>
  ) : (
    <footer className={S.footer}>{content}</footer>
  );
};
