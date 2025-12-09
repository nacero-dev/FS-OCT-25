const logger = (req, res, next) => {
    console.log(`Se ha recibido una pericion de la ip ${req.ip} con el metodo ${req.method} y la url ${req.url}`);
    next();
};

module.exports = logger;