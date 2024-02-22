import { useSearch } from '../../../hooks/useSearch';
import { Button } from '../../atoms/Button/Button';
import { Input } from '../../atoms/Input/Input';
import S from './Search.module.scss';

export const Search = () => {
  const { changeValue, handleSearch } = useSearch();

  return (
    <div className={S.container}>
      <Input onChange={changeValue} />
      <Button onClick={handleSearch} color='primary' type='steps'>
        Search
      </Button>
    </div>
  );
};
