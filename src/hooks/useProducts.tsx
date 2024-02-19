import { useEffect, useState } from 'react';
import { useGetProductsByCategoryQuery } from '../app/api/productsApi';
import { useAppDispatch, useAppSelector } from './reduxHooks';
import {
  setCategoryProducts,
  setSelectedCategory,
} from '../app/reducers/ProductsSlice';

export const useProducts = () => {
  const dispatch = useAppDispatch();

  const selectedCategory = useAppSelector(
    state => state.products.selectedCategory
  );

  const [goQueryCategory, setGoQueryCategory] = useState('smartphones');

  const resetCategory = () => {
    dispatch(setSelectedCategory('smartphones'));
    setGoQueryCategory('smartphones');
  };

  const {
    data: productsData,
    isLoading,
    isSuccess,
    refetch,
  } = useGetProductsByCategoryQuery(goQueryCategory);

  useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [goQueryCategory]);

  useEffect(() => {
    if (isSuccess) {
      dispatch(setCategoryProducts(productsData.products));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productsData]);

  const categoryProducts = useAppSelector(
    state => state.products.categoryProducts
  );

  return {
    categoryProducts,
    isLoading,
    selectedCategory,
    setGoQueryCategory,
    resetCategory,
  };
};
