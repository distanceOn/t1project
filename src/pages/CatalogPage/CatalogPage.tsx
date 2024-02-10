import { Header } from '../../components/organisms/Header/Header';
import { Hero } from '../../components/organisms/Hero/Hero';
import { CatalogTemplate } from '../../components/templates/CatalogTemplate/CatalogTemplate';
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
        <Hero />
      </HeroTemplate>
      <CatalogTemplate>dsadasdasdasdsad</CatalogTemplate>
    </div>
  );
};
