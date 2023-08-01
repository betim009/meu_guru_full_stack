import { useState, useEffect, ChangeEvent } from 'react';
import { User } from '../interfaces/user';
import axios from 'axios';

function Table() {
    const [users, setUsers] = useState<User[]>([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        axios
            .get<User[]>('http://localhost:3000/users')
            .then((response) => {
                setUsers(response.data);
            })
            .catch((error) => {
                console.error('Erro ao obter os usuários:', error);
            });
    }, []);

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setSearch(event.target.value);
    }

    const filteredUsers = users.filter(
        (user) =>
            user.nome.toLowerCase().includes(search.toLowerCase()) ||
            user.email.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="main container p-5">
            <h1 className="display-6 text-center mb-4">Painel de Controle</h1>
            <div className="row justify-content-center mb-3">
                <div className="col-12 col-md-6">
                    <label className="form-label" htmlFor="searchInput">
                        Busque o usuário:
                    </label>
                    <input
                        type="text"
                        id="searchInput"
                        value={search}
                        onChange={handleChange}
                        placeholder="Buscar por nome ou e-mail"
                        className="form-control"
                    />
                </div>
            </div>
            {filteredUsers.length === 0 ? (
                <p className="text-center">Usuário não encontrado</p>
            ) : (
                <div className="table-responsive">
                    <table className="table table-bordered border-primary">
                        <thead className="bg-primary text-white border-2">
                            <tr className="border-2">
                                <th>Nome</th>
                                <th>Email</th>
                                <th>Idade</th>
                                <th>Sexo</th>
                                <th>Cidade</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredUsers.map((user) => (
                                <tr className="border-2" key={user.id}>
                                    <td >{user.nome}</td>
                                    <td>{user.email}</td>
                                    <td>{user.idade}</td>
                                    <td>{user.sexo}</td>
                                    <td>{user.cidade}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export default Table;
