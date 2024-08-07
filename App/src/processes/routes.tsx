import { Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/login/LoginPage';


function RouteMap() {

  return (
      <Routes>

        <Route path="/login" element={<LoginPage />} />
      
      
      </Routes>
  );
}

export default RouteMap 