import { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext.jsx';

const Dashboard = () => {
  const { user } = useContext(UserContext);

  if (!user) {
    window.location.href = '/login';
  }

  return (
    <div>
      <h2>Dashboard</h2>
      <p>{user ? `Welcome, ${user.username}` : 'Loading...'}</p>
    </div>
  );
};

export default Dashboard;
