import { useEffect } from 'react';
import { useGetCategoriesQuery } from '../app/api/productsApi';
import { useAppDispatch, useAppSelector } from './reduxHooks';
import {
  setCategories,
  setSelectedCategory,
  setSelectedCategoryQuery,
} from '../app/reducers/ProductsSlice';

export const useCategories = () => {
  const dispatch = useAppDispatch();
  const {
    data: categoriesData,
    isLoading,
    isSuccess,
  } = useGetCategoriesQuery(undefined);

  useEffect(() => {
    if (isSuccess) {
      dispatch(setCategories(categoriesData));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoriesData]);

  const { categories, selectedCategory } = useAppSelector(
    state => state.products
  );

  const chooseSelectedCategory = (category: string) => {
    dispatch(setSelectedCategory(category));
  };

  const setCategory = async () => {
    dispatch(setSelectedCategoryQuery(selectedCategory));
  };

  const resetCategory = () => {
    dispatch(setSelectedCategory('smartphones'));
    dispatch(setSelectedCategoryQuery('smartphones'));
  };

  return {
    categories,
    isLoading,
    selectedCategory,
    chooseSelectedCategory,
    setCategory,
    resetCategory,
  };
};
