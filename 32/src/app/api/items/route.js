import { connectDB } from "@/app/lib/mongodb";
import Item from "@/app/models/itemSchema";

function handleError(error, message = "Error en el servidor", status = 500) {
  console.error("X", error);
  return Response.json({ error: message }, { status });
}

// GET - listar
export async function GET() {
  try {
    await connectDB();
    const items = await Item.find();
    return Response.json({ items });
  } catch (error) {
    return handleError(error, "Error al obtener los items");
  }
}

// POST - crear con validación
export async function POST(request) {
  try {
    await connectDB();
    const { nombre } = await request.json();

    if (!nombre || nombre.trim().length < 2) {
      return Response.json(
        { error: "El campo 'nombre' es obligatorio y debe tener al menos 2 caracteres" },
        { status: 400 }
      );
    }

    const nuevo = await Item.create({ nombre });
    return Response.json({ creado: true, item: nuevo });
  } catch (error) {
    return handleError(error, "Error al crear el item");
  }
}

// PUT - actualizar con validación
export async function PUT(request) {
  try {
    await connectDB();
    const { id, nuevoNombre } = await request.json();

    if (!id || !nuevoNombre) {
      return Response.json({ error: "Faltan campos obligatorios" }, { status: 400 });
    }

    const actualizado = await Item.findByIdAndUpdate(
      id,
      { nombre: nuevoNombre },
      { new: true }
    );

    if (!actualizado)
      return Response.json({ error: "Item no encontrado" }, { status: 404 });

    return Response.json({ actualizado: true, item: actualizado });
  } catch (error) {
    return handleError(error, "Error al actualizar el item");
  }
}

//  DELETE - eliminar con validación
export async function DELETE(request) {
  try {
    await connectDB();
    const { id } = await request.json();

    if (!id)
      return Response.json({ error: "Debe indicar un ID para eliminar" }, { status: 400 });

    const eliminado = await Item.findByIdAndDelete(id);

    if (!eliminado)
      return Response.json({ error: "Item no encontrado" }, { status: 404 });

    return Response.json({ eliminado: true });
  } catch (error) {
    return handleError(error, "Error al eliminar el item");
  }
}
