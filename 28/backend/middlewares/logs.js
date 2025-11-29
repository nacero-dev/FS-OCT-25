const logger = (req, res, next) => {
  console.log(
    `Petición ${req.method} ${req.url} desde ${req.ip}`
  );
  next();
};

module.exports = logger;
