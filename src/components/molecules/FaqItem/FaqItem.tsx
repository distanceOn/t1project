import { Title } from '../../atoms/Title/Title';
import S from './FaqItem.module.scss';

export const FaqItem = () => {
  return (
    <li className={S.container}>
      <div>
        <Title color='black' size='xmin'>
          Question 1
        </Title>
      </div>
    </li>
  );
};
