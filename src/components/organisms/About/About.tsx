import { Logo } from '../../atoms/Logo/Logo';
import { Text } from '../../atoms/Text/Text';
import { Title } from '../../atoms/Title/Title';
import { Quote } from '../../molecules/Quote/Quote';
import S from './About.module.scss';

export const About = () => {
  return (
    <div className={S.container}>
      <div className={S.about}>
        <Title type='about'>About us</Title>
        <Text type='hero'>
          Every day a person has a choice what to spend his money on. Stores and
          websites offer an endless list of products. <br />
          But we will help you make the right choice!
        </Text>
      </div>
      <Quote>
        <Logo type='small' />
      </Quote>
    </div>
  );
};
