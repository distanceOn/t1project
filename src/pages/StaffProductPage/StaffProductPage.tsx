import { useParams } from 'react-router-dom';

import S from './StaffProductPage.module.scss';

export const StaffProductPage = () => {
  const { id } = useParams();

  return <div className={S.page}>{id}</div>;
};
