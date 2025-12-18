import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageBase64, setImageBase64] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => setImageBase64(reader.result);
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!imageBase64) {
      alert('La imagen es obligatoria');
      return;
    }

    await fetch(`${import.meta.env.VITE_BACKEND_URL}/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({ title, content, imageBase64 }),
    });

    navigate('/');
  };

  return (
    <main style={{ maxWidth: '600px', margin: '0 auto', padding: '1rem' }}>
      <h1>Nueva publicación</h1>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Título"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />

        <textarea
          placeholder="Contenido"
          value={content}
          onChange={e => setContent(e.target.value)}
          required
        />

        <input type="file" accept="image/*" onChange={handleImageChange} required />

        {imageBase64 && (
          <img src={imageBase64} alt="preview" style={{ width: '100%' }} />
        )}

        <button>Crear</button>
      </form>
    </main>
  );
};

export default CreatePost;
