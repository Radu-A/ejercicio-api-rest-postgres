const endPoints = require('../utils/endpoints');
require('dotenv').config();

// Crear película
const getFilm = async (req, res) => {
    try {
        let film = await endPoints.getFetch(req.params.title, process.env.API_KEY);
        res.status(200).json({
            'Título': film.Title,
            'Director': film.Director,
            'Actores': film.Actors,
            'Sinópsis': film.Plot,
            'Premios': film.Awards,
            'Póster': film.Poster
        });
        console.log(film);
    } catch (error) {
        console.log(`ERROR: ${error.stack}`);
    }
}

const createFilm = async (req, res) => {
    req.body = {
        "Title": `${req.params.title}`,
        "Year": "2023",
        "Rated": "PG-13",
        "Released": "03 Jun 2023",
        "Runtime": "194 min",
        "Genre": "Drama, Romance",
        "Director": "Vitorino",
        "Writer": "Vitorino",
        "Actors": "Leonardo DiCaprio, Kate Winslet, Billy Zane",
        "Plot": "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
        "Language": "English, Swedish, Italian, French",
        "Country": "United States, Mexico",
        "Awards": "Won 11 Oscars. 126 wins & 83 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
        "Ratings": [
        {
        "Source": "Internet Movie Database",
        "Value": "7.9/10"
        },
        {
        "Source": "Rotten Tomatoes",
        "Value": "88%"
        },
        {
        "Source": "Metacritic",
        "Value": "75/100"
        }
        ],
        "Metascore": "75",
        "imdbRating": "7.9",
        "imdbVotes": "1,215,822",
        "imdbID": "tt0120338",
        "Type": "movie",
        "DVD": "08 Jan 2002",
        "BoxOffice": "$674,292,608",
        "Production": "N/A",
        "Website": "N/A",
        "Response": "True"
        };
    const film = req.body;
    try {
        let response = await endPoints.postFetch(film, process.env.API_KEY)
        let answer = await response.json();
        res.status(200).json({
            message: `Se ha guardado ${film.Title}`
        });
    } catch(error) {
        console.log(`ERROR: ${error.stack}`);
    }
}

const updateFilm = async (req, res) => {
    req.body = {
        "Title": `${req.params.title}`,
        "Year": "2023",
        "Rated": "PG-13",
        "Released": "03 Jun 2023",
        "Runtime": "194 min",
        "Genre": "Drama, Romance",
        "Director": "Vitorino",
        "Writer": "Vitorino",
        "Actors": "Leonardo DiCaprio, Kate Winslet, Billy Zane",
        "Plot": "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
        "Language": "English, Swedish, Italian, French",
        "Country": "United States, Mexico",
        "Awards": "Won 11 Oscars. 126 wins & 83 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
        "Ratings": [
        {
        "Source": "Internet Movie Database",
        "Value": "7.9/10"
        },
        {
        "Source": "Rotten Tomatoes",
        "Value": "88%"
        },
        {
        "Source": "Metacritic",
        "Value": "75/100"
        }
        ],
        "Metascore": "75",
        "imdbRating": "7.9",
        "imdbVotes": "1,215,822",
        "imdbID": "tt0120338",
        "Type": "movie",
        "DVD": "08 Jan 2002",
        "BoxOffice": "$674,292,608",
        "Production": "N/A",
        "Website": "N/A",
        "Response": "True"
        };
    const film = req.body;
    try {
        let response = await endPoints.putFetch(film, process.env.API_KEY)
        let answer = await response.json();
        console.log(answer);
        res.status(202).json({
            message: `Se ha modificado: ${answer.Title}`
        });
    } catch {
        res.status(500).json(`ERROR: ${error.stack}`);
        console.log(`ERROR: ${error.stack}`);
    }
}

const deleteFilm = async (req, res) => {
    try {
        res.status(202).json({
            message: `Se ha borrado: ${req.params.title}`
        });
    } catch (error) {
        res.status(500).json(`ERROR: ${error.stack}`);
        console.log(`ERROR: ${error.stack}`);
    }
}

module.exports = {
    getFilm,
    createFilm,
    updateFilm,
    deleteFilm
}