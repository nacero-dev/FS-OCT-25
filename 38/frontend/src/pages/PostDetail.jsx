import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { request } from '../services/api';
import Comment from '../componentes/Comment';
import { useAuth } from '../context/AuthContext';

const PostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  const [newComment, setNewComment] = useState('');
  const [sending, setSending] = useState(false);

  const loadPost = async () => {
    setLoading(true);
    try {
      const posts = await request('/posts');
      const found = posts.find((p) => p._id === id);
      setPost(found || null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const handleCreateComment = async (e) => {
    e.preventDefault();
    if (!user) return;

    const text = newComment.trim();
    if (!text) return;

    setSending(true);
    try {
      await request(`/comments/${id}`, {
        method: 'POST',
        body: JSON.stringify({ text }),
      });
      setNewComment('');
      await loadPost();
    } catch (err) {
      alert(err.message);
    } finally {
      setSending(false);
    }
  };

  const isOwner =
    user && post?.author && user._id === post.author._id;

  const handleDeletePost = async () => {
    const confirmDelete = window.confirm(
      '¿Seguro que quieres borrar este post?'
    );
    if (!confirmDelete) return;

    try {
      await request(`/posts/${post._id}`, {
        method: 'DELETE',
      });
      navigate('/');
    } catch (err) {
      alert(err.message);
    }
  };

  if (loading) return <p>Cargando...</p>;
  if (!post) return <p>Post no encontrado</p>;

  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '1rem' }}>
      <h1>{post.title}</h1>

      {post.imageBase64 && (
        <img
          src={post.imageBase64}
          alt={post.title}
          style={{ width: '100%', maxHeight: '400px', objectFit: 'contain' }}
        />
      )}

      <p>{post.content}</p>
      <small>Autor: {post.author?.username}</small>

      {isOwner && (
        <div>
          <button onClick={handleDeletePost}>
            Borrar post
          </button>
        </div>
      )}

      <hr />

      <h2>Comentarios</h2>

      {post.comments?.length ? (
        post.comments.map((comment) => (
          <Comment
            key={comment._id}
            comment={comment}
            onRefresh={loadPost}
          />
        ))
      ) : (
        <p>No hay comentarios todavía.</p>
      )}

      {user && (
        <>
          <h3>Nuevo comentario</h3>
          <form onSubmit={handleCreateComment}>
            <input
              placeholder="Escribe tu comentario..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              disabled={sending}
              required
            />
            <button type="submit" disabled={sending}>
              {sending ? 'Enviando...' : 'Enviar'}
            </button>
          </form>
        </>
      )}
    </main>
  );
};

export default PostDetail;

