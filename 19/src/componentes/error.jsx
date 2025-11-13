import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div>
      <h2>Ocurrió un error</h2>
      <p>{error.statusText || error.message}</p>
    </div>
  );
}
