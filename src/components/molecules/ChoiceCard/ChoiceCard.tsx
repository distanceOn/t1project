import { useEffect, useState } from 'react';
import { Checkbox } from '../../atoms/Checkbox/Checkbox';
// import { Picture } from '../../atoms/Picture/Picture';
import { Text } from '../../atoms/Text/Text';

import S from './ChoiceCard.module.scss';
import { useAppDispatch } from '../../../hooks/reduxHooks';
import {
  addSelected,
  removeSelected,
} from '../../../app/reducers/SelectionSlice';

export const ChoiceCard = ({
  category,
  selected,
}: {
  category: string;
  selected: string[];
}) => {
  const dispatch = useAppDispatch();
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    if (selected.length === 3 && !isChecked) {
      return;
    } else {
      setIsChecked(!isChecked);
    }
  };

  useEffect(() => {
    if (isChecked) {
      dispatch(addSelected(category));
    } else {
      dispatch(removeSelected(category));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isChecked]);

  return (
    <li className={S.card}>
      {/* <Picture size='small' image='choice' /> */}
      <Checkbox isChecked={isChecked} handleCheck={handleCheck} id={category}>
        <Text color='grey' size='default'>
          {category}
        </Text>
      </Checkbox>
    </li>
  );
};
