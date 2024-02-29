import { Text } from '../../components/atoms/Text/Text';
import { GenericTemplate } from '../../components/templates/GenericTemplate/GenericTemplate';
import S from './NotFoundPage.module.scss';
export const NotFoundPage = () => {
  return (
    <div className={S.page}>
      <GenericTemplate color='white' padding='small'>
        <Text color='grey' size='default'>
          Not Found
        </Text>
      </GenericTemplate>
    </div>
  );
};
