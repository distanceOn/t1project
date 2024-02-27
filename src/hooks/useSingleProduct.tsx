/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from 'react-router-dom';
import { useGetSingleProductQuery } from '../app/api/productsApi';
import { useEffect, useState } from 'react';
import { ProductInfoValuesChangable } from '../utils/types';

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

  const getDiscount = (price: number, discountPercentage: number) => {
    return price && discountPercentage
      ? price - Math.round((price * discountPercentage) / 100)
      : price;
  };
  const [inputValues, setInputValues] = useState<ProductInfoValuesChangable>({
    category,
    description,
    brand,
    stock,
    price,
    discountPercentage,
  });

  useEffect(() => {
    console.log(inputValues);
  }, [inputValues]);

  useEffect(() => {
    if (isSuccess) {
      const { category, price, stock, brand, description, discountPercentage } =
        data;
      setInputValues({
        category,
        description,
        brand,
        stock,
        price,
        discountPercentage,
      });
    }
  }, [data]);

  return {
    id,
    isLoading,
    sku,
    getDiscount,
    discountPercentage,
    inputValues,
    setInputValues,
    isEdit,
    setIsEdit,
    rating,
    title,
    images,
  };
};
