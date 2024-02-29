import { toGetDiscount } from '../toGetDiscount';

describe('toGetDiscount', () => {
  it('should return correct discounted price', () => {
    expect(toGetDiscount(100, 10)).toBe(90);
    expect(toGetDiscount(200, 20)).toBe(160);
    expect(toGetDiscount(50, 5)).toBe(47);
  });

  it('should return original price if discountPercentage is zero', () => {
    expect(toGetDiscount(100, 0)).toBe(100);
    expect(toGetDiscount(200, 0)).toBe(200);
  });

  it('should return original price if discountPercentage is undefined', () => {
    expect(toGetDiscount(100, undefined)).toBe(100);
    expect(toGetDiscount(200, undefined)).toBe(200);
  });

  it('should return original price if price is undefined', () => {
    expect(toGetDiscount(undefined, 10)).toBeUndefined();
    expect(toGetDiscount(undefined, 20)).toBeUndefined();
  });
});
