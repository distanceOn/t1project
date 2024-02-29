/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './reduxHooks';
import useIsStaffPage from './useIsStaffPage';
import { resetState, setQuery } from '../../app/reducers/ProductsSlice';
import { useGetProductsQuery } from '../../app/api/productsApi';
import { useLocation } from 'react-router-dom';
import { toGetInitialQuery } from '../utils/toGetInitialQuery';

export const useProductsService = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const { skip, selectedCategoryQuery, query, limit, searchQuery } =
    useAppSelector(state => state.products);

  const isStaffPage = useIsStaffPage();

  const {
    data: productsData,
    isLoading,
    isSuccess,
  } = useGetProductsQuery(query);

  useEffect(() => {
    const resultQuery = toGetInitialQuery(
      isStaffPage,
      selectedCategoryQuery,
      limit,
      skip,
      searchQuery
    );
    dispatch(resetState());
    dispatch(setQuery(resultQuery));
  }, [location.pathname]);

  useEffect(() => {
    const resultQuery = toGetInitialQuery(
      isStaffPage,
      selectedCategoryQuery,
      limit,
      skip,
      searchQuery
    );
    dispatch(setQuery(resultQuery));
  }, [selectedCategoryQuery, skip, dispatch, searchQuery]);

  return {
    productsData,
    isLoading,
    isSuccess,
  };
};
