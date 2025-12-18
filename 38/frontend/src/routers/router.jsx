import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import PostDetail from './pages/PostDetail';
import CreatePost from './pages/CreatePost';
import ProtectedRoute from './componentes/ProtectedRoute';

const Router = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />

    <Route
      path="/create"
      element={
        <ProtectedRoute>
          <CreatePost />
        </ProtectedRoute>
      }
    />

    <Route path="/posts/:id" element={<PostDetail />} />
  </Routes>
);

export default Router;
