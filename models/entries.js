const pool = require('../utils/db_pgsql');
const queries = require('./queries');

// GET
const getAllEntries = async() => {
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(queries.getAllEntries);
        result = data.rows;
    } catch (error) {
        console.log(error);
        throw error;
    } finally {
        client.release();
    }
    return result
}

const getEntriesByEmail = async() => {
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(queries.getEntriesByEmail);
        result = data.rows;
        console.log(data.rows);
    } catch(error) {
        console.log(error);
        throw error;
    } finally {
        client.release();
    }
    return result
}

// CREATE
const createEntry = async (entry) => {
    const { title, content, email, category } = entry;
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(
            queries.createEntry,
            [title, content, email, category]
        )
    } catch(error) {
        console.log(error);
        throw error;
    } finally {
        client.release();
    }
    return result
}

const test = { 
    title : 'Otra noticia', 
    content : 'Sigue sin pasar nada',
    email : 'alvaru@thebridgeschool.es', 
    category : 'Política'
}

// createEntry(test)

module.exports = {
    getAllEntries,
    getEntriesByEmail,
    createEntry
}
    
