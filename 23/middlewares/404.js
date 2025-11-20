const notFound = (req, res, next) => {
    res.status(404).json({
        error: "Not Found",
        message: `La ruta ${req.originalUrl} no existe`
    });
};

module.exports = notFound;


/*

Se ejecuta cuando ninguna ruta ha respondido.
No llama a next() → corta la cadena.

*/