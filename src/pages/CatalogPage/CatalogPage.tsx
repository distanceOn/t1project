import { Header } from '../../components/organisms/Header/Header';
import { HeaderTemplate } from '../../components/templates/HeaderTemplate/HeaderTemplate';
import { HeroTemplate } from '../../components/templates/HeroTemplate/HeroTemplate';
import S from './CatalogPage.module.scss';
export const CatalogPage = () => {
  return (
    <div className={S.container}>
      <HeaderTemplate>
        <Header />
      </HeaderTemplate>
      <HeroTemplate>
        <h1>Catalog</h1>
      </HeroTemplate>
    </div>
  );
};
