import { Routes, Route } from 'react-router-dom';
import { CatalogPage } from '../pages/CatalogPage/CatalogPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<CatalogPage />} />
    </Routes>
  );
};

export default AppRoutes;
