import { useRef } from 'react';
import { useAppDispatch, useAppSelector } from './helpers/reduxHooks';
import { setSearchQuery } from '../app/reducers/ProductsSlice';

import { debounce } from 'lodash';

export const useSearch = () => {
  const dispatch = useAppDispatch();

  const { searchQuery } = useAppSelector(state => state.products);

  const debouncedSetSearchRef = useRef(
    debounce(value => {
      dispatch(setSearchQuery(value));
    }, 700)
  );

  const handleSearch = (value: string) => {
    debouncedSetSearchRef.current(value);
  };

  const handleClick = () => {
    if (searchQuery === '') return;
    debouncedSetSearchRef.current.flush();
  };

  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      debouncedSetSearchRef.current.flush();
    }
  };

  return {
    handleSearch,
    handleClick,
    onKeyPress,
  };
};
