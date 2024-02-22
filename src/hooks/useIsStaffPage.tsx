import { useLocation } from 'react-router-dom';

const useIsStaffPage = () => {
  const { pathname } = useLocation();
  const staffPathPrefix = '/staff';

  // Проверка, начинается ли текущий путь с /staff
  return pathname.startsWith(staffPathPrefix);
};

export default useIsStaffPage;
