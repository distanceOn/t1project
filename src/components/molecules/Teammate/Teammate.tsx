import { Picture } from '../../atoms/Picture/Picture';
import { Title } from '../../atoms/Title/Title';
import S from './Teammate.module.scss';
import { TeammateProps } from './types';
import { getInfoByImage } from './utils';

export const Teammate = ({ image }: TeammateProps) => {
  const { name, position } = getInfoByImage(image);
  return (
    <div className={S.container}>
      <Picture size='large' image={image} />
      <div className={S.info}>
        <Title color='white' size='small'>
          {name}
        </Title>
        <Title color='white' size='min'>
          {position}
        </Title>
      </div>
    </div>
  );
};
