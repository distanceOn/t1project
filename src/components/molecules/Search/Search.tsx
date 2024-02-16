import { Button } from '../../atoms/Button/Button';
import { Input } from '../../atoms/Input/Input';
import S from './Search.module.scss';

export const Search = () => {
  return (
    <div className={S.container}>
      <Input />
      <Button color='primary' type='steps'>
        Search
      </Button>
    </div>
  );
};
