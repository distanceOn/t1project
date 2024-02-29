import { useEffect } from 'react';
import { useCategories } from '../../../hooks/useCategories';
import { Text } from '../../atoms/Text/Text';
import { Title } from '../../atoms/Title/Title';
import { ChoiceCard } from '../../molecules/ChoiceCard/ChoiceCard';
import { Steps } from '../../molecules/Steps/Steps';
import S from './ProductSelection.module.scss';
import { useAppSelector } from '../../../hooks/helpers/reduxHooks';
import { useSelection } from '../../../hooks/useSelection';
import { ProductCard } from '../../molecules/ProductCard/ProductCard';

export const ProductSelection = () => {
  const { categories, isLoading } = useCategories();
  const { selected, step, total } = useAppSelector(state => state.selection);
  const { getResults, resetSelection } = useSelection();

  useEffect(() => {
    if (step === 2) {
      getResults();
    }
    if (step === 1) {
      resetSelection();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step]);

  return (
    <div className={S.container}>
      <div className={S.header}>
        {total.length === 0 ? (
          <>
            <Title color='grey' size='small'>
              We will select the perfect product for you
            </Title>
            <Text color='lightgrey' size='default'>
              Answer three questions and we will send you a catalog with the
              most suitable products for you.
            </Text>
          </>
        ) : (
          <Title color='grey' size='small'>
            Your selection is ready!
          </Title>
        )}
      </div>
      <div className={S.products}>
        {total.length === 0 && (
          <Title color='grey' size='small'>
            What type of product are you considering?
          </Title>
        )}

        <div className={total.length === 0 ? S.list : S.list_results}>
          {isLoading && <div className={S.loading}>loading...</div>}
          {total.length > 0
            ? total.map(item => (
                <ProductCard
                  key={item.title}
                  title={item.title}
                  image={item.images[0]}
                  price={item.price}
                  id={item.id}
                />
              ))
            : categories.map((category, index) => (
                <ChoiceCard
                  selected={selected}
                  category={category}
                  key={category}
                />
              ))}
        </div>
      </div>
      <Steps />
    </div>
  );
};
