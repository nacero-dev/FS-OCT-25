function MostrarProducto({ producto }) {
  return (
    <section>
      <h2>Detalle del producto</h2>
      <p><strong>Nombre:</strong> {producto.nombre}</p>
      <p><strong>Descripción:</strong> {producto.descripcion}</p>
      <p><strong>Precio:</strong> {producto.precio} €</p>
      <p><strong>Stock:</strong> {producto.stock}</p>
      <p><strong>Categoría:</strong> {producto.categoria}</p>
      <p><strong>Fecha de creación:</strong> {new Date(producto.fechaCreacion).toLocaleString()}</p>
    </section>
  );
}

export default MostrarProducto;
