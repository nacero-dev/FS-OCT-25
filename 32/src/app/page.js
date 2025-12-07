import CrudItems from "./componentes/CrudItems";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white text-black p-6">
      <h1 className="text-3xl font-bold mb-4">CRUD con Next.js + MongoDB Atlas</h1>
      <CrudItems />
    </main>
  );
}
