// src/routers/routers.jsx
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout/Layout.jsx';
import Home from '../components/Home.jsx';
import Register from "../components/Register.jsx";


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true, // ruta principal "/"
        element: <Home />,
      },
      {
        path: 'register', // será "/register" porque es hijo de "/"
        element: <Register />,
      },
       {
        path: 'login', // será "/login" porque es hijo de "/"
        element: <Login />,
      },
      {
        path: 'dashboard', // será "/login" porque es hijo de "/"
        element: <Dashboard />,
      },
    ],
  },
]);
