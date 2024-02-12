import { Picture } from '../../atoms/Picture/Picture';
import { Title } from '../../atoms/Title/Title';
import S from './Teammate.module.scss';

type TeammateProps = {
  image: 'maxim' | 'sasha' | 'andre' | 'anna' | 'fedor' | 'masha';
};
export const Teammate = ({ image }: TeammateProps) => {
  return (
    <div className={S.container}>
      <Picture size='large' image={image} />
      <div className={S.info}>
        <Title color='white' size='small'>
          Maxim
        </Title>
        <Title color='white' size='min'>
          Administrator
        </Title>
      </div>
    </div>
  );
};
