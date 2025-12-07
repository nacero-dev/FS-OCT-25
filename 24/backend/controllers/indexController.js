const indexController = (req, res) => {
    res.status(200).json({ message: 'Bienvenido a la API de gestion de aulas' });
}

module.exports = indexController;