/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './reduxHooks';
import useIsStaffPage from './useIsStaffPage';
import { resetState, setQuery } from '../../app/reducers/ProductsSlice';
import { useGetProductsQuery } from '../../app/api/productsApi';
import { useLocation } from 'react-router-dom';

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

  const getInitialQuery = () => {
    if (isStaffPage) {
      const isSearchQuery = searchQuery !== '' && searchQuery !== undefined;
      if (isSearchQuery) {
        return { search: searchQuery };
      }
      return { limit, skip };
    }
    return { category: selectedCategoryQuery, limit, skip };
  };

  useEffect(() => {
    const resultQuery = getInitialQuery();
    dispatch(resetState());
    dispatch(setQuery(resultQuery));
  }, [location.pathname]);

  useEffect(() => {
    const resultQuery = getInitialQuery();
    dispatch(setQuery(resultQuery));
  }, [selectedCategoryQuery, skip, dispatch, searchQuery]);

  return {
    productsData,
    isLoading,
    isSuccess,
  };
};
