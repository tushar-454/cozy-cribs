'use client';
import { createContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const logout = () => {
    setUser(null);
    localStorage.setItem('user', null);
    localStorage.removeItem('token');
    toast.success('Logout successfully');
  };

  useEffect(() => {
    const localStorageUser = localStorage.getItem('user');
    if (localStorageUser) {
      setUser(JSON.parse(localStorageUser));
    }
  }, []);

  useEffect(() => {
    const localStorageUser = localStorage.getItem('user');
    if (localStorageUser === 'null' || localStorageUser === null) {
      localStorage.setItem('user', JSON.stringify(user));
    }
  }, [user]);

  const userInfo = { user, setUser, logout };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
