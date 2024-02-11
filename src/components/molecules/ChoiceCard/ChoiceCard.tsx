import { Picture } from '../../atoms/Picture/Picture';

import S from './ChoiceCard.module.scss';

export const ChoiceCard = () => {
  return (
    <li className={S.card}>
      <Picture size='small' image='choice' />
    </li>
  );
};
