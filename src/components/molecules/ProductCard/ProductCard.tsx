import useIsStaffPage from '../../../hooks/useIsStaffPage';
import { Picture } from '../../atoms/Picture/Picture';
import { Text } from '../../atoms/Text/Text';
import { Title } from '../../atoms/Title/Title';
import S from './ProductCard.module.scss';

type ProductCardProps = {
  id: number;
  onClick?: (id: number) => void;
};
export const ProductCard = ({ id, onClick }: ProductCardProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick(id);
    }
  };

  const isStaffPage = useIsStaffPage();

  const pictureSize = isStaffPage ? 'large' : 'default';

  return (
    <li onClick={handleClick} className={S.card}>
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
