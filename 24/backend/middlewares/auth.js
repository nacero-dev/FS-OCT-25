const auth = (req, res, next) => {
    if (req.headers.authorization !== 'Bearer sdkfhgjshdrupywt843yhotgiakenlgjkld') {
        return res.status(401).json({ error: 'No autorizado', message: 'Token inválido o ausente' });
    }
    next();
};

module.exports = auth;

/*
auth.js → revisa req.headers.authorization y compara con un token fijo; si no coincide, responde 403/401.
*/