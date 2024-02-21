import { useCategories } from '../../../hooks/useCategories';
import { Button } from '../../atoms/Button/Button';
import { Title } from '../../atoms/Title/Title';
import { FilterCategories } from '../../molecules/FilterCategories/FilterCategories';
import S from './Filter.module.scss';
export const Filter = () => {
  const { setCategory, resetCategory } = useCategories();

  return (
    <div className={S.container}>
      <Title color='grey' size='small'>
        Selection <br /> by parameters
      </Title>
      <FilterCategories />
      <Button color='secondary' type='apply' onClick={setCategory}>
        Apply
      </Button>
      <Button color='transparent' type='reset' onClick={resetCategory}>
        Reset
      </Button>
    </div>
  );
};
