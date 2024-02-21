import { Button } from '../../atoms/Button/Button';
import { Title } from '../../atoms/Title/Title';
import S from './FilterCategories.module.scss';
import { useCategories } from '../../../hooks/useCategories';

export const FilterCategories = () => {
  const { categories, isLoading, selectedCategory, chooseSelectedCategory } =
    useCategories();

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
              onClick={() => chooseSelectedCategory(category)}
              key={index}
              color={selectedCategory === category ? 'primary' : 'transparent'}
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
