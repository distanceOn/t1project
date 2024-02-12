import { FaqItem } from '../../molecules/FaqItem/FaqItem';
import S from './Faq.module.scss';

export const Faq = () => {
  return (
    <div className={S.container}>
      <FaqItem />
    </div>
  );
};
