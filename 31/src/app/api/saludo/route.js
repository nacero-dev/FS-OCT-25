// src/app/api/saludo/route.js

export async function GET() {
  return Response.json({ mensaje: "Hola desde la API" });
}
