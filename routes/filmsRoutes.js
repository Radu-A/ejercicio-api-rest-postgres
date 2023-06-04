const express = require('express');
const filmsController = require('../controllers/filmsController');

const filmsRouter = express.Router();

// GET http://http://localhost:3000/api/film/:title
filmsRouter.get('/:title', filmsController.getFilm);

// POST http://http://localhost:3000/api/film/:title
filmsRouter.post('/:title', filmsController.createFilm);

// PUT http://http://localhost:3000/api/film/:title
filmsRouter.put('/:title', filmsController.updateFilm);

// DELETE http://http://localhost:3000/api/film/:title
filmsRouter.delete('/:title', filmsController.deleteFilm);

module.exports = filmsRouter;