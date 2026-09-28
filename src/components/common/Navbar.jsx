// Sticky header navigation bar component
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Stethoscope, Calendar, Activity, Lock, LogOut, Menu, X } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';

export const Navbar = () => {
  const { isAuthenticated, logoutStaff } = useAuth();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-600 to-teal-400 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
                <Stethoscope className="w-6 h-6" />
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-teal-800 to-slate-900 bg-clip-text text-transparent">
                QueueCare
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              to="/book"
              className={`flex items-center gap-2 font-medium px-3 py-2 rounded-lg text-sm transition-colors ${
                isActive('/book') ? 'bg-teal-50 text-teal-700' : 'text-slate-600 hover:text-teal-600'
              }`}
            >
              <Calendar className="w-4 h-4" /> Book Appointment
            </Link>
            <Link
              to="/status"
              className={`flex items-center gap-2 font-medium px-3 py-2 rounded-lg text-sm transition-colors ${
                isActive('/status') ? 'bg-teal-50 text-teal-700' : 'text-slate-600 hover:text-teal-600'
              }`}
            >
              <Activity className="w-4 h-4" /> Live Queue Status
            </Link>

            {isAuthenticated ? (
              <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
                <Link
                  to="/staff"
                  className="bg-teal-600 text-white font-medium px-4 py-2 rounded-xl text-sm hover:bg-teal-700 shadow-sm transition-all flex items-center gap-2"
                >
                  <Lock className="w-4 h-4" /> Staff Dashboard
                </Link>
                <button
                  onClick={logoutStaff}
                  className="text-slate-500 hover:text-rose-600 p-2 rounded-lg transition-colors"
                  title="Logout Staff"
                >
                  <LogOut className="w-5 h-5" />
                </button>
              </div>
            ) : (
              <Link
                to="/staff/login"
                className="border border-slate-300 text-slate-700 font-medium px-4 py-2 rounded-xl text-sm hover:bg-slate-50 transition-all flex items-center gap-2"
              >
                <Lock className="w-4 h-4" /> Staff Portal
              </Link>
            )}
          </div>

          {/* Mobile menu toggle button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-600 hover:text-slate-900 p-2"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-4 pt-2 pb-4 space-y-2">
          <Link
            to="/book"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md font-medium text-slate-700 hover:bg-teal-50 hover:text-teal-700"
          >
            Book Appointment
          </Link>
          <Link
            to="/status"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md font-medium text-slate-700 hover:bg-teal-50 hover:text-teal-700"
          >
            Live Queue Status
          </Link>
          <Link
            to={isAuthenticated ? '/staff' : '/staff/login'}
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md font-medium text-teal-700 bg-teal-50"
          >
            {isAuthenticated ? 'Staff Dashboard' : 'Staff Login'}
          </Link>
        </div>
      )}
    </nav>
  );
};
