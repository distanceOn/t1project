import { useProducts } from '../../../hooks/useProducts';
import { Button } from '../../atoms/Button/Button';
import { Title } from '../../atoms/Title/Title';
import { FilterCategories } from '../../molecules/FilterCategories/FilterCategories';
import S from './Filter.module.scss';
export const Filter = () => {
  const { selectedCategory, setGoQueryCategory, resetCategory } = useProducts();

  const handleGetProducts = () => {
    setGoQueryCategory(selectedCategory);
  };

  return (
    <div className={S.container}>
      <Title color='grey' size='small'>
        Selection <br /> by parameters
      </Title>
      <FilterCategories />
      <Button onClick={handleGetProducts} color='secondary' type='apply'>
        Apply
      </Button>
      <Button onClick={resetCategory} color='transparent' type='reset'>
        Reset
      </Button>
    </div>
  );
};
