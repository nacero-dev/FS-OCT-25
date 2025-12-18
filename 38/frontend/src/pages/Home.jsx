import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PostCard from '../componentes/PostCard';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/posts`)
      .then(res => res.json())
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando...</p>;

  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '1rem' }}>
      <h1>Blog</h1>

      {posts.length === 0 && <p>No hay publicaciones</p>}

      {posts.map(post => (
        <PostCard key={post._id} post={post} />
      ))}
    </main>
  );
};

export default Home;
