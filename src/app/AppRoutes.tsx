import { Routes, Route } from 'react-router-dom';
import { CatalogPage } from '../pages/CatalogPage/CatalogPage';
import { StaffPage } from '../pages/StaffPage/StaffPage';
import { StaffProductPage } from '../pages/StaffProductPage/StaffProductPage';
import { NotFoundPage } from '../pages/NotFoundPage/NotFoundPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<CatalogPage />} />
      <Route path='/staff' element={<StaffPage />} />
      <Route path='/staff/:id' element={<StaffProductPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
