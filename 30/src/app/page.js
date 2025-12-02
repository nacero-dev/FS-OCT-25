"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const irAPost1 = () => {
    router.push("/posts/1");
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-4 font-sans">
      <h1 className="text-3xl font-bold">Página principal</h1>

      <div className="flex flex-col items-center gap-2">
        <p className="text-gray-700">Navega a los posts:</p>
        <Link href="/posts/1" className="text-blue-600 underline">
          Ver Post 1
        </Link>
        <Link href="/posts/2" className="text-blue-600 underline">
          Ver Post 2
        </Link>
        <Link href="/posts/3" className="text-blue-600 underline">
          Ver Post 3
        </Link>
      </div>

      <button
        onClick={irAPost1}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Ir al Post 1 (useRouter)
      </button>
    </main>
  );
}
