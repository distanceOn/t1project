import { useSearch } from '../../../hooks/useSearch';
import { Button } from '../../atoms/Button/Button';
import { Input } from '../../atoms/Input/Input';
import S from './Search.module.scss';

export const Search = () => {
  const { handleSearch, onKeyPress, handleClick } = useSearch();

  return (
    <div className={S.container}>
      <Input onChange={handleSearch} onKeyDown={onKeyPress} />
      <Button onClick={handleClick} color='primary' type='steps'>
        Search
      </Button>
    </div>
  );
};
