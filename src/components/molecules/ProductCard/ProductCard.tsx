import useIsStaffPage from '../../../hooks/helpers/useIsStaffPage';
import { Picture } from '../../atoms/Picture/Picture';
import { Text } from '../../atoms/Text/Text';
import { Title } from '../../atoms/Title/Title';
import S from './ProductCard.module.scss';

type ProductCardProps = {
  id: number;
  onClick?: (id: number) => void;
  title: string;
  price: number;
  image?: string;
};
export const ProductCard = ({
  id,
  onClick,
  title,
  price,
  image,
}: ProductCardProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick(id);
    }
  };

  const isStaffPage = useIsStaffPage();

  const pictureSize = isStaffPage ? 'large' : 'default';

  return (
    <li onClick={handleClick} className={S.card}>
      <Picture
        size={pictureSize}
        image='shoes'
        serverSource={{ src: image, alt: title }}
      />
      <Title color='grey' size='min'>
        {title}
      </Title>
      <Text color='grey' size='thin'>
        {price} $
      </Text>
    </li>
  );
};
