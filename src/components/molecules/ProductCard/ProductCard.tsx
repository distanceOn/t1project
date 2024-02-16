import useIsStaffPage from '../../../hooks/useIsStaffPage';
import { Picture } from '../../atoms/Picture/Picture';
import { Text } from '../../atoms/Text/Text';
import { Title } from '../../atoms/Title/Title';
import S from './ProductCard.module.scss';

export const ProductCard = () => {
  const isStaffPage = useIsStaffPage();

  const pictureSize = isStaffPage ? 'large' : 'default';

  return (
    <li className={S.card}>
      <Picture size={pictureSize} image='shoes' />
      <Title color='grey' size='min'>
        Nike Air Force 1 '07 QS
      </Title>
      <Text color='grey' size='thin'>
        110 $
      </Text>
    </li>
  );
};
