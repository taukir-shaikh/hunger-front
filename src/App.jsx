
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import RegistrationPage from './pages/RegistrationPage';
import LoginPage from './pages/LoginPage';

import UserDashboard from './pages/UserDashboard';
import FoodsDashboard from './pages/FoodsDashboard';
import RestaurantsDashboard from './pages/RestaurantsDashboard';
import withAuth from './pages/withAuth';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<ProtectedUserDashboard />} />
        <Route path="/foods" element={<ProtectedFoodsDashboard />} />
        <Route path="/restaurants" element={<ProtectedRestaurantsDashboard />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

const ProtectedUserDashboard = withAuth(UserDashboard);
const ProtectedFoodsDashboard = withAuth(FoodsDashboard);
const ProtectedRestaurantsDashboard = withAuth(RestaurantsDashboard);

export default App;
