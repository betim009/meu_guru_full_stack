const connection = require('../db/connection');

const getAll = async () => {
    const [result] = await connection.execute(
        'SELECT * FROM usuarios'
    );
    return result;
};

const getById = async (id) => {
    const [[user]] = await connection.execute(
        'SELECT * FROM usuarios WHERE id = ?',
        [id]
    );
    return user;
};

const create = async (nome, email, password, idade, sexo, cidade) => {
    const [{ insertId }] = await connection.execute(
      'INSERT INTO usuarios (nome, email, password, idade, sexo, cidade) VALUES (?, ?, ?, ?, ?, ?)',
      [nome, email, password, idade, sexo, cidade]
    );
    return insertId;
  };

const update = async (id, nome, email, password) => {
    const result = await connection.execute(
        'UPDATE usuarios SET nome = ?, email = ?, password = ? WHERE id = ?',
        [nome, email, password, id]
    );
    return result;
};

const deleteById = async (id) => {
    const result = await connection.execute(
        'DELETE FROM usuarios WHERE id = ?',
        [id]
    );
    return result;
};

module.exports = {
    getAll,
    getById,
    create,
    update,
    deleteById,
};
