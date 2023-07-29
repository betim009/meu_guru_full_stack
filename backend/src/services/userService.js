const { getAll, getById, create, update, deleteById } = require('../models/userModel');

const getAllServices = async () => {
    const users = await getAll();
    return users;
};

const getByIdServices = async (id) => {
    const user = await getById(id);
    return user;
};

const createServices = async (nome, email, password, idade, sexo, cidade) => {
    const insertId = await create(nome, email, password, idade, sexo, cidade);
    return insertId;
};

const updateServices = async (id, nome, email, password) => {
    const user = await update(id, nome, email, password);
    return user;
};

const deleteServices = async (id) => {
    const user = await deleteById(id);
    return user;
};

module.exports = {
    getAllServices,
    getByIdServices,
    createServices,
    updateServices,
    deleteServices,
};
