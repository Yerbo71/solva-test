import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProtectedRoute from '../../shared/protectedRoute/protectedRoute.tsx';
import Main from '../../pages/main';
import Planet from '../../pages/planet';
import Starship from '../../pages/starship';
import Login from '../../pages/login';
import EntityPage from '../../pages/entityPage';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedRoute element={<Main />} />} />
        <Route path="/planets" element={<ProtectedRoute element={<Planet />} />} />
        <Route path="/starships" element={<ProtectedRoute element={<Starship />} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/:type/:id" element={<ProtectedRoute element={<EntityPage />} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
