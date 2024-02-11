import { Button } from '../../atoms/Button/Button';
import { ProductCard } from '../../molecules/Product/ProductCard';
import S from './Products.module.scss';

export const Products = () => {
  return (
    <div className={S.container}>
      <ul className={S.products}>
        {Array.from({ length: 9 }).map((_, index) => (
          <ProductCard key={index} />
        ))}
      </ul>
      <Button href='#' type='catalog'>
        Show more
      </Button>
    </div>
  );
};
