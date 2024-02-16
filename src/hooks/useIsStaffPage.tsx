import { useLocation } from 'react-router-dom';

const useIsStaffPage = () => {
  const { pathname } = useLocation();
  const staffPathname = '/staff';

  return pathname === staffPathname;
};

export default useIsStaffPage;
