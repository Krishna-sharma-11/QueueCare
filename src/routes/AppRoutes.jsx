// Main Application Router mapping paths to Page components
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';
import { LandingPage } from '../pages/LandingPage';
import { BookPage } from '../pages/BookPage';
import { StatusPage } from '../pages/StatusPage';
import { StaffLoginPage } from '../pages/StaffLoginPage';
import { StaffDashboardPage } from '../pages/StaffDashboardPage';
import { NotFoundPage } from '../pages/NotFoundPage';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/book" element={<BookPage />} />
      <Route path="/status" element={<StatusPage />} />
      <Route path="/status/:id" element={<StatusPage />} />
      <Route path="/staff/login" element={<StaffLoginPage />} />
      <Route
        path="/staff"
        element={
          <ProtectedRoute>
            <StaffDashboardPage />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
