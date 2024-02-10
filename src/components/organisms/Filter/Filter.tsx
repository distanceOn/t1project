import { Title } from '../../atoms/Title/Title';
import S from './Filter.module.scss';
export const Filter = () => {
  return (
    <div className={S.container}>
      <Title type='filter'>
        Selection <br /> by parameters
      </Title>
    </div>
  );
};
