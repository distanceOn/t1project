import { useLocation } from 'react-router-dom';

// префикс пути для страниц сотрудников
const STAFF_PATH_PREFIX = '/staff';

/**
 * хук для определения, является ли текущая страница страницей сотрудников.
 * @returns {boolean} true, если текущая страница является страницей сотрудника, false в противном случае.
 */
const useIsStaffPage = (): boolean => {
  const { pathname } = useLocation();

  // проверка, что pathname существует и начинается с префикса пути для страниц сотрудников
  return Boolean(pathname && pathname.startsWith(STAFF_PATH_PREFIX));
};

export default useIsStaffPage;
