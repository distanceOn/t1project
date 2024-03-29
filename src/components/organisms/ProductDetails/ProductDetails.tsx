import S from './ProductDetails.module.scss';
import { Title } from '../../atoms/Title/Title';
import { Gallery } from '../../molecules/Gallery/Gallery';
import { ProductInfo } from '../../molecules/ProductInfo/ProductInfo';
import { useSingleProduct } from '../../../hooks/useSingleProduct';

export const ProductDetails = () => {
  const { id, isLoading, error } = useSingleProduct();

  return isLoading ? (
    <div className={S.loading}>loading...</div>
  ) : error ? (
    <div className={S.loading}>Такого товара не существует</div>
  ) : (
    <div className={S.container}>
      <Title color='grey' size='default'>
        Product {id}
      </Title>
      <div className={S.content}>
        <Gallery />
        <ProductInfo />
      </div>
    </div>
  );
};
