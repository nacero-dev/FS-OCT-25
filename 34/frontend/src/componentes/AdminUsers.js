// src/componentes/AdminUsers.js
import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { useAuth } from '../AuthContext';

export default function AdminUsers() {
  const { user } = useAuth();
  const [users, setUsers] = useState([]);
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newIsAdmin, setNewIsAdmin] = useState(false);

  const [error, setError] = useState('');

  const loadUsers = async () => {
    try {
      const res = await api.get('/users');
      setUsers(res.data);
    } catch (err) {
      setError('Error al cargar usuarios (¿eres admin?)');
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      await api.post('/users', {
        email: newEmail,
        password: newPassword,
        isAdmin: newIsAdmin,
      });
      setNewEmail('');
      setNewPassword('');
      setNewIsAdmin(false);
      loadUsers();
    } catch (err) {
      setError('Error al crear usuario');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('¿Eliminar este usuario?')) return;
    try {
      await api.delete(`/users/${id}`);
      loadUsers();
    } catch (err) {
      setError('Error al eliminar usuario');
    }
  };

  const handleToggleAdmin = async (u) => {
    try {
      await api.put(`/users/${u._id}`, {
        isAdmin: !u.isAdmin,
      });
      loadUsers();
    } catch (err) {
      setError('Error al actualizar rol');
    }
  };

  return (
    <div className="page">
      <h2>Panel de usuarios (solo admin)</h2>
      <p>Sesión: {user?.email} {user?.isAdmin ? '(admin)' : ''}</p>

      {error && <p className="error">{error}</p>}

      <section className="panel-section">
        <h3>Crear usuario</h3>
        <form onSubmit={handleCreate} className="form-inline">
          <input
            type="email"
            placeholder="Email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
          <label className="checkbox-inline">
            <input
              type="checkbox"
              checked={newIsAdmin}
              onChange={(e) => setNewIsAdmin(e.target.checked)}
            />
            Es admin
          </label>
          <button type="submit">Crear</button>
        </form>
      </section>

      <section className="panel-section">
        <h3>Listado de usuarios</h3>
        <table className="users-table">
          <thead>
            <tr>
              <th>Email</th>
              <th>Admin</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u._id}>
                <td>{u.email}</td>
                <td>
                  <input
                    type="checkbox"
                    checked={u.isAdmin}
                    onChange={() => handleToggleAdmin(u)}
                  />
                </td>
                <td>
                  <button onClick={() => handleDelete(u._id)}>Borrar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
