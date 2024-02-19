import { Button } from '../../atoms/Button/Button';
import { Title } from '../../atoms/Title/Title';
import S from './FilterCategories.module.scss';
import { useCategories } from '../../../hooks/useCategories';
import { useProducts } from '../../../hooks/useProducts';
import { setSelectedCategory } from '../../../app/reducers/ProductsSlice';
import { useAppDispatch } from '../../../hooks/reduxHooks';
export const FilterCategories = () => {
  const dispatch = useAppDispatch();

  const { categories, isLoading } = useCategories();

  const { selectedCategory } = useProducts();

  return (
    <div className={S.container}>
      <Title color='grey' size='min'>
        Categories
      </Title>
      <div className={S.categories}>
        {isLoading && <div className={S.loading}>loading...</div>}
        {categories.map((category, index) => {
          return (
            <Button
              onClick={() => dispatch(setSelectedCategory(category))}
              key={index}
              color={category === selectedCategory ? 'primary' : 'transparent'}
              type='category'
            >
              {category}
            </Button>
          );
        })}
      </div>
    </div>
  );
};
