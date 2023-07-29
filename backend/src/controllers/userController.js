const { getAllServices, getByIdServices, createServices, updateServices, deleteServices } = require('../services/userService');

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

const getById = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await getByIdServices(id);
        if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });
        res.status(200).json(user);
    } catch (err) {
        console.error('Erro ao obter o usuário:', err.message);
        res.status(500).json({ message: 'Erro ao obter o usuário' });
    }
};

const createUser = async (req, res) => {
    const { nome, email, password, idade, sexo, cidade } = req.body;
    try {
        const insertId = await createServices(nome, email, password, idade, sexo, cidade);
        res.status(201).json({ message: 'Usuário criado com sucesso!', id: insertId });
    } catch (err) {
        console.error('Erro ao criar o usuário:', err.message);
        res.status(500).json({ message: 'Erro ao criar o usuário' });
    }
};

const updateUser = async (req, res) => {
    const { id } = req.params;
    const { nome, email, password } = req.body;
    try {
        await updateServices(id, nome, email, password);
        res.json({ message: 'Usuário atualizado com sucesso!' });
    } catch (err) {
        console.error('Erro ao atualizar o usuário:', err.message);
        res.status(500).json({ message: 'Erro ao atualizar o usuário' });
    }
};

const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        await deleteServices(id);
        res.json({ message: 'Usuário removido com sucesso!' });
    } catch (err) {
        console.error('Erro ao remover o usuário:', err.message);
        res.status(500).json({ message: 'Erro ao remover o usuário' });
    }
};

module.exports = {
    getAllController,
    getById,
    createUser,
    updateUser,
    deleteUser,
};
