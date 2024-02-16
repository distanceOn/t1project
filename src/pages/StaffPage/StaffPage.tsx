import { HeaderFooter } from '../../components/organisms/HeaderFooter/HeaderFooter';
import { GenericTemplate } from '../../components/templates/GenericTemplate/GenericTemplate';
import S from './StaffPage.module.scss';

export const StaffPage = () => {
  return (
    <div className={S.container}>
      <GenericTemplate color='purple' padding='min'>
        <HeaderFooter type='header' />
      </GenericTemplate>
    </div>
  );
};
