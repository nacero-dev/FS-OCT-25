import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError(); 
  /* aqui se recupera el error que ocurrió en la ruta
  Esto es reactivo:
  React Router detecta el error → monta este componente → useRouteError devuelve ese error.
  */

  return (
    <div>
      <h2>Ocurrió un error</h2>
      <p>{error.statusText || error.message}</p>
    </div>
  );
}


/*

useRouterError es un hook especial de React Router
Su función es: “Devolver el error que ocurrió en la ruta actual.”

Ese error puede venir de tres lugares:
De un loader que falló (throw dentro del loader)
De una action que falló
De un error al renderizar el componente de la ruta

Es decir:

El error ocurre en la ruta
React Router lo detecta
En vez de renderizar el componente normal…
Renderiza errorElement
Y dentro de errorElement, useRouteError() devuelve ese error

¿De dónde viene el error?
if (!res.ok) {
  throw new Response("No se pudo cargar el post", { status: res.status });
}

Lo que ocurre internamente:

El loader ejecuta la petición a la API
La respuesta falla (res.ok === false)
Hace throw new Response(...)
React Router interrumpe el proceso y NO renderiza el componente Post
Busca si esa ruta tiene un errorElement
Renderiza ese componente
Ese componente usa useRouteError() para obtener lo que se lanzó

¿Qué devuelve exactamente useRouteError()?
Si lanzaste un Response, como tú hiciste:
throw new Response("No se pudo cargar el post", { status: 404 });

Entonces error será un objeto parecido a:
{
  status: 404,
  statusText: "Not Found",
  message: "No se pudo cargar el post"
}

Importante:

statusText → viene de lo que el servidor devuelve o de lo que indica Response
message → viene del texto que tú pusiste

Por eso el código hace:
<p>{error.statusText || error.message}</p>

statusText: Si el error tiene un statusText (“Not Found”, “Internal Server Error”) se usa ese
message: Si no, usa el mensaje personalizado que tiraste con el throw del loader

Flujo completo resumido:

URL:
/post/9999

Loader:
Hace fetch → falla → hace:
throw new Response("No se pudo cargar el post", { status: 404 });

Router:
Detecta el error → NO renderiza <Post /> → Renderiza <ErrorPage />

ErrorPage:
const error = useRouteError();
→ devuelve el error que se lanzó

Pantalla final:



*/