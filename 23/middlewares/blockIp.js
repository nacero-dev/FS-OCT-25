// 2.3 si req.ip === "192.168.1.100" responde 403 Forbidden y se corta la cadena.

const blockIp = (req, res, next) => {
    const blocked = "192.168.1.100";

    if (req.ip === blocked) {
        return res.status(403).json({
            error: "Forbidden",
            message: "Acceso denegado desde esta IP"
        });
    }

    next();
};

module.exports = blockIp;


/*

Si la IP del cliente coincide con la bloqueada → responde 403.
Si no, next().
Ejemplo de seguridad a nivel de red (aunque aquí es solo demostración).

*/