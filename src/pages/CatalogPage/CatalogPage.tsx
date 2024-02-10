import { Logo } from '../../components/atoms/Logo/Logo';
import { HeaderTemplate } from '../../components/templates/HeaderTemplate/HeaderTemplate';
import S from './CatalogPage.module.scss';
export const CatalogPage = () => {
  return (
    <div className={S.container}>
      <HeaderTemplate>
        <Logo />
      </HeaderTemplate>
    </div>
  );
};
