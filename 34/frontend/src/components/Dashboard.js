// src/componentes/Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../AuthContext';

export default function Dashboard() {
  const { user, logout } = useAuth();

  return (
    <div className="page">
      <h2>Dashboard</h2>
      <p>Bienvenido: <strong>{user?.email}</strong></p>

      {/* Solo admins ven el enlace al panel de usuarios */}
      {user?.isAdmin && (
        <div className="admin-actions">
          <h3>Acciones de administrador</h3>
          <Link to="/admin/users">Panel de usuarios</Link>
        </div>
      )}

      <button onClick={logout}>Cerrar sesión</button>
    </div>
  );
}
