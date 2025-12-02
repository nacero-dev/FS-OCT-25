"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const router = useRouter();
  const [pathname, setPathname] = useState("");

  // Solo se ejecuta en el cliente, evita el error de hidratación
  useEffect(() => {
    if (typeof window !== "undefined") {
      setPathname(window.location.pathname);
    }
  }, [router]);

  return (
    <header className="flex items-center justify-between p-4 bg-gray-100 w-full">
      <nav className="flex gap-4">
        <Link
          href="/"
          className={pathname === "/" ? "font-bold text-blue-600" : ""}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={pathname === "/about" ? "font-bold text-blue-600" : ""}
        >
          About
        </Link>
      </nav>

      <p className="text-gray-600 text-sm">
        Ruta actual:{" "}
        <span className="font-semibold">
          {pathname || "(cargando...)"}
        </span>
      </p>
    </header>
  );
}
