import { useParams } from 'react-router-dom';
import S from './ProductDetails.module.scss';
import { Title } from '../../atoms/Title/Title';
import { Gallery } from '../../molecules/Gallery/Gallery';
import { ProductInfo } from '../../molecules/ProductInfo/ProductInfo';

export const ProductDetails = () => {
  const { id } = useParams();
  return (
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
