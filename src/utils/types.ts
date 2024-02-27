export type HeaderFooterType = { type: 'header' | 'footer' };

export type ProductSelectionItem = {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[];
  category: string;
};

export type ProductInfoValuesForApi = {
  category: string;
  price: number;
  stock: number;
  brand: string;
  description: string;
};

export type ProductInfoValuesChangable = ProductInfoValuesForApi & {
  discountPercentage: number;
};
