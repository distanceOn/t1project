import { Button } from '../../atoms/Button/Button';
import { Text } from '../../atoms/Text/Text';
import { Title } from '../../atoms/Title/Title';
import S from './HeroContent.module.scss';

export const HeroContent = () => {
  return (
    <div className={S.container}>
      <Title color='white' size='large'>
        Any products from famous brands with worldwide delivery
      </Title>
      <Text color='white' size='lineheight'>
        We sell smartphones, laptops, clothes, shoes <br /> and many other
        products at low prices
      </Text>
      <Button color='primary' href='#' type='default'>
        Go to shopping
      </Button>
    </div>
  );
};
