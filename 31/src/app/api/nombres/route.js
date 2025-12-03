import {
  getNombres,
  addNombre,
  updateNombre,
  deleteNombre,
} from "@/app/models/nombresModel";

// ✅ GET: devuelve la lista de nombres
export async function GET() {
  const nombres = getNombres();
  return Response.json({ nombres });
}

// ✅ POST: añade un nuevo nombre
export async function POST(request) {
  const data = await request.json();
  const { nombre } = data;

  if (!nombre) {
    return Response.json({ error: "Falta el campo nombre" }, { status: 400 });
  }

  const nuevo = addNombre(nombre);
  return Response.json({ recibido: true, nombre: nuevo });
}

// ✅ PUT: actualiza un nombre existente
export async function PUT(request) {
  const data = await request.json();
  const { id, nuevoNombre } = data;

  const actualizado = updateNombre(id, nuevoNombre);
  if (!actualizado) {
    return Response.json({ error: "Nombre no encontrado" }, { status: 404 });
  }

  return Response.json({ actualizado: true, nombre: actualizado });
}

// ✅ DELETE: elimina un nombre por id
export async function DELETE(request) {
  const data = await request.json();
  const { id } = data;

  const eliminado = deleteNombre(id);
  if (!eliminado) {
    return Response.json({ error: "Nombre no encontrado" }, { status: 404 });
  }

  return Response.json({ eliminado: true, id });
}
