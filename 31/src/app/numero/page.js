import { fetchRepo } from "../utils/fetchRepo";

export default async function Numero() {
  const data = await fetchRepo("http://localhost:3000/api/numero");

  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-4 font-sans">
      <h1 className="text-3xl font-bold">Número Aleatorio</h1>
      <p className="text-lg text-gray-700">Valor: {data.numero}</p>
    </main>
  );
}
