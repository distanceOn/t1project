import { FaqItem } from '../../molecules/FaqItem/FaqItem';
import S from './Faq.module.scss';

export const Faq = () => {
  return (
    <div className={S.container}>
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
