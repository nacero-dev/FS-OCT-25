const notFound = (req, res, next) => {
    res.status(404);
    return res.json({ error: "Ruta no encontrada", message: `La ruta ${req.originalUrl} no existe` });
};

module.exports = notFound;