"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();

  // Solo se ejecuta en el cliente, evita el error de hidratación

  return (
    <header className="flex items-center justify-between p-4 bg-gray-100 w-full">
      <nav className="flex gap-4">
        <Link
          href="/"
          className={pathname === "/" ? "font-bold text-blue-600" : "text-blue-500"}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={pathname === "/about" ? "font-bold text-blue-600" : "text-blue-500"}
        >
          About
        </Link>
      </nav>

      <p className="text-gray-600 text-sm">
        Ruta actual:
        <span className="font-semibold">
          {pathname || "(cargando...)"}
        </span>
      </p>
    </header>
  );
}
