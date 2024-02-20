import { useEffect } from 'react';
import { useGetAllProductsQuery } from '../app/api/productsApi';
import { useAppDispatch, useAppSelector } from './reduxHooks';
import { setStaffProducts } from '../app/reducers/ProductsStaffSlice';

export const useStaffProducts = () => {
  const dispatch = useAppDispatch();

  const { data, isSuccess } = useGetAllProductsQuery({});

  useEffect(() => {
    if (data) {
      dispatch(setStaffProducts(data.products));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const { staffProducts } = useAppSelector(state => state.productsStaff);

  return {
    staffProducts,
    isSuccess,
  };
};
