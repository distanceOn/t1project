import { useEffect, useState } from 'react';
import { useGetProductsByCategoryQuery } from '../app/api/productsApi';
import { useAppDispatch, useAppSelector } from './reduxHooks';
import { setCategoryProducts } from '../app/reducers/ProductsSlice';

export const useProducts = () => {
  const dispatch = useAppDispatch();

  const [category, setCategory] = useState('smartphones');

  const {
    data: productsData,
    isLoading,
    isSuccess,
    refetch,
  } = useGetProductsByCategoryQuery(category);

  useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  useEffect(() => {
    if (isSuccess) {
      dispatch(setCategoryProducts(productsData.products));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productsData]);

  const categoryProducts = useAppSelector(
    state => state.products.categoryProducts
  );

  return { categoryProducts, isLoading, setCategory };
};
