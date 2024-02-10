import { Title } from '../../atoms/Title/Title';
import S from './HeroContent.module.scss';

export const HeroContent = () => {
  return (
    <div className={S.container}>
      <Title type='hero'>
        Any products from famous brands with worldwide delivery
      </Title>
    </div>
  );
};
