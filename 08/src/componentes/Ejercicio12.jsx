import { useState } from "react";
import "./EjercicioFiltrarEmpleados.css";

// Array externo
const empleadosIniciales = [
  { id: 1, nombre: "Ana", apellido: "Mesa", salario: 2500 },
  { id: 2, nombre: "Luis", apellido: "Garcia", salario: 1800 },
  { id: 3, nombre: "Carlos", apellido: "Perez", salario: 3200 },
  { id: 4, nombre: "Marta", apellido: "Gutierrez", salario: 2800 },
  { id: 5, nombre: "Pedro", apellido: "Almedaba", salario: 1500 },
];

const EjercicioFiltrarEmpleados = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [salarioMinimo, setSalarioMinimo] = useState("");

  const empleadosFiltrados = empleadosIniciales.filter((empleado) => {
    const coincideNombre =
      nombre.trim() === "" ||
      empleado.nombre.toLowerCase().includes(nombre.toLowerCase());

    const coincideApellido =
      apellido.trim() === "" ||
      empleado.apellido.toLowerCase().includes(apellido.toLowerCase());

    const coincideSalario =
      salarioMinimo === "" || empleado.salario > Number(salarioMinimo);

    return coincideNombre && coincideApellido && coincideSalario;
  });

  return (
    <div className="ej-empleados">
      <h3>Filtrar empleados</h3>

      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />

      <input
        type="text"
        placeholder="Apellido"
        value={apellido}
        onChange={(e) => setApellido(e.target.value)}
      />

      <input
        type="number"
        placeholder="Salario mayor a..."
        value={salarioMinimo}
        onChange={(e) => setSalarioMinimo(e.target.value)}
      />

      <ul>
        {empleadosFiltrados.map((empleado) => (
          <li key={empleado.id}>
            {empleado.nombre} {empleado.apellido} - ${empleado.salario}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EjercicioFiltrarEmpleados;


/* 

Paso a Paso

✅ 1) Array externo

const empleadosIniciales = [...]
Son datos fijos que no cambian mientras el ejercicio se ejecuta.
No se guardan en el estado porque no necesitamos modificarlos.

✅ 2) Tres estados independientes

const [nombre, setNombre] = useState("");
const [apellido, setApellido] = useState("");
const [salarioMinimo, setSalarioMinimo] = useState("");

Cada uno:

Es un input controlado
Guarda el valor que el usuario escribe
Provoca que el filtro se actualice automáticamente

✅ 3) Inputs controlados
<input
  value={nombre}
  onChange={(e) => setNombre(e.target.value)}
/>
✅ Lo que escribes se guarda en nombre.
Igual para apellido y salario.

✅ 4) Filtro combinado
const empleadosFiltrados = empleadosIniciales.filter((empleado) => {
El .filter() revisa cada empleado y evalúa 3 condiciones.

✅ 5) Condición 1 → Filtrar por nombre
const coincideNombre =
  nombre.trim() === "" ||
  empleado.nombre.toLowerCase().includes(nombre.toLowerCase());

Si el input está vacío → no se filtra por nombre
Si tiene texto → compara “incluye” sin importar mayúsculas

Ejemplo:
Usuario escribe “an” → coinciden: Ana, Marta (porque contiene “aranta”? No, solo Ana. Era ejemplo muy forzado, queda solo Ana.)


✅ 6) Condición 2 → Filtrar por apellido
const coincideApellido =
  apellido.trim() === "" ||
  empleado.apellido.toLowerCase().includes(apellido.toLowerCase());


Igual que el nombre, pero con apellido.

7) Condición 3 → Filtrar por salario
const coincideSalario =
  salarioMinimo === "" || empleado.salario > Number(salarioMinimo);


Si el input está vacío → se permiten todos

Si el usuario pone un número → solo se quedan los empleados con salario mayor

Ejemplo:
Usuario escribe 2000:

Ana 2500 → ✅
Luis 1800 → ❌
Carlos 3200 → ✅
Marta 2800 → ✅
Pedro 1500 → ❌



*/