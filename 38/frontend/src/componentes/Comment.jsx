import { useState } from 'react';
import { request } from '../services/api';
import { useAuth } from '../context/AuthContext';

const Comment = ({ comment, onRefresh }) => {
  const { user } = useAuth();

  const isOwner =
    user &&
    comment.author &&
    user._id === comment.author._id;

  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(comment.text);
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      '¿Seguro que quieres borrar este comentario?'
    );
    if (!confirmDelete) return;

    try {
      await request(`/comments/${comment._id}`, {
        method: 'DELETE',
      });
      onRefresh();
    } catch (err) {
      alert(err.message);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    setLoading(true);
    try {
      await request(`/comments/${comment._id}`, {
        method: 'PUT',
        body: JSON.stringify({ text }),
      });
      setEditing(false);
      onRefresh();
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ borderTop: '1px solid #ccc', padding: '0.5rem 0' }}>
      {!editing ? (
        <>
          <p>{comment.text}</p>
          <small>
            Autor: {comment.author?.username || 'Anónimo'}
          </small>

          {isOwner && (
            <div>
              <button onClick={() => setEditing(true)}>
                Editar
              </button>
              <button onClick={handleDelete}>
                Borrar
              </button>
            </div>
          )}
        </>
      ) : (
        <form onSubmit={handleUpdate}>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            disabled={loading}
            required
          />
          <button type="submit" disabled={loading}>
            Guardar
          </button>
          <button
            type="button"
            onClick={() => {
              setText(comment.text);
              setEditing(false);
            }}
            disabled={loading}
          >
            Cancelar
          </button>
        </form>
      )}
    </div>
  );
};

export default Comment;
