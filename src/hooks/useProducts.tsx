/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useGetProductsQuery } from '../app/api/productsApi';
import { useAppDispatch, useAppSelector } from './reduxHooks';
import {
  resetState,
  setData,
  setQuery,
  setSkip,
} from '../app/reducers/ProductsSlice';
import useIsStaffPage from './useIsStaffPage';

export const useProducts = () => {
  const dispatch = useAppDispatch();
  const isStaffPage = useIsStaffPage();

  const { products, total, skip, selectedCategoryQuery, query } =
    useAppSelector(state => state.products);

  const limit = 9;

  const categoryQuery = { category: selectedCategoryQuery, limit, skip };

  const allQuery = { limit, skip };

  const initialQuery = isStaffPage ? allQuery : categoryQuery;

  useEffect(() => {
    dispatch(resetState());
    dispatch(setQuery(initialQuery));
  }, [isStaffPage]);

  const {
    data: productsData,
    isLoading,
    isSuccess,
  } = useGetProductsQuery(query);

  useEffect(() => {
    if (isStaffPage) {
      dispatch(setQuery(allQuery));
    }
    if (!isStaffPage) {
      dispatch(setQuery(categoryQuery));
    }
  }, [selectedCategoryQuery, skip, dispatch]);

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
