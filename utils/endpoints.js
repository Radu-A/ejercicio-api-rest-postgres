
async function getFetch(title) {
    const data = await fetch(`https://www.omdbapi.com/?t=${title}&apikey=${process.env.API_KEY}`);
    let film = await data.json();
    return film;
}

function postFetch(film, apiKey) {
    return fetch(
        `https://www.omdbapi.com/?t=${film.Title}&apikey=${apiKey}`,
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': apiKey
            },
            body: JSON.stringify(film)
        }
    )
}

function putFetch(film, apiKey) {
    return fetch(
        `https://www.omdbapi.com/?t=${film.Title}&apikey=${apiKey}`,
        {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': apiKey
            },
            body: JSON.stringify(film)
        }
    )
}

module.exports = {
    getFetch,
    postFetch,
    putFetch
}