import { Button } from '../../atoms/Button/Button';
import { Text } from '../../atoms/Text/Text';
import S from './Steps.module.scss';

export const Steps = () => {
  return (
    <div className={S.container}>
      <Text color='lightgrey' size='default'>
        1 of 3
      </Text>
      <Button color='transparent' type='steps'>
        Next step
      </Button>
    </div>
  );
};
