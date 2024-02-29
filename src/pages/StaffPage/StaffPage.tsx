import { HeaderFooter } from '../../components/organisms/HeaderFooter/HeaderFooter';
import { Products } from '../../components/organisms/Products/Products';
import { GenericTemplate } from '../../components/templates/GenericTemplate/GenericTemplate';
import S from './StaffPage.module.scss';

export const StaffPage = () => {
  return (
    <div className={S.container}>
      <GenericTemplate color='purple' padding='min' noSection>
        <HeaderFooter type='header' />
      </GenericTemplate>
      <GenericTemplate color='white' padding='small'>
        <Products />
      </GenericTemplate>
    </div>
  );
};
