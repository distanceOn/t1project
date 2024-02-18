import { Text } from '../../atoms/Text/Text';
import { Title } from '../../atoms/Title/Title';
import S from './ProductInfo.module.scss';

export const ProductInfo = () => {
  return (
    <div className={S.container}>
      <div className={S.title}>
        <Title size='small' color='grey'>
          Puma Force 1 Shadow
        </Title>
        <div className={S.item}>
          <Text size='default' color='lightgrey'>
            SKU ID
          </Text>
          <Text size='default' color='grey'>
            0005
          </Text>
        </div>
      </div>
      <div className={S.info}>
        <div className={S.item}>
          <Text size='default' color='lightgrey'>
            Raiting
          </Text>
        </div>
        <div className={S.item}>
          <Text size='default' color='lightgrey'>
            Base price
          </Text>
          <Text size='default' color='grey'>
            500$
          </Text>
        </div>
        <div className={S.item}>
          <Text size='default' color='lightgrey'>
            Discount percentage
          </Text>
          <Text size='default' color='grey'>
            10%
          </Text>
        </div>
        <div className={S.item}>
          <Text size='default' color='lightgrey'>
            Discount price
          </Text>
          <Text size='default' color='grey'>
            450$
          </Text>
        </div>
        <div className={S.item}>
          <Text size='default' color='lightgrey'>
            Stock
          </Text>
          <Text size='default' color='grey'>
            13
          </Text>
        </div>
        <div className={S.item}>
          <Text size='default' color='lightgrey'>
            Brand
          </Text>
          <Text size='default' color='grey'>
            Puma
          </Text>
        </div>
        <div className={S.item}>
          <Text size='default' color='lightgrey'>
            Category
          </Text>
          <Text size='default' color='grey'>
            Smartphones
          </Text>
        </div>
        <div className={S.item}>
          <Text size='default' color='lightgrey'>
            Description
          </Text>
          <Text size='default' color='grey'>
            An apple mobile which is nothing like apple
          </Text>
        </div>
      </div>
    </div>
  );
};
