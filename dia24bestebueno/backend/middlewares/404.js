const notFound = (req, res, next) => {
    res.status(404);
    return res.json({ error: "Not Found", message: `La ruta ${req.originalUrl} no existe` });
};

module.exports = notFound;

/*

404.js → se ejecuta al final, si ninguna ruta respondió; devuelve JSON con error “Not Found”.

*/