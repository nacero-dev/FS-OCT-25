import { fetchRepo } from "./utils/fetchRepo";
import CrudNombres from "./componentes/CrudNombres";

export default async function Home() {
  const [saludo, numero] = await Promise.all([
    fetchRepo("http://localhost:3000/api/saludo"),
    fetchRepo("http://localhost:3000/api/numero"),
  ]);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-6 font-sans bg-white text-black p-6">
      <h1 className="text-3xl font-bold">Consumo de múltiples APIs y CRUD</h1>

      <div className="p-4 border border-gray-300 rounded-md">
        <h2 className="text-xl font-semibold">Mensaje desde la API:</h2>
        <p className="text-lg">{saludo.mensaje}</p>
      </div>

      <div className="p-4 border border-gray-300 rounded-md">
        <h2 className="text-xl font-semibold">Número aleatorio:</h2>
        <p className="text-lg">{numero.numero}</p>
      </div>

      {/* CRUD */}
      <CrudNombres />
    </main>
  );
}
