// Módulos y configuración
const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT;
// Mis módulos
const filmsRouter = require('./routes/filmsRoutes');
// Errores
const error404 = require('./middlewares/error404');
const error500 = require('./middlewares/error500');
// Uso
app.use('/api/film', filmsRouter);
app.use(error404);
app.use(error500);
// Mensaje
app.listen(port, () => {
    console.log(`La fiesta está en: http://localhost:${port}`);
});

