import S from './StaffProductPage.module.scss';
import { ProductDetails } from '../../components/organisms/ProductDetails/ProductDetails';
import { GenericTemplate } from '../../components/templates/GenericTemplate/GenericTemplate';
import { HeaderFooter } from '../../components/organisms/HeaderFooter/HeaderFooter';

export const StaffProductPage = () => {
  return (
    <div className={S.page}>
      <GenericTemplate color='purple' padding='min'>
        <HeaderFooter type='header' />
      </GenericTemplate>
      <GenericTemplate color='white' padding='small'>
        <ProductDetails />
      </GenericTemplate>
    </div>
  );
};
