export type HeaderFooterType = { type: 'header' | 'footer' };

export type ProductSelectionItem = {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[];
  category: string;
};
