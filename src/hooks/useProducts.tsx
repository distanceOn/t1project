/* eslint-disable react-hooks/rules-of-hooks */
import { useCategoryProducts } from './useCategoryProducts';
import useIsStaffPage from './useIsStaffPage';
import { useStaffProducts } from './useStaffProducts';

export const useProducts = () => {
  const isStaffPage = useIsStaffPage();

  let productsData: any = {
    products: [],
    isLoading: false,
    total: 0,
    showedProducts: 9,
    showMoreProducts: () => {},
  };

  if (isStaffPage) {
    const {
      staffProducts,
      isLoading,
      total,
      showedProducts,
      showMoreProducts,
    } = useStaffProducts();
    productsData = {
      products: staffProducts,
      isLoading,
      total,
      showedProducts,
      showMoreProducts: showMoreProducts,
    };
  } else {
    const {
      categoryProducts,
      isLoading,
      total,
      showedProducts,
      showMoreProducts,
    } = useCategoryProducts();
    productsData = {
      products: categoryProducts,
      isLoading,
      total,
      showedProducts,
      showMoreProducts,
    };
  }

  return productsData;
};
