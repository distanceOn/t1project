import { useCategories } from '../../../hooks/useCategories';
import { Text } from '../../atoms/Text/Text';
import { Title } from '../../atoms/Title/Title';
import { ChoiceCard } from '../../molecules/ChoiceCard/ChoiceCard';
import { Steps } from '../../molecules/Steps/Steps';
import S from './ProductSelection.module.scss';

export const ProductSelection = () => {
  const { categories, isLoading } = useCategories();

  return (
    <div className={S.container}>
      <div className={S.header}>
        <Title color='grey' size='small'>
          We will select the perfect product for you
        </Title>
        <Text color='lightgrey' size='default'>
          Answer three questions and we will send you a catalog with the most
          suitable products for you.
        </Text>
      </div>
      <div className={S.products}>
        <Title color='grey' size='small'>
          What type of product are you considering?
        </Title>
        <div className={S.list}>
          {isLoading && <div className={S.loading}>loading...</div>}
          {categories.map((category, index) => (
            <ChoiceCard category={category} key={index} />
          ))}
        </div>
      </div>
      <Steps />
    </div>
  );
};
