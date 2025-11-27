import { useState } from 'react';

function FormularioNuevoProducto({ onAgregar }) {
  const [form, setForm] = useState({
    nombre: '',
    descripcion: '',
    precio: '',
    stock: '',
    categoria: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.nombre.trim()) return setError('El nombre es obligatorio');
    if (!form.descripcion.trim()) return setError('La descripción es obligatoria');
    if (!form.categoria.trim()) return setError('La categoría es obligatoria');

    const precio = Number(form.precio);
    const stock = Number(form.stock);
    if (isNaN(precio) || precio < 0) return setError('Precio inválido');
    if (!Number.isInteger(stock) || stock < 0) return setError('Stock inválido');

    onAgregar({
      nombre: form.nombre,
      descripcion: form.descripcion,
      precio,
      stock,
      categoria: form.categoria
    });

    setForm({
      nombre: '',
      descripcion: '',
      precio: '',
      stock: '',
      categoria: ''
    });
    setError('');
  };

  return (
    <section>
      <h2>Agregar producto</h2>
      {error && <p className="error">{error}</p>}

      <form className="formulario" onSubmit={handleSubmit}>
        <input name="nombre" placeholder="Nombre" value={form.nombre} onChange={handleChange} />
        <input name="descripcion" placeholder="Descripción" value={form.descripcion} onChange={handleChange} />
        <input name="precio" type="number" placeholder="Precio" value={form.precio} onChange={handleChange} />
        <input name="stock" type="number" placeholder="Stock" value={form.stock} onChange={handleChange} />
        <input name="categoria" placeholder="Categoría" value={form.categoria} onChange={handleChange} />
        <button type="submit">Agregar producto</button>
      </form>
    </section>
  );
}

export default FormularioNuevoProducto;
