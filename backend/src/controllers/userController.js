const { getAllServices } = require('../services/userService');

const getAllController = async (req, res) => {
    try {
        const users = await getAllServices();
        if (!users) return res.status(404).json(users);
        res.status(200).json(users);
    } catch (err) {
        console.error('Erro ao obter os usuários:', err.message);
        res.status(500).json({ message: 'Erro ao obter os usuários' });
    }
};

module.exports = {
    getAllController,
};
