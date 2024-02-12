import { Picture } from '../../atoms/Picture/Picture';
import S from './Teammate.module.scss';

type TeammateProps = {
  image: 'maxim' | 'sasha' | 'andre' | 'anna' | 'fedor' | 'masha';
};
export const Teammate = ({ image }: TeammateProps) => {
  return (
    <div className={S.container}>
      <Picture size='large' image={image} />
    </div>
  );
};
