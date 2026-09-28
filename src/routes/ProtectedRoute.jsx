// ProtectedRoute component restricting staff dashboard to authenticated sessions
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return <Navigate to="/staff/login" replace />;
  }
  return children;
};
