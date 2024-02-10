import { Header } from '../../components/organisms/Header/Header';
import { HeaderTemplate } from '../../components/templates/HeaderTemplate/HeaderTemplate';
import S from './CatalogPage.module.scss';
export const CatalogPage = () => {
  return (
    <div className={S.container}>
      <HeaderTemplate>
        <Header />
      </HeaderTemplate>
    </div>
  );
};
