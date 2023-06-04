const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT;
const entry = require('./models/entries');

const filmsRouter = require('./routes/filmsRoutes');
const entries = require('./models/entries');

const error404 = require('./middlewares/error404');
const error500 = require('./middlewares/error500');


// Pruebas, por mover
app.get('/api/entries', async (req, res) => {
    let entries = await entry.getAllEntries();
    res.status(200).json(entries);
})
app.get('/api/entries/:email', async (req, res) => {
    let entries = await entry.getEntriesByEmail(req.query.email);
    res.status(200).json(entries);
})
app.post('/api/entries', async (req, res) => {
    req.body = {
            title:"noticia desde Node",
            content:"va a triunfar esto",
            email:"alejandru@thebridgeschool.es",
            category:"sucesos"
        }
    const newEntry = req.body;
    let entries = await entry.createEntry(newEntry);
    res.status(200).json(entries);
})

app.use('/api/film', filmsRouter);
app.use(error404);
app.use(error500);

app.listen(port, () => {
    console.log(`La fiesta está en: http://localhost:${port}`);
});

