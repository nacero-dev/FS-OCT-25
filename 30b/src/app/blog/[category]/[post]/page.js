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

/*

🧭 Blog anidado
Es una ruta anidada: primero hay una categoría, luego un post dentro de ella.
Next.js pasa ambos parámetros (category y post) a través de params.
Muestra ambos valores en pantalla.
👉 Concepto: rutas dinámicas anidadas, para simular estructuras más complejas (como /blog/tecnologia/react).

*/