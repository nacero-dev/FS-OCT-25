import { useEffect, useState } from 'react';
import { request } from '../services/api';
import PostCard from '../componentes/PostCard';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    request('/posts')
      .then(setPosts)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Cargando posts...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '1rem' }}>
      <h1>Blog</h1>

      {posts.length === 0 && <p>No hay posts todavía</p>}

      {posts.map(post => (
        <PostCard key={post._id} post={post} />
      ))}
    </main>
  );
};

export default Home;
