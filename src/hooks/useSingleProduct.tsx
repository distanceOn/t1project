/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from 'react-router-dom';
import { useGetSingleProductQuery } from '../app/api/productsApi';
import { useEffect, useState } from 'react';

export const useSingleProduct = () => {
  const [isEdit, setIsEdit] = useState(false);

  const formatSku = (sku: number) => {
    const skuStr = sku.toString();
    return skuStr.padStart(4, '0');
  };

  const { id } = useParams();

  const { data, isLoading, isSuccess } = useGetSingleProductQuery(id);

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

  const [inputValues, setInputValues] = useState<any>({
    category,
    description,
    brand,
    stock,
    discountPercentage,
    price,
    rating,
    title,
    images,
  });

  useEffect(() => {
    if (isSuccess) {
      setInputValues(data);
    }
  }, [data]);

  return {
    id,
    isLoading,
    sku,
    discount,
    inputValues,
    setInputValues,
    isEdit,
    setIsEdit,
  };
};
