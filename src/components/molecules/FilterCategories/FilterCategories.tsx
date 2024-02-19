import { useEffect } from 'react';
import { useGetCategoriesQuery } from '../../../app/api/productsApi';
import { Button } from '../../atoms/Button/Button';
import { Title } from '../../atoms/Title/Title';
import S from './FilterCategories.module.scss';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import { setCategories } from '../../../app/reducers/ProductsSlice';
export const FilterCategories = () => {
  const dispatch = useAppDispatch();
  const {
    data: categoriesData,
    isLoading,
    isSuccess,
  } = useGetCategoriesQuery(undefined);

  useEffect(() => {
    if (isSuccess) {
      dispatch(setCategories(categoriesData));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoriesData]);

  const categories = useAppSelector(state => state.products.categories);

  return (
    <div className={S.container}>
      <Title color='grey' size='min'>
        Categories
      </Title>
      <div className={S.categories}>
        {isLoading && <div className={S.loading}>loading...</div>}
        {categories.map((category, index) => (
          <Button key={index} color='transparent' type='category'>
            {category}
          </Button>
        ))}
      </div>
    </div>
  );
};
