import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout/Layout.jsx';
import Home from '../components/Home.jsx';
import Register from '../components/Register.jsx';
import Login from '../components/Login.jsx';
import Dashboard from '../components/Dashboard.jsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'register', element: <Register /> },
      { path: 'login', element: <Login /> },
      { path: 'dashboard', element: <Dashboard /> },
    ],
  },
]);
