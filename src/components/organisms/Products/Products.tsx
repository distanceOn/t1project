import useIsStaffPage from '../../../hooks/useIsStaffPage';
import { Button } from '../../atoms/Button/Button';
import { Title } from '../../atoms/Title/Title';
import { ProductCard } from '../../molecules/ProductCard/ProductCard';
import { Search } from '../../molecules/Search/Search';
import S from './Products.module.scss';

export const Products = () => {
  const cards = Array.from({ length: 9 });

  const isStaffPage = useIsStaffPage();

  const staffStyle = `${S.container} ${S.container_staff}`;
  const containerStyle = isStaffPage ? staffStyle : S.container;

  return (
    <div className={containerStyle}>
      {isStaffPage && (
        <>
          <Title color='grey' size='default'>
            All products
          </Title>
          <Search />
        </>
      )}
      <ul className={S.products}>
        {cards.map((_, index) => (
          <ProductCard key={index} />
        ))}
      </ul>
      <Button color='primary' href='#' type='catalog'>
        Show more
      </Button>
    </div>
  );
};
