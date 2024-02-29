import Rating from '../../atoms/Rating/Rating';
import { Text } from '../../atoms/Text/Text';
import { Title } from '../../atoms/Title/Title';
import S from './ProductInfo.module.scss';
import { Button } from '../../atoms/Button/Button';
import { useProductInfo } from './useProductInfo';

export const ProductInfo = () => {
  const {
    title,
    sku,
    rating,
    price,
    discountPercentage,
    category,
    brand,
    defineValue,
    getDiscount,
    description,
    handleClickBtn,
    isEdit,
    stock,
  } = useProductInfo();

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
          {defineValue('price', price, '$', 'number')}
        </div>
        <div className={S.item}>
          <Text size='default' color='lightgrey'>
            Discount percentage
          </Text>
          {defineValue('discountPercentage', discountPercentage, '%', 'number')}
        </div>
        <div className={S.item}>
          <Text size='default' color='lightgrey'>
            Discount price
          </Text>
          <Text size='default' color='grey'>
            {getDiscount(price, discountPercentage)}$
          </Text>
        </div>
        <div className={S.item}>
          <Text size='default' color='lightgrey'>
            Stock
          </Text>
          {defineValue('stock', stock, '', 'number')}
        </div>
        <div className={S.item}>
          <Text size='default' color='lightgrey'>
            Brand
          </Text>

          {defineValue('brand', brand)}
        </div>
        <div className={S.item}>
          <Text size='default' color='lightgrey'>
            Category
          </Text>
          {defineValue('category', category)}
        </div>
        <div className={S.item}>
          <Text size='default' color='lightgrey'>
            Description
          </Text>
          {defineValue('description', description)}
        </div>
      </div>
      <Button onClick={handleClickBtn} color='primary' type='default'>
        {isEdit ? 'Save' : 'Edit'}
      </Button>
    </div>
  );
};
