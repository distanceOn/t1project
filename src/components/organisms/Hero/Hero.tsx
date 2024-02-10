import { Title } from '../../atoms/Title/Title';
import S from './Hero.module.scss';

export const Hero = () => {
  return (
    <section className={S.hero}>
      <Title type='hero'>
        Any products from famous brands with worldwide delivery
      </Title>
    </section>
  );
};
