export default async function Post({ params }) {
  const { id } = await params;

  

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Post dinámico</h1>
      <p className="text-lg text-gray-600">Mostrando el post con ID: {id}</p>
    </main>
  );
}
