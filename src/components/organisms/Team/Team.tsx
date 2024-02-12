import { Title } from '../../atoms/Title/Title';
import { Teammate } from '../../molecules/Teammate/Teammate';

export const Team = () => {
  return (
    <div>
      <Title color='white' size='default'>
        Our team
      </Title>
      <Teammate image='maxim' />
    </div>
  );
};
