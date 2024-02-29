/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from 'react-router-dom';
import { useGetSingleProductQuery } from '../app/api/productsApi';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { ProductInfoValuesChangable } from '../utils/types';
import { toGetDiscount } from './utils/toGetDiscount';

export const useSingleProduct = () => {
  const { id } = useParams();
  const { data, isLoading, isSuccess, error } = useGetSingleProductQuery(id);

  const [isEdit, setIsEdit] = useState(false);

  const formatSku = useCallback((sku: number) => {
    const skuStr = sku.toString();
    return skuStr.padStart(4, '0');
  }, []);

  const sku = useMemo(() => {
    return formatSku(Number(id));
  }, [id, formatSku]);

  const getDiscount = useCallback(toGetDiscount, []);

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
    discountPercentage,
    inputValues,
    setInputValues,
    getDiscount,
    isEdit,
    setIsEdit,
    rating,
    title,
    images,
    error,
  };
};
