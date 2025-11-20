/* Si en algún punto se lanza una excepción que nadie controla y llamas a next(err), entonces ejecuta el middleware de error internalServerError (500), que responde con JSON estándar de error.*/

const internalServerError = (err, req, res, next) => {
    console.error(err);
    res.status(500).json({
        error: "Internal Server Error",
        message: "Ha ocurrido un error inesperado en el servidor"
    });
};

module.exports = internalServerError;


/*

Middleware de error (tiene 4 parámetros: err, req, res, next).
Solo se ejecuta si alguien hace next(err).
Estándar para capturar errores y no mostrar stack trace al cliente.

*/