const API_URL = 'http://localhost:3000/productos';

export async function obtenerProductos() {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error('Error obteniendo productos');
  return res.json();
}

export async function obtenerProducto(id) {
  const res = await fetch(`${API_URL}/${id}`);
  if (!res.ok) throw new Error('Producto no encontrado');
  return res.json();
}

export async function crearProducto(datos) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(datos)
  });
  if (!res.ok) throw new Error('Error creando producto');
  return res.json();
}

export async function actualizarProducto(id, datos) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(datos)
  });
  if (!res.ok) throw new Error('Error actualizando producto');
  return res.json();
}

export async function eliminarProducto(id) {
  const res = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
  if (!res.ok) throw new Error('Error eliminando producto');
  return res.json();
}
