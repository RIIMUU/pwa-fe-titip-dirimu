import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import SuperAdminDashboard from '../pages/SuperAdminDashboard';
import AdminDashboard from '../pages/AdminDashboard';
import EmployeeDashboard from '../pages/EmployeeDashboard';
import CustomerDashboard from '../pages/CustomerDashboard';
import CustomerVIPDashboard from '../pages/CustomerVIPDashboard';
import ProductList from '../pages/ProductList';
import ProductDetail from '../pages/ProductDetail';
import UserProfile from '../pages/UserProfile';
import Login from '../pages/Login';
import Checkout from '../pages/Checkout';
import ProtectedRoute from '../components/ProtectedRoute';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
      <Route path="/super-admin" element={<ProtectedRoute><SuperAdminDashboard /></ProtectedRoute>} />
      <Route path="/admin" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
      <Route path="/employee" element={<ProtectedRoute><EmployeeDashboard /></ProtectedRoute>} />
      <Route path="/customer" element={<ProtectedRoute><CustomerDashboard /></ProtectedRoute>} />
      <Route path="/customer-vip" element={<ProtectedRoute><CustomerVIPDashboard /></ProtectedRoute>} />
      <Route path="/products" element={<ProtectedRoute><ProductList /></ProtectedRoute>} />
      <Route path="/products/:id" element={<ProtectedRoute><ProductDetail /></ProtectedRoute>} />
      <Route path="/profile" element={<ProtectedRoute><UserProfile /></ProtectedRoute>} />
      <Route path="/checkout" element={<ProtectedRoute><Checkout /></ProtectedRoute>} />
    </Routes>
  );
};

export default AppRoutes;
