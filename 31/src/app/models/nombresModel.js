import { v4 as uuidv4 } from "uuid";

let nombres = [];

// Obtener todos los nombres
export function getNombres() {
  return nombres;
}

// Agregar un nuevo nombre
export function addNombre(nombre) {
  const nuevo = { id: uuidv4(), nombre };
  nombres.push(nuevo);
  return nuevo;
}

// Actualizar un nombre por id
export function updateNombre(id, nuevoNombre) {
  const index = nombres.findIndex((nombre) => nombre.id === id);
  if (index === -1) return null;

  nombres[index].nombre = nuevoNombre;
  return nombres[index];
}

// Eliminar un nombre por id
export function deleteNombre(id) {
  const index = nombres.findIndex((nombre) => nombre.id === id);
  if (index === -1) return false;

  nombres.splice(index, 1);
  return true;
}
