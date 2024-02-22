import { useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from './reduxHooks';
import { setSearchQuery } from '../app/reducers/ProductsSlice';

import { debounce } from 'lodash';

export const useSearch = () => {
  const dispatch = useAppDispatch();

  const { searchQuery } = useAppSelector(state => state.products);

  const debouncedSetSearchRef = useRef(
    debounce(value => {
      dispatch(setSearchQuery(value));
      console.log('debounce');
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
      console.log('Enter');
    }
  };

  useEffect(() => {
    console.log('query', searchQuery);
  }, [searchQuery]);

  return {
    handleSearch,
    handleClick,
    onKeyPress,
  };
};
