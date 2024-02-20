import { useEffect, useState } from 'react';
import { useGetProductsByCategoryQuery } from '../app/api/productsApi';
import { useAppDispatch, useAppSelector } from './reduxHooks';
import {
  setCategoryProducts,
  setSelectedCategory,
  setShowedProducts,
  setTotal,
} from '../app/reducers/ProductsSlice';

export const useProducts = () => {
  const dispatch = useAppDispatch();

  const [goQueryCategory, setGoQueryCategory] = useState('smartphones');

  const customLimit = 1;

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
      const { products, total } = productsData;
      dispatch(setCategoryProducts(products));
      dispatch(setTotal(total));
      dispatch(setShowedProducts(customLimit));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productsData]);

  const { categoryProducts, total, showedProducts, selectedCategory } =
    useAppSelector(state => state.products);

  const resetCategory = () => {
    dispatch(setSelectedCategory('smartphones'));
    setGoQueryCategory('smartphones');
  };

  const showMoreProducts = () => {
    dispatch(setShowedProducts(showedProducts + customLimit));
  };

  return {
    categoryProducts,
    total,
    isLoading,
    selectedCategory,
    setGoQueryCategory,
    resetCategory,
    showedProducts,
    showMoreProducts,
  };
};
