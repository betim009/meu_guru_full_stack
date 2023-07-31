const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const userService = require('../src/services/userService');
const userController = require('../src/controllers/userController');

const { users } = require('./user.mock');

describe('Usando o método GET em /users', function () {
    afterEach(function () {
        sinon.restore(); // Restaura os stubs após cada teste
    });

    it('Retorna a lista completa de usuarios', async function () {
        const res = {};
        const req = {};
        const usersList = users;

        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns();
        sinon
            .stub(userService, 'getAllServices')
            .resolves(usersList);

        await userController.getAllController(req, res);

        expect(res.status).to.have.been.calledWith(200);
        expect(res.json).to.have.been.calledWith(usersList);
    });

    it('Retorna o usuário correto quando encontrado', async function () {
        const res = {};
        const req = {
            params: {
                id: 1, // ID do usuário a ser buscado
            },
        };

        // Usuário com ID 1
        const user = users.find((user) => user.id === req.params.id);

        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns();

        sinon
            .stub(userService, 'getByIdServices')
            .resolves(user); // Simula a função de serviço para retornar o usuário encontrado

        await userController.getById(req, res);

        expect(res.status).to.have.been.calledWith(200);
        expect(res.json).to.have.been.calledWith(user);
    });

    it('Retorna status 404 quando o usuário não é encontrado', async function () {
        const res = {};
        const req = {
            params: {
                id: 100, // ID de um usuário que não existe
            },
        };

        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns();

        sinon
            .stub(userService, 'getByIdServices')
            .resolves(null); // Simula a função de serviço para retornar null (usuário não encontrado)

        await userController.getById(req, res);

        expect(res.status).to.have.been.calledWith(404);
        expect(res.json).to.have.been.calledWith({ message: 'Usuário não encontrado' });
    });
});
