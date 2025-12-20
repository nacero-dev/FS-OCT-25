const indexController = (req, res) => {
    res.status(200).json({ message: 'Bienvenido a la API de gestión de personas y aulas' });
}

module.exports = indexController;