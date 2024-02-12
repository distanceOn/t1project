import { Title } from '../../atoms/Title/Title';
import { FaqItem } from '../../molecules/FaqItem/FaqItem';
import S from './Faq.module.scss';

export const Faq = () => {
  return (
    <div className={S.container}>
      <div className={S.title}>
        <Title color='grey' size='default'>
          FAQ
        </Title>
      </div>

      <FaqItem
        question='Question 1'
        answer='Long answer to the first question'
      />
      <FaqItem
        question='Question 2'
        answer='Long answer to the second question'
      />
    </div>
  );
};
