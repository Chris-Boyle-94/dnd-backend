const db = require('../../data/db-config');

const getCharacter = () => {
    return db("characterSheets")
}


module.exports = {
    getCharacter
}