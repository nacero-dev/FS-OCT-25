import { useState } from "react";
import "./EjercicioFiltrarCategorias.css";

// Array externo
const productosIniciales = [
  { id: 1, nombre: "Laptop", categoria: "Electrónica" },
  { id: 2, nombre: "Camiseta", categoria: "Ropa" },
  { id: 3, nombre: "Celular", categoria: "Electrónica" },
  { id: 4, nombre: "Zapatos", categoria: "Ropa" },
  { id: 5, nombre: "Audífonos", categoria: "Electrónica" },
];

const EjercicioFiltrarCategorias = () => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");

  const productosFiltrados = productosIniciales.filter((producto) => {
    if (categoriaSeleccionada === "") return true;
    return producto.categoria === categoriaSeleccionada;
  });

  return (
    <div className="ej-cat">
      <h3>Filtrar productos por categoría</h3>

      <select
        value={categoriaSeleccionada}
        onChange={(e) => setCategoriaSeleccionada(e.target.value)}
      >
        <option value="">Todas</option>
        <option value="Electrónica">Electrónica</option>
        <option value="Ropa">Ropa</option>
      </select>

      <ul>
        {productosFiltrados.map((producto) => (
          <li key={producto.id}>
            {producto.nombre} - {producto.categoria}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EjercicioFiltrarCategorias;

/* Paso a Paso
1) Array externo
const productosIniciales = [...]
Datos fijos que no cambian. No forman parte del estado.


2) Estado para la categoría seleccionada
const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");
Cadena vacía significa “todas las categorías”.
Se actualiza cuando el usuario elige una opción del <select>.

3) El usuario selecciona una categoría
<select
  value={categoriaSeleccionada}
  onChange={(e) => setCategoriaSeleccionada(e.target.value)}
>
Cada cambio ejecuta setCategoriaSeleccionada.

Ejemplos del valor:
"" → todas
"Electrónica"
"Ropa"

4) Filtro
const productosFiltrados = productosIniciales.filter((producto) => {
  if (categoriaSeleccionada === "") return true;
  return producto.categoria === categoriaSeleccionada;
});

✅ Caso 1: la categoría seleccionada es "" (vacía)
Esto significa:

“Quiero ver todas las categorías”.

Entonces, en el filtro:

if (categoriaSeleccionada === "") return true;


✔ Como la categoría es "", esta condición se cumple.
✔ Entonces el filtro devuelve true para TODOS los productos.
✔ Producto por producto, React va diciendo:

Laptop → true → se queda

Camiseta → true → se queda

Celular → true → se queda

Zapatos → true → se queda

Audífonos → true → se queda

✅ Nada se elimina.
✅ Todos aparecen en pantalla.

✅ Caso 2: la categoría seleccionada NO es ""


Ejemplo:

categoriaSeleccionada = "Ropa"


Entonces el filtro usa esta línea:

return producto.categoria === categoriaSeleccionada;


Y compara producto por producto:

✅ Laptop

"Electrónica" === "Ropa" → false
❌ No aparece en pantalla

✅ Camiseta

"Ropa" === "Ropa" → true
✅ Aparece

✅ Celular

"Electrónica" === "Ropa" → false
❌ No aparece

✅ Zapatos

"Ropa" === "Ropa" → true
✅ Aparece

✅ Audífonos

"Electrónica" === "Ropa" → false
❌ No aparece

✅ El nuevo array contiene SOLO los productos con categoría “Ropa”.


5) Renderizado de los productos filtrados
<ul>
  {productosFiltrados.map((producto) => (
    <li key={producto.id}>
      {producto.nombre} - {producto.categoria}
    </li>
  ))}
</ul>

*/