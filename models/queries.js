const queries = {
    getAllEntries: `SELECT * FROM entries`,
    getEntriesByEmail: 
        `SELECT a.name, e.* 
            FROM entries AS e
        INNER JOIN authors AS a 
            ON e.id_author = a.id_author
        WHERE a.email = 'alvaru@thebridgeschool.es'`,
    createEntry: 
        `INSERT INTO entries(
            title, 
            content, 
            id_author, 
            category
        ) VALUES (
            $1,
            $2,
            (SELECT id_author FROM authors
            WHERE email=$3),
            $4
        )`
}
module.exports = queries;