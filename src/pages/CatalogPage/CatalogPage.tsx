import { Title } from '../../components/atoms/Title/Title';
import { Products } from '../../components/organisms/Products/Products';
import { Filter } from '../../components/organisms/Filter/Filter';
import { Header } from '../../components/organisms/Header/Header';
import { Hero } from '../../components/organisms/Hero/Hero';
import { CatalogTemplate } from '../../components/templates/CatalogTemplate/CatalogTemplate';
import { HeaderTemplate } from '../../components/templates/HeaderTemplate/HeaderTemplate';
import { HeroTemplate } from '../../components/templates/HeroTemplate/HeroTemplate';
import S from './CatalogPage.module.scss';
import { AboutTemplate } from '../../components/templates/AboutTemplate/AboutTemplate';
import { About } from '../../components/organisms/About/About';
export const CatalogPage = () => {
  return (
    <div className={S.container}>
      <HeaderTemplate>
        <Header />
      </HeaderTemplate>
      <HeroTemplate>
        <Hero />
      </HeroTemplate>
      <CatalogTemplate>
        <Title type='default'>Catalog</Title>
        <div className={S.catalog}>
          <Filter />
          <Products />
        </div>
      </CatalogTemplate>
      <AboutTemplate>
        <About />
      </AboutTemplate>
    </div>
  );
};
