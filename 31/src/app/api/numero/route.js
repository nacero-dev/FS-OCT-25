// src/app/api/numero/route.js

export async function GET() {
  const numero = Math.random();
  return Response.json({ numero });
}
