import { changeStep } from '../../../app/reducers/SelectionSlice';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import { Button } from '../../atoms/Button/Button';
import { Text } from '../../atoms/Text/Text';
import S from './Steps.module.scss';

export const Steps = () => {
  const dispatch = useAppDispatch();
  const { step } = useAppSelector(state => state.selection);
  const handleClick = () => {
    dispatch(changeStep(step !== 1 ? 1 : 2));
  };
  return (
    <div className={S.container}>
      <Text color='lightgrey' size='default'>
        {step} of 2
      </Text>
      <Button onClick={handleClick} color='transparent' type='steps'>
        Next step
      </Button>
    </div>
  );
};
