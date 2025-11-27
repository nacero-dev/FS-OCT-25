const Producto = require('../models/productoModel');

// GET /productos
const listarProductos = async (req, res, next) => {
  try {
    const { nombre, categoria } = req.query;
    const filtro = {};

    if (nombre) {
      filtro.nombre = { $regex: nombre, $options: 'i' };
    }

    if (categoria) {
      filtro.categoria = { $regex: categoria, $options: 'i' };
    }

    const productos = await Producto.find(filtro).sort({ fechaCreacion: -1 });
    res.status(200).json(productos);
  } catch (err) {
    next(err);
  }
};

// GET /productos/:id
const obtenerProducto = async (req, res, next) => {
  try {
    const producto = await Producto.findById(req.params.id);

    if (!producto) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }

    res.status(200).json(producto);
  } catch (err) {
    next(err);
  }
};

// POST /productos
const crearProducto = async (req, res, next) => {
  try {
    const { nombre, descripcion, precio, stock, categoria } = req.body;

    if (
      !nombre ||
      !descripcion ||
      (precio === undefined || precio === null) ||
      (stock === undefined || stock === null) ||
      !categoria
    ) {
      return res.status(400).json({ error: 'Faltan campos obligatorios' });
    }

    const nuevoProducto = new Producto({
      nombre,
      descripcion,
      precio,
      stock,
      categoria
    });

    const productoGuardado = await nuevoProducto.save();
    res.status(201).json(productoGuardado);
  } catch (err) {
    next(err);
  }
};

// PUT /productos/:id
const actualizarProducto = async (req, res, next) => {
  try {
    const { nombre, descripcion, precio, stock, categoria } = req.body;

    const productoActualizado = await Producto.findByIdAndUpdate(
      req.params.id,
      { nombre, descripcion, precio, stock, categoria },
      { new: true, runValidators: true }
    );

    if (!productoActualizado) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }

    res.status(200).json(productoActualizado);
  } catch (err) {
    next(err);
  }
};

// DELETE /productos/:id
const eliminarProducto = async (req, res, next) => {
  try {
    const productoEliminado = await Producto.findByIdAndDelete(req.params.id);

    if (!productoEliminado) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }

    res.json({ mensaje: 'Producto eliminado correctamente' });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  listarProductos,
  obtenerProducto,
  crearProducto,
  actualizarProducto,
  eliminarProducto
};
