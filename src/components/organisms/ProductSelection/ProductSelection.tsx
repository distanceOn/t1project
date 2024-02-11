import { Text } from '../../atoms/Text/Text';
import { Title } from '../../atoms/Title/Title';
import S from './ProductSelection.module.scss';

export const ProductSelection = () => {
  return (
    <div className={S.container}>
      <div className={S.header}>
        <Title type='filter'>We will select the perfect product for you</Title>
        <Text type='select'>
          Answer three questions and we will send you a catalog with the most
          suitable products for you.
        </Text>
      </div>
    </div>
  );
};
