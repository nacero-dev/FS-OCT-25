export default async function Post({ params }) {
  const { id } = await params;

  

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Post dinámico</h1>
      <p className="text-lg text-gray-600">Mostrando el post con ID: {id}</p>
    </main>
  );
}

/*

Esta página es dinámica.
[id] significa que el valor puede ser cualquier cosa (/posts/1, /posts/abc, etc.).
El valor de id se obtiene de params (propiedades automáticas que Next.js pasa a las páginas dinámicas).
Muestra en pantalla el ID del post actual.


*/