export async function GET(request, { params }) {
  const { id } = params;
  return Response.json({ message: `Post ID: ${id}`, method: "GET" });
}

export async function POST(request, { params }) {
  const { id } = params;
  const body = await request.json();
  return Response.json({ id, data: body, method: "POST" });
}

export async function PUT(request, { params }) {
  const { id } = params;
  const body = await request.json();
  return Response.json({ id, data: body, method: "PUT" });
}

export async function DELETE(request, { params }) {
  const { id } = params;
  const body = await request.json();
  return Response.json({ id, data: body, method: "DELETE" });
}
