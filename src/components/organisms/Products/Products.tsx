import { useNavigate } from 'react-router-dom';
import useIsStaffPage from '../../../hooks/useIsStaffPage';
import { Button } from '../../atoms/Button/Button';
import { Title } from '../../atoms/Title/Title';
import { ProductCard } from '../../molecules/ProductCard/ProductCard';
import { Search } from '../../molecules/Search/Search';
import S from './Products.module.scss';
import { useProducts } from '../../../hooks/useProducts';
import { useEffect, useState } from 'react';

export const Products = () => {
  const navigate = useNavigate();

  const isStaffPage = useIsStaffPage();

  const {
    categoryProducts,
    isLoading,
    total,
    showedProducts,
    showMoreProducts,
  } = useProducts();

  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    setShowBtn(showedProducts < total);
  }, [showedProducts, total]);

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
        {categoryProducts
          .slice(0, showedProducts)
          .map(({ id, title, price, images }) => (
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
      {showBtn && (
        <Button color='primary' onClick={showMoreProducts} type='catalog'>
          Show more
        </Button>
      )}
    </div>
  );
};
