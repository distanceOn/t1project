import { useParams } from 'react-router-dom';
import { useGetSingleProductQuery } from '../app/api/productsApi';
import { useEffect } from 'react';

export const useSingleProduct = () => {
  const formatSku = (sku: number) => {
    const skuStr = sku.toString();
    return skuStr.padStart(4, '0');
  };

  const { id } = useParams();

  const { data, isLoading } = useGetSingleProductQuery(id);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const sku = formatSku(Number(id));

  const {
    category,
    description,
    brand,
    stock,
    discountPercentage,
    price,
    rating,
    title,
    images,
  } = data || {};

  const discount =
    price && discountPercentage
      ? price - Math.round((price * discountPercentage) / 100)
      : 0;

  return {
    category,
    description,
    brand,
    stock,
    discountPercentage,
    price,
    rating,
    title,
    isLoading,
    id,
    sku,
    discount,
    images,
  };
};
