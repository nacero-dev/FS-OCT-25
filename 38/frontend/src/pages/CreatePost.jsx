import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { request } from '../services/api';

const CreatePost = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageBase64, setImageBase64] = useState('');
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) {
      setImageBase64('');
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setImageBase64(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // VALIDACIÓN FRONTEND (REQUISITO)
    if (!imageBase64) {
      alert('La imagen es obligatoria');
      return;
    }

    setLoading(true);

    try {
      await request('/posts', {
        method: 'POST',
        body: JSON.stringify({
          title,
          content,
          imageBase64,
        }),
      });

      navigate('/');
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main style={{ maxWidth: '600px', margin: '0 auto', padding: '1rem' }}>
      <h1>Crear publicación</h1>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <textarea
          placeholder="Contenido"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />

        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          required
        />

        {imageBase64 && (
          <img
            src={imageBase64}
            alt="Preview"
            style={{ width: '100%', marginTop: '1rem' }}
          />
        )}

        <button type="submit" disabled={loading}>
          {loading ? 'Creando...' : 'Crear post'}
        </button>
      </form>
    </main>
  );
};

export default CreatePost;
