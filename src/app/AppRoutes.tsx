import { Routes, Route } from 'react-router-dom';
import { CatalogPage } from '../pages/CatalogPage/CatalogPage';
import { StaffPage } from '../pages/StaffPage/StaffPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<CatalogPage />} />
      <Route path='/staff' element={<StaffPage />} />
    </Routes>
  );
};

export default AppRoutes;
