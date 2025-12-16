// src/AuthContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';
import api from './services/api';

const AuthContext = createContext(null);

function decodeToken(token) {
  try {
    const payload = token.split('.')[1];
    const base64 = payload.replace(/-/g, '+').replace(/_/g, '/');
    const json = atob(base64);
    return JSON.parse(json);
  } catch (e) {
    return null;
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // { id, email, isAdmin }
  const [token, setToken] = useState(null);

  // Al cargar la app, mirar si hay token guardado
  useEffect(() => {
    const stored = localStorage.getItem('token');
    if (!stored) return;

    const payload = decodeToken(stored);
    if (payload && (!payload.exp || payload.exp * 1000 > Date.now())) {
      setToken(stored);
      setUser({
        id: payload.id,
        email: payload.email,
        isAdmin: payload.isAdmin,
      });
    } else {
      localStorage.removeItem('token');
    }
  }, []);

  const login = async (email, password) => {
    const res = await api.post('/login', { email, password });
    const receivedToken = res.data.token;
    localStorage.setItem('token', receivedToken);
    const payload = decodeToken(receivedToken);

    setToken(receivedToken);
    setUser({
      id: payload.id,
      email: payload.email,
      isAdmin: payload.isAdmin,
    });
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
