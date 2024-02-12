import { Checkbox } from '../../atoms/Checkbox/Checkbox';
import { Picture } from '../../atoms/Picture/Picture';
import { Text } from '../../atoms/Text/Text';

import S from './ChoiceCard.module.scss';

export const ChoiceCard = () => {
  return (
    <li className={S.card}>
      <Picture size='small' image='choice' />
      <Checkbox>
        <Text color='grey' size='default'>
          sneakers
        </Text>
      </Checkbox>
    </li>
  );
};
