// Context module for staff authentication state
import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem('queuecare_staff_token') || null);

  useEffect(() => {
    if (token) {
      localStorage.setItem('queuecare_staff_token', token);
    } else {
      localStorage.removeItem('queuecare_staff_token');
    }
  }, [token]);

  const loginStaff = (newToken) => {
    setToken(newToken);
  };

  const logoutStaff = () => {
    setToken(null);
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        isAuthenticated: !!token,
        loginStaff,
        logoutStaff,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
