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
        <div>
            <h1>Painel de Controle - Meu Guru</h1>
            <label htmlFor="searchInput">Busque o usuário:</label>
            <input
                type="text"
                id="searchInput"
                value={search}
                onChange={handleChange}
                placeholder="Buscar por nome ou e-mail"
            />
            {filteredUsers.length === 0 ? (
                <p>Usuário não encontrado</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Email</th>
                            <th>Idade</th>
                            <th>Sexo</th>
                            <th>Cidade</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredUsers.map((user) => (
                            <tr key={user.id}>
                                <td>{user.nome}</td>
                                <td>{user.email}</td>
                                <td>{user.idade}</td>
                                <td>{user.sexo}</td>
                                <td>{user.cidade}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default Table;
