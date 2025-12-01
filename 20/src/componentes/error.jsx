import { useRouteError, Link } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="bg-white border rounded p-6 max-w-md mx-auto text-center">
      <h1 className="text-lg font-semibold text-red-600 mb-2">
        Ha ocurrido un error
      </h1>

      <p className="text-sm text-gray-700 mb-4">
        {error?.statusText || error?.message || "Error desconocido"}
      </p>

      <Link
        to="/"
        className="inline-block bg-blue-500 text-white text-sm px-3 py-2 rounded"
      >
        Volver al inicio
      </Link>
    </div>
  );
};

export default Error;
