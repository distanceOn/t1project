import { HeroContent } from '../../molecules/HeroContent/HeroContent';
import S from './Hero.module.scss';

export const Hero = () => {
  return (
    <section className={S.hero}>
      <HeroContent />
    </section>
  );
};
