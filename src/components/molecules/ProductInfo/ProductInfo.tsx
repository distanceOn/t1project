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
        <div className={S.id}>
          <Text size='default' color='lightgrey'>
            SKU ID
          </Text>
          <Text size='default' color='grey'>
            0005
          </Text>
        </div>
      </div>
    </div>
  );
};
