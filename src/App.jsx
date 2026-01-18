
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import RegistrationPage from './pages/RegistrationPage';
import LoginPage from './pages/LoginPage';
import UserDashboard from './pages/UserDashboard';
import FoodsDashboard from './pages/FoodsDashboard';
import RestaurantsDashboard from './pages/RestaurantsDashboard';
import withAuth from './pages/withAuth';
import Foods from './pages/Foods';
import Restaurants from './pages/Restaurants';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/user-dashboard" element={<ProtectedUserDashboard />} />
        <Route path="/foods" element={<Foods />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

const ProtectedUserDashboard = withAuth(UserDashboard);
const ProtectedFoodsDashboard = withAuth(FoodsDashboard);
const ProtectedRestaurantsDashboard = withAuth(RestaurantsDashboard);

export default App;
