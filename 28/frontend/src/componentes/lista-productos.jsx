function ListaProductos({ productos, onEditar, onEliminar }) {
  return (
    <section>
      <h2>Lista de productos</h2>
      {productos.length === 0 ? (
        <p>No hay productos aún.</p>
      ) : (
        <ul className="lista-productos">
          {productos.map((p) => (
            <li key={p._id} className="tarjeta-producto">
              <strong>{p.nombre}</strong> — {p.precio} € ({p.stock} unidades)
              <br />
              <em>{p.categoria}</em>
              <div className="acciones">
                <button onClick={() => onEditar(p)}>Editar</button>
                <button onClick={() => onEliminar(p._id)}>Eliminar</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default ListaProductos;
