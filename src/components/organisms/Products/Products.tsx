import { useNavigate } from 'react-router-dom';
import useIsStaffPage from '../../../hooks/useIsStaffPage';

import S from './Products.module.scss';
import { useEffect, useState } from 'react';
import { useProducts } from '../../../hooks/useProducts';
import { Title } from '../../atoms/Title/Title';
import { Search } from '../../molecules/Search/Search';
import { ProductCard } from '../../molecules/ProductCard/ProductCard';
import { Button } from '../../atoms/Button/Button';

export const Products = () => {
  const navigate = useNavigate();

  const { products, isLoading, showMore, total } = useProducts();

  const isStaffPage = useIsStaffPage();

  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    if (products.length < total) {
      setShowBtn(true);
    } else {
      setShowBtn(false);
    }
  }, [products, total]);

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
        {products.map(({ id, title, price, images }: any) => (
          <ProductCard
            title={title}
            image={images[0]}
            price={price}
            onClick={navigateToProduct}
            id={id}
            key={title}
          />
        ))}
      </ul>
      {showBtn && (
        <Button color='primary' type='catalog' onClick={showMore}>
          Show more
        </Button>
      )}
    </div>
  );
};
