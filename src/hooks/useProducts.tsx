/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './reduxHooks';
import { setData, setSkip } from '../app/reducers/ProductsSlice';
import { useProductsService } from './useProductsService';

export const useProducts = () => {
  const dispatch = useAppDispatch();

  const { productsData, isLoading, isSuccess } = useProductsService();

  const { products, total, skip, selectedCategoryQuery, limit } =
    useAppSelector(state => state.products);

  useEffect(() => {
    if (isSuccess) {
      dispatch(setData(productsData));
    }
  }, [isLoading, productsData]);

  const showMore = () => {
    dispatch(setSkip(skip + limit));
  };

  return {
    products,
    isLoading,
    isSuccess,
    selectedCategoryQuery,
    showMore,
    total,
  };
};
