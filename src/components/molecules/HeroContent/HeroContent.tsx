import { Text } from '../../atoms/Text/Text';
import { Title } from '../../atoms/Title/Title';
import S from './HeroContent.module.scss';

export const HeroContent = () => {
  return (
    <div className={S.container}>
      <Title type='hero'>
        Any products from famous brands with worldwide delivery
      </Title>
      <Text type='hero'>
        We sell smartphones, laptops, clothes, shoes <br /> and many other
        products at low prices
      </Text>
    </div>
  );
};
