import { useState, useEffect } from 'react';
import './App.css';
import ListaProductos from './componentes/lista-productos.jsx';
import FormularioNuevoProducto from './componentes/formulario-nuevo-producto.jsx';
import FormularioEditarProducto from './componentes/formulario-editar-producto.jsx';
import { obtenerProductos, eliminarProducto, actualizarProducto, crearProducto } from './componentes/api-productos.js';

function App() {
  const [productos, setProductos] = useState([]);
  const [productoEditando, setProductoEditando] = useState(null);
  const [error, setError] = useState('');

  const cargarProductos = async () => {
    try {
      const data = await obtenerProductos();
      setProductos(data);
    } catch (err) {
      setError('Error al cargar los productos');
    }
  };

  useEffect(() => {
    cargarProductos();
  }, []);

  const handleAgregar = async (nuevoProducto) => {
    try {
      await crearProducto(nuevoProducto);
      cargarProductos();
    } catch (err) {
      setError('Error al agregar el producto');
    }
  };

  const handleEditar = (producto) => {
    setProductoEditando(producto);
  };

  const handleActualizar = async (id, datosActualizados) => {
    try {
      await actualizarProducto(id, datosActualizados);
      setProductoEditando(null);
      cargarProductos();
    } catch (err) {
      setError('Error al actualizar el producto');
    }
  };

  const handleEliminar = async (id) => {
    if (!confirm('¿Seguro que deseas eliminar este producto?')) return;
    try {
      await eliminarProducto(id);
      cargarProductos();
    } catch (err) {
      setError('Error al eliminar el producto');
    }
  };

  return (
    <div className="app">
      <h1>Gestión de Productos</h1>

      {error && <p className="error">{error}</p>}

      {productoEditando ? (
        <FormularioEditarProducto
          producto={productoEditando}
          onActualizar={handleActualizar}
          onCancelar={() => setProductoEditando(null)}
        />
      ) : (
        <FormularioNuevoProducto onAgregar={handleAgregar} />
      )}

      <ListaProductos
        productos={productos}
        onEditar={handleEditar}
        onEliminar={handleEliminar}
      />
    </div>
  );
}

export default App;

