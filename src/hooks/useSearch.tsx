import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './reduxHooks';
import {
  resetState,
  setSearchQuery,
  setSearchValue,
} from '../app/reducers/ProductsSlice';

export const useSearch = () => {
  const dispatch = useAppDispatch();

  const { searchValue, searchQuery } = useAppSelector(state => state.products);

  const changeValue = (value: string) => {
    dispatch(setSearchValue(value));
  };

  const handleSearch = () => {
    if (searchValue === searchQuery) return;
    dispatch(setSearchQuery(searchValue));
    console.log('search');
  };

  useEffect(() => {
    dispatch(setSearchQuery(searchValue));
  }, [searchValue]);

  useEffect(() => {
    console.log('query', searchQuery);
  }, [searchQuery]);

  return {
    changeValue,
    handleSearch,
  };
};
