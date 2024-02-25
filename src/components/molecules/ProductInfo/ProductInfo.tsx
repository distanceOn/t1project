import Rating from '../../atoms/Rating/Rating';
import { Text } from '../../atoms/Text/Text';
import { Title } from '../../atoms/Title/Title';
import S from './ProductInfo.module.scss';
import { useSingleProduct } from '../../../hooks/useSingleProduct';
import { Button } from '../../atoms/Button/Button';
import { Input } from '../../atoms/Input/Input';
import { useUpdateProductMutation } from '../../../app/api/productsApi';

export const ProductInfo = () => {
  const {
    title,
    rating,
    id,
    sku,
    inputValues,
    getDiscount,
    isEdit,
    setIsEdit,
    setInputValues,
  } = useSingleProduct();

  const { category, description, brand, stock, price, discountPercentage } =
    inputValues;

  const defineValue = (key: string, value: string | number, add?: string) => {
    const formattedValue = add ? `${value + add}` : value;
    if (isEdit) {
      return (
        <Input
          value={value}
          onChange={newValue =>
            setInputValues({ ...inputValues, [key]: newValue })
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

  const [updateProduct] = useUpdateProductMutation();

  const handleUpdateProduct = async (data: any) => {
    try {
      const result = await updateProduct({ id: Number(id), data });
      if ('data' in result) {
        const { category, description, brand, stock, price } = result.data;
        setInputValues({
          category,
          description,
          brand,
          stock,
          price,
          discountPercentage,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = () => {
    if (isEdit) {
      // const data = { ...inputValues };
      const { category, description, brand, stock, price } = inputValues;
      handleUpdateProduct({ category, description, brand, stock, price });
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
          {defineValue('price', price, '$')}
        </div>
        <div className={S.item}>
          <Text size='default' color='lightgrey'>
            Discount percentage
          </Text>
          {defineValue('discountPercentage', discountPercentage, '%')}
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
          {defineValue('stock', stock)}
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
      <Button onClick={handleClick} color='primary' type='default'>
        {isEdit ? 'Save' : 'Edit'}
      </Button>
    </div>
  );
};
