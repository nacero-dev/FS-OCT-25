const express = require('express');
const router = express.Router();
const { listPersonsController, getPersonController, createPersonController, updatePersonController, deletePersonController} = require('../controllers/personsController');

router.get('/', listPersonsController);
router.get('/:id', getPersonController);
router.post('/', createPersonController);
router.put('/:id', updatePersonController);
router.delete('/:id', deletePersonController);

module.exports = router;

/*

Cada router define el mapa:
“si llega un GET /persons → llama a listPersonsController”
Si llega GET /persons/:id → ejecuta getPersonController.
Si llega POST /persons → ejecuta createPersonController.
“si llega un DELETE /persons/:id → llama a deletePersonController”
etc.
Un router es como una “mini tabla de rutas”.



*/