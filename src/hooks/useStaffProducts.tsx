import { useEffect } from 'react';
import { useGetAllProductsQuery } from '../app/api/productsApi';
import { useAppDispatch, useAppSelector } from './reduxHooks';
import {
  resetAll,
  setShowedProducts,
  setSkip,
  setStaffProducts,
  setTotal,
} from '../app/reducers/ProductsStaffSlice';

export const useStaffProducts = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(resetAll());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { staffProducts, total, showedProducts, skip } = useAppSelector(
    state => state.productsStaff
  );

  const {
    data: productsData,
    isLoading,
    isSuccess,
    refetch,
  } = useGetAllProductsQuery({ limit: 9, skip });

  useEffect(() => {
    console.log(showedProducts, skip, productsData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showedProducts, skip]);

  useEffect(() => {
    if (isSuccess) {
      const { products, total } = productsData;
      dispatch(setStaffProducts(products));
      dispatch(setTotal(total));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productsData]);

  useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [skip]);

  const showMoreProducts = () => {
    dispatch(setShowedProducts(showedProducts + 9));
    dispatch(setSkip(skip + 9));
  };

  return {
    staffProducts,
    isLoading,
    total,
    showedProducts,
    showMoreProducts,
  };
};
