import "./Ejercicio8.css";

// Array externo (no está dentro del useState)
const usuariosIniciales = [
  { id: 1, nombre: "Ana", edad: 25 },
  { id: 2, nombre: "Luis", edad: 17 },
  { id: 3, nombre: "Carlos", edad: 22 },
  { id: 4, nombre: "Marta", edad: 15 },
];

const Ejercicio8 = () => {
  const usuariosMayores = usuariosIniciales.filter(
    (usuario) => usuario.edad > 18
  );

  const cantidadMayores = usuariosMayores.length;

  return (
    <div className="ej8">
      <h3>Personas mayores de 18</h3>
      <p>Total: {cantidadMayores}</p>
    </div>
  );
};

export default Ejercicio8;

/* 
1) Definición del array
const usuariosIniciales = [...]
Este array está fuera del componente porque no necesita ser parte del estado. Son datos fijos.

2) Filtro
const usuariosMayores = usuariosIniciales.filter(
  (usuario) => usuario.edad > 18
);

3) Conteo
const cantidadMayores = usuariosMayores.length;
.length devuelve cuántos elementos quedaron tras el filtro.




*/