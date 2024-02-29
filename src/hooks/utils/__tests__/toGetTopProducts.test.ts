import { getTopProduct } from '../toGetTopProducts';

describe('getTopProduct', () => {
  it('should return the product with the highest rating', () => {
    const results = {
      products: [
        { id: 1, title: 'Product 1', rating: 4.5 },
        { id: 2, title: 'Product 2', rating: 4.8 },
        { id: 3, title: 'Product 3', rating: 4.2 },
      ],
    };

    const topProduct = getTopProduct(results);

    expect(topProduct).toEqual({ id: 2, title: 'Product 2', rating: 4.8 });
  });

  it('should return null if there are no products', () => {
    const results = { products: [] };

    const topProduct = getTopProduct(results);

    expect(topProduct).toBeNull();
  });
});
