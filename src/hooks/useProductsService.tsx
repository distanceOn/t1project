/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './reduxHooks';
import useIsStaffPage from './useIsStaffPage';
import { resetState, setQuery } from '../app/reducers/ProductsSlice';
import { useGetProductsQuery } from '../app/api/productsApi';
import { useLocation } from 'react-router-dom';

export const useProductsService = () => {
  const dispatch = useAppDispatch();

  const isStaffPage = useIsStaffPage();
  const { skip, selectedCategoryQuery, query, limit } = useAppSelector(
    state => state.products
  );

  const {
    data: productsData,
    isLoading,
    isSuccess,
  } = useGetProductsQuery(query);

  const categoryQuery = { category: selectedCategoryQuery, limit, skip };

  const allQuery = { limit, skip };

  const initialQuery = isStaffPage ? allQuery : categoryQuery;

  const location = useLocation();

  useEffect(() => {
    dispatch(resetState());
    dispatch(setQuery(initialQuery));
  }, [location.pathname]);

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

  return {
    productsData,
    isLoading,
    isSuccess,
  };
};
