export default function BlogPost({ params }) {
  const { category, post } = params;

  return (
    <main className="flex flex-col items-center justify-center min-h-screen font-sans">
      <h1 className="text-3xl font-bold mb-4">Ruta anidada</h1>
      <p className="text-lg text-gray-700">
        Categoría: <span className="font-semibold">{category}</span>
      </p>
      <p className="text-lg text-gray-700">
        Post: <span className="font-semibold">{post}</span>
      </p>
    </main>
  );
}
