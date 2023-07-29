const { getAll } = require('../models/userModel');

const getAllServices = async () => {
    const users = await getAll();
    return users;
};

module.exports = {
    getAllServices,
}