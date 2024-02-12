import { Button } from '../../atoms/Button/Button';
import { Title } from '../../atoms/Title/Title';
import S from './FilterCategories.module.scss';
export const FilterCategories = () => {
  const categories = [
    'smartphones',
    'laptops',
    'snickers',
    'snickers',
    'snickers',
    'snickers',
    'snickers',
    'snickers',
  ];
  return (
    <div className={S.container}>
      <Title color='grey' size='min'>
        Categories
      </Title>
      <div className={S.categories}>
        {categories.map((category, index) => (
          <Button key={index} color='transparent' type='category'>
            {category}
          </Button>
        ))}
      </div>
    </div>
  );
};
