import { Picture } from '../../atoms/Picture/Picture';
import { Text } from '../../atoms/Text/Text';
import { Title } from '../../atoms/Title/Title';

export const ProductCard = () => {
  return (
    <li>
      <Picture size='default' image='shoes' />
      <Title type='min'>Nike Air Force 1 '07 QS</Title>
      <Text type='price'>110 $ </Text>
    </li>
  );
};
