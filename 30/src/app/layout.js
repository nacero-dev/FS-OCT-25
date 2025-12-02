import "./globals.css";

export const metadata = {
  title: "Navegación en Next.js",
  description: "Ejercicio con Link",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="font-sans bg-gray-50 text-center">
        {children}
      </body>
    </html>
  );
}
