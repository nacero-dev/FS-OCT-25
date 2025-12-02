import "./globals.css";
import Header from "../componentes/Header";

export const metadata = {
  title: "Mi Proyecto Next.js",
  description: "Ejercicio con Header y rutas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="font-sans">
        <Header />
        {children}
      </body>
    </html>
  );
}
