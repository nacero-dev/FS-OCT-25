import "./globals.css";

export const metadata = {
  title: "Ejercicio API Routes",
  description: "Next.js con fetchRepo y API Routes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="font-sans">{children}</body>
    </html>
  );
}
