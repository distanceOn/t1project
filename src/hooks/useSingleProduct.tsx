/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from 'react-router-dom';
import { useGetSingleProductQuery } from '../app/api/productsApi';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { ProductInfoValuesChangable } from '../utils/types';

export const useSingleProduct = () => {
  const { id } = useParams();
  const { data, isLoading, isSuccess } = useGetSingleProductQuery(id);

  const [isEdit, setIsEdit] = useState(false);

  const formatSku = useCallback((sku: number) => {
    const skuStr = sku.toString();
    return skuStr.padStart(4, '0');
  }, []);

  const sku = useMemo(() => {
    return formatSku(Number(id));
  }, [id, formatSku]);

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

  const [inputValues, setInputValues] = useState<ProductInfoValuesChangable>({
    category,
    description,
    brand,
    stock,
    price,
    discountPercentage,
  });

  const getDiscount = useCallback(
    (price: number, discountPercentage: number) => {
      return price && discountPercentage
        ? price - Math.round((price * discountPercentage) / 100)
        : price;
    },
    []
  );

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
