import { changeStep } from '../../../app/reducers/SelectionSlice';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import { Button } from '../../atoms/Button/Button';
import { Text } from '../../atoms/Text/Text';
import S from './Steps.module.scss';

export const Steps = () => {
  const dispatch = useAppDispatch();
  const { step, selected } = useAppSelector(state => state.selection);
  const handleClick = () => {
    if (selected.length === 0) return;
    const finalStep = step === 1 ? 2 : 1;
    dispatch(changeStep(finalStep));
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
