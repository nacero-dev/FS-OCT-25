import Link from "next/link";

export default function About() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Acerca de esta página</h1>
      <Link href="/" className="text-blue-600 underline">
        Volver al inicio
      </Link>
    </main>
  );
}

/*

ℹ️ About (about/page.js)
Es una página estática con un simple texto “Acerca de esta página”.
Tiene un <Link> para volver al Home.
👉 Concepto: rutas estáticas simples en Next.js (sin parámetros).

*/