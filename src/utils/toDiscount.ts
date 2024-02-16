export const toDiscount = (basePrice: string, discount: string) => {
  // Удалить символ доллара и конвертировать basePrice в число
  const price = parseFloat(basePrice.replace('$', ''));
  // Удалить символ процента и конвертировать discount в число
  const discountRate = parseFloat(discount.replace('%', ''));
  // Вычислить скидку
  const discountAmount = price * (discountRate / 100);
  // Вычислить итоговую цену со скидкой
  const discountPrice = price - discountAmount;
  // Вернуть итоговую цену со скидкой как строку с символом доллара
  return `${discountPrice.toFixed(2)}$`;
};
