import { ProductCard } from '../../molecules/Product/ProductCard';
import S from './Products.module.scss';

export const Products = () => {
  return (
    <div className={S.container}>
      <ul>
        <ProductCard />
      </ul>
    </div>
  );
};
