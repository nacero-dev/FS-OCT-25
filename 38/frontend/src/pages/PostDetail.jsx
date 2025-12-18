import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Comment from '../componentes/Comment';
import { useAuth } from '../context/AuthContext';

const PostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [newComment, setNewComment] = useState('');

  const loadPost = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/posts`);
      const posts = await res.json();
      const found = posts.find(p => p._id === id);
      setPost(found || null);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPost();
  }, [id]);

  const handleCreateComment = async (e) => {
    e.preventDefault();
    if (!user || !newComment.trim()) return;

    await fetch(`${import.meta.env.VITE_BACKEND_URL}/comments/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({ text: newComment }),
    });

    setNewComment('');
    loadPost();
  };

  const handleDeletePost = async () => {
    const confirmDelete = window.confirm('¿Borrar post?');
    if (!confirmDelete) return;

    await fetch(`${import.meta.env.VITE_BACKEND_URL}/posts/${post._id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });

    navigate('/');
  };

  if (loading) return <p>Cargando...</p>;
  if (!post) return <p>Post no encontrado</p>;

  const isOwner = user && user._id === post.author?._id;

  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '1rem' }}>
      <h1>{post.title}</h1>

      <img
        src={post.imageBase64}
        alt={post.title}
        style={{ width: '100%', maxHeight: '400px', objectFit: 'contain' }}
      />

      <p>{post.content}</p>
      <small>Autor: {post.author?.username}</small>

      {isOwner && (
        <button onClick={handleDeletePost}>Borrar post</button>
      )}

      <hr />

      <h2>Comentarios</h2>

      {post.comments.map(c => (
        <Comment key={c._id} comment={c} onRefresh={loadPost} />
      ))}

      {user && (
        <form onSubmit={handleCreateComment}>
          <input
            value={newComment}
            onChange={e => setNewComment(e.target.value)}
            placeholder="Nuevo comentario"
            required
          />
          <button>Enviar</button>
        </form>
      )}
    </main>
  );
};

export default PostDetail;
