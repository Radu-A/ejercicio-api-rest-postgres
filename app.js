const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT;
const filmsRouter = require('./routes/filmsRoutes');
const error404 = require('./middlewares/error404');
const error500 = require('./middlewares/error500');

app.use('/api/film', filmsRouter);
app.use(error404);
app.use(error500);

app.listen(port, () => {
    console.log(`La fiesta está en: http://localhost:${port}`);
});

