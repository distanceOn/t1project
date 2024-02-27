import { useUpdateProductMutation } from '../../../app/api/productsApi';
import { useSingleProduct } from '../../../hooks/useSingleProduct';
import { ProductInfoValuesForApi } from '../../../utils/types';
import { Input } from '../../atoms/Input/Input';
import { Text } from '../../atoms/Text/Text';

export const useProductInfo = () => {
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

  const [updateProduct] = useUpdateProductMutation();

  const handleUpdateProduct = async (data: ProductInfoValuesForApi) => {
    try {
      const numberedId = Number(id);
      const result = await updateProduct({ id: numberedId, data });

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

  const handleClickBtn = () => {
    if (isEdit) {
      handleUpdateProduct({ category, description, brand, stock, price });
    }
    setIsEdit(!isEdit);
  };

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

  return {
    title,
    rating,
    id,
    sku,
    inputValues,
    isEdit,
    category,
    description,
    brand,
    stock,
    price,
    discountPercentage,
    getDiscount,
    setIsEdit,
    setInputValues,
    defineValue,
    handleClickBtn,
  };
};
