/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useGetProductsQuery } from '../app/api/productsApi';
import { useAppDispatch, useAppSelector } from './reduxHooks';
import { setData, setSkip } from '../app/reducers/ProductsSlice';
import useIsStaffPage from './useIsStaffPage';

export const useProducts = () => {
  const dispatch = useAppDispatch();
  const isStaffPage = useIsStaffPage();

  const { products, total, skip, selectedCategoryQuery } = useAppSelector(
    state => state.products
  );

  const limit = 3;

  const categoryQuery = { category: selectedCategoryQuery, limit, skip };

  const allQuery = { limit, skip };

  const initialQuery = isStaffPage ? allQuery : categoryQuery;

  const [query, setQuery] = useState(initialQuery);

  useEffect(() => {
    if (!isStaffPage) {
      setQuery(categoryQuery);
    }
  }, [selectedCategoryQuery, skip, dispatch]);

  const {
    data: productsData,
    isLoading,
    isSuccess,
  } = useGetProductsQuery(query);

  useEffect(() => {
    console.log(query);
  }, [query]);

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
