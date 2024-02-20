/* eslint-disable react-hooks/rules-of-hooks */
import { useCategoryProducts } from './useCategoryProducts';
import useIsStaffPage from './useIsStaffPage';
import { useStaffProducts } from './useStaffProducts';

export const useProducts = () => {
  const isStaffPage = useIsStaffPage();

  let productsData = { products: [] };

  if (isStaffPage) {
    const { staffProducts } = useStaffProducts();
    productsData = {
      products: staffProducts,
    };
  } else {
    const { categoryProducts } = useCategoryProducts();
    productsData = {
      products: categoryProducts,
    };
  }

  return productsData;
};
