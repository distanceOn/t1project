import { useAppDispatch, useAppSelector } from './helpers/reduxHooks';
import { setTotal } from '../app/reducers/SelectionSlice';

export const useSelection = () => {
  const dispatch = useAppDispatch();
  const { selected } = useAppSelector(state => state.selection);

  const getTopProduct = (results: any) => {
    const products = results.products;
    let topProduct = null;
    let maxRating = -Infinity;

    products.forEach((product: any) => {
      if (product.rating > maxRating) {
        maxRating = product.rating;
        topProduct = product;
      }
    });

    return topProduct;
  };

  const fetchTopProducts = async (addresses: string[]) => {
    const results = [];

    for (const address of addresses) {
      try {
        const response = await fetch(address);
        const data = await response.json();
        const topProduct = getTopProduct(data);
        results.push(topProduct);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    return { results };
  };

  const getResults = async () => {
    if (selected.length > 0) {
      const addresses = selected.map(
        item => `https://dummyjson.com/products/category/${item}`
      );
      const result = await fetchTopProducts(addresses);

      dispatch(setTotal(result.results));
    }
  };

  const resetSelection = () => {
    dispatch(setTotal([]));
  };

  return {
    getResults,
    resetSelection,
  };
};
