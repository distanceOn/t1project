export const toGetDiscount = (
  price: number | null | undefined,
  discountPercentage: number | null | undefined
) => {
  return price && discountPercentage
    ? price - Math.round((price * discountPercentage) / 100)
    : price;
};
