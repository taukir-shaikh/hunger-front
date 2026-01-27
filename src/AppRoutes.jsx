import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import VerifyOtp from './pages/auth/VerifyOtp';
import RestaurantList from './pages/restaurant/RestaurantList';
import RestaurantDetail from './pages/restaurant/RestaurantDetail';
import Checkout from './pages/checkout/Checkout';
import OrderTracking from './pages/orders/OrderTracking';
import OrderHistory from './pages/orders/OrderHistory';
import Profile from './pages/profile/Profile';
import RestaurantDashboard from './pages/restaurant/RestaurantDashboard';
import AdminDashboard from './pages/admin/AdminDashboard';
import RoleBasedRoute from './routes/RoleBasedRoute';
import { ROLES } from './utils/constants';
import ProtectedRoute from './routes/ProtectedRoute';

const AppRoutes = () => (
  <Routes>
    <Route path="/auth/login" element={<Login />} />
    <Route path="/auth/register" element={<Register />} />
    <Route path="/auth/verify-otp" element={<VerifyOtp />} />
    <Route path="/restaurants" element={<RestaurantList />} />
    <Route path="/restaurants/:id" element={<RestaurantDetail />} />
    <Route element={<ProtectedRoute />}>
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/orders" element={<OrderHistory />} />
      <Route path="/orders/:id" element={<OrderTracking />} />
      <Route path="/profile" element={<Profile />} />
    </Route>
    <Route element={<RoleBasedRoute allowedRoles={[ROLES.RESTAURANT]} />}> 
      <Route path="/restaurant/dashboard" element={<RestaurantDashboard />} />
    </Route>
    <Route element={<RoleBasedRoute allowedRoles={[ROLES.ADMIN]} />}> 
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
    </Route>
    {/* Add more routes here, including protected and role-based routes */}
  </Routes>
);

export default AppRoutes;