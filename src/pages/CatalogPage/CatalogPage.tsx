import { Title } from '../../components/atoms/Title/Title';
import { Products } from '../../components/organisms/Products/Products';
import { Filter } from '../../components/organisms/Filter/Filter';
import { Header } from '../../components/organisms/Header/Header';
import { Hero } from '../../components/organisms/Hero/Hero';
import { GenericTemplate } from '../../components/templates/GenericTemplate/GenericTemplate';
import S from './CatalogPage.module.scss';
import { AboutTemplate } from '../../components/templates/AboutTemplate/AboutTemplate';
import { About } from '../../components/organisms/About/About';
import { ProductSelection } from '../../components/organisms/ProductSelection/ProductSelection';
export const CatalogPage = () => {
  return (
    <div className={S.container}>
      <GenericTemplate color='purple' padding='min'>
        <Header />
      </GenericTemplate>
      <GenericTemplate color='purple' padding='medium'>
        <Hero />
      </GenericTemplate>
      <GenericTemplate color='white' padding='small'>
        <Title type='default'>Catalog</Title>
        <div className={S.catalog}>
          <Filter />
          <Products />
        </div>
      </GenericTemplate>
      <AboutTemplate>
        <About />
      </AboutTemplate>
      <GenericTemplate color='white' padding='small'>
        <ProductSelection />
      </GenericTemplate>
    </div>
  );
};
