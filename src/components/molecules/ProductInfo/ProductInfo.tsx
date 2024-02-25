import Rating from '../../atoms/Rating/Rating';
import { Text } from '../../atoms/Text/Text';
import { Title } from '../../atoms/Title/Title';
import S from './ProductInfo.module.scss';
import { useSingleProduct } from '../../../hooks/useSingleProduct';
import { Button } from '../../atoms/Button/Button';
import { Input } from '../../atoms/Input/Input';

export const ProductInfo = () => {
  const { sku, inputValues, discount, isEdit, setIsEdit, setInputValues } =
    useSingleProduct();

  const {
    title,
    category,
    description,
    brand,
    stock,
    price,
    rating,
    discountPercentage,
  } = inputValues;

  const defineValue = (value: string | number, add?: string) => {
    const formattedValue = add ? `${value + add}` : value;
    if (isEdit) {
      return (
        <Input
          value={value}
          onChange={newValue =>
            setInputValues({ ...inputValues, [value]: newValue })
          }
        />
      );
    }
    if (!isEdit) {
      return (
        <Text size='default' color='grey'>
          {formattedValue}
        </Text>
      );
    }
  };

  const handleClick = () => {
    if (isEdit) {
      console.log(inputValues);
    }
    setIsEdit(!isEdit);
  };

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
          {defineValue(price, '$')}
        </div>
        <div className={S.item}>
          <Text size='default' color='lightgrey'>
            Discount percentage
          </Text>
          {defineValue(discountPercentage, '%')}
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
          {defineValue(stock)}
        </div>
        <div className={S.item}>
          <Text size='default' color='lightgrey'>
            Brand
          </Text>

          {defineValue(brand)}
        </div>
        <div className={S.item}>
          <Text size='default' color='lightgrey'>
            Category
          </Text>
          {defineValue(category)}
        </div>
        <div className={S.item}>
          <Text size='default' color='lightgrey'>
            Description
          </Text>
          {defineValue(description)}
        </div>
      </div>
      <Button onClick={handleClick} color='primary' type='default'>
        {isEdit ? 'Save' : 'Edit'}
      </Button>
    </div>
  );
};
