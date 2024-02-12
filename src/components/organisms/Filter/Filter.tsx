import { Button } from '../../atoms/Button/Button';
import { Title } from '../../atoms/Title/Title';
import { FilterCategories } from '../../molecules/FilterCategories/FilterCategories';
import S from './Filter.module.scss';
export const Filter = () => {
  return (
    <div className={S.container}>
      <Title color='grey' size='small'>
        Selection <br /> by parameters
      </Title>
      <FilterCategories />
      <Button color='secondary' type='apply'>
        Apply
      </Button>
      <Button color='transparent' type='reset'>
        Reset
      </Button>
    </div>
  );
};
