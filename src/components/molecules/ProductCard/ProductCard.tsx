import { Picture } from '../../atoms/Picture/Picture';
import { Text } from '../../atoms/Text/Text';
import { Title } from '../../atoms/Title/Title';
import S from './ProductCard.module.scss';

export const ProductCard = () => {
  return (
    <li className={S.card}>
      <Picture size='default' image='shoes' />
      <Title color='grey' size='min'>
        Nike Air Force 1 '07 QS
      </Title>
      <Text color='grey' size='thin'>
        110 $
      </Text>
    </li>
  );
};
