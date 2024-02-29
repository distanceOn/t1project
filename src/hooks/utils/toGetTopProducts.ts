export const getTopProduct = (results: any) => {
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
