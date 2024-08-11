import { Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/login/LoginPage';
import TestBuildForm from "../widgets/testBuild/testBuild.tsx";


function RouteMap() {

  return (
      <Routes>

        <Route path="/login" element={<LoginPage />} />
        <Route path="/testbuild" element={<TestBuildForm />}/>
      
      </Routes>
  );
}

export default RouteMap 