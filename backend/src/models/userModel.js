const connection = require('../db/connection');

const getAll = async () => {
    const [result] = await connection.execute(
        'SELECT * FROM usuarios'
    );
    return result;
};

module.exports = {
    getAll,
}