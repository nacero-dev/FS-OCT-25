export async function fetchRepo(url) {
  const res = await fetch(url, { cache: "no-store" }); // sin caché → datos frescos
  if (!res.ok) {
    throw new Error("Error al obtener datos desde la API");
  }
  return res.json();
}
