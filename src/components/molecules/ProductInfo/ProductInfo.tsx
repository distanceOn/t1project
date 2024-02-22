import Rating from '../../atoms/Rating/Rating';
import { Text } from '../../atoms/Text/Text';
import { Title } from '../../atoms/Title/Title';
import S from './ProductInfo.module.scss';
import { useSingleProduct } from '../../../hooks/useSingleProduct';

export const ProductInfo = () => {
  const {
    category,
    description,
    brand,
    stock,
    discountPercentage,
    price,
    rating,
    title,
    sku,
    discount,
  } = useSingleProduct();

  return (
    <div className={S.container}>
      <div className={S.title}>
        <Title size='small' color='grey'>
          {title}
        </Title>
        <div className={S.item}>
          <Text size='default' color='lightgrey'>
            SKU ID
          </Text>
          <Text size='default' color='grey'>
            {sku}
          </Text>
        </div>
      </div>
      <div className={S.info}>
        <div className={S.item}>
          <Text size='default' color='lightgrey'>
            Rating
          </Text>
          <Rating value={rating} />
        </div>
        <div className={S.item}>
          <Text size='default' color='lightgrey'>
            Base price
          </Text>
          <Text size='default' color='grey'>
            {price}$
          </Text>
        </div>
        <div className={S.item}>
          <Text size='default' color='lightgrey'>
            Discount percentage
          </Text>
          <Text size='default' color='grey'>
            {discountPercentage}%
          </Text>
        </div>
        <div className={S.item}>
          <Text size='default' color='lightgrey'>
            Discount price
          </Text>
          <Text size='default' color='grey'>
            {discount}$
          </Text>
        </div>
        <div className={S.item}>
          <Text size='default' color='lightgrey'>
            Stock
          </Text>
          <Text size='default' color='grey'>
            {stock}
          </Text>
        </div>
        <div className={S.item}>
          <Text size='default' color='lightgrey'>
            Brand
          </Text>
          <Text size='default' color='grey'>
            {brand}
          </Text>
        </div>
        <div className={S.item}>
          <Text size='default' color='lightgrey'>
            Category
          </Text>
          <Text size='default' color='grey'>
            {category}
          </Text>
        </div>
        <div className={S.item}>
          <Text size='default' color='lightgrey'>
            Description
          </Text>
          <Text size='default' color='grey'>
            {description}
          </Text>
        </div>
      </div>
    </div>
  );
};
