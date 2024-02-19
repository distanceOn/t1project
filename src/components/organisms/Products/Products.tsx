import { useNavigate } from 'react-router-dom';
import useIsStaffPage from '../../../hooks/useIsStaffPage';
import { Button } from '../../atoms/Button/Button';
import { Title } from '../../atoms/Title/Title';
import { ProductCard } from '../../molecules/ProductCard/ProductCard';
import { Search } from '../../molecules/Search/Search';
import S from './Products.module.scss';
import { useProducts } from '../../../hooks/useProducts';
import { useEffect } from 'react';

export const Products = () => {
  const { categoryProducts, isLoading } = useProducts();

  useEffect(() => {
    if (categoryProducts.length === 0) {
      return;
    }
    console.log(categoryProducts);
  }, [categoryProducts]);

  const isStaffPage = useIsStaffPage();

  const navigate = useNavigate();
  const navigateToProduct = (id: number) => {
    if (isStaffPage) {
      navigate(`/staff/${id}`);
    }
  };

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
        {isLoading && <div className={S.loading}>loading...</div>}
        {categoryProducts.map(({ id, title, price, images }) => (
          <ProductCard
            title={title}
            image={images[0]}
            price={price}
            onClick={navigateToProduct}
            id={id}
            key={id}
          />
        ))}
      </ul>
      <Button color='primary' href='#' type='catalog'>
        Show more
      </Button>
    </div>
  );
};
